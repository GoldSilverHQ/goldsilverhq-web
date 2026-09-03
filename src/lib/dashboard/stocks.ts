import { TROY_OZ_PER_TONNE, officialMtmUsd } from "./clock-prints.ts";

/** Million troy ounces → metric tonnes. */
export const MOZ_TO_T = 1_000_000 / TROY_OZ_PER_TONNE;

export const WORLD_POP = 8.2e9;

/** World Gold Council, above-ground stock, end-Q2 2026. Rounded to 100 t. */
export const WGC_STOCK = {
  asOf: "2026-06-30",
  aboveGroundT: 222_600,
  jewelryT: 99_700,
  officialT: 39_000,
  barsCoinsT: 47_800,
  etfT: 4_000,
  otcT: 10_000,
  otherT: 22_100,
} as const;

export const WGC_MINE_2025 = {
  asOf: "2025",
  mineT: 3_671.6,
  officialNetT: 863.3,
} as const;

/** USGS Mineral Commodity Summaries 2026, world mine 2025e. */
export const USGS_MINE_2025 = {
  asOf: "2025",
  goldT: 3_300,
  silverT: 26_000,
} as const;

/** WGC Gold Demand Trends H1 2026 — same vintage as the desk world headline. */
export const CB_YTD_2026 = {
  asOf: "2026-06",
  tonnes: 345.9,
} as const;

/** IMF WEO gross public debt, 2025, as compiled by Visual Capitalist. */
export const IMF_GOV_DEBT = {
  asOf: "2025",
  usd: 111e12,
} as const;

/** Silver Institute / Metals Focus, World Silver Survey 2025 (calendar 2024). */
export const SILVER_2024 = {
  asOf: "2024",
  mineMoz: 819.7,
  recycleMoz: 193.9,
  industrialMoz: 680.5,
  totalDemandMoz: 1_164.1,
  coinAndBarMoz: 190.9,
  identifiableMoz: 1_239.2,
  officialMoz: 1.5,
} as const;

export function wgcShare(tonnes: number) {
  return (tonnes / WGC_STOCK.aboveGroundT) * 100;
}

export function mineOutputRatio() {
  return USGS_MINE_2025.silverT / USGS_MINE_2025.goldT;
}

export function cbTakeOfMine() {
  return WGC_MINE_2025.officialNetT / WGC_MINE_2025.mineT;
}

export function investmentGoldGramsPerPerson() {
  const t = WGC_STOCK.barsCoinsT + WGC_STOCK.etfT;
  return (t * 1e6) / WORLD_POP;
}

export function silverFabricationMoz() {
  return SILVER_2024.totalDemandMoz - SILVER_2024.coinAndBarMoz;
}

export function silverVisibleMonths() {
  return SILVER_2024.identifiableMoz / (silverFabricationMoz() / 12);
}

export function silverSupplyGapT() {
  const supply = SILVER_2024.mineMoz + SILVER_2024.recycleMoz;
  return (supply - SILVER_2024.totalDemandMoz) * MOZ_TO_T;
}

export function silverOfficialT() {
  return SILVER_2024.officialMoz * MOZ_TO_T;
}

export function silverIdentifiableMoz() {
  return SILVER_2024.identifiableMoz;
}

export function investmentSilverOzPerPerson() {
  return (SILVER_2024.identifiableMoz * 1e6) / WORLD_POP;
}

export function coverPct(tonnes: number, spotPerOz: number, debtUsd = IMF_GOV_DEBT.usd) {
  if (!(spotPerOz > 0) || !(debtUsd > 0)) return null;
  return officialMtmUsd(tonnes, spotPerOz) / debtUsd;
}

/** Local gold price vs a dated start. fx is USD per 1 local (EUR) or local per 1 USD (JPY, CNY). */
export function lostVsStart(nowLocal: number, startLocal: number) {
  if (!(nowLocal > 0) || !(startLocal > 0)) return null;
  return 1 - startLocal / nowLocal;
}

export const FX_START = {
  eur: { localGold: 243.6, year: 1999, note: "4 Jan 1999 first euro session (~$288 / 1.18)." },
  jpy: { localGold: 14_623, year: 1971, note: "¥360 × $40.62 at the gold window." },
  cny: { localGold: 92.1, year: 1971, note: "Official 2.267 yuan/$ × $40.62. Not a market rate." },
} as const;
