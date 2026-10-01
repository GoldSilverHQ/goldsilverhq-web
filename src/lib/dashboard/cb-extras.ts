/** Central banks tab: top holders, gold as % of reserves, US Treasury gold, and a dated timeline. Facts only. */
import extras from "./cb-extras.json" with { type: "json" };

export type CbHolder = {
  id: string;
  name: string;
  kind: "country" | "institution";
  tonnes: number;
  asOf: string | null;
  hold: Record<string, number>;
};

export type ShareSeries = { id: string; name: string; share: Record<string, number> };

export const CB_HOLDERS_COMPILED = extras.holders as CbHolder[];
export const CB_SHARE_SERIES = extras.shareSeries as ShareSeries[];
export const CB_WORLD_SHARE = extras.worldShare as Record<string, number>;
export const CB_SHARE_LATEST_YEAR: number = extras.shareLatestYear;

export function shareFor(id: string, year = CB_SHARE_LATEST_YEAR): number | null {
  const s = CB_SHARE_SERIES.find((r) => r.id === id);
  const v = s?.share[String(year)];
  return v == null ? null : v;
}

/** Change in reported tonnes between two year-ends; null when either year is missing. */
export function holdingChange(h: CbHolder, from: number, to: number): number | null {
  const a = h.hold[String(from)];
  const b = h.hold[String(to)];
  return a == null || b == null ? null : b - a;
}

/**
 * US Treasury-owned gold, Fiscal Data "U.S. Treasury-Owned Gold" (all locations, incl. working stock).
 * Book value is the statutory $42.2222 per fine troy ounce set in 1973.
 */
export const US_TREASURY_GOLD = {
  oz: 261_498_926.241,
  bookPerOz: 42.2222,
  bookUsd: 11_041_059_957.9,
  asOf: "2026-08-31",
  source: "US Treasury Fiscal Data, U.S. Treasury-Owned Gold",
} as const;

export const CB_TIMELINE: { year: string; text: string }[] = [
  { year: "1971", text: "US closes the gold window (15 Aug). Official gold stops backing the dollar." },
  { year: "1999", text: "First Central Bank Gold Agreement caps European sales at 400 t a year." },
  { year: "2010", text: "Central banks as a group turn net buyers after two decades of net selling (WGC)." },
  { year: "2019", text: "The fourth and last Central Bank Gold Agreement lapses." },
  { year: "2022–24", text: "Three years of net official buying above 1,000 t each (WGC)." },
];
