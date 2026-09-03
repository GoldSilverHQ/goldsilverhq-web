/** Annual US M2 (FRED M2SL, last obs of year, $bn), CPI (CPIAUCSL), and LBMA/COMEX gold & silver averages. 2026 is latest, not a full-year average. */

export type MoneyYear = {
  year: number;
  gold: number;
  silver: number;
  m2: number;
  cpi: number;
};

export const MONEY_PATH: MoneyYear[] = [
  { year: 1971, gold: 40.62, silver: 1.39, m2: 710.3, cpi: 41.1 },
  { year: 1972, gold: 58.16, silver: 1.68, m2: 802.3, cpi: 42.5 },
  { year: 1973, gold: 97.32, silver: 2.56, m2: 855.5, cpi: 46.3 },
  { year: 1974, gold: 159.26, silver: 4.71, m2: 902.1, cpi: 51.9 },
  { year: 1975, gold: 161.02, silver: 4.42, m2: 1016.3, cpi: 55.6 },
  { year: 1976, gold: 124.84, silver: 4.35, m2: 1152.1, cpi: 58.4 },
  { year: 1977, gold: 147.71, silver: 4.62, m2: 1270.4, cpi: 62.3 },
  { year: 1978, gold: 193.4, silver: 5.4, m2: 1366.1, cpi: 67.9 },
  { year: 1979, gold: 306.68, silver: 11.09, m2: 1473.9, cpi: 76.9 },
  { year: 1980, gold: 612.56, silver: 20.98, m2: 1599.9, cpi: 86.4 },
  { year: 1981, gold: 460.03, silver: 10.52, m2: 1755.5, cpi: 94.1 },
  { year: 1982, gold: 375.67, silver: 7.95, m2: 1905.9, cpi: 97.7 },
  { year: 1983, gold: 424.35, silver: 11.44, m2: 2123.4, cpi: 101.4 },
  { year: 1984, gold: 360.78, silver: 8.14, m2: 2306.3, cpi: 105.5 },
  { year: 1985, gold: 317.26, silver: 6.14, m2: 2492, cpi: 109.5 },
  { year: 1986, gold: 367.66, silver: 5.47, m2: 2728, cpi: 110.8 },
  { year: 1987, gold: 446.46, silver: 7.01, m2: 2826.7, cpi: 115.6 },
  { year: 1988, gold: 436.94, silver: 6.53, m2: 2988.8, cpi: 120.7 },
  { year: 1989, gold: 381.06, silver: 5.5, m2: 3153.4, cpi: 126.3 },
  { year: 1990, gold: 383.51, silver: 4.83, m2: 3272.5, cpi: 134.2 },
  { year: 1991, gold: 362.11, silver: 4.04, m2: 3373, cpi: 138.2 },
  { year: 1992, gold: 343.82, silver: 3.94, m2: 3425.3, cpi: 142.3 },
  { year: 1993, gold: 359.77, silver: 4.3, m2: 3475, cpi: 146.3 },
  { year: 1994, gold: 384, silver: 5.28, m2: 3486.7, cpi: 150.1 },
  { year: 1995, gold: 384.17, silver: 5.2, m2: 3629.8, cpi: 153.9 },
  { year: 1996, gold: 387.81, silver: 5.19, m2: 3818.7, cpi: 159.1 },
  { year: 1997, gold: 331.29, silver: 4.9, m2: 4033, cpi: 161.8 },
  { year: 1998, gold: 294.24, silver: 5.54, m2: 4375.5, cpi: 164.4 },
  { year: 1999, gold: 278.98, silver: 5.22, m2: 4639.1, cpi: 168.8 },
  { year: 2000, gold: 279.11, silver: 4.95, m2: 4927.3, cpi: 174.6 },
  { year: 2001, gold: 271.04, silver: 4.37, m2: 5440.1, cpi: 177.4 },
  { year: 2002, gold: 309.73, silver: 4.6, m2: 5779, cpi: 181.8 },
  { year: 2003, gold: 363.38, silver: 4.88, m2: 6073.5, cpi: 185.5 },
  { year: 2004, gold: 409.72, silver: 6.66, m2: 6424.3, cpi: 191.7 },
  { year: 2005, gold: 444.74, silver: 7.31, m2: 6687.4, cpi: 198.1 },
  { year: 2006, gold: 603.77, silver: 11.55, m2: 7079.3, cpi: 203.1 },
  { year: 2007, gold: 695.39, silver: 13.38, m2: 7482.7, cpi: 211.4 },
  { year: 2008, gold: 871.96, silver: 14.99, m2: 8203, cpi: 211.4 },
  { year: 2009, gold: 972.35, silver: 14.67, m2: 8510.6, cpi: 217.3 },
  { year: 2010, gold: 1224.53, silver: 20.19, m2: 8822, cpi: 220.5 },
  { year: 2011, gold: 1571.52, silver: 35.12, m2: 9683.5, cpi: 227.2 },
  { year: 2012, gold: 1668.98, silver: 31.15, m2: 10485.4, cpi: 231.2 },
  { year: 2013, gold: 1411.23, silver: 23.79, m2: 11062.4, cpi: 234.7 },
  { year: 2014, gold: 1266.4, silver: 19.08, m2: 11721.2, cpi: 236.3 },
  { year: 2015, gold: 1160.06, silver: 15.68, m2: 12393.6, cpi: 237.8 },
  { year: 2016, gold: 1250.8, silver: 17.14, m2: 13240.6, cpi: 242.6 },
  { year: 2017, gold: 1257.15, silver: 17.05, m2: 13887.3, cpi: 247.8 },
  { year: 2018, gold: 1268.49, silver: 15.71, m2: 14392, cpi: 252.8 },
  { year: 2019, gold: 1392.6, silver: 16.21, m2: 15351.5, cpi: 258.6 },
  { year: 2020, gold: 1769.64, silver: 20.55, m2: 19119.4, cpi: 262.0 },
  { year: 2021, gold: 1798.61, silver: 25.14, m2: 21502.8, cpi: 280.8 },
  { year: 2022, gold: 1800.09, silver: 21.76, m2: 21293.2, cpi: 298.8 },
  { year: 2023, gold: 1940.54, silver: 23.35, m2: 20779.9, cpi: 308.7 },
  { year: 2024, gold: 2386, silver: 28.27, m2: 21487.6, cpi: 317.6 },
  { year: 2025, gold: 3380, silver: 36.5, m2: 22355.3, cpi: 326.0 },
  { year: 2026, gold: 4609, silver: 69.41, m2: 23218, cpi: 332.8 },
];

