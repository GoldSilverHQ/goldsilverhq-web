import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { HISTORY_HUB_YEAR_CARDS, historyHubYearHref } from "./history-hub-years.ts";
import { getHistoryYear } from "./history-years.ts";

describe("history hub year cards", () => {
  it("keeps a curated set of hinges, not every quiet year", () => {
    assert.ok(HISTORY_HUB_YEAR_CARDS.length >= 12);
    assert.ok(HISTORY_HUB_YEAR_CARDS.length <= 24);
    const years = HISTORY_HUB_YEAR_CARDS.map((c) => c.year);
    assert.deepEqual(years, [...years].sort((a, b) => a - b));
    assert.ok(years.includes(1545));
    assert.ok(years.includes(1971));
    assert.ok(years.includes(1980));
  });

  it("prefers year pages when they exist and falls back to episodes", () => {
    for (const card of HISTORY_HUB_YEAR_CARDS) {
      assert.ok(card.blurb.length > 12);
      assert.match(card.episode, /^\/history\//);
      const href = historyHubYearHref(card);
      if (getHistoryYear(String(card.year))) {
        assert.equal(href, `/history/${card.year}`);
      } else {
        assert.equal(href, card.episode);
      }
    }
  });

  it("falls back for 312 while that year page is absent", () => {
    const solidus = HISTORY_HUB_YEAR_CARDS.find((c) => c.year === 312);
    assert.ok(solidus);
    if (!getHistoryYear("312")) {
      assert.equal(historyHubYearHref(solidus), "/history/ancient/solidus-continuity");
    }
  });
});
