import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { SHOP_MATCH_HREFS, SHOP_NAV_MENU } from "./shop-nav.ts";

describe("shop nav menu", () => {
  it("keeps Shop and Partners as distinct flyout rows", () => {
    assert.deepEqual(
      SHOP_NAV_MENU.map((item) => item.label),
      ["Jewelry & merch", "Metal partners"],
    );
    assert.deepEqual(
      SHOP_NAV_MENU.map((item) => item.href),
      ["/shop", "/partners"],
    );
    assert.deepEqual(SHOP_MATCH_HREFS, ["/shop", "/partners"]);
  });
});
