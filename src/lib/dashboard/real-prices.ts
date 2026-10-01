/** Gold and silver history in nominal and today's dollars, the gold–silver ratio, and past highs. Facts only. */
import { DESK_REFRESHED } from "./desk-refreshed.ts";
import { MONEY_PATH } from "./money-path.ts";

export type Metal = "gold" | "silver";
export type YearPoint = { x: number; y: number };

export const CPI_NOW = { value: DESK_REFRESHED.metrics.cpi.value, asOf: DESK_REFRESHED.metrics.cpi.asOf };

export function toTodaysDollars(price: number, cpiThen: number, cpiNow = CPI_NOW.value) {
  return price * (cpiNow / cpiThen);
}

export type Latest = { gold: number; silver: number };

const LAST_YEAR = MONEY_PATH[MONEY_PATH.length - 1].year;

/** Yearly rows with the in-progress year replaced by the live print when one is given. */
function rows(latest?: Latest) {
  if (!latest || !(latest.gold > 0) || !(latest.silver > 0)) return MONEY_PATH;
  return MONEY_PATH.map((r) => (r.year === LAST_YEAR ? { ...r, gold: latest.gold, silver: latest.silver } : r));
}

/** Annual average price per year (latest year = latest print, not a full-year average). */
export function nominalSeries(metal: Metal, latest?: Latest): YearPoint[] {
  return rows(latest).map((r) => ({ x: r.year, y: r[metal] }));
}

export function realSeries(metal: Metal, latest?: Latest, cpiNow = CPI_NOW.value): YearPoint[] {
  return rows(latest).map((r) => ({ x: r.year, y: toTodaysDollars(r[metal], r.cpi, cpiNow) }));
}

export function ratioSeries(latest?: Latest): YearPoint[] {
  return rows(latest).map((r) => ({ x: r.year, y: r.gold / r.silver }));
}

export function ratioRange(latest?: Latest) {
  const s = ratioSeries(latest);
  const lo = s.reduce((a, b) => (b.y < a.y ? b : a));
  const hi = s.reduce((a, b) => (b.y > a.y ? b : a));
  const avg = s.reduce((a, b) => a + b.y, 0) / s.length;
  return { lo, hi, avg, from: s[0].x, to: s[s.length - 1].x };
}

/** US Coinage Act ratios: 15 : 1 (1792) and 16 : 1 (1834). History, not a target. */
export const MINT_RATIOS = [
  { y: 16, label: "16 : 1 · US mint 1834" },
  { y: 15, label: "15 : 1 · US mint 1792", below: true },
] as const;

export type PastHigh = {
  metal: Metal;
  usd: number;
  when: string;
  where: string;
  cpiThen: number;
  m2Then: number;
};

/** London fixes. CPI = FRED CPIAUCSL, M2 = FRED M2SL, month of the print. */
export const PAST_HIGHS: PastHigh[] = [
  { metal: "gold", usd: 850, when: "21 Jan 1980", where: "London", cpiThen: 78.0, m2Then: 1482.7 },
  { metal: "gold", usd: 1895, when: "5 Sep 2011", where: "London PM fix", cpiThen: 226.597, m2Then: 9553.3 },
  { metal: "silver", usd: 49.45, when: "18 Jan 1980", where: "London fix", cpiThen: 78.0, m2Then: 1482.7 },
  { metal: "silver", usd: 48.7, when: "28 Apr 2011", where: "London fix", cpiThen: 224.093, m2Then: 9033.6 },
];
