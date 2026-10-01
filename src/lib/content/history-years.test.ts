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

  it("keeps only notable years before 1776, then every year through 1980", () => {
    assert.equal(HISTORY_YEARS.length, 9 + (1980 - 1776 + 1));
    assert.deepEqual(
      HISTORY_YEARS.map((row) => row.year),
      HISTORY_YEARS.map((row) => row.year).slice().sort((a, b) => a - b),
    );
    assert.equal(getHistoryYear("312")?.year, 312);
    assert.equal(getHistoryYear("1545")?.year, 1545);
    assert.equal(getHistoryYear("1640")?.year, 1640);
    assert.equal(getHistoryYear("1775")?.year, 1775);
    assert.equal(getHistoryYear("1550"), undefined);
    assert.equal(getHistoryYear("1721"), undefined);
    assert.equal(getHistoryYear("311"), undefined);
    assert.equal(getHistoryYear("1981"), undefined);
    for (let year = 1776; year <= 1980; year += 1) {
      assert.equal(getHistoryYear(String(year))?.year, year);
    }
    assert.equal(adjacentHistoryYears(312).prev, undefined);
    assert.equal(adjacentHistoryYears(312).next?.year, 1545);
    assert.equal(adjacentHistoryYears(1720).next?.year, 1775);
    assert.equal(adjacentHistoryYears(1776).prev?.year, 1775);
    assert.equal(adjacentHistoryYears(1776).next?.year, 1777);
    assert.equal(adjacentHistoryYears(1790).next?.year, 1791);
    assert.equal(adjacentHistoryYears(1971).next?.year, 1972);
    assert.equal(adjacentHistoryYears(1980).prev?.year, 1979);
    assert.equal(adjacentHistoryYears(1980).next, undefined);
  });
});
