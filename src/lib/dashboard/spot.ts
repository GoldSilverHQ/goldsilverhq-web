import { createServerFn } from "@tanstack/react-start";

export type PricePoint = { t: number; v: number };

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

async function yahooCloses(symbol: string): Promise<PricePoint[]> {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=5y&interval=1d`;
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });
  if (!res.ok) throw new Error(`yahoo ${symbol} ${res.status}`);
  const json = (await res.json()) as {
    chart: {
      result: {
        timestamp: number[];
        indicators: { quote: { close: (number | null)[] }[] };
      }[];
    };
  };
  const result = json.chart.result[0];
  const ts = result.timestamp;
  const close = result.indicators.quote[0].close;
  const out: PricePoint[] = [];
  for (let i = 0; i < ts.length; i++) {
    const v = close[i];
    if (v != null && Number.isFinite(v)) out.push({ t: ts[i], v });
  }
  return out;
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

async function spotFromGas(): Promise<{ gold: number; silver: number; asOf?: string } | null> {
  const { gas, gasConfigured } = await import("@/lib/data/rest");
  if (!gasConfigured()) return null;
  try {
    const rows = await gas<{ ticker: string; close: number; as_of_date?: string }[]>(
      "metrics?ticker=in.(XAU,XAG)&select=ticker,close,as_of_date",
    );
    const gold = rows.find((r) => r.ticker === "XAU");
    const silver = rows.find((r) => r.ticker === "XAG");
    if (gold?.close && silver?.close && gold.close > 0 && silver.close > 0) {
      return { gold: gold.close, silver: silver.close, asOf: gold.as_of_date || silver.as_of_date };
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
    if (gold && silver && gold > 0 && silver > 0) {
      return { gold, silver, asOf: String(blob?.gold?.as_of || blob?.as_of || "").slice(0, 10) };
    }
  } catch {
    return null;
  }
  return null;
}

async function spotFromFeed(): Promise<{ gold: number; silver: number; asOf?: string }> {
  const [gold, silver] = await Promise.all([
    fetch("https://api.gold-api.com/price/XAU").then((r) => {
      if (!r.ok) throw new Error("spot gold");
      return r.json() as Promise<{ price: number }>;
    }),
    fetch("https://api.gold-api.com/price/XAG").then((r) => {
      if (!r.ok) throw new Error("spot silver");
      return r.json() as Promise<{ price: number }>;
    }),
  ]);
  return { gold: gold.price, silver: silver.price };
}

export const getSpotLite = createServerFn({ method: "GET" }).handler(async () => {
  const spot = (await spotFromGas()) ?? (await spotFromFeed());
  return {
    gold: spot.gold,
    silver: spot.silver,
    ratio: spot.silver ? spot.gold / spot.silver : 0,
    asOf: typeof (spot as { asOf?: string }).asOf === "string" ? (spot as { asOf?: string }).asOf : undefined,
  };
});

export const getSpotDesk = createServerFn({ method: "GET" }).handler(async () => {
  const [spot, goldSeries, silverSeries] = await Promise.all([
    spotFromGas()
      .then((g) => g ?? spotFromFeed())
      .catch(() => spotFromFeed()),
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
    source: "Spot: goldenagestocks (GAS) when configured, else live metals feed. Charts: COMEX.",
  } satisfies SpotDesk;
});
