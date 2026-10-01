import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  IIF_HEADLINE,
  TREASURY_GOLD,
  US_INTEREST,
  WORLD_GOV_DEBT,
  goldCoverOfDebt,
  goldDaysOfInterest,
  goldVsDebtSeries,
  interestToGold,
} from "./debt.ts";

describe("debt vs gold", () => {
  it("values Treasury gold against a given debt", () => {
    const cover = goldCoverOfDebt(4000, 40e12)!;
    assert.ok(Math.abs(cover - (TREASURY_GOLD.oz * 4000) / 40e12) < 1e-12);
    assert.equal(goldCoverOfDebt(0), null);
  });

  it("relates a year of interest to the gold stock", () => {
    const ratio = interestToGold(4000, 1.2e12)!;
    assert.ok(Math.abs(ratio - 1.2e12 / (TREASURY_GOLD.oz * 4000)) < 1e-12);
    const days = goldDaysOfInterest(4000, 1.2e12)!;
    assert.ok(Math.abs(days - 365 / ratio) < 1e-9);
  });

  it("labels interest gross and public separately, public smaller", () => {
    assert.ok(US_INTEREST.ttmPublicUsd < US_INTEREST.ttmGrossUsd);
  });

  it("builds a since-2000 series from year-end debt", () => {
    const s = goldVsDebtSeries(undefined, { "2000": 5.6e12, "2001": 5.9e12 });
    assert.deepEqual(
      s.map((p) => p.x),
      [2000, 2001],
    );
    assert.ok(s[0].y > 0 && s[0].y < 5);
  });

  it("uses only a completed year for world government debt", () => {
    assert.ok(WORLD_GOV_DEBT.year < new Date().getUTCFullYear());
    assert.ok(WORLD_GOV_DEBT.usd > 50e12);
    assert.match(IIF_HEADLINE.source, /Institute of International Finance/);
  });
});
