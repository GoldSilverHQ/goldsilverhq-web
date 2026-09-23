import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { HISTORY_NAV_MENU, HISTORY_SUBNAV } from "./history-subnav.ts";

describe("history-subnav", () => {
  it("lists punchy chapter labels plus Year by year and VIPs", () => {
    assert.deepEqual(
      HISTORY_SUBNAV.map((item) => item.label),
      [
        "Ancient coinage",
        "Banks & paper",
        "US gold politics",
        "Silver story",
        "1907 to 1971",
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
