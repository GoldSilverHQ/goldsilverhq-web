import { createServerFn } from "@tanstack/react-start";

export type DailyClose = { date: string; close: number };
export type PerfPeriod = "1W" | "1M" | "YTD" | "1Y" | "3Y";
export const PERF_PERIODS: PerfPeriod[] = ["1W", "1M", "YTD", "1Y", "3Y"];

export type MetalPerformance = {
  asOf: string;
  close: number;
  changes: Record<PerfPeriod, number | null>;
};
export type SpotPerformance = {
  gold: MetalPerformance | null;
  silver: MetalPerformance | null;
  source: string;
};

/** A reference close older than this before its target date is treated as a data gap. */
const MAX_GAP_DAYS = 7;

function shiftDate(iso: string, { days = 0, months = 0, years = 0 }) {
  const [y, m, d] = iso.split("-").map(Number);
  const targetMonth = m - 1 + months;
  const base = new Date(Date.UTC(y + years, targetMonth, 1));
  const lastDay = new Date(Date.UTC(base.getUTCFullYear(), base.getUTCMonth() + 1, 0)).getUTCDate();
  base.setUTCDate(Math.min(d, lastDay) + days);
  return base.toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string) {
  return (Date.parse(`${b}T00:00:00Z`) - Date.parse(`${a}T00:00:00Z`)) / 86_400_000;
}

/** Last close on or before `target`, or null when the series has no close within the gap limit. */
function closeOnOrBefore(series: DailyClose[], target: string) {
  for (let i = series.length - 1; i >= 0; i--) {
    if (series[i].date <= target)
      return daysBetween(series[i].date, target) <= MAX_GAP_DAYS ? series[i] : null;
  }
  return null;
}

/** `series` must be ascending by date with one close per session date. */
export function computePerformance(series: DailyClose[]): MetalPerformance | null {
  const latest = series.at(-1);
  if (!latest || !(latest.close > 0)) return null;
  const targets: Record<PerfPeriod, string> = {
    "1W": shiftDate(latest.date, { days: -7 }),
    "1M": shiftDate(latest.date, { months: -1 }),
    YTD: `${Number(latest.date.slice(0, 4)) - 1}-12-31`,
    "1Y": shiftDate(latest.date, { years: -1 }),
    "3Y": shiftDate(latest.date, { years: -3 }),
  };
  const changes = {} as Record<PerfPeriod, number | null>;
  for (const p of PERF_PERIODS) {
    const ref = closeOnOrBefore(series.slice(0, -1), targets[p]);
    changes[p] = ref && ref.close > 0 ? (latest.close / ref.close - 1) * 100 : null;
  }
  return { asOf: latest.date, close: latest.close, changes };
}

async function yahooDailyCloses(symbol: string): Promise<DailyClose[]> {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=5y&interval=1d`;
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`yahoo ${symbol} ${res.status}`);
  const json = (await res.json()) as {
    chart: {
      result: {
        meta?: { exchangeTimezoneName?: string };
        timestamp?: number[];
        indicators: { quote: { close?: (number | null)[] }[] };
      }[];
    };
  };
  const result = json.chart.result[0];
  const tz = result.meta?.exchangeTimezoneName || "America/New_York";
  const toDate = new Intl.DateTimeFormat("en-CA", {
    timeZone: tz,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const ts = result.timestamp ?? [];
  const close = result.indicators.quote[0]?.close ?? [];
  const byDate = new Map<string, number>();
  for (let i = 0; i < ts.length; i++) {
    const v = close[i];
    if (v != null && Number.isFinite(v) && v > 0)
      byDate.set(toDate.format(new Date(ts[i] * 1000)), v);
  }
  return [...byDate]
    .map(([date, v]) => ({ date, close: v }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

const TTL_MS = 30 * 60 * 1000;
let cache: { at: number; value: SpotPerformance } | null = null;

export const getSpotPerformance = createServerFn({ method: "GET" }).handler(
  async (): Promise<SpotPerformance> => {
    if (cache && Date.now() - cache.at < TTL_MS) return cache.value;
    const [gold, silver] = await Promise.all([
      yahooDailyCloses("GC=F").then(computePerformance, () => null),
      yahooDailyCloses("SI=F").then(computePerformance, () => null),
    ]);
    const value: SpotPerformance = {
      gold: gold ?? cache?.value.gold ?? null,
      silver: silver ?? cache?.value.silver ?? null,
      source: "COMEX front-month daily closes (Yahoo GC=F, SI=F)",
    };
    if (gold && silver) cache = { at: Date.now(), value };
    return value;
  },
);
