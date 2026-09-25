#!/usr/bin/env node
/**
 * Build a 1200×630 Open Graph / X share JPEG from an on-page hero.
 *
 * Default: letterbox (pad) so the full hero motif stays visible on a 1.91:1 card.
 * Use --cover to center-crop instead (fills the frame; may trim edges).
 *
 * Does NOT overwrite the hero file. On-page heroes may be ~5:2 or other landscape;
 * OG stays exactly 1200×630.
 *
 * Usage:
 *   node scripts/og-from-hero.mjs --hero public/images/.../slug.jpg --og public/og/cards/key.jpg
 *   node scripts/og-from-hero.mjs --hero ... --og ... --cover
 */

import { mkdirSync, existsSync, copyFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { spawnSync } from "node:child_process";

function arg(name) {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : null;
}

const heroArg = arg("--hero");
const ogArg = arg("--og");
const cover = process.argv.includes("--cover");

if (!heroArg || !ogArg) {
  console.error(
    "Usage: og-from-hero.mjs --hero <path> --og <path> [--cover]\n" +
      "  Default pads (letterbox) to 1200×630. --cover center-crops to fill.",
  );
  process.exit(2);
}

const heroPath = resolve(heroArg);
const ogPath = resolve(ogArg);

if (!existsSync(heroPath)) {
  console.error(`Hero not found: ${heroPath}`);
  process.exit(1);
}

mkdirSync(dirname(ogPath), { recursive: true });

const vf = cover
  ? "scale=1200:630:force_original_aspect_ratio=increase,crop=1200:630"
  : "scale=1200:630:force_original_aspect_ratio=decrease,pad=1200:630:(ow-iw)/2:(oh-ih)/2:color=0x121214";

const ff = spawnSync(
  "ffmpeg",
  ["-y", "-i", heroPath, "-vf", vf, "-frames:v", "1", "-update", "1", "-q:v", "3", ogPath],
  { encoding: "utf8" },
);

if (ff.status !== 0 || !existsSync(ogPath)) {
  console.warn(`ffmpeg failed (${ff.status}); copying hero bytes as OG fallback.`);
  if (ff.stderr) console.warn(ff.stderr.trim().slice(-400));
  copyFileSync(heroPath, ogPath);
  console.log(JSON.stringify({ heroPath, ogPath, mode: "copy-fallback", cover }, null, 2));
  process.exit(0);
}

console.log(JSON.stringify({ heroPath, ogPath, mode: cover ? "cover" : "letterbox" }, null, 2));
