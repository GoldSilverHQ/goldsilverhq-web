#!/usr/bin/env node
/**
 * Download the cover image for one X Article (reuse as-is; no AI regen).
 *
 * Usage:
 *   node scripts/x-blog-mirror/download-cover.mjs \
 *     --url https://pbs.twimg.com/media/....jpg \
 *     --slug ltcm-1998-consortium
 *
 * Writes:
 *   public/images/blog/<slug>.jpg          — on-page hero (natural download; flexible landscape)
 *   public/og/cards/blog-<slug>.jpg        — separate 1200×630 OG/X card (letterboxed from hero)
 *
 * Hero and OG are intentionally separate. Do not overwrite the hero with the OG crop.
 */

import { mkdirSync, copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { REPO_ROOT } from "./lib.mjs";

function arg(name) {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : null;
}

const url = arg("--url");
const slug = arg("--slug");
if (!url || !slug) {
  console.error("Usage: download-cover.mjs --url <coverUrl> --slug <slug>");
  process.exit(2);
}

const heroDir = join(REPO_ROOT, "public/images/blog");
const ogDir = join(REPO_ROOT, "public/og/cards");
mkdirSync(heroDir, { recursive: true });
mkdirSync(ogDir, { recursive: true });
const heroPath = join(heroDir, `${slug}.jpg`);
const ogPath = join(ogDir, `blog-${slug}.jpg`);

async function downloadOnce() {
  const res = await fetch(url, {
    headers: { "User-Agent": "GoldSilverHQ-x-blog-mirror/1.0" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching cover`);
  const buf = Buffer.from(await res.arrayBuffer());
  const { writeFileSync } = await import("node:fs");
  writeFileSync(heroPath, buf);
}

try {
  await downloadOnce();
} catch (err) {
  console.warn(`Cover download failed once (${err.message}); retrying…`);
  try {
    await downloadOnce();
  } catch (err2) {
    console.error(`Cover download failed after retry: ${err2.message}`);
    console.error("Publish text without hero and retry image later.");
    process.exit(1);
  }
}

const ff = spawnSync(
  "ffmpeg",
  [
    "-y",
    "-i",
    heroPath,
    "-vf",
    "scale=1200:630:force_original_aspect_ratio=decrease,pad=1200:630:(ow-iw)/2:(oh-ih)/2:color=0x121214",
    "-frames:v",
    "1",
    "-update",
    "1",
    "-q:v",
    "2",
    ogPath,
  ],
  { encoding: "utf8" },
);
if (ff.status !== 0 || !existsSync(ogPath)) {
  console.warn("ffmpeg letterbox failed; copying raw download as OG.");
  copyFileSync(heroPath, ogPath);
}
// Keep on-page hero as the natural download (flexible landscape / ~5:2).
// OG is a separate 1200×630 letterbox — do not force the hero to 1.91:1.

console.log(JSON.stringify({ heroPath, ogPath, url, slug, split: true }, null, 2));
