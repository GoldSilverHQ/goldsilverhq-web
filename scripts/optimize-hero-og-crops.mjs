#!/usr/bin/env node
/**
 * One-shot pass: freer on-page hero crops (~5:2 / natural landscape) + keep
 * separate 1200×630 OG cards. Improves crops of existing assets; does not
 * AI-regen. Skips files owned by parallel Weimar colorize work.
 *
 * Usage: node scripts/optimize-hero-og-crops.mjs
 */
import { readFileSync, writeFileSync, copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";

const root = resolve(import.meta.dirname, "..");
const require = createRequire(import.meta.url);

// Parse ARTICLE_HEROES from TS source (no TS transpile needed).
const mediaTs = readFileSync(join(root, "src/lib/content/article-media.ts"), "utf8");
const entries = [...mediaTs.matchAll(/path:\s*"([^"]+)"\s*,\s*src:\s*"([^"]+)"\s*,\s*ogSrc:\s*"([^"]+)"/g)].map(
  (m) => ({ path: m[1], src: m[2], ogSrc: m[3] }),
);

/** Sibling Weimar colorize owns these — do not touch. */
const SKIP_PATHS = new Set([
  "/history/20th-century/weimar-1923",
]);

/** Already good splits — leave alone. */
const KEEP_AS_IS = new Set([
  "/history/silver/potosi",
  "/history/20th-century/bretton-woods-nixon-1971",
]);

/**
 * Per-slug crop hints after content-bbox trim.
 * heroMode: "cover52" → 1200×480 cover; "natural" → scale longest side, clamp AR
 * ogMode: "cover" | "letterbox" | "keep" (leave existing OG if already good)
 * yBias: vertical crop bias for cover (-1 top … 1 bottom), default 0
 * special: custom handler name
 */
const HINTS = {
  "john-law": { heroMode: "cover52", ogMode: "cover", yBias: -0.15, priority: 1 },
  // side-only trim (preserve heads); refined manually after first pass
  "crime-of-1873": { heroMode: "cover52", ogMode: "cover", yBias: -0.55, priority: 1, sideOnly: true },
  "official-gold-book-value": { special: "top-panel", heroMode: "cover52", ogMode: "cover", priority: 1 },
  "gold-silver-ratio": { heroMode: "cover52", ogMode: "keep", yBias: -0.85, priority: 1 },
  "jackson-and-the-bank": { heroMode: "cover52", ogMode: "keep", yBias: -0.7, priority: 2 },
  "bimetallism": { heroMode: "cover52", ogMode: "cover", yBias: -0.1, priority: 2 },
  "china-1934-silver-appeal": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 2 },
  "weimar-purchasing-power-note": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  // TB-pad / center-band leftovers → native 5:2 hero; keep existing OG card
  "why-markets-chose-gold-silver": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 2 },
  "warehouses-to-public-banks": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 2 },
  "what-is-sound-money": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 2 },
  "bank-of-amsterdam": { heroMode: "cover52", ogMode: "keep", yBias: -0.2, priority: 3 },
  "bank-of-england": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  "assignats": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  "greenbacks-civil-war": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  "early-us-coinage": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  "road-back-gold": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  "panic-1907-fed": { heroMode: "cover52", ogMode: "keep", yBias: -0.15, priority: 3 },
  "classical-gold-standard-end": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  "1933-gold-recall": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  "piece-of-eight": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  "silver-thursday": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  "monetary-and-industry": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  "hard-money-vs-fiat": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  "inflation-purchasing-power": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  "backed-money": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  "central-bank-gold-reserves": { heroMode: "cover52", ogMode: "keep", yBias: 0.2, priority: 3 },
  "physical-silver-demand-by-country": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  "lydia-first-coins": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  "greece-silver-trade": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  "rome-denarius-aureus": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  "solidus-continuity": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  "newton-1717-guinea": { heroMode: "cover52", ogMode: "keep", yBias: -0.25, priority: 2 },
  "ltcm-1998-consortium": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  "when-exchanges-change-the-silver-rules": { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 3 },
  "gold-silver-ratio-what-it-counts": { heroMode: "cover52", ogMode: "keep", yBias: -0.2, priority: 3 },
};

