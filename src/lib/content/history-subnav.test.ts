import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { HISTORY_NAV_MENU, HISTORY_SUBNAV } from "./history-subnav.ts";

describe("history-subnav", () => {
  it("lists clear chapter labels plus Year by year and VIPs", () => {
    assert.deepEqual(
      HISTORY_SUBNAV.map((item) => item.label),
      [
        "Ancient money",
        "Banks & paper money",
        "US gold & silver politics",
        "Silver as money",
        "Fed, gold & 1971",
        "Year by year",
        "VIPs",
      ],
    );
    assert.deepEqual(
      HISTORY_SUBNAV.map((item) => item.href),
      [
        "/history/ancient",
        "/history/banks-paper",
        "/history/america",
        "/history/silver",
        "/history/20th-century",
        "/history/year",
        "/history/vip",
      ],
    );
  });

  it("keeps header menu overview first without inventing new paths", () => {
    assert.equal(HISTORY_NAV_MENU[0]?.href, "/history");
    assert.equal(HISTORY_NAV_MENU[0]?.label, "Overview");
    for (const item of HISTORY_NAV_MENU) {
      assert.match(item.href, /^\/history(?:\/|$)/);
      assert.doesNotMatch(item.label, /pillar|cluster|spoke|sitemap|BaFin/i);
    }
  });
});
