import { createServerFn } from "@tanstack/react-start";

export type PrinterBook = { value: number; asOf: string; unit: "EUR" | "CNY" | "JPY" };
export type FxBook = { eurUsd: number; cnyUsd: number; jpyUsd: number; asOf: string };

export type Printers = {
  eurM3: PrinterBook;
  cnyM2: PrinterBook;
  jpyM2: PrinterBook;
  fx: FxBook;
  source: "live" | "compiled";
};

/** PBOC 2026-07 and BOJ 2026-07. FRED’s China/Japan M2 series stopped years ago. */
export const COMPILED_PRINTERS: Printers = {
  eurM3: { value: 17.637718e12, asOf: "2026-07", unit: "EUR" },
  cnyM2: { value: 355.51e12, asOf: "2026-07", unit: "CNY" },
  jpyM2: { value: 1_297e12, asOf: "2026-07", unit: "JPY" },
  fx: { eurUsd: 1.16, cnyUsd: 6.73, jpyUsd: 160, asOf: "2026-08" },
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
    const [eurM3, eurUsd, cnyUsd, jpyUsd] = await Promise.all([
      ecbM3(),
      fredLast("DEXUSEU"),
      fredLast("DEXCHUS"),
      fredLast("DEXJPUS"),
    ]);
    const fxAsOf = [eurUsd.date, cnyUsd.date, jpyUsd.date].sort().at(-1) ?? eurUsd.date;
    return {
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
