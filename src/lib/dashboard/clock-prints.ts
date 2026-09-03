import type { OfficialGold } from "./cb-desk.ts";
import { MONEY_PATH } from "./money-path.ts";

/** Troy ounces in one metric tonne — same factor the CB seed uses to reconstruct IMF tonnes. */
export const TROY_OZ_PER_TONNE = 32_150.7374;

/** Seed sum: reported country books + IMF + ECB. World row in the seed is an aggregate with no stock. */
export const COMPILED_OFFICIAL: OfficialGold = {
  world: { tonnes: 35_908, asOf: "2025-12-31" },
  usa: { tonnes: 8_133.46, asOf: "2025-12-31" },
  ecb: { tonnes: 506.5, asOf: "2025-12-31" },
  chn: { tonnes: 2_346, asOf: "2026-06-30" },
};

export function officialMtmUsd(tonnes: number, spotPerOz: number) {
  return tonnes * TROY_OZ_PER_TONNE * spotPerOz;
}

/** Share of the 1971 gold price still in one dollar — then invert for “% lost.” */
export function dollarLostVsGold(spotPerOz: number) {
  const start = MONEY_PATH[0]?.gold ?? 0;
  if (!(spotPerOz > 0) || !(start > 0)) return null;
  return 1 - start / spotPerOz;
}

export function latestUsM2() {
  const row = MONEY_PATH[MONEY_PATH.length - 1];
  return { bn: row.m2, year: row.year };
}

export function fmtCompact(n: number, symbol = "$") {
  const abs = Math.abs(n);
  const num = (div: number, digits: number) =>
    (n / div).toLocaleString("en-US", { maximumFractionDigits: digits, minimumFractionDigits: 0 });
  if (abs >= 1e12) return `${symbol}${num(1e12, abs / 1e12 >= 100 ? 0 : 1)}T`;
  if (abs >= 1e9) return `${symbol}${num(1e9, 1)}B`;
  if (abs >= 1e6) return `${symbol}${num(1e6, 1)}M`;
  return `${symbol}${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}

export function fmtUsdCompact(n: number) {
  return fmtCompact(n, "$");
}
