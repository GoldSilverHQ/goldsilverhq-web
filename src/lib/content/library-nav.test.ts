import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { LIBRARY_MATCH_HREFS, LIBRARY_NAV_MENU } from "./library-nav.ts";

describe("library nav menu", () => {
  it("lists the three reading shelves with punchy labels", () => {
    assert.deepEqual(
      LIBRARY_NAV_MENU.map((item) => item.label),
      ["Sound Money", "Markets", "Guides"],
    );
    assert.deepEqual(
      LIBRARY_NAV_MENU.map((item) => item.href),
      ["/sound-money", "/markets", "/gold-silver"],
    );
    assert.deepEqual(LIBRARY_MATCH_HREFS, ["/sound-money", "/markets", "/gold-silver"]);
  });

  it("keeps existing hub routes only", () => {
    for (const item of LIBRARY_NAV_MENU) {
      assert.ok(item.href.startsWith("/"));
      assert.ok(!item.href.includes("library"));
      assert.ok(!item.href.includes("academy"));
      assert.ok(!item.href.includes("resources"));
    }
  });
});
