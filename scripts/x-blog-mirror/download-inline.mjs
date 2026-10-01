#!/usr/bin/env node
/**
 * Download one inline figure from an X Article (reuse as-is; no AI regen).
 *
 * Cover/hero stays with download-cover.mjs. This helper is for mid-article
 * MEDIA blocks that sit between body paragraphs — portrait, quote cards, etc.
 *
 * Usage:
 *   node scripts/x-blog-mirror/download-inline.mjs \
 *     --url https://pbs.twimg.com/media/....jpg \
 *     --slug mises-inflation-as-policy \
 *     --name portrait
 *
 * Writes:
 *   public/images/blog/<slug>-<name>.jpg
 *
 * Then register a `figure` on the matching section in bodies.ts (src/alt/
 * caption/credit/width/height). Credit pattern matches cover:
 *   "Inline image from the GoldSilverHQ X Article on …"
 *
 * HARD RULE for the X→blog mirror: every MEDIA entity in the X Article body
 * must land as a site section figure. Cover alone is not enough.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { join, extname } from "node:path";
import { spawnSync } from "node:child_process";
import { REPO_ROOT } from "./lib.mjs";

function arg(name) {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : null;
}

const url = arg("--url");
const slug = arg("--slug");
const name = arg("--name");
if (!url || !slug || !name) {
  console.error(
    "Usage: download-inline.mjs --url <mediaUrl> --slug <slug> --name <short-name>",
  );
  process.exit(2);
}
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) {
  console.error("--name must be kebab-case (e.g. portrait, quote-inflation)");
  process.exit(2);
}

const outDir = join(REPO_ROOT, "public/images/blog");
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, `${slug}-${name}.jpg`);
const tmpPath = join(outDir, `.tmp-${slug}-${name}${extname(new URL(url).pathname) || ".bin"}`);

async function downloadOnce() {
  const res = await fetch(url, {
    headers: { "User-Agent": "GoldSilverHQ-x-blog-mirror/1.0" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching inline media`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(tmpPath, buf);
}

try {
  await downloadOnce();
} catch (err) {
  console.warn(`Inline download failed once (${err.message}); retrying…`);
  try {
    await downloadOnce();
  } catch (err2) {
    console.error(`Inline download failed after retry: ${err2.message}`);
    process.exit(1);
  }
}

// Normalize to JPEG for the public blog tree (PNG quote cards → jpg).
const ff = spawnSync(
  "ffmpeg",
  ["-y", "-i", tmpPath, "-q:v", "2", outPath],
  { encoding: "utf8" },
);
if (ff.status !== 0) {
  // Already JPEG / ffmpeg missing — copy as-is if bytes look usable.
  const { copyFileSync, unlinkSync, existsSync } = await import("node:fs");
  if (existsSync(tmpPath)) {
    copyFileSync(tmpPath, outPath);
  } else {
    console.error("ffmpeg convert failed and no temp file to copy.");
    process.exit(1);
  }
  try {
    unlinkSync(tmpPath);
  } catch {
    /* ignore */
  }
} else {
  const { unlinkSync } = await import("node:fs");
  try {
    unlinkSync(tmpPath);
  } catch {
    /* ignore */
  }
}

console.log(JSON.stringify({ outPath, url, slug, name, role: "inline" }, null, 2));
