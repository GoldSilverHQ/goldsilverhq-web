export type Metal = "gold" | "silver";
export type MetricId = "production" | "reserves";

export type MetricTab = {
  id: MetricId;
  label: string;
  unit: string;
  hint: string;
};

export const METRIC_TABS: MetricTab[] = [
  {
    id: "production",
    label: "Production",
    unit: "tonnes / year",
    hint: "Mine production. Draft placeholders — swap in your series.",
  },
  {
    id: "reserves",
    label: "Reserves",
    unit: "tonnes",
    hint: "Gold: official holdings. Silver: identified mineral reserves. Draft placeholders.",
  },
];

/** ISO 3166-1 numeric ids, zero-padded to match world-atlas. Values in tonnes. null = no figure yet. */
export type MetricTable = Record<string, number | null>;

export const METRICS: Record<Metal, Record<MetricId, MetricTable>> = {
  gold: {
    production: {
      "156": 370,
      "036": 310,
      "643": 280,
      "124": 200,
      "840": 170,
      "288": 140,
      "484": 130,
      "860": 120,
      "360": 110,
      "604": 100,
      "398": 90,
      "710": 90,
      "076": 80,
      "466": 70,
      "854": 70,
      "170": 60,
      "598": 50,
      "504": 50,
      "834": 50,
      "729": 50,
    },
    reserves: {
      "840": 8133,
      "276": 3352,
      "380": 2452,
      "250": 2437,
      "643": 2333,
      "156": 2264,
      "756": 1040,
      "392": 846,
      "356": 840,
      "528": 612,
      "158": 422,
      "792": 440,
      "616": 359,
      "620": 383,
      "860": 365,
      "682": 323,
      "826": 310,
      "724": 282,
      "040": 280,
      "056": 227,
    },
  },
  silver: {
    production: {
      "484": 6000,
      "156": 3500,
      "604": 3100,
      "152": 1400,
      "036": 1300,
      "616": 1300,
      "643": 1200,
      "068": 1200,
      "840": 1000,
      "032": 800,
      "398": 500,
      "124": 400,
      "104": 300,
      "752": 300,
      "504": 250,
    },
    reserves: {
      "604": 120000,
      "036": 90000,
      "616": 61000,
      "643": 45000,
      "156": 41000,
      "484": 37000,
      "152": 26000,
      "840": 23000,
      "068": 22000,
      "124": 7000,
      "032": 6500,
    },
  },
};

export function metricValue(metal: Metal, metric: MetricId, id: string): number | null {
  const v = METRICS[metal][metric][id];
  return v === undefined ? null : v;
}

export function metricMax(metal: Metal, metric: MetricId): number {
  const vals = Object.values(METRICS[metal][metric]).filter((n): n is number => n != null);
  return Math.max(1, ...vals);
}

export function formatTonnes(n: number | null): string {
  if (n == null) return "—";
  if (n >= 1000) return `${n.toLocaleString("en-US")} t`;
  return `${n} t`;
}
