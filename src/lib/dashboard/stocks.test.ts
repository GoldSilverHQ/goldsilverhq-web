import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  cbTakeOfMine,
  coverPct,
  investmentGoldGramsPerPerson,
  lostVsStart,
  mineOutputRatio,
  silverSupplyGapT,
  silverVisibleMonths,
  wgcShare,
  WGC_STOCK,
} from "./stocks.ts";

describe("dashboard stocks", () => {
  it("splits WGC above-ground stock to the published percents", () => {
    assert.equal(Math.round(wgcShare(WGC_STOCK.jewelryT)), 45);
    assert.equal(Math.round(wgcShare(WGC_STOCK.officialT)), 18);
  });

  it("uses USGS mine tonnes for the geological ratio", () => {
    const r = mineOutputRatio();
    assert.ok(r > 7 && r < 9);
  });

  it("puts 2025 official buying at about a quarter of mine supply", () => {
    const take = cbTakeOfMine();
    assert.ok(take > 0.2 && take < 0.3);
  });

  it("counts visible silver in months of fabrication", () => {
    const m = silverVisibleMonths();
    assert.ok(m > 12 && m < 18);
  });

  it("keeps 2024 silver in deficit vs total demand", () => {
    assert.ok(silverSupplyGapT() < 0);
  });

  it("gives a few grams of investment gold per person", () => {
    const g = investmentGoldGramsPerPerson();
    assert.ok(g > 5 && g < 8);
  });

  it("covers a slice of world public debt with official gold", () => {
    const pct = coverPct(35_908, 4_500);
    assert.ok(pct != null && pct > 0.03 && pct < 0.08);
  });

  it("measures local-currency loss vs a start price", () => {
    assert.equal(lostVsStart(2436, 243.6), 0.9);
    assert.equal(lostVsStart(0, 243.6), null);
  });
});