function run(cmd, args) {
  const r = spawnSync(cmd, args, { encoding: "utf8" });
  if (r.status !== 0) {
    throw new Error(`${cmd} ${args.join(" ")}\n${r.stderr?.slice(-600)}`);
  }
  return r.stdout;
}

function probe(file) {
  const out = run("ffprobe", [
    "-v", "error", "-select_streams", "v:0",
    "-show_entries", "stream=width,height", "-of", "csv=p=0", file,
  ]).trim();
  const [w, h] = out.split(",").map(Number);
  return { w, h };
}

function ffmpegOut(args) {
  run("ffmpeg", ["-y", ...args]);
}

/** Detect content bbox by trimming near-flat edge strips (mattes). */
function contentBbox(file, w, h) {
  const tw = 400;
  const th = Math.max(1, Math.round((h * tw) / w));
  const raw = join("/tmp", `bbox-${Date.now()}-${Math.random().toString(36).slice(2)}.gray`);
  ffmpegOut(["-i", file, "-vf", `scale=${tw}:${th},format=gray`, "-f", "rawvideo", raw]);
  const data = readFileSync(raw);
  try {
    const { unlinkSync } = require("node:fs");
    unlinkSync(raw);
  } catch {}

  const colStd = (x) => {
    let sum = 0;
    for (let y = 0; y < th; y++) sum += data[y * tw + x];
    const mean = sum / th;
    let v = 0;
    for (let y = 0; y < th; y++) {
      const d = data[y * tw + x] - mean;
      v += d * d;
    }
    return Math.sqrt(v / th);
  };
  const rowStd = (y) => {
    let sum = 0;
    for (let x = 0; x < tw; x++) sum += data[y * tw + x];
    const mean = sum / tw;
    let v = 0;
    for (let x = 0; x < tw; x++) {
      const d = data[y * tw + x] - mean;
      v += d * d;
    }
    return Math.sqrt(v / tw);
  };

  const TOL = 12;
  let left = 0;
  for (let x = 0; x < Math.floor(tw / 3); x++) {
    if (colStd(x) < TOL) left = x + 1;
    else break;
  }
  let right = 0;
  for (let x = tw - 1; x >= Math.floor((tw * 2) / 3); x--) {
    if (colStd(x) < TOL) right++;
    else break;
  }
  let top = 0;
  for (let y = 0; y < Math.floor(th / 3); y++) {
    if (rowStd(y) < TOL) top = y + 1;
    else break;
  }
  let bot = 0;
  for (let y = th - 1; y >= Math.floor((th * 2) / 3); y--) {
    if (rowStd(y) < TOL) bot++;
    else break;
  }

  // Map to full-res; pad 2% inward only when we found a matte, else full frame
  const sx = w / tw;
  const sy = h / th;
  let x0 = Math.round(left * sx);
  let x1 = Math.round(w - right * sx);
  let y0 = Math.round(top * sy);
  let y1 = Math.round(h - bot * sy);

  // Only treat as matte crop if side or TB strip is meaningful
  const sideFrac = (left + right) / tw;
  const tbFrac = (top + bot) / th;
  if (sideFrac < 0.04 && tbFrac < 0.08) {
    return { x: 0, y: 0, w, h, sideFrac, tbFrac, trimmed: false };
  }
  // Keep a tiny margin so we don't clip engraved borders
  const mx = Math.round(w * 0.005);
  const my = Math.round(h * 0.005);
  x0 = Math.max(0, x0 - mx);
  y0 = Math.max(0, y0 - my);
  x1 = Math.min(w, x1 + mx);
  y1 = Math.min(h, y1 + my);
  if (x1 - x0 < w * 0.5 || y1 - y0 < h * 0.4) {
    // Safety: don't over-crop weird detections
    return { x: 0, y: 0, w, h, sideFrac, tbFrac, trimmed: false };
  }
  return { x: x0, y: y0, w: x1 - x0, h: y1 - y0, sideFrac, tbFrac, trimmed: true };
}

