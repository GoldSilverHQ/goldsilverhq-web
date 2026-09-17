import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import {
  ARTICLE_HEROES,
  articleHeroForPath,
  articleHeroOgOverridePaths,
} from "./article-media.ts";
import { absoluteOgImageUrl, ogImagePathForRoute } from "../seo/og-cards.ts";
import { pageShareMeta } from "../seo/share-meta.ts";

const root = join(import.meta.dirname, "../../..");

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

  it("ships true 1200×630 JPEGs for hero titlebild and OG (Querformat sync)", () => {
    for (const hero of ARTICLE_HEROES) {
      for (const rel of [hero.src, hero.ogSrc]) {
        const file = join(root, "public", rel.replace(/^\//, ""));
        const size = statSync(file).size;
        assert.ok(size > 20_000 && size <= 600 * 1024, `${file} size ${size}`);
        const probe = execFileSync(
          "ffprobe",
          ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height", "-of", "csv=p=0", file],
          { encoding: "utf8" },
        ).trim();
        assert.equal(probe, "1200,630", `${file} dims ${probe}`);
      }
    }
  });

  it("keeps titlebild and OG card byte-identical (same colorized Querformat asset)", () => {
    for (const hero of ARTICLE_HEROES) {
      const srcFile = join(root, "public", hero.src.replace(/^\//, ""));
      const ogFile = join(root, "public", hero.ogSrc.replace(/^\//, ""));
      const srcHash = execFileSync("md5sum", [srcFile], { encoding: "utf8" }).split(/\s+/)[0];
      const ogHash = execFileSync("md5sum", [ogFile], { encoding: "utf8" }).split(/\s+/)[0];
      assert.equal(srcHash, ogHash, `${hero.path}: hero ${srcHash} != og ${ogHash}`);

      const meta = pageShareMeta({
        title: "t",
        description: "d",
        path: hero.path,
        imagePath: hero.ogSrc,
      });
      const byName = Object.fromEntries(
        meta.filter((m) => "name" in m).map((m) => [m.name, m.content]),
      );
      const byProp = Object.fromEntries(
        meta.filter((m) => "property" in m).map((m) => [m.property, m.content]),
      );
      assert.equal(byProp["og:image"], `${absoluteOgImageUrl(hero.path)}`);
      assert.equal(byName["twitter:image"], byProp["og:image"]);
      assert.match(byProp["og:image"], /\/og\/cards\//);
    }
  });

  it("lists override paths for og:cards skip", () => {
    assert.deepEqual(articleHeroOgOverridePaths(), [
      "/history/america/jackson-and-the-bank",
    ]);
  });
});
