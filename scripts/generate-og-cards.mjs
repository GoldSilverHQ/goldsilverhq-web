#!/usr/bin/env node
/**
 * Generate branded 1200×630 Open Graph JPEG cards for Phase-1 sitemap URLs
 * (plus the site-wide public/og.jpg fallback).
 *
 * X-first: summary_large_image size, safe margins, high-contrast title,
 * large HQ medallion + GoldSilverHQ wordmark (readable at feed thumbnail scale).
 * Documentary dark desk + gold. No buy CTAs. No inline article images.
 *
 *   node --experimental-strip-types scripts/generate-og-cards.mjs
 */
import { mkdirSync, writeFileSync, existsSync, copyFileSync } from "node:fs";
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
const logoSrc = join(root, "public/logo.png");

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function cardHtml({ cardTitle, kicker }, logoHref) {
  const title = escapeHtml(cardTitle);
  const label = escapeHtml(kicker);
  const long = cardTitle.length > 64;
  const titleSize = long ? "46px" : cardTitle.length > 42 ? "52px" : "58px";
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Figtree:wght@500;600;700&display=swap" rel="stylesheet" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1200px;
      height: 630px;
      overflow: hidden;
      font-family: Figtree, ui-sans-serif, system-ui, sans-serif;
      color: #f7f3ea;
      background:
        radial-gradient(ellipse 70% 80% at 14% 50%, rgba(201, 162, 39, 0.2), transparent 58%),
        radial-gradient(ellipse 50% 55% at 92% 88%, rgba(197, 205, 212, 0.08), transparent 48%),
        linear-gradient(165deg, #14120f 0%, #070605 52%, #0a0908 100%);
    }
    .frame {
      position: relative;
      width: 1200px;
      height: 630px;
      /* X-safe margins — keep brand + title inside timeline / preview crops */
      padding: 44px 52px 40px;
      display: grid;
      grid-template-columns: 268px 1fr;
      column-gap: 36px;
      border: 1px solid rgba(201, 162, 39, 0.34);
      box-shadow: inset 0 0 0 1px rgba(242, 237, 228, 0.05);
    }
    .watermark {
      position: absolute;
      right: -40px;
      bottom: -60px;
      width: 420px;
      height: 420px;
      opacity: 0.14;
      pointer-events: none;
      filter: saturate(1.1);
    }
    .brand-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      text-align: center;
      gap: 20px;
      padding: 8px 10px 12px;
      border-right: 1px solid rgba(201, 162, 39, 0.28);
      z-index: 1;
    }
    .mark {
      width: 228px;
      height: 228px;
      object-fit: contain;
      flex-shrink: 0;
      filter: drop-shadow(0 10px 26px rgba(0, 0, 0, 0.65));
    }
    .wordmark {
      font-family: Figtree, ui-sans-serif, system-ui, sans-serif;
      font-weight: 700;
      font-size: 34px;
      letter-spacing: -0.035em;
      line-height: 1.05;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.45);
    }
    .wordmark .gold { color: #f0c94a; }
    .wordmark .silver { color: #eef2f5; }
    .wordmark .hq { color: #ffffff; }
    .content {
      display: flex;
      flex-direction: column;
      min-width: 0;
      padding: 4px 8px 0 4px;
      z-index: 1;
    }
    .brand-tag {
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #f0c94a;
    }
    .kicker {
      margin-top: 10px;
      font-size: 19px;
      font-weight: 700;
      letter-spacing: 0.11em;
      text-transform: uppercase;
      color: #f0c94a;
    }
    .title {
      margin-top: 16px;
      font-family: "Cormorant Garamond", "Times New Roman", serif;
      font-weight: 600;
      font-size: ${titleSize};
      line-height: 1.1;
      letter-spacing: -0.01em;
      color: #ffffff;
      max-width: 820px;
      text-wrap: balance;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
    }
    .foot {
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      border-top: 1px solid rgba(242, 237, 228, 0.18);
      padding-top: 18px;
    }
    .foot-left {
      font-size: 18px;
      color: #c4bcb0;
      font-weight: 500;
    }
    .foot-right {
      font-size: 18px;
      color: #b0a89c;
      letter-spacing: 0.03em;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <div class="frame">
    <img class="watermark" src="${logoHref}" width="420" height="420" alt="" aria-hidden="true" />
    <div class="brand-col">
      <img class="mark" src="${logoHref}" width="228" height="228" alt="" />
      <div class="wordmark"><span class="gold">Gold</span><span class="silver">Silver</span><span class="hq">HQ</span></div>
    </div>
    <div class="content">
      <p class="brand-tag">Sound money · documentary media</p>
      <p class="kicker">${label}</p>
      <h1 class="title">${title}</h1>
      <div class="foot">
        <p class="foot-left">Educational media · Not investment advice</p>
        <p class="foot-right">goldsilverhq.com</p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

async function renderCard(page, browser, outJpg, logoHref) {
  const htmlPath = join(tmpDir, `${ogCardKey(page.path)}.html`);
  writeFileSync(htmlPath, cardHtml(page, logoHref), "utf8");
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
  if (!existsSync(logoSrc)) {
    throw new Error(`Missing brand mark at ${logoSrc}`);
  }

  mkdirSync(cardsDir, { recursive: true });
  mkdirSync(tmpDir, { recursive: true });

  // Local HTML files need a file:// logo so Playwright can load the real medallion.
  const logoTmp = join(tmpDir, "logo.png");
  copyFileSync(logoSrc, logoTmp);
  const logoHref = pathToFileURL(logoTmp).href;

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
      await renderCard(page, browser, outJpg, logoHref);
      process.stdout.write(`wrote ${rel}\n`);
    }

    const fallbackJpg = join(root, "public", DEFAULT_OG_IMAGE_PATH.replace(/^\//, ""));
    await renderCard(defaultPage, browser, fallbackJpg, logoHref);
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
