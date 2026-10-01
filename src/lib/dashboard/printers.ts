import { createServerFn } from "@tanstack/react-start";
import { DESK_REFRESHED } from "./desk-refreshed.ts";

export type PrinterBook = { value: number; asOf: string; unit: "EUR" | "CNY" | "JPY" | "USD" };
export type FxBook = { eurUsd: number; cnyUsd: number; jpyUsd: number; asOf: string };

export type Printers = {
  usM2: PrinterBook;
  eurM3: PrinterBook;
  cnyM2: PrinterBook;
  jpyM2: PrinterBook;
  fx: FxBook;
  source: "live" | "compiled";
};

const r = DESK_REFRESHED.metrics;

/** China/Japan M2 have no free FRED series; keep the last cited national prints. */
export const COMPILED_PRINTERS: Printers = {
  usM2: { value: r.usM2.bn * 1e9, asOf: r.usM2.asOf, unit: "USD" },
  eurM3: { value: r.eurM3.value, asOf: r.eurM3.asOf, unit: "EUR" },
  cnyM2: { value: 355.51e12, asOf: "2026-07", unit: "CNY" },
  jpyM2: { value: 1_297e12, asOf: "2026-07", unit: "JPY" },
  fx: {
    eurUsd: r.fx.eurUsd,
    cnyUsd: r.fx.cnyUsd,
    jpyUsd: r.fx.jpyUsd,
    asOf: r.fx.asOf.slice(0, 7),
  },
  source: "compiled",
};

async function fredLast(id: string): Promise<{ date: string; value: number }> {
  const res = await fetch(`https://fred.stlouisfed.org/graph/fredgraph.csv?id=${id}`);
  if (!res.ok) throw new Error(`fred ${id}`);
  const lines = (await res.text()).trim().split("\n");
  for (let i = lines.length - 1; i >= 1; i--) {
    const [date, raw] = lines[i].split(",");
    const value = Number(raw);
    if (date && Number.isFinite(value)) return { date: date.slice(0, 10), value };
  }
  throw new Error(`fred empty ${id}`);
}

async function ecbM3(): Promise<PrinterBook> {
  const url =
    "https://data-api.ecb.europa.eu/service/data/BSI/M.U2.N.V.M30.X.1.U2.2300.Z01.E?lastNObservations=1&format=jsondata";
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`ecb ${res.status}`);
  const json = (await res.json()) as {
    dataSets: { series: Record<string, { observations: Record<string, [number]> }> }[];
    structure: { dimensions: { observation: { values: { id: string }[] }[] } };
  };
  const obs = Object.values(json.dataSets[0].series)[0].observations;
  const lastKey = Object.keys(obs).sort((a, b) => Number(a) - Number(b)).at(-1);
  if (!lastKey) throw new Error("ecb empty");
  const millions = obs[lastKey][0];
  const period = json.structure.dimensions.observation[0].values[Number(lastKey)]?.id ?? "2026-07";
  return { value: millions * 1e6, asOf: period, unit: "EUR" };
}

export const getPrinters = createServerFn({ method: "GET" }).handler(async (): Promise<Printers> => {
  try {
    const [usM2, eurM3, eurUsd, cnyUsd, jpyUsd] = await Promise.all([
      fredLast("M2SL"),
      ecbM3(),
      fredLast("DEXUSEU"),
      fredLast("DEXCHUS"),
      fredLast("DEXJPUS"),
    ]);
    const fxAsOf = [eurUsd.date, cnyUsd.date, jpyUsd.date].sort().at(-1) ?? eurUsd.date;
    return {
      usM2: { value: usM2.value * 1e9, asOf: usM2.date.slice(0, 7), unit: "USD" },
      eurM3,
      cnyM2: COMPILED_PRINTERS.cnyM2,
      jpyM2: COMPILED_PRINTERS.jpyM2,
      fx: { eurUsd: eurUsd.value, cnyUsd: cnyUsd.value, jpyUsd: jpyUsd.value, asOf: fxAsOf.slice(0, 7) },
      source: "live",
    };
  } catch {
    return COMPILED_PRINTERS;
  }
});
