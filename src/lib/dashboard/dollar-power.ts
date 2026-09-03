/** Purchasing power of $1 since the Fed (1913= $1). CPI: FRED CPIAUCNS, last obs of each year. */

import { MONEY_PATH } from "@/lib/dashboard/money-path";

export type DollarYear = { year: number; cpi: number; pp: number };

export const DOLLAR_POWER: DollarYear[] = [
  { year: 1913, cpi: 10.0, pp: 1.0 },
  { year: 1914, cpi: 10.1, pp: 0.9901 },
  { year: 1915, cpi: 10.3, pp: 0.9709 },
  { year: 1916, cpi: 11.6, pp: 0.8621 },
  { year: 1917, cpi: 13.7, pp: 0.7299 },
  { year: 1918, cpi: 16.5, pp: 0.6061 },
  { year: 1919, cpi: 18.9, pp: 0.5291 },
  { year: 1920, cpi: 19.4, pp: 0.5155 },
  { year: 1921, cpi: 17.3, pp: 0.578 },
  { year: 1922, cpi: 16.9, pp: 0.5917 },
  { year: 1923, cpi: 17.3, pp: 0.578 },
  { year: 1924, cpi: 17.3, pp: 0.578 },
  { year: 1925, cpi: 17.9, pp: 0.5587 },
  { year: 1926, cpi: 17.7, pp: 0.565 },
  { year: 1927, cpi: 17.3, pp: 0.578 },
  { year: 1928, cpi: 17.1, pp: 0.5848 },
  { year: 1929, cpi: 17.2, pp: 0.5814 },
  { year: 1930, cpi: 16.1, pp: 0.6211 },
  { year: 1931, cpi: 14.6, pp: 0.6849 },
  { year: 1932, cpi: 13.1, pp: 0.7634 },
  { year: 1933, cpi: 13.2, pp: 0.7576 },
  { year: 1934, cpi: 13.4, pp: 0.7463 },
  { year: 1935, cpi: 13.8, pp: 0.7246 },
  { year: 1936, cpi: 14.0, pp: 0.7143 },
  { year: 1937, cpi: 14.4, pp: 0.6944 },
  { year: 1938, cpi: 14.0, pp: 0.7143 },
  { year: 1939, cpi: 14.0, pp: 0.7143 },
  { year: 1940, cpi: 14.1, pp: 0.7092 },
  { year: 1941, cpi: 15.5, pp: 0.6452 },
  { year: 1942, cpi: 16.9, pp: 0.5917 },
  { year: 1943, cpi: 17.4, pp: 0.5747 },
  { year: 1944, cpi: 17.8, pp: 0.5618 },
  { year: 1945, cpi: 18.2, pp: 0.5495 },
  { year: 1946, cpi: 21.5, pp: 0.4651 },
  { year: 1947, cpi: 23.4, pp: 0.4274 },
  { year: 1948, cpi: 24.1, pp: 0.4149 },
  { year: 1949, cpi: 23.6, pp: 0.4237 },
  { year: 1950, cpi: 25.0, pp: 0.4 },
  { year: 1951, cpi: 26.5, pp: 0.3774 },
  { year: 1952, cpi: 26.7, pp: 0.3745 },
  { year: 1953, cpi: 26.9, pp: 0.3717 },
  { year: 1954, cpi: 26.7, pp: 0.3745 },
  { year: 1955, cpi: 26.8, pp: 0.3731 },
  { year: 1956, cpi: 27.6, pp: 0.3623 },
  { year: 1957, cpi: 28.4, pp: 0.3521 },
  { year: 1958, cpi: 28.9, pp: 0.346 },
  { year: 1959, cpi: 29.4, pp: 0.3401 },
  { year: 1960, cpi: 29.8, pp: 0.3356 },
  { year: 1961, cpi: 30.0, pp: 0.3333 },
  { year: 1962, cpi: 30.4, pp: 0.3289 },
  { year: 1963, cpi: 30.9, pp: 0.3236 },
  { year: 1964, cpi: 31.2, pp: 0.3205 },
  { year: 1965, cpi: 31.8, pp: 0.3145 },
  { year: 1966, cpi: 32.9, pp: 0.304 },
  { year: 1967, cpi: 33.9, pp: 0.295 },
  { year: 1968, cpi: 35.5, pp: 0.2817 },
  { year: 1969, cpi: 37.7, pp: 0.2653 },
  { year: 1970, cpi: 39.8, pp: 0.2513 },
  { year: 1971, cpi: 41.1, pp: 0.2433 },
  { year: 1972, cpi: 42.5, pp: 0.2353 },
  { year: 1973, cpi: 46.2, pp: 0.2165 },
  { year: 1974, cpi: 51.9, pp: 0.1927 },
  { year: 1975, cpi: 55.5, pp: 0.1802 },
  { year: 1976, cpi: 58.2, pp: 0.1718 },
  { year: 1977, cpi: 62.1, pp: 0.161 },
  { year: 1978, cpi: 67.7, pp: 0.1477 },
  { year: 1979, cpi: 76.7, pp: 0.1304 },
  { year: 1980, cpi: 86.3, pp: 0.1159 },
  { year: 1981, cpi: 94.0, pp: 0.1064 },
  { year: 1982, cpi: 97.6, pp: 0.1025 },
  { year: 1983, cpi: 101.3, pp: 0.0987 },
  { year: 1984, cpi: 105.3, pp: 0.095 },
  { year: 1985, cpi: 109.3, pp: 0.0915 },
  { year: 1986, cpi: 110.5, pp: 0.0905 },
  { year: 1987, cpi: 115.4, pp: 0.0867 },
  { year: 1988, cpi: 120.5, pp: 0.083 },
  { year: 1989, cpi: 126.1, pp: 0.0793 },
  { year: 1990, cpi: 133.8, pp: 0.0747 },
  { year: 1991, cpi: 137.9, pp: 0.0725 },
  { year: 1992, cpi: 141.9, pp: 0.0705 },
  { year: 1993, cpi: 145.8, pp: 0.0686 },
  { year: 1994, cpi: 149.7, pp: 0.0668 },
  { year: 1995, cpi: 153.5, pp: 0.0651 },
  { year: 1996, cpi: 158.6, pp: 0.0631 },
  { year: 1997, cpi: 161.3, pp: 0.062 },
  { year: 1998, cpi: 163.9, pp: 0.061 },
  { year: 1999, cpi: 168.3, pp: 0.0594 },
  { year: 2000, cpi: 174.0, pp: 0.0575 },
  { year: 2001, cpi: 176.7, pp: 0.0566 },
  { year: 2002, cpi: 180.9, pp: 0.0553 },
  { year: 2003, cpi: 184.3, pp: 0.0543 },
  { year: 2004, cpi: 190.3, pp: 0.0525 },
  { year: 2005, cpi: 196.8, pp: 0.0508 },
  { year: 2006, cpi: 201.8, pp: 0.0496 },
  { year: 2007, cpi: 210.036, pp: 0.0476 },
  { year: 2008, cpi: 210.228, pp: 0.0476 },
  { year: 2009, cpi: 215.949, pp: 0.0463 },
  { year: 2010, cpi: 219.179, pp: 0.0456 },
  { year: 2011, cpi: 225.672, pp: 0.0443 },
  { year: 2012, cpi: 229.601, pp: 0.0436 },
  { year: 2013, cpi: 233.049, pp: 0.0429 },
  { year: 2014, cpi: 234.812, pp: 0.0426 },
  { year: 2015, cpi: 236.525, pp: 0.0423 },
  { year: 2016, cpi: 241.432, pp: 0.0414 },
  { year: 2017, cpi: 246.524, pp: 0.0406 },
  { year: 2018, cpi: 251.233, pp: 0.0398 },
  { year: 2019, cpi: 256.974, pp: 0.0389 },
  { year: 2020, cpi: 260.474, pp: 0.0384 },
  { year: 2021, cpi: 278.802, pp: 0.0359 },
  { year: 2022, cpi: 296.797, pp: 0.0337 },
  { year: 2023, cpi: 306.746, pp: 0.0326 },
  { year: 2024, cpi: 315.605, pp: 0.0317 },
  { year: 2025, cpi: 324.054, pp: 0.0309 },
  { year: 2026, cpi: 333.918, pp: 0.0299 },
];

export const DOLLAR_NOW = DOLLAR_POWER[DOLLAR_POWER.length - 1];
export const DOLLAR_LOSS = 1 - DOLLAR_NOW.pp;
export const DOLLAR_MULTIPLE = DOLLAR_NOW.cpi / DOLLAR_POWER[0].cpi;

/** Official gold dollar: $20.67/oz from 1834 until the 1934 revaluation. */
export const GOLD_PAR_1913 = 20.67;

export function goldUsd(year: number): number {
  if (year <= 1933) return GOLD_PAR_1913;
  if (year <= 1967) return 35;
  if (year === 1968) return 39.31;
  if (year === 1969) return 41.09;
  if (year === 1970) return 35.94;
  const row = MONEY_PATH.find((r) => r.year === year);
  return row?.gold ?? MONEY_PATH[MONEY_PATH.length - 1].gold;
}

/** Purchasing power of $1 in gold, 1913 = $1.00. */
export function goldPp(year: number) {
  return GOLD_PAR_1913 / goldUsd(year);
}
