import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { PAST_HIGHS, ratioRange, ratioSeries, realSeries, toTodaysDollars } from "./real-prices.ts";

describe("real prices", () => {
  it("restates a price by the CPI ratio", () => {
    assert.equal(toTodaysDollars(850, 78, 312), 3400);
  });

  it("keeps the latest year equal in nominal and today's dollars when CPI matches", () => {
    const last = realSeries("gold", undefined, 334.1).at(-1)!;
    assert.ok(Math.abs(last.y - 4609) < 1);
  });

  it("swaps the in-progress year for the live print", () => {
    const last = ratioSeries({ gold: 4200, silver: 60 }).at(-1)!;
    assert.equal(last.y, 70);
  });

  it("builds a gold–silver ratio per year since 1971", () => {
    const s = ratioSeries();
    assert.equal(s[0].x, 1971);
    assert.ok(Math.abs(s[0].y - 40.62 / 1.39) < 1e-9);
    const r = ratioRange();
    assert.ok(r.lo.y < r.avg && r.avg < r.hi.y);
  });

  it("lists the 1980 and 2011 highs for both metals", () => {
    assert.equal(PAST_HIGHS.length, 4);
    assert.ok(PAST_HIGHS.every((h) => h.cpiThen > 0 && h.m2Then > 0));
  });
});
