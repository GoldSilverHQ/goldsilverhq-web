import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { PHASE1_SITEMAP_PATHS } from "../seo/phase1-sitemap-paths.mjs";
import { SOUND_MONEY_NAV_MENU, SOUND_MONEY_SUBNAV } from "./sound-money-subnav.ts";

describe("sound-money subnav", () => {
  it("lists overview plus the four definition pages (no disclaimer)", () => {
    assert.equal(SOUND_MONEY_NAV_MENU[0]?.href, "/sound-money");
    assert.equal(SOUND_MONEY_NAV_MENU[0]?.label, "Overview");
    assert.equal(SOUND_MONEY_SUBNAV.length, 4);
    assert.ok(!SOUND_MONEY_NAV_MENU.some((item) => item.href.includes("information-not-advice")));
  });

  it("stays on existing sitemap sound-money routes", () => {
    for (const item of SOUND_MONEY_NAV_MENU) {
      assert.ok(
        PHASE1_SITEMAP_PATHS.includes(item.href as (typeof PHASE1_SITEMAP_PATHS)[number]),
        `missing sitemap path ${item.href}`,
      );
      assert.doesNotMatch(item.label, /pillar|cluster|spoke|sitemap|BaFin|academy/i);
    }
  });
});
