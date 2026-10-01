#!/usr/bin/env node
/**
 * 1200×630 Open Graph cards for portrait heroes (`frame: "portrait"`):
 * the full, uncropped portrait on the branded dark/gold card, with the same
 * kicker + title copy as `og:cards`. Never a center crop of a face.
 *
 * Covers every VIP person page plus `ARTICLE_HEROES` entries marked portrait.
 * Writes to each entry's `ogSrc`.
 *
 *   npm run og:portrait                      # all portrait heroes
 *   npm run og:portrait -- /history/vip/john-law
 */
import { mkdirSync, writeFileSync, existsSync, copyFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { execFileSync } from "node:child_process";
import { chromium } from "playwright";
import { sharePageForPath } from "../src/lib/seo/og-cards.ts";
import { ARTICLE_HEROES } from "../src/lib/content/article-media.ts";
import { HISTORY_PEOPLE } from "../src/lib/content/history-people.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const tmpDir = join(root, ".tmp-og-portrait");
const logoSrc = join(root, "public/logo.png");

const PORTRAIT_MAX_H = 490;
const PORTRAIT_MAX_W = 440;

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function portraitBox(width, height) {
  let h = PORTRAIT_MAX_H;
  let w = Math.round((h * width) / height);
  if (w > PORTRAIT_MAX_W) {
    w = PORTRAIT_MAX_W;
    h = Math.round((w * height) / width);
  }
  return { w, h };
}

function cardHtml({ cardTitle, kicker, imageHref, width, height, logoHref }) {
  const { w, h } = portraitBox(width, height);
  const titleSize = cardTitle.length > 42 ? "50px" : cardTitle.length > 24 ? "58px" : "66px";
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@500;600;700&display=swap" rel="stylesheet" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1200px;
      height: 630px;
      overflow: hidden;
      font-family: Figtree, ui-sans-serif, system-ui, sans-serif;
      color: #f7f3ea;
      background:
        radial-gradient(ellipse 55% 85% at 22% 50%, rgba(201, 162, 39, 0.22), transparent 60%),
        radial-gradient(ellipse 50% 55% at 92% 88%, rgba(197, 205, 212, 0.08), transparent 48%),
        linear-gradient(165deg, #14120f 0%, #070605 52%, #0a0908 100%);
    }
    .frame {
      width: 1200px;
      height: 630px;
      padding: 70px 96px 70px 90px;
      display: flex;
      align-items: center;
      gap: 56px;
      border: 1px solid rgba(201, 162, 39, 0.34);
      box-shadow: inset 0 0 0 1px rgba(242, 237, 228, 0.05);
    }
    .portrait {
      flex: none;
      width: ${w}px;
      height: ${h}px;
      object-fit: contain;
      border-radius: 10px;
      box-shadow: 0 0 0 1px rgba(201, 162, 39, 0.55), 0 18px 48px rgba(0, 0, 0, 0.6);
    }
    .content {
      flex: 1;
      min-width: 0;
      align-self: stretch;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .brand { display: flex; align-items: center; gap: 14px; }
    .mark { width: 60px; height: 60px; object-fit: contain; }
    .wordmark { font-weight: 700; font-size: 26px; letter-spacing: -0.035em; }
    .wordmark .gold { color: #f0c94a; }
    .wordmark .silver { color: #eef2f5; }
    .wordmark .hq { color: #ffffff; }
    .kicker {
      margin-top: 40px;
      font-size: 19px;
      font-weight: 700;
      letter-spacing: 0.11em;
      text-transform: uppercase;
      color: #f0c94a;
    }
    .title {
      margin-top: 14px;
      font-weight: 600;
      font-size: ${titleSize};
      line-height: 1.08;
      letter-spacing: -0.01em;
      color: #ffffff;
      text-wrap: balance;
    }
    .foot {
      margin-top: 40px;
      border-top: 1px solid rgba(242, 237, 228, 0.18);
      padding-top: 16px;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 0.03em;
      color: #b0a89c;
    }
  </style>
</head>
<body>
  <div class="frame">
    <img class="portrait" src="${imageHref}" width="${w}" height="${h}" alt="" />
    <div class="content">
      <div class="brand">
        <img class="mark" src="${logoHref}" width="60" height="60" alt="" />
        <div class="wordmark"><span class="gold">Gold</span><span class="silver">Silver</span><span class="hq">HQ</span></div>
      </div>
      <p class="kicker">${escapeHtml(kicker)}</p>
      <h1 class="title">${escapeHtml(cardTitle)}</h1>
      <p class="foot">goldsilverhq.com</p>
    </div>
  </div>
</body>
</html>`;
}

function portraitEntries() {
  const people = HISTORY_PEOPLE.map((p) => p.image);
  const articles = ARTICLE_HEROES.filter((h) => h.frame === "portrait");
  return [...people, ...articles].map((h) => {
    if (!h.width || !h.height) throw new Error(`Portrait hero ${h.path} needs width/height`);
    return h;
  });
}

async function main() {
  const only = process.argv.slice(2).filter((arg) => arg.startsWith("/"));
  const entries = portraitEntries().filter((h) => !only.length || only.includes(h.path));
  if (!entries.length) throw new Error("No portrait heroes matched");

  mkdirSync(tmpDir, { recursive: true });
  const logoTmp = join(tmpDir, "logo.png");
  copyFileSync(logoSrc, logoTmp);
  const logoHref = pathToFileURL(logoTmp).href;

  const browser = await chromium.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });
  try {
    for (const hero of entries) {
      const share = sharePageForPath(hero.path);
      if (!share) throw new Error(`No share page for ${hero.path}`);
      const imagePath = join(root, "public", hero.src.replace(/^\//, ""));
      if (!existsSync(imagePath)) throw new Error(`Missing ${imagePath}`);
      const key = hero.path.replace(/^\//, "").replace(/\//g, "-");
      const htmlPath = join(tmpDir, `${key}.html`);
      const pngPath = join(tmpDir, `${key}.png`);
      writeFileSync(
        htmlPath,
        cardHtml({
          cardTitle: share.cardTitle,
          kicker: share.kicker,
          imageHref: pathToFileURL(imagePath).href,
          width: hero.width,
          height: hero.height,
          logoHref,
        }),
        "utf8",
      );
      const page = await browser.newPage({
        viewport: { width: 1200, height: 630 },
        deviceScaleFactor: 1,
      });
      await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
      await page.screenshot({ path: pngPath, type: "png" });
      await page.close();
      const outJpg = join(root, "public", hero.ogSrc.replace(/^\//, ""));
      mkdirSync(dirname(outJpg), { recursive: true });
      execFileSync("ffmpeg", ["-y", "-i", pngPath, "-q:v", "3", outJpg], {
        stdio: ["ignore", "ignore", "pipe"],
      });
      process.stdout.write(`wrote ${hero.ogSrc}\n`);
    }
  } finally {
    await browser.close();
  }
  if (process.env.KEEP_OG_TMP !== "1") execFileSync("rm", ["-rf", tmpDir]);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
