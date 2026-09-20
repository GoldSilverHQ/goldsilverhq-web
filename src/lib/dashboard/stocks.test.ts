import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  cbTakeOfMine,
  coverPct,
  investmentGoldGramsPerPerson,
  investmentSilverOzPerPerson,
  lbmaGoldClearingRatio,
  lostVsStart,
  mineOutputRatio,
  silverIdentifiableMoz,
  silverOfficialT,
  silverSupplyGapT,
  silverVisibleMonths,
  wgcShare,
  SILVER_ETP_2025,
  WGC_STOCK,
} from "./stocks.ts";
import { CHINA_SAFE_AUG_2026 } from "./clock-prints.ts";
import { COMPILED_DESK, withPublishedYtd } from "./central-banks.ts";

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
    assert.ok(m > 17 && m < 20);
  });

  it("keeps 2025 mine plus recycle short of total demand", () => {
    assert.ok(silverSupplyGapT() < 0);
    assert.ok(Math.round(silverSupplyGapT()) < -2_000);
  });

  it("uses the World Silver Survey 2026 identifiable stock and ETP print", () => {
    assert.equal(silverIdentifiableMoz(), 1_394.5);
    assert.equal(SILVER_ETP_2025.tonnes, 40_982);
    assert.ok(investmentSilverOzPerPerson() > 0.16 && investmentSilverOzPerPerson() < 0.18);
    assert.equal(Math.round(silverOfficialT()), 47);
  });

  it("pairs July LBMA clearing with the July vault, as a daily ratio", () => {
    const ratio = lbmaGoldClearingRatio();
    assert.ok(ratio > 0.05 && ratio < 0.06);
  });

  it("rounds the August SAFE ounce print to 2,387 tonnes", () => {
    assert.equal(Math.round(CHINA_SAFE_AUG_2026.tonnes), 2_387);
  });

  it("replaces an earlier 2026 China buyer line with the published August total", () => {
    const next = withPublishedYtd(COMPILED_DESK);
    const china = next.countries.find((c) => c.id === "chn");
    assert.equal(china?.byYear[2026], 80);
    const again = withPublishedYtd(next);
    assert.equal(again.countries.find((c) => c.id === "chn")?.byYear[2026], 80);
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
