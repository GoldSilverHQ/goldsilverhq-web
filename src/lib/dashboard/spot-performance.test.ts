import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { fmtDayMonYear } from "./dates.ts";
import { fmtSignedPct, pctToneClass } from "./pct.ts";
import { computePerformance, type DailyClose } from "./spot-performance.ts";

/** Weekday closes from `from` to `to`. */
function weekdays(from: string, to: string, value: (date: string, i: number) => number) {
  const out: DailyClose[] = [];
  for (
    let t = Date.parse(`${from}T00:00:00Z`), i = 0;
    t <= Date.parse(`${to}T00:00:00Z`);
    t += 86_400_000
  ) {
    const d = new Date(t);
    if (d.getUTCDay() === 0 || d.getUTCDay() === 6) continue;
    const date = d.toISOString().slice(0, 10);
    out.push({ date, close: value(date, i++) });
  }
  return out;
}

describe("computePerformance", () => {
  it("uses the close on or just before each lookback date", () => {
    const fixed: Record<string, number> = {
      "2026-09-24": 90,
      "2026-08-31": 80,
      "2026-09-01": 75,
      "2025-12-31": 50,
      "2025-10-01": 40,
      // 3Y target 2023-10-01 is a Sunday, so Friday's close is the reference.
      "2023-09-29": 25,
    };
    const series = weekdays("2023-09-01", "2026-10-01", (d) => fixed[d] ?? 60);
    series[series.length - 1].close = 100;
    const p = computePerformance(series)!;
    assert.equal(p.asOf, "2026-10-01");
    assert.ok(Math.abs(p.changes["1W"]! - (100 / 90 - 1) * 100) < 1e-9);
    assert.ok(Math.abs(p.changes["1M"]! - (100 / 75 - 1) * 100) < 1e-9);
    assert.equal(p.changes.YTD, 100);
    assert.equal(p.changes["1Y"], 150);
    assert.equal(p.changes["3Y"], 300);
  });

  it("returns null for periods the history cannot reach", () => {
    const series = weekdays("2025-06-02", "2026-10-01", () => 10);
    const p = computePerformance(series)!;
    assert.equal(p.changes["3Y"], null);
    assert.equal(p.changes["1Y"], 0);
  });

  it("treats a long gap before the target as missing, not as a stale reference", () => {
    const series = [
      { date: "2025-01-02", close: 10 },
      { date: "2026-09-30", close: 11 },
      { date: "2026-10-01", close: 12 },
    ];
    const p = computePerformance(series)!;
    assert.equal(p.changes["1W"], null);
    assert.equal(p.changes["1Y"], null);
    assert.equal(p.changes.YTD, null);
    assert.equal(computePerformance([]), null);
  });

  it("clamps month-end lookbacks", () => {
    const series = weekdays("2026-02-02", "2026-03-31", () => 50);
    series[series.length - 1].close = 55;
    assert.ok(Math.abs(computePerformance(series)!.changes["1M"]! - 10) < 1e-9);
  });
});

describe("signed percent", () => {
  it("keeps a sign and matches the colour to the rounded value", () => {
    assert.equal(fmtSignedPct(3.456), "+3.46%");
    assert.equal(fmtSignedPct(-0.131), "\u22120.13%");
    assert.equal(fmtSignedPct(-0.004), "0.00%");
    assert.equal(pctToneClass(-0.004), "text-muted");
    assert.equal(fmtSignedPct(-0.04, 1), "0.0%");
    assert.equal(pctToneClass(173.61, 1), "text-up");
    assert.equal(pctToneClass(-2.7, 1), "text-down");
  });
});

describe("fmtDayMonYear", () => {
  it("uses 3-letter English months and no zero padding", () => {
    assert.equal(fmtDayMonYear("2026-09-30"), "30 Sep 2026");
    assert.equal(fmtDayMonYear("2026-10-01"), "1 Oct 2026");
    assert.equal(fmtDayMonYear("bad"), "bad");
  });
});
