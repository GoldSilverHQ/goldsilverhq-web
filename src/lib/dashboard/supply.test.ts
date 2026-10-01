import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { SILVER_INVENTORIES_2025, USGS_2026, WSS_2026, WSS_YEARS, silverDemandByUse2025, wssLatest } from "./supply.ts";

describe("supply tables", () => {
  it("keeps every survey row the same length as the years", () => {
    for (const [key, row] of Object.entries(WSS_2026)) {
      if (key === "source") continue;
      assert.equal((row as readonly number[]).length, WSS_YEARS.length, key);
    }
  });

  it("matches the survey's own 2025 balance (supply − demand)", () => {
    const i = WSS_YEARS.length - 1;
    assert.ok(Math.abs(WSS_2026.totalSupply[i] - WSS_2026.totalDemand[i] - wssLatest("balance")) < 0.15);
  });

  it("splits 2025 demand into parts that do not exceed the total", () => {
    const d = silverDemandByUse2025();
    assert.ok(d.other > -0.5 && d.other < 5, `other ${d.other}`);
  });

  it("adds identifiable inventories to the survey total and keeps ETPs separate", () => {
    const s = SILVER_INVENTORIES_2025;
    assert.ok(Math.abs(s.londonMoz + s.cmeMoz + s.sgeMoz + s.shfeMoz + s.otherMoz - s.totalMoz) < 0.2);
    assert.ok(s.etpInLondonMoz < s.londonMoz);
  });

  it("lists the top ten producing countries below the world total", () => {
    for (const metal of ["gold", "silver"] as const) {
      const sum = USGS_2026[metal].countries.reduce((a, c) => a + c.t, 0);
      assert.equal(USGS_2026[metal].countries.length, 10);
      assert.ok(sum < USGS_2026[metal].worldT);
    }
  });
});
