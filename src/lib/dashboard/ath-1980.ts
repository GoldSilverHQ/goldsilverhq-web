import { createServerFn } from "@tanstack/react-start";
import { refreshedAthFallback } from "./desk-refreshed.ts";

/** London PM / COMEX prints, January 1980. */
export const ATH_1980 = {
  gold: { usd: 850, when: "21 Jan 1980" },
  silver: { usd: 49.45, when: "18 Jan 1980" },
  cpiThen: 78.0,
  m2Then: 1482.7,
} as const;

const tip = refreshedAthFallback();
const FALLBACK = {
  cpi: tip.cpi,
  m2: tip.m2,
  cpiDate: tip.cpiDate,
  m2Date: tip.m2Date,
  gold: 4456,
  silver: 66.5,
};

async function fredLast(id: string): Promise<{ date: string; value: number }> {
  const res = await fetch(`https://fred.stlouisfed.org/graph/fredgraph.csv?id=${id}`);
  if (!res.ok) throw new Error(`fred ${id}`);
  const lines = (await res.text()).trim().split("\n");
  for (let i = lines.length - 1; i >= 1; i--) {
    const [date, raw] = lines[i].split(",");
    const value = Number(raw);
    if (date && Number.isFinite(value)) return { date: date.slice(0, 7), value };
  }
  throw new Error(`fred empty ${id}`);
}

export const getAthNow = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const [cpi, m2, gold, silver] = await Promise.all([
      fredLast("CPIAUCSL"),
      fredLast("M2SL"),
      fetch("https://api.gold-api.com/price/XAU").then((r) => r.json() as Promise<{ price: number }>),
      fetch("https://api.gold-api.com/price/XAG").then((r) => r.json() as Promise<{ price: number }>),
    ]);
    return {
      cpi: cpi.value,
      m2: m2.value,
      cpiDate: cpi.date,
      m2Date: m2.date,
      gold: gold.price,
      silver: silver.price,
    };
  } catch {
    return FALLBACK;
  }
});

export function adjAth(print: number, then: number, now: number) {
  return print * (now / then);
}
