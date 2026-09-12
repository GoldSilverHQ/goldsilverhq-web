import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { PHASE1_SITEMAP_PATHS } from "./phase1-sitemap-paths.mjs";
import {
  absoluteOgImageUrl,
  ogCardKey,
  ogImagePathForRoute,
  ogImagePathForRouteOrDefault,
  phase1SharePages,
  sharePageForPath,
} from "./og-cards.ts";
import { pageShareMeta } from "./share-meta.ts";

const MAX_CARD_BYTES = 600 * 1024;
const root = join(import.meta.dirname, "../../..");

describe("branded OG share cards", () => {
  it("resolves metadata for every Phase-1 sitemap URL", () => {
    const pages = phase1SharePages();
    assert.equal(pages.length, 41);
    assert.equal(pages.length, PHASE1_SITEMAP_PATHS.length);
    for (const page of pages) {
      assert.ok(page.cardTitle.length > 3, page.path);
      assert.match(page.title, /GoldSilverHQ/);
      assert.ok(page.description.length > 20, page.path);
      assert.ok(!/buy now|subscribe|newsletter|shop/i.test(page.cardTitle));
      assert.ok(!/buy now|subscribe|newsletter|shop/i.test(page.description));
    }
  });

  it("maps thick paths to /og/cards/*.jpg and others to /og.jpg", () => {
    assert.equal(ogCardKey("/history/silver/bimetallism"), "history-silver-bimetallism");
    assert.equal(ogImagePathForRoute("/history/silver/bimetallism"), "/og/cards/history-silver-bimetallism.jpg");
    assert.equal(ogImagePathForRoute("/desk"), "");
    assert.equal(ogImagePathForRoute("/gold-silver"), "");
    assert.equal(ogImagePathForRouteOrDefault("/desk"), "/og.jpg");
    assert.match(
      absoluteOgImageUrl("/markets"),
      /^https:\/\/www\.goldsilverhq\.com\/og\/cards\/markets\.jpg$/,
    );
  });

  it("emits og + twitter meta without buy CTAs", () => {
    const page = sharePageForPath("/history/20th-century/weimar-1923");
    assert.ok(page);
    const meta = pageShareMeta({
      title: page.title,
      description: page.description,
      path: page.path,
    });
    const byProp = Object.fromEntries(
      meta.filter((m) => "property" in m).map((m) => [m.property, m.content]),
    );
    const byName = Object.fromEntries(
      meta.filter((m) => "name" in m).map((m) => [m.name, m.content]),
    );
    assert.equal(byProp["og:title"], page.title);
    assert.equal(byProp["og:description"], page.description);
    assert.equal(byProp["og:image"], absoluteOgImageUrl(page.path));
    assert.equal(byName["twitter:card"], "summary_large_image");
    assert.equal(byName["twitter:image"], absoluteOgImageUrl(page.path));
  });

  it("ships a JPEG under 600 KB for every sitemap card plus the default", () => {
    const files = [
      join(root, "public/og.jpg"),
      ...PHASE1_SITEMAP_PATHS.map((path) =>
        join(root, "public", ogImagePathForRouteOrDefault(path).replace(/^\//, "")),
      ),
    ];
    assert.equal(files.length, 42);
    for (const file of files) {
      assert.ok(existsSync(file), `missing ${file}`);
      const size = statSync(file).size;
      assert.ok(size > 5_000, `${file} too small (${size})`);
      assert.ok(size <= MAX_CARD_BYTES, `${file} over scraper budget (${size})`);
    }
  });
});
