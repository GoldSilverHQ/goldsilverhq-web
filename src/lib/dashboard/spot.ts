import { createServerFn } from "@tanstack/react-start";

export type PricePoint = { t: number; v: number };

export type SpotLite = {
  gold: number;
  silver: number;
  ratio: number;
  asOf?: string;
  source?: string;
};

export type SpotDesk = {
  gold: number;
  silver: number;
  ratio: number;
  updatedAt: string;
  goldSeries: PricePoint[];
  silverSeries: PricePoint[];
  ratioSeries: PricePoint[];
  source: string;
};

type SpotPair = { gold: number; silver: number; asOf?: string; source: string };

async function yahooCloses(symbol: string, range = "5y", interval = "1d"): Promise<PricePoint[]> {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=${range}&interval=${interval}`;
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });
  if (!res.ok) throw new Error(`yahoo ${symbol} ${res.status}`);
  const json = (await res.json()) as {
    chart: {
      result: {
        meta?: { regularMarketPrice?: number; regularMarketTime?: number };
        timestamp: number[];
        indicators: { quote: { close: (number | null)[] }[] };
      }[];
    };
  };
  const result = json.chart.result[0];
  const ts = result.timestamp ?? [];
  const close = result.indicators.quote[0].close ?? [];
  const out: PricePoint[] = [];
  for (let i = 0; i < ts.length; i++) {
    const v = close[i];
    if (v != null && Number.isFinite(v)) out.push({ t: ts[i], v });
  }
  return out;
}

/** Live ~15m print from COMEX continuous futures (no API key). */
async function spotFromYahoo(): Promise<SpotPair> {
  const [goldPts, silverPts] = await Promise.all([
    yahooCloses("GC=F", "1d", "15m"),
    yahooCloses("SI=F", "1d", "15m"),
  ]);
  const gold = goldPts.at(-1);
  const silver = silverPts.at(-1);
  if (!gold || !silver || !(gold.v > 0) || !(silver.v > 0)) {
    throw new Error("yahoo 15m empty");
  }
  return {
    gold: gold.v,
    silver: silver.v,
    asOf: new Date(gold.t * 1000).toISOString(),
    source: "yahoo-15m",
  };
}

function alignRatio(gold: PricePoint[], silver: PricePoint[]): PricePoint[] {
  const sm = new Map(silver.map((p) => [p.t, p.v]));
  const out: PricePoint[] = [];
  for (const g of gold) {
    const s = sm.get(g.t);
    if (s && s > 0) out.push({ t: g.t, v: g.v / s });
  }
  return out;
}

/** Optional cache from goldenagestocks — only if as_of is fresh (Marketstack feed is gone). */
async function spotFromGasFresh(): Promise<SpotPair | null> {
  const { gas, gasConfigured } = await import("@/lib/data/rest");
  if (!gasConfigured()) return null;
  const maxAgeMs = 36 * 60 * 60 * 1000;

  const freshEnough = (asOf?: string) => {
    if (!asOf) return false;
    const t = Date.parse(asOf.length <= 10 ? `${asOf}T12:00:00Z` : asOf);
    return Number.isFinite(t) && Date.now() - t <= maxAgeMs;
  };

  try {
    const rows = await gas<{ ticker: string; close: number; as_of_date?: string }[]>(
      "metrics?ticker=in.(XAU,XAG)&select=ticker,close,as_of_date",
    );
    const gold = rows.find((r) => r.ticker === "XAU");
    const silver = rows.find((r) => r.ticker === "XAG");
    const asOf = gold?.as_of_date || silver?.as_of_date;
    if (gold?.close && silver?.close && gold.close > 0 && silver.close > 0 && freshEnough(asOf)) {
      return { gold: gold.close, silver: silver.close, asOf, source: "gas-metrics" };
    }
  } catch {
    /* try bundle */
  }
  try {
    const rows = await gas<{ name: unknown }[]>("tickers?ticker=eq._METALS&select=name");
    const raw = rows[0]?.name;
    const blob = (typeof raw === "string" ? JSON.parse(raw) : raw) as {
      gold?: { price?: number; as_of?: string };
      silver?: { price?: number };
      as_of?: string;
    } | null;
    const gold = blob?.gold?.price;
    const silver = blob?.silver?.price;
    const asOf = String(blob?.gold?.as_of || blob?.as_of || "");
    if (gold && silver && gold > 0 && silver > 0 && freshEnough(asOf)) {
      return { gold, silver, asOf: asOf.slice(0, 10), source: "gas-metals" };
    }
  } catch {
    return null;
  }
  return null;
}

async function spotFromGoldApi(): Promise<SpotPair> {
  const [gold, silver] = await Promise.all([
    fetch("https://api.gold-api.com/price/XAU").then((r) => {
      if (!r.ok) throw new Error("spot gold");
      return r.json() as Promise<{ price: number; updatedAt?: string }>;
    }),
    fetch("https://api.gold-api.com/price/XAG").then((r) => {
      if (!r.ok) throw new Error("spot silver");
      return r.json() as Promise<{ price: number; updatedAt?: string }>;
    }),
  ]);
  return {
    gold: gold.price,
    silver: silver.price,
    asOf: gold.updatedAt || silver.updatedAt,
    source: "gold-api",
  };
}

/**
 * Live spot for ticker + desk. Marketstack automation is retired.
 * Prefer Yahoo 15m COMEX → gold-api.com → fresh GAS cache only.
 */
export async function resolveSpot(): Promise<SpotPair> {
  try {
    return await spotFromYahoo();
  } catch {
    /* next */
  }
  try {
    return await spotFromGoldApi();
  } catch {
    /* next */
  }
  const gas = await spotFromGasFresh();
  if (gas) return gas;
  throw new Error("all spot sources failed");
}

export const getSpotLite = createServerFn({ method: "GET" }).handler(async (): Promise<SpotLite> => {
  const spot = await resolveSpot();
  return {
    gold: spot.gold,
    silver: spot.silver,
    ratio: spot.silver ? spot.gold / spot.silver : 0,
    asOf: spot.asOf,
    source: spot.source,
  };
});

export const getSpotDesk = createServerFn({ method: "GET" }).handler(async () => {
  const [spot, goldSeries, silverSeries] = await Promise.all([
    resolveSpot(),
    yahooCloses("GC=F").catch(() => [] as PricePoint[]),
    yahooCloses("SI=F").catch(() => [] as PricePoint[]),
  ]);

  return {
    gold: spot.gold,
    silver: spot.silver,
    ratio: spot.silver ? spot.gold / spot.silver : 0,
    updatedAt: new Date().toISOString(),
    goldSeries,
    silverSeries,
    ratioSeries: alignRatio(goldSeries, silverSeries),
    source: `Spot: ${spot.source} (Yahoo 15m COMEX → gold-api → fresh GAS). Charts: COMEX daily.`,
  } satisfies SpotDesk;
});
