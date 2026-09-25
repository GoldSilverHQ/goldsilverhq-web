import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { PHASE1_SITEMAP_PATHS } from "../seo/phase1-sitemap-paths.mjs";
import { MARKETS_NAV_MENU, MARKETS_SUBNAV } from "./markets-subnav.ts";

describe("markets subnav", () => {
  it("lists overview plus the four market fact pages", () => {
    assert.equal(MARKETS_NAV_MENU[0]?.href, "/markets");
    assert.equal(MARKETS_NAV_MENU[0]?.label, "Overview");
    assert.equal(MARKETS_SUBNAV.length, 4);
  });

  it("stays on existing sitemap markets routes", () => {
    for (const item of MARKETS_NAV_MENU) {
      assert.ok(
        PHASE1_SITEMAP_PATHS.includes(item.href as (typeof PHASE1_SITEMAP_PATHS)[number]),
        `missing sitemap path ${item.href}`,
      );
      assert.doesNotMatch(item.label, /pillar|cluster|spoke|sitemap|BaFin|academy/i);
    }
  });
});
