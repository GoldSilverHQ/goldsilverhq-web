import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import {
  ARTICLE_HEROES,
  articleHeroForPath,
  articleHeroOgOverridePaths,
} from "./article-media.ts";
import { absoluteOgImageUrl, ogImagePathForRoute } from "../seo/og-cards.ts";
import { pageShareMeta } from "../seo/share-meta.ts";
import { historyClusters } from "./map.ts";

const root = join(import.meta.dirname, "../../..");

const HISTORY_EPISODE_PATHS = historyClusters.flatMap((cluster) =>
  cluster.episodes.map((ep) => `/history/${cluster.slug}/${ep.slug}`),
);

/** Sitemap Idea + Markets article bodies (not hubs; Practice skipped). */
const IDEA_MARKETS_ARTICLE_PATHS = [
  "/sound-money/what-is-sound-money",
  "/sound-money/hard-money-vs-fiat",
  "/sound-money/inflation-purchasing-power",
  "/sound-money/backed-money",
  "/markets/official-gold-book-value",
  "/markets/central-bank-gold-reserves",
  "/markets/gold-silver-ratio",
  "/markets/physical-silver-demand-by-country",
] as const;

describe("article hero = OG pattern", () => {
  it("registers Jackson with matching files and share meta", () => {
    const hero = articleHeroForPath("/history/america/jackson-and-the-bank");
    assert.ok(hero);
    assert.equal(hero.ogSrc, ogImagePathForRoute(hero.path));
    assert.ok(existsSync(join(root, "public", hero.src.replace(/^\//, ""))));
    assert.ok(existsSync(join(root, "public", hero.ogSrc.replace(/^\//, ""))));

    const meta = pageShareMeta({
      title: "Jackson and the Bank — GoldSilverHQ",
      description: hero.caption ?? "test",
      path: hero.path,
      imagePath: hero.ogSrc,
    });
    const byProp = Object.fromEntries(
      meta.filter((m) => "property" in m).map((m) => [m.property, m.content]),
    );
    assert.equal(byProp["og:image"], absoluteOgImageUrl(hero.path));
    assert.match(hero.alt, /Jackson/i);
    assert.match(hero.credit ?? "", /Library of Congress/i);
  });

  it("covers every History episode with a registered hero", () => {
    assert.equal(HISTORY_EPISODE_PATHS.length, 25);
    for (const path of HISTORY_EPISODE_PATHS) {
      assert.ok(articleHeroForPath(path), `missing hero for ${path}`);
    }
  });

  it("covers every Idea + Markets sitemap article with a registered hero", () => {
    assert.equal(IDEA_MARKETS_ARTICLE_PATHS.length, 8);
    for (const path of IDEA_MARKETS_ARTICLE_PATHS) {
      assert.ok(articleHeroForPath(path), `missing hero for ${path}`);
    }
  });

  it("ships true 1200×630 JPEGs for hero titlebild and OG (Querformat sync)", () => {
    for (const hero of ARTICLE_HEROES) {
      assert.equal(hero.ogSrc, ogImagePathForRoute(hero.path), hero.path);
      const srcFile = join(root, "public", hero.src.replace(/^\//, ""));
      const ogFile = join(root, "public", hero.ogSrc.replace(/^\//, ""));
      for (const file of [srcFile, ogFile]) {
        const size = statSync(file).size;
        assert.ok(size > 20_000 && size <= 600 * 1024, `${file} size ${size}`);
        const probe = execFileSync(
          "ffprobe",
          [
            "-v",
            "error",
            "-select_streams",
            "v:0",
            "-show_entries",
            "stream=width,height",
            "-of",
            "csv=p=0",
            file,
          ],
          { encoding: "utf8" },
        ).trim();
        assert.equal(probe, "1200,630", `${file} dims ${probe}`);
      }
      assert.deepEqual(
        readFileSync(srcFile),
        readFileSync(ogFile),
        `${hero.path} titlebild/OG bytes differ`,
      );
    }
  });

  it("lists override paths for og:cards skip", () => {
    assert.deepEqual(
      articleHeroOgOverridePaths(),
      ARTICLE_HEROES.map((h) => h.path),
    );
    assert.ok(articleHeroOgOverridePaths().includes("/history/america/jackson-and-the-bank"));
    assert.ok(articleHeroOgOverridePaths().includes("/sound-money/what-is-sound-money"));
    assert.equal(articleHeroOgOverridePaths().length, 37);
  });
});