export type PathWindow = "1971" | "2000" | "2008" | "2020";

export const PATH_WINDOWS: { id: PathWindow; label: string; start: number }[] = [
  { id: "1971", label: "1971", start: 1971 },
  { id: "2000", label: "2000", start: 2000 },
  { id: "2008", label: "2008", start: 2008 },
  { id: "2020", label: "2020", start: 2020 },
];

export type PathMode = "indexed" | "m2" | "cpi";

export const PATH_MODES: { id: PathMode; label: string }[] = [
  { id: "indexed", label: "Indexed" },
  { id: "m2", label: "÷ M2" },
  { id: "cpi", label: "÷ CPI" },
];

export type PathPoint = { year: number; gold: number; silver: number; m2?: number };

export function slicePath(start: number) {
  return MONEY_PATH.filter((r) => r.year >= start);
}

function index(values: number[]) {
  const b = values[0];
  if (!b) return values.map(() => 0);
  return values.map((v) => (v / b) * 100);
}

export function pathSeries(start: number, mode: PathMode): PathPoint[] {
  const rows = slicePath(start);
  if (mode === "indexed") {
    const gold = index(rows.map((r) => r.gold));
    const silver = index(rows.map((r) => r.silver));
    const m2 = index(rows.map((r) => r.m2));
    return rows.map((r, i) => ({ year: r.year, gold: gold[i], silver: silver[i], m2: m2[i] }));
  }
  const deflator = mode === "m2" ? (r: MoneyYear) => r.m2 : (r: MoneyYear) => r.cpi;
  const gold = index(rows.map((r) => r.gold / deflator(r)));
  const silver = index(rows.map((r) => r.silver / deflator(r)));
  return rows.map((r, i) => ({ year: r.year, gold: gold[i], silver: silver[i] }));
}

export function pathStats(start: number) {
  const rows = slicePath(start);
  const a = rows[0];
  const b = rows[rows.length - 1];
  const m2x = b.m2 / a.m2;
  const goldx = b.gold / a.gold;
  const silverx = b.silver / a.silver;
  const impliedGold = a.gold * m2x;
  const impliedSilver = a.silver * m2x;
  return {
    from: a,
    to: b,
    m2x,
    goldx,
    silverx,
    impliedGold,
    impliedSilver,
    goldVsM2: goldx / m2x,
    silverVsM2: silverx / m2x,
  };
}
