import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { IDEAS_MARKETS_NAV } from "./ideas-markets-nav.ts";

describe("ideas-markets nav grouping", () => {
  it("lists Sound Money then Markets on existing hubs only", () => {
    assert.deepEqual(
      IDEAS_MARKETS_NAV.map((item) => item.label),
      ["Sound Money", "Markets"],
    );
    assert.deepEqual(
      IDEAS_MARKETS_NAV.map((item) => item.href),
      ["/sound-money", "/markets"],
    );
  });
});
