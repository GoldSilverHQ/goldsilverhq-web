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

/**
 * Silver Institute / Metals Focus, World Silver Survey 2026 (calendar 2025).
 * Identifiable bullion is the year-end total in that survey (London, CME, SGE, SHFE, other).
 * officialMoz is net official-sector sales, not a central-bank stock.
 * marketBalanceMoz is the survey's full balance (supply including hedging and official sales).
 */
export const SILVER_2025 = {
  asOf: "2025",
  mineMoz: 846.6,
  recycleMoz: 197.6,
  industrialMoz: 657.4,
  totalDemandMoz: 1_130.6,
  coinAndBarMoz: 217.7,
  identifiableMoz: 1_394.5,
  officialMoz: 1.5,
  marketBalanceMoz: -40.3,
} as const;

/** End-2025 global silver ETP holdings, same survey. 1,317.6 Moz printed as 40,982 t. */
export const SILVER_ETP_2025 = {
  asOf: "2025-12-31",
  moz: 1_317.6,
  tonnes: 40_982,
} as const;

/**
 * LBMA July 2026 daily-average clearing paired with end-July London vault gold.
 * Clearing page is the latest month; August vaults are a later stock with no August clearing yet.
 */
export const LBMA_JUL_2026 = {
  asOf: "2026-07",
  goldClearingDailyMoz: 15.8,
  vaultGoldT: 9_534,
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
  return SILVER_2025.totalDemandMoz - SILVER_2025.coinAndBarMoz;
}

export function silverVisibleMonths() {
  return SILVER_2025.identifiableMoz / (silverFabricationMoz() / 12);
}

export function silverSupplyGapT() {
  const supply = SILVER_2025.mineMoz + SILVER_2025.recycleMoz;
  return (supply - SILVER_2025.totalDemandMoz) * MOZ_TO_T;
}

export function silverOfficialT() {
  return SILVER_2025.officialMoz * MOZ_TO_T;
}

export function silverIdentifiableMoz() {
  return SILVER_2025.identifiableMoz;
}

export function investmentSilverOzPerPerson() {
  return (SILVER_2025.identifiableMoz * 1e6) / WORLD_POP;
}

/** Daily average clearing ounces ÷ end-month vault ounces. Not annualised. */
export function lbmaGoldClearingRatio() {
  const vaultOz = LBMA_JUL_2026.vaultGoldT * TROY_OZ_PER_TONNE;
  return (LBMA_JUL_2026.goldClearingDailyMoz * 1e6) / vaultOz;
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
