import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  HISTORY_YEARS,
  adjacentHistoryYears,
  getHistoryYear,
  historyYearPaths,
} from "./history-years.ts";
import { PHASE1_SITEMAP_PATHS } from "../seo/phase1-sitemap-paths.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "../../..");

describe("history years", () => {
  it("uses /history/1776, not a /year/ prefix, and keeps 1776 on the sitemap", () => {
    const page = getHistoryYear("1776");
    assert.ok(page);
    assert.equal(page.year, 1776);
    assert.equal(page.image.src, "/images/history/years/1776.jpg");
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/history/1776"));
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/history/year"));
    assert.equal(getHistoryYear("ancient"), undefined);
    assert.equal(getHistoryYear("year"), undefined);
  });

  it("lists every year page on the sitemap and ships one image", () => {
    assert.deepEqual(
      historyYearPaths(),
      HISTORY_YEARS.map((row) => `/history/${row.year}`),
    );
    for (const path of historyYearPaths()) {
      assert.ok(PHASE1_SITEMAP_PATHS.includes(path), path);
    }
    for (const row of HISTORY_YEARS) {
      assert.ok(row.summary.length > 20, String(row.year));
      assert.ok(row.paragraphs.length >= 2, String(row.year));
      assert.match(row.image.ogSrc, new RegExp(`/og/cards/history-${row.year}\\.jpg$`));
      assert.ok(existsSync(join(root, "public", row.image.src.replace(/^\//, ""))), row.image.src);
      assert.ok(existsSync(join(root, "public", row.image.ogSrc.replace(/^\//, ""))), row.image.ogSrc);
      const text = [row.summary, ...row.paragraphs].join(" ");
      assert.doesNotMatch(text, /buy gold|buy silver|you should|price target/i);
    }
  });

  it("steps to the next dated year, not the next calendar year", () => {
    assert.equal(adjacentHistoryYears(1776).prev?.year, 1720);
    assert.equal(adjacentHistoryYears(1776).next?.year, 1792);
    assert.equal(adjacentHistoryYears(1545).prev, undefined);
    assert.equal(adjacentHistoryYears(1980).next, undefined);
  });
});
