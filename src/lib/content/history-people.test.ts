import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  HISTORY_PEOPLE,
  adjacentHistoryPeople,
  getHistoryPerson,
  historyPersonPaths,
} from "./history-people.ts";
import { PHASE1_SITEMAP_PATHS } from "../seo/phase1-sitemap-paths.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "../../..");

describe("history people", () => {
  it("uses /history/vip/ludwig-von-mises, not a bare /history/ name", () => {
    const page = getHistoryPerson("ludwig-von-mises");
    assert.ok(page);
    assert.equal(page.name, "Ludwig von Mises");
    assert.equal(page.image.src, "/images/history/vip/ludwig-von-mises.jpg");
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/history/vip"));
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/history/vip/ludwig-von-mises"));
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/history/vip/andrew-jackson"));
    assert.equal(PHASE1_SITEMAP_PATHS.includes("/history/andrew-jackson"), false);
    assert.equal(getHistoryPerson("andrew_jackson"), undefined);
    assert.equal(getHistoryPerson("person_a"), undefined);
    assert.equal(getHistoryPerson("vip"), undefined);
  });

  it("lists every person on the sitemap and ships one image", () => {
    assert.deepEqual(
      historyPersonPaths(),
      HISTORY_PEOPLE.map((row) => `/history/vip/${row.slug}`),
    );
    for (const path of historyPersonPaths()) {
      assert.ok(PHASE1_SITEMAP_PATHS.includes(path), path);
    }
    for (const row of HISTORY_PEOPLE) {
      assert.match(row.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      assert.ok(row.summary.length > 20, row.slug);
      assert.ok(row.paragraphs.length >= 2, row.slug);
      assert.equal(row.image.ogSrc, `/og/cards/history-vip-${row.slug}.jpg`);
      assert.ok(existsSync(join(root, "public", row.image.src.replace(/^\//, ""))), row.image.src);
      assert.ok(existsSync(join(root, "public", row.image.ogSrc.replace(/^\//, ""))), row.image.ogSrc);
      const text = [row.summary, ...row.paragraphs, row.image.caption].join(" ");
      assert.doesNotMatch(text, /buy gold|buy silver|you should|price target/i);
    }
  });

  it("reports Mises’s argument without turning it into advice", () => {
    const mises = getHistoryPerson("ludwig-von-mises");
    assert.ok(mises);
    const text = [mises.summary, ...mises.paragraphs].join(" ");
    assert.match(text, /He argued/);
    assert.match(text, /does not adopt it/);
    assert.match(text, /not a forecast/);
    assert.match(mises.image.caption, /Not a portrait/);
    assert.equal(mises.image.credit, "CC0.");
  });

  it("steps along the list, not into a cluster slug", () => {
    assert.equal(adjacentHistoryPeople("john-law").prev, undefined);
    assert.equal(adjacentHistoryPeople("john-law").next?.slug, "adam-smith");
    assert.equal(adjacentHistoryPeople("andrew-jackson").prev?.slug, "alexander-hamilton");
    assert.equal(adjacentHistoryPeople("andrew-jackson").next?.slug, "woodrow-wilson");
    assert.equal(adjacentHistoryPeople("ludwig-von-mises").next, undefined);
  });
});
