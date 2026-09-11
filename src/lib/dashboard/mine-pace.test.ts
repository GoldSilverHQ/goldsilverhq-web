import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  GOLD_MINE_2026E,
  SILVER_MINE_2026F,
  goldOzPerSecond,
  goldOzPerYear,
  secondsInUtcYear,
  silverOzPerSecond,
  silverOzPerYear,
  ytdMineOunces,
} from "./mine-pace.ts";

describe("mine pace estimates", () => {
  it("uses a modest 2026 gold lift on the WGC 2025 print", () => {
    assert.equal(GOLD_MINE_2026E.tonnes, 3_708);
    assert.ok(GOLD_MINE_2026E.tonnes > 3_671 && GOLD_MINE_2026E.tonnes < 3_750);
  });

  it("uses the Silver Institute 2026F mine total", () => {
    assert.equal(SILVER_MINE_2026F.moz, 844.1);
  });

  it("counts a non-leap year as 365 days", () => {
    assert.equal(secondsInUtcYear(2026), 365 * 24 * 60 * 60);
  });

  it("paces a few ounces of gold and tens of silver each second", () => {
    const g = goldOzPerSecond(2026);
    const s = silverOzPerSecond(2026);
    assert.ok(g > 3.5 && g < 4.1);
    assert.ok(s > 25 && s < 28);
  });

  it("is near zero at the UTC new year", () => {
    const ytd = ytdMineOunces(new Date("2026-01-01T00:00:00.000Z"));
    assert.ok(ytd.goldOz < 1);
    assert.ok(ytd.silverOz < 10);
  });

  it("reaches the annual totals at the last UTC second of the year", () => {
    const ytd = ytdMineOunces(new Date("2026-12-31T23:59:59.000Z"));
    assert.ok(Math.abs(ytd.goldOz - goldOzPerYear()) < goldOzPerSecond(2026) * 2);
    assert.ok(Math.abs(ytd.silverOz - silverOzPerYear()) < silverOzPerSecond(2026) * 2);
  });
});
