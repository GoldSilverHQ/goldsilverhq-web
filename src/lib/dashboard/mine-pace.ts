import { TROY_OZ_PER_TONNE } from "./clock-prints.ts";

/**
 * 2026 gold mine pace. WGC Gold Demand Trends full-year 2025 printed 3,671.6 t
 * (record, +1% y/y). The 2026 outlook is modest further growth — long lead times,
 * Grasberg ramp, Mali restart — so this uses +1% on that print, the same order
 * as the ten-year average growth the Council cites. Not a live mine feed.
 */
export const GOLD_MINE_2026E = {
  asOf: "2026e",
  tonnes: 3_708,
  basis: "WGC 2025 mine 3,671.6 t + 1% 2026e",
} as const;

/**
 * 2026 silver mine pace. Silver Institute / Metals Focus, World Silver Survey 2026:
 * 844.1 million troy ounces (2026F), essentially flat vs 846.6 Moz in 2025.
 */
export const SILVER_MINE_2026F = {
  asOf: "2026F",
  moz: 844.1,
  source: "Silver Institute, World Silver Survey 2026",
} as const;

export function secondsInUtcYear(year: number) {
  return (Date.UTC(year + 1, 0, 1) - Date.UTC(year, 0, 1)) / 1000;
}

export function goldOzPerYear() {
  return GOLD_MINE_2026E.tonnes * TROY_OZ_PER_TONNE;
}

export function silverOzPerYear() {
  return SILVER_MINE_2026F.moz * 1_000_000;
}

export function goldOzPerSecond(year: number) {
  return goldOzPerYear() / secondsInUtcYear(year);
}

export function silverOzPerSecond(year: number) {
  return silverOzPerYear() / secondsInUtcYear(year);
}

/** Calendar YTD ounces at a constant 2026e/F mine pace, UTC. */
export function ytdMineOunces(now: Date) {
  const year = now.getUTCFullYear();
  const start = Date.UTC(year, 0, 1);
  const elapsed = Math.max(0, (now.getTime() - start) / 1000);
  return {
    year,
    elapsedSec: elapsed,
    goldOz: goldOzPerSecond(year) * elapsed,
    silverOz: silverOzPerSecond(year) * elapsed,
  };
}
