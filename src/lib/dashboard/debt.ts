/** Debt & money tab: US federal debt, interest, Treasury gold, world government debt. Dated facts only. */
import { US_TREASURY_GOLD } from "./cb-extras.ts";
import { DESK_REFRESHED } from "./desk-refreshed.ts";
import { MONEY_PATH } from "./money-path.ts";

const m = DESK_REFRESHED.metrics;

/** Compiled fallbacks: Fiscal Data / FRED / IMF prints as of 1 Oct 2026. */
export const US_DEBT = m.usDebt ?? {
  totalUsd: 40_096_954_633_566.68,
  publicUsd: 32_367_872_193_303.63,
  intragovUsd: 7_729_082_440_263.05,
  asOf: "2026-09-29",
  source: "US Treasury Fiscal Data, Debt to the Penny",
};

export const US_INTEREST = m.usInterest ?? {
  ttmGrossUsd: 1_359_074_800_827,
  ttmPublicUsd: 1_063_860_159_594,
  fytdGrossUsd: 1_267_805_144_581,
  fiscalYear: 2026,
  asOf: "2026-08-31",
  source: "US Treasury Fiscal Data, Interest Expense on the Public Debt Outstanding",
};

export const TREASURY_GOLD = m.usTreasuryGold ?? {
  oz: US_TREASURY_GOLD.oz,
  bookUsd: US_TREASURY_GOLD.bookUsd,
  asOf: US_TREASURY_GOLD.asOf,
  source: US_TREASURY_GOLD.source,
};

export const US_DEBT_HISTORY = m.usDebtHistory ?? {
  debtGdpPct: 122.6,
  debtGdpAsOf: "2026-01",
  yearEndUsd: {} as Record<string, number>,
  source: "FRED GFDEGDQ188S / GFDEBTN",
};

export const WORLD_GOV_DEBT = (() => {
  const imf = m.imfGovDebt;
  const row = imf?.byYear[String(imf.year)];
  if (imf && row) return { year: imf.year, usd: row.usd, countries: row.countries, source: imf.source };
  return { year: 2025, usd: 110.8e12, countries: 190, source: "IMF World Economic Outlook (April 2026)" };
})();

/** IIF Global Debt Monitor public headline. Members-only dataset — headline quoted with credit, not stored as a series. */
export const IIF_HEADLINE = {
  text: "Global debt surpassed $365 trillion in H1 2026",
  usd: 365e12,
  period: "H1 2026",
  source: "Institute of International Finance, Global Debt Monitor",
  url: "https://www.iif.com/Research/Capital-Flows-and-Debt/Global-Debt-Monitor",
} as const;

export function goldValueUsd(spot: number, oz = TREASURY_GOLD.oz) {
  return spot > 0 ? oz * spot : null;
}

/** Treasury gold at spot as a share of federal debt (0–1). */
export function goldCoverOfDebt(spot: number, debtUsd = US_DEBT.totalUsd) {
  const v = goldValueUsd(spot);
  return v != null && debtUsd > 0 ? v / debtUsd : null;
}

/** Trailing-12-month interest divided by Treasury gold at spot. */
export function interestToGold(spot: number, interestUsd = US_INTEREST.ttmGrossUsd) {
  const v = goldValueUsd(spot);
  return v != null && v > 0 ? interestUsd / v : null;
}

/** Days of gross interest that the Treasury's gold at spot would cover. */
export function goldDaysOfInterest(spot: number, interestUsd = US_INTEREST.ttmGrossUsd) {
  const v = goldValueUsd(spot);
  return v != null && interestUsd > 0 ? (v / interestUsd) * 365 : null;
}

/**
 * Treasury gold (today's ounces × yearly average price) as % of year-end federal debt, since 2000.
 * US holdings have stayed at about 261.5–262 million oz since 2000 (IMF IFS).
 */
export function goldVsDebtSeries(spot?: number, yearEnd = US_DEBT_HISTORY.yearEndUsd) {
  const out: { x: number; y: number }[] = [];
  for (const r of MONEY_PATH) {
    if (r.year < 2000) continue;
    const debt = yearEnd[String(r.year)];
    if (!debt) continue;
    out.push({ x: r.year, y: ((TREASURY_GOLD.oz * r.gold) / debt) * 100 });
  }
  const now = spot ? goldCoverOfDebt(spot) : null;
  const lastYear = new Date(`${US_DEBT.asOf}T12:00:00Z`).getUTCFullYear();
  if (now != null && !out.some((p) => p.x === lastYear)) out.push({ x: lastYear, y: now * 100 });
  return out;
}
