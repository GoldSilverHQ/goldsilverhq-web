/**
 * Supply & demand tab: mine output by country (USGS) and the silver market (Silver Institute).
 * Published survey figures only — forecast columns are left out.
 */

/** USGS Mineral Commodity Summaries 2026, mine production 2025 (estimated), metric tons. */
export const USGS_2026 = {
  asOf: "2025",
  source: "USGS Mineral Commodity Summaries 2026 (2025 estimates)",
  gold: {
    worldT: 3_300,
    countries: [
      { name: "China", iso3: "chn", t: 380 },
      { name: "Russia", iso3: "rus", t: 310 },
      { name: "Australia", iso3: "aus", t: 280 },
      { name: "Canada", iso3: "can", t: 200 },
      { name: "United States", iso3: "usa", t: 160 },
      { name: "Ghana", iso3: "gha", t: 150 },
      { name: "Mexico", iso3: "mex", t: 140 },
      { name: "Kazakhstan", iso3: "kaz", t: 130 },
      { name: "Uzbekistan", iso3: "uzb", t: 130 },
      { name: "Peru", iso3: "per", t: 110 },
    ],
  },
  silver: {
    worldT: 26_000,
    countries: [
      { name: "Mexico", iso3: "mex", t: 6_300 },
      { name: "Peru", iso3: "per", t: 3_600 },
      { name: "China", iso3: "chn", t: 3_400 },
      { name: "Bolivia", iso3: "bol", t: 1_500 },
      { name: "Chile", iso3: "chl", t: 1_400 },
      { name: "Poland", iso3: "pol", t: 1_300 },
      { name: "Russia", iso3: "rus", t: 1_200 },
      { name: "United States", iso3: "usa", t: 1_100 },
      { name: "Australia", iso3: "aus", t: 1_000 },
      { name: "Argentina", iso3: "arg", t: 800 },
    ],
  },
} as const;

/** Silver Institute / Metals Focus, World Silver Survey 2026, "Silver Supply and Demand" (million oz). 2026F omitted. */
export const WSS_YEARS = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025] as const;

export const WSS_2026 = {
  source: "Silver Institute / Metals Focus, World Silver Survey 2026",
  mine: [862.7, 850.3, 837.3, 790.3, 825.4, 833.7, 810.7, 823.6, 846.6],
  recycling: [160.9, 163.2, 164.7, 181.5, 191.8, 194.6, 184.6, 194.5, 197.6],
  totalSupply: [1024.7, 1014.7, 1016.9, 981.6, 1018.7, 1030.1, 997.0, 1019.6, 1090.4],
  industrial: [528.0, 525.8, 525.4, 511.9, 564.1, 592.3, 657.1, 679.0, 657.4],
  photovoltaics: [99.3, 87.0, 74.9, 82.8, 88.9, 118.1, 192.7, 197.5, 186.6],
  photography: [32.4, 31.4, 30.7, 26.9, 27.7, 27.7, 27.3, 25.5, 24.2],
  jewelry: [195.0, 201.9, 200.3, 150.2, 181.0, 233.2, 201.7, 205.1, 189.3],
  silverware: [59.4, 67.1, 61.3, 31.2, 40.7, 73.5, 55.1, 53.5, 42.1],
  coinBar: [155.5, 166.1, 188.1, 209.0, 285.3, 339.5, 244.2, 190.9, 217.7],
  totalDemand: [971.5, 999.7, 1005.8, 929.0, 1102.4, 1284.1, 1197.0, 1157.4, 1130.6],
  balance: [53.3, 15.0, 11.1, 52.5, -83.7, -254.0, -200.1, -137.9, -40.3],
  etpNet: [7.2, -21.4, 83.3, 331.1, 64.9, -117.4, -37.3, 67.5, 278.1],
} as const;

export type WssKey = Exclude<keyof typeof WSS_2026, "source">;

export function wssSeries(key: WssKey) {
  return WSS_YEARS.map((year, i) => ({ x: year, y: WSS_2026[key][i] }));
}

export function wssLatest(key: WssKey) {
  return WSS_2026[key][WSS_YEARS.length - 1];
}

/** 2025 silver demand split by use, million oz. Industrial excludes photovoltaics so the parts add up. */
export function silverDemandByUse2025() {
  const i = WSS_YEARS.length - 1;
  const d = WSS_2026;
  const parts = [
    { id: "pv", label: "Solar panels (photovoltaics)", moz: d.photovoltaics[i] },
    { id: "industrial", label: "Other industrial", moz: d.industrial[i] - d.photovoltaics[i] },
    { id: "jewelry", label: "Jewellery", moz: d.jewelry[i] },
    { id: "coinBar", label: "Coins and bars", moz: d.coinBar[i] },
    { id: "silverware", label: "Silverware", moz: d.silverware[i] },
    { id: "photography", label: "Photography", moz: d.photography[i] },
  ];
  const total = d.totalDemand[i];
  return { parts, total, other: total - parts.reduce((a, p) => a + p.moz, 0) };
}

/**
 * Identifiable silver bullion inventories, year-end 2025 (World Silver Survey 2026). Vault stocks only.
 * ETP metal is not additive: about 695 Moz of the 1,317.6 Moz held by ETPs sits inside the London figure;
 * the rest is in domestic vaults (Canada, India, Switzerland and others) outside this table.
 */
export const SILVER_INVENTORIES_2025 = {
  asOf: "2025-12-31",
  londonMoz: 894.4,
  cmeMoz: 449.4,
  sgeMoz: 24.9,
  shfeMoz: 22.2,
  otherMoz: 3.6,
  totalMoz: 1_394.5,
  etpMoz: 1_317.6,
  etpInLondonMoz: 695,
  londonFreeFloatMoz: 136,
  londonFreeFloatAsOf: "2025-09-30",
} as const;
