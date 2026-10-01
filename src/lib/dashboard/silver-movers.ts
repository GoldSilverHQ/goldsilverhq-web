import { createServerFn } from "@tanstack/react-start";

export type MetricRow = {
  ticker: string;
  name: string | null;
  as_of_date: string | null;
  day_pct: number | null;
};

export type SilverMover = { ticker: string; name: string; dayPct: number };
export type SilverMovers = { asOf: string; rows: SilverMover[] };

/**
 * The last trading day is the most common as_of_date among producers, so a
 * ticker whose feed lagged (or ran a day ahead on another exchange) does not
 * mix two sessions into one ranking.
 */
export function rankSilverMovers(rows: MetricRow[], limit = 5): SilverMovers | null {
  const counts = new Map<string, number>();
  for (const r of rows) {
    if (r.as_of_date && Number.isFinite(r.day_pct))
      counts.set(r.as_of_date, (counts.get(r.as_of_date) ?? 0) + 1);
  }
  let asOf = "";
  let best = 0;
  for (const [date, n] of counts) {
    if (n > best || (n === best && date > asOf)) {
      asOf = date;
      best = n;
    }
  }
  if (!asOf) return null;
  const ranked = rows
    .filter((r) => r.as_of_date === asOf && Number.isFinite(r.day_pct))
    .map((r) => ({
      ticker: r.ticker,
      name: (r.name ?? r.ticker).trim(),
      dayPct: Number(r.day_pct),
    }))
    .sort((a, b) => b.dayPct - a.dayPct)
    .slice(0, limit);
  return ranked.length ? { asOf, rows: ranked } : null;
}

const TTL_MS = 15 * 60 * 1000;
let cache: { at: number; value: SilverMovers | null } | null = null;

export const getSilverMovers = createServerFn({ method: "GET" }).handler(
  async (): Promise<SilverMovers | null> => {
    if (cache && Date.now() - cache.at < TTL_MS) return cache.value;
    const { gas, gasConfigured } = await import("@/lib/data/rest");
    if (!gasConfigured()) return null;
    try {
      const rows = await gas<MetricRow[]>(
        "metrics?category=eq.producers&select=ticker,name,as_of_date,day_pct&limit=200",
      );
      const value = rankSilverMovers(rows);
      cache = { at: Date.now(), value };
      return value;
    } catch {
      return cache?.value ?? null;
    }
  },
);
