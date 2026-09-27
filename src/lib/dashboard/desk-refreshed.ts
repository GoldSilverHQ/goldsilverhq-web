/**
 * Cron-updated non-spot desk snapshot (see scripts/desk-refresh + .github/workflows/desk-refresh.yml).
 * Spot is live separately. Facts only — not advice.
 */
import snapshot from "./desk-refreshed.json" with { type: "json" };

export type DeskRefreshed = typeof snapshot;

export const DESK_REFRESHED: DeskRefreshed = snapshot;

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
