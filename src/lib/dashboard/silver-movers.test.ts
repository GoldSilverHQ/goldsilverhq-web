import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { rankSilverMovers, type MetricRow } from "./silver-movers.ts";

const row = (ticker: string, as_of_date: string | null, ytd_pct: number | null): MetricRow => ({
  ticker,
  name: `${ticker} Co `,
  as_of_date,
  ytd_pct,
});

describe("rankSilverMovers", () => {
  it("ranks only the dominant session, best year-to-date change first", () => {
    const out = rankSilverMovers([
      row("A", "2026-09-29", 1),
      row("B", "2026-09-29", 3),
      row("C", "2026-09-30", 9),
      row("D", "2026-09-29", null),
      row("E", "2026-09-29", -2),
      row("F", "2026-09-29", 2),
    ]);
    assert.equal(out?.asOf, "2026-09-29");
    assert.deepEqual(
      out?.rows.map((r) => r.ticker),
      ["B", "F", "A", "E"],
    );
    assert.equal(out?.rows[0].name, "B Co");
  });

  it("caps at five and returns null without usable rows", () => {
    const rows = Array.from({ length: 8 }, (_, i) => row(`T${i}`, "2026-09-29", i));
    assert.equal(rankSilverMovers(rows)?.rows.length, 5);
    assert.equal(rankSilverMovers([row("X", null, 1), row("Y", "2026-09-29", null)]), null);
  });
});
