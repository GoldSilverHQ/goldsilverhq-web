#!/usr/bin/env node
/**
 * Generate branded 1200×630 Open Graph JPEG cards for Phase-1 sitemap URLs
 * (plus the site-wide public/og.jpg fallback).
 *
 * Design: documentary dark desk (site CSS tokens), title + GoldSilverHQ wordmark.
 * No buy CTAs. Re-run after title/summary changes on thick pages.
 *
 *   node --experimental-strip-types scripts/generate-og-cards.mjs
 */
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { execFileSync } from "node:child_process";
import { chromium } from "playwright";
import {
  DEFAULT_OG_IMAGE_PATH,
  PHASE1_SITEMAP_PATHS,
  ogCardKey,
  ogImagePathForRoute,
} from "../src/lib/seo/phase1-sitemap-paths.mjs";
import { phase1SharePages, sharePageForPath } from "../src/lib/seo/og-cards.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const cardsDir = join(root, "public/og/cards");
const tmpDir = join(root, ".tmp-og-cards");

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function cardHtml({ cardTitle, kicker }) {
  const title = escapeHtml(cardTitle);
  const label = escapeHtml(kicker);
  const long = cardTitle.length > 64;
  const titleSize = long ? "54px" : cardTitle.length > 42 ? "60px" : "68px";
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Figtree:wght@500;600&display=swap" rel="stylesheet" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1200px;
      height: 630px;
      overflow: hidden;
      font-family: Figtree, ui-sans-serif, system-ui, sans-serif;
      color: #f2ede4;
      background:
        radial-gradient(ellipse 80% 70% at 12% 18%, rgba(201, 162, 39, 0.14), transparent 55%),
        radial-gradient(ellipse 60% 50% at 88% 88%, rgba(197, 205, 212, 0.08), transparent 50%),
        linear-gradient(165deg, #12110e 0%, #070605 55%, #0a0908 100%);
    }
    .frame {
      position: relative;
      width: 1200px;
      height: 630px;
      padding: 56px 64px 48px;
      display: flex;
      flex-direction: column;
      border: 1px solid rgba(201, 162, 39, 0.28);
      box-shadow: inset 0 0 0 1px rgba(242, 237, 228, 0.04);
    }
    .top {
      display: flex;
      align-items: center;
      gap: 18px;
    }
    .mark {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 30%, #f3dc9a, #c9a227 55%, #7a5e10);
      box-shadow: 0 0 0 1px rgba(122, 94, 16, 0.55);
      flex-shrink: 0;
    }
    .wordmark {
      font-family: "Cormorant Garamond", "Times New Roman", serif;
      font-weight: 700;
      font-size: 36px;
      letter-spacing: -0.02em;
      line-height: 1;
    }
    .wordmark .gold { color: #c9a227; }
    .wordmark .silver { color: #c5cdd4; }
    .wordmark .hq { color: #f2ede4; }
    .kicker {
      margin-top: 40px;
      font-size: 15px;
      font-weight: 600;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #c9a227;
    }
    .title {
      margin-top: 18px;
      font-family: "Cormorant Garamond", "Times New Roman", serif;
      font-weight: 600;
      font-size: ${titleSize};
      line-height: 1.12;
      letter-spacing: -0.01em;
      max-width: 980px;
      text-wrap: balance;
    }
    .foot {
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      border-top: 1px solid rgba(242, 237, 228, 0.12);
      padding-top: 22px;
    }
    .foot-left {
      font-size: 18px;
      color: #9a9388;
      font-weight: 500;
    }
    .foot-right {
      font-size: 16px;
      color: #6e6860;
      letter-spacing: 0.04em;
    }
  </style>
</head>
<body>
  <div class="frame">
    <div class="top">
      <div class="mark" aria-hidden="true"></div>
      <div class="wordmark"><span class="gold">Gold</span><span class="silver">Silver</span><span class="hq">HQ</span></div>
    </div>
    <p class="kicker">${label}</p>
    <h1 class="title">${title}</h1>
    <div class="foot">
      <p class="foot-left">Educational media · Not investment advice</p>
      <p class="foot-right">goldsilverhq.com</p>
    </div>
  </div>
</body>
</html>`;
}

async function renderCard(page, browser, outJpg) {
  const htmlPath = join(tmpDir, `${ogCardKey(page.path)}.html`);
  writeFileSync(htmlPath, cardHtml(page), "utf8");
  const pngPath = join(tmpDir, `${ogCardKey(page.path)}.png`);
  const context = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  await context.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
  await context.screenshot({ path: pngPath, type: "png" });
  await context.close();
  execFileSync("ffmpeg", ["-y", "-i", pngPath, "-q:v", "4", outJpg], {
    stdio: ["ignore", "ignore", "pipe"],
  });
}

async function main() {
  mkdirSync(cardsDir, { recursive: true });
  mkdirSync(tmpDir, { recursive: true });

  const pages = phase1SharePages();
  const defaultPage = sharePageForPath("/");
  if (!defaultPage) throw new Error("Missing default share page for /");
  if (pages.length !== PHASE1_SITEMAP_PATHS.length) {
    throw new Error(`Expected ${PHASE1_SITEMAP_PATHS.length} cards, got ${pages.length}`);
  }

  const browser = await chromium.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });

  try {
    for (const page of pages) {
      const rel = ogImagePathForRoute(page.path) || DEFAULT_OG_IMAGE_PATH;
      const outJpg = join(root, "public", rel.replace(/^\//, ""));
      mkdirSync(dirname(outJpg), { recursive: true });
      await renderCard(page, browser, outJpg);
      process.stdout.write(`wrote ${rel}\n`);
    }

    const fallbackJpg = join(root, "public", DEFAULT_OG_IMAGE_PATH.replace(/^\//, ""));
    await renderCard(defaultPage, browser, fallbackJpg);
    process.stdout.write(`wrote ${DEFAULT_OG_IMAGE_PATH}\n`);
  } finally {
    await browser.close();
  }

  if (process.env.KEEP_OG_TMP !== "1" && existsSync(tmpDir)) {
    execFileSync("rm", ["-rf", tmpDir]);
  }

  process.stdout.write(`OK ${pages.length + 1} cards\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