/** Special: official-gold-book-value — top certificate strip above mid black bar. */
function topPanelBbox(file, w, h) {
  const tw = 400;
  const th = Math.max(1, Math.round((h * tw) / w));
  const raw = join("/tmp", `panel-${Date.now()}.gray`);
  ffmpegOut(["-i", file, "-vf", `scale=${tw}:${th},format=gray`, "-f", "rawvideo", raw]);
  const data = readFileSync(raw);
  try {
    require("node:fs").unlinkSync(raw);
  } catch {}

  // Find thick near-black horizontal band in middle third
  const rowMean = (y) => {
    let s = 0;
    for (let x = 0; x < tw; x++) s += data[y * tw + x];
    return s / tw;
  };
  let barStart = -1;
  let barEnd = -1;
  for (let y = Math.floor(th * 0.25); y < Math.floor(th * 0.75); y++) {
    if (rowMean(y) < 25) {
      if (barStart < 0) barStart = y;
      barEnd = y;
    } else if (barStart >= 0 && barEnd - barStart >= 4) {
      break;
    } else {
      barStart = -1;
      barEnd = -1;
    }
  }
  if (barStart < 0) {
    return contentBbox(file, w, h);
  }
  const sy = h / th;
  // Top panel: from first non-black row to just above bar
  let top = 0;
  for (let y = 0; y < barStart; y++) {
    if (rowMean(y) < 25) top = y + 1;
    else break;
  }
  const y0 = Math.round(top * sy);
  const y1 = Math.round(barStart * sy);
  // Also trim L/R black if present
  const midY = Math.floor((top + barStart) / 2);
  const colMeanAt = (x) => {
    let s = 0;
    let n = 0;
    for (let y = top; y < barStart; y++) {
      s += data[y * tw + x];
      n++;
    }
    return s / n;
  };
  let left = 0;
  for (let x = 0; x < tw / 4; x++) {
    if (colMeanAt(x) < 25) left = x + 1;
    else break;
  }
  let right = 0;
  for (let x = tw - 1; x >= (tw * 3) / 4; x--) {
    if (colMeanAt(x) < 25) right++;
    else break;
  }
  const sx = w / tw;
  const x0 = Math.round(left * sx);
  const x1 = Math.round(w - right * sx);
  return {
    x: x0,
    y: y0,
    w: Math.max(40, x1 - x0),
    h: Math.max(40, y1 - y0),
    trimmed: true,
    sideFrac: (left + right) / tw,
    tbFrac: 0,
    special: "top-panel",
  };
}

function cropToTemp(file, box) {
  const out = join("/tmp", `crop-${Date.now()}-${Math.random().toString(36).slice(2)}.jpg`);
  ffmpegOut([
    "-i", file,
    "-vf", `crop=${box.w}:${box.h}:${box.x}:${box.y}`,
    "-q:v", "2", out,
  ]);
  return out;
}

function coverExport(src, out, W, H, yBias = 0) {
  // yBias: -1 favor top, +1 favor bottom (crop offset)
  // ffmpeg crop after scale=increase centers by default; use crop y expression
  const vf =
    `scale=${W}:${H}:force_original_aspect_ratio=increase,` +
    `crop=${W}:${H}:(iw-ow)/2:(ih-oh)/2+(ih-oh)/2*${yBias}`;
  ffmpegOut(["-i", src, "-vf", vf, "-frames:v", "1", "-update", "1", "-q:v", "3", out]);
}

function letterboxExport(src, out, W, H) {
  const vf =
    `scale=${W}:${H}:force_original_aspect_ratio=decrease,` +
    `pad=${W}:${H}:(ow-iw)/2:(oh-ih)/2:color=0x121214`;
  ffmpegOut(["-i", src, "-vf", vf, "-frames:v", "1", "-update", "1", "-q:v", "3", out]);
}

function ensureUnder600k(file) {
  const { statSync } = require("node:fs");
  let q = 3;
  while (statSync(file).size > 600 * 1024 && q < 8) {
    q++;
    const tmp = file + `.q${q}.jpg`;
    ffmpegOut(["-i", file, "-q:v", String(q), tmp]);
    copyFileSync(tmp, file);
    require("node:fs").unlinkSync(tmp);
  }
}

