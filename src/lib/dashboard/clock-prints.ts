import type { OfficialGold } from "./cb-desk.ts";
import { MONEY_PATH } from "./money-path.ts";

/** Troy ounces in one metric tonne — same factor the CB seed uses to reconstruct IMF tonnes. */
export const TROY_OZ_PER_TONNE = 32_150.7374;

/** SAFE official reserve assets, published 7 September 2026: 76.73 million fine troy ounces at end-August. */
export const CHINA_SAFE_AUG_2026 = {
  ouncesMoz: 76.73,
  asOf: "2026-08-31",
  tonnes: (76.73 * 1_000_000) / TROY_OZ_PER_TONNE,
} as const;

/** Prefer the later dated book. ISO dates compare in chronological order. */
export function laterOfficial<T extends { asOf: string }>(live: T | null | undefined, next: T): T {
  if (!live || live.asOf < next.asOf) return next;
  return live;
}

/** Seed sum: reported country books + IMF + ECB. World row in the seed is an aggregate with no stock. */
export const COMPILED_OFFICIAL: OfficialGold = {
  world: { tonnes: 35_908, asOf: "2025-12-31" },
  usa: { tonnes: 8_133.46, asOf: "2025-12-31" },
  ecb: { tonnes: 506.5, asOf: "2025-12-31" },
  chn: { tonnes: CHINA_SAFE_AUG_2026.tonnes, asOf: CHINA_SAFE_AUG_2026.asOf },
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

/** Never round a remainder up to 100 — 99.7% lost is not “all of it.” */
export function pctLostDisplay(p: number) {
  const n = p * 100;
  if (n >= 99.5 && n < 100) return n.toFixed(1);
  return String(Math.round(n));
}

export function latestUsM2() {
  const row = MONEY_PATH[MONEY_PATH.length - 1];
  return { bn: row.m2, year: row.year };
}

export function fmtCompact(n: number, symbol = "$") {
  const abs = Math.abs(n);
  const num = (div: number, digits: number) =>
    (n / div).toLocaleString("en-US", { maximumFractionDigits: digits, minimumFractionDigits: 0 });
  if (abs >= 1e12) return `${symbol}${num(1e12, abs / 1e12 >= 1000 ? 0 : 1)}T`;
  if (abs >= 1e9) return `${symbol}${num(1e9, 1)}B`;
  if (abs >= 1e6) return `${symbol}${num(1e6, 1)}M`;
  return `${symbol}${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}

export function fmtUsdCompact(n: number) {
  return fmtCompact(n, "$");
}
