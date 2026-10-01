/**
 * Cron-updated non-spot desk snapshot (see scripts/desk-refresh + .github/workflows/desk-refresh.yml).
 * Spot is live separately. Facts only — not advice.
 */
import snapshot from "./desk-refreshed.json" with { type: "json" };

/** `lastGoodAt`: last run the feed answered. `staleSince`: first failed run while the last good value is kept. */
export type FeedStamp = { lastGoodAt?: string; staleSince?: string };

type Book = FeedStamp & { asOf: string; source: string };

export type DeskRefreshed = {
  refreshedAt: string;
  metrics: {
    usM2: Book & { bn: number };
    cpi: Book & { value: number };
    eurM3: Book & { value: number };
    fx: Book & { eurUsd: number; cnyUsd: number; jpyUsd: number };
    lbma: FeedStamp & {
      clearing: { asOf: string; goldClearingDailyMoz: number; source: string };
      vaultLatest: { asOf: string; goldT: number; silverT: number; source: string };
      paired: { asOf: string; goldClearingDailyMoz: number; vaultGoldT: number; vaultSilverT: number; note: string };
    };
  };
  manual: string[];
};

export const DESK_REFRESHED: DeskRefreshed = snapshot as DeskRefreshed;

/** Short reader note when a cron feed missed and the page shows its last good value. */
export function staleNote(stamp: FeedStamp | undefined): string | null {
  if (!stamp?.staleSince) return null;
  const last = stamp.lastGoodAt ? `last good value from ${stamp.lastGoodAt}` : "last good value";
  return `Source feed has not answered since ${stamp.staleSince}; showing the ${last}.`;
}

export function refreshedUsM2() {
  const { bn, asOf } = DESK_REFRESHED.metrics.usM2;
  return { bn, asOf, year: Number(asOf.slice(0, 4)) };
}

export function refreshedAthFallback() {
  const { cpi, usM2 } = DESK_REFRESHED.metrics;
  return {
    cpi: cpi.value,
    m2: usM2.bn,
    cpiDate: cpi.asOf,
    m2Date: usM2.asOf,
  };
}

export function refreshedLbmaPaired() {
  return DESK_REFRESHED.metrics.lbma.paired;
}