const report = [];
mkdirSync(join(root, "tmp"), { recursive: true });

for (const entry of entries) {
  const slug = entry.path.split("/").pop();
  if (SKIP_PATHS.has(entry.path)) {
    report.push({ path: entry.path, action: "skip-sibling-weimar" });
    continue;
  }
  if (KEEP_AS_IS.has(entry.path)) {
    report.push({ path: entry.path, action: "keep-as-is" });
    continue;
  }

  const hint = HINTS[slug] || { heroMode: "cover52", ogMode: "keep", yBias: 0, priority: 4 };
  const heroPath = join(root, "public", entry.src.replace(/^\//, ""));
  const ogPath = join(root, "public", entry.ogSrc.replace(/^\//, ""));
  if (!existsSync(heroPath) || !existsSync(ogPath)) {
    report.push({ path: entry.path, action: "missing-file" });
    continue;
  }

  const dims = probe(heroPath);
  const sameBytes = readFileSync(heroPath).equals(readFileSync(ogPath));

  let box;
  if (hint.special === "top-panel") {
    box = topPanelBbox(heroPath, dims.w, dims.h);
  } else {
    box = contentBbox(heroPath, dims.w, dims.h);
  }

  // Always work from a content crop when trimmed; else from full hero
  const workSrc = box.trimmed ? cropToTemp(heroPath, box) : heroPath;

  // Preserve OG before overwriting hero when they shared bytes OR when regenerating OG
  const ogBackup = join("/tmp", `og-bak-${slug}.jpg`);
  copyFileSync(ogPath, ogBackup);

  // Write new hero
  const heroTmp = join("/tmp", `hero-new-${slug}.jpg`);
  if (hint.heroMode === "cover52") {
    coverExport(workSrc, heroTmp, 1200, 480, hint.yBias ?? 0);
  } else {
    coverExport(workSrc, heroTmp, 1200, 480, hint.yBias ?? 0);
  }
  ensureUnder600k(heroTmp);

  // OG
  if (hint.ogMode === "cover") {
    coverExport(workSrc, ogPath, 1200, 630, hint.yBias ?? 0);
    ensureUnder600k(ogPath);
  } else if (hint.ogMode === "letterbox") {
    letterboxExport(workSrc, ogPath, 1200, 630);
    ensureUnder600k(ogPath);
  } else if (hint.ogMode === "keep") {
    // If OG was identical to old hero and we're changing hero, OG backup already has old bytes — restore
    // (ogPath still has old content until we overwrite hero)
    if (!sameBytes) {
      // already distinct — leave OG
    } else {
      // same bytes: keep the pre-change OG (current file is still old) — do nothing to ogPath
    }
  }

  copyFileSync(heroTmp, heroPath);
  ensureUnder600k(heroPath);

  const newHero = probe(heroPath);
  const newOg = probe(ogPath);
  const stillSame = readFileSync(heroPath).equals(readFileSync(ogPath));

  report.push({
    path: entry.path,
    action: "optimized",
    priority: hint.priority,
    box: box.trimmed
      ? { x: box.x, y: box.y, w: box.w, h: box.h, sideFrac: box.sideFrac, tbFrac: box.tbFrac, special: box.special }
      : null,
    hero: `${newHero.w}x${newHero.h}`,
    og: `${newOg.w}x${newOg.h}`,
    ogMode: hint.ogMode,
    sameBytesBefore: sameBytes,
    sameBytesAfter: stillSame,
  });
}

writeFileSync(join(root, "tmp/hero-og-optimize-report.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify({ count: report.length, optimized: report.filter((r) => r.action === "optimized").length, skipped: report.filter((r) => r.action !== "optimized").length }, null, 2));
for (const r of report.filter((r) => r.action === "optimized" && r.priority <= 2)) {
  console.log(`P${r.priority} ${r.path} → hero ${r.hero} og ${r.og} (${r.ogMode}) trimmed=${!!r.box}`);
}
