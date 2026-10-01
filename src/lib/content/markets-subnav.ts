/**
 * Markets discovery links — short reader labels for the header flyout.
 * Existing `/markets/*` routes only (no new paths).
 */
export type MarketsNavItem = {
  label: string;
  href: string;
};

export const MARKETS_SUBNAV: MarketsNavItem[] = [
  { label: "Official gold book value", href: "/markets/official-gold-book-value" },
  { label: "Central-bank gold", href: "/markets/central-bank-gold-reserves" },
  { label: "Gold–silver ratio", href: "/markets/gold-silver-ratio" },
  { label: "Silver demand by country", href: "/markets/physical-silver-demand-by-country" },
];

/** Header flyout: hub overview, then the dated market facts. */
export const MARKETS_NAV_MENU: MarketsNavItem[] = [
  { label: "Overview", href: "/markets" },
  ...MARKETS_SUBNAV,
];
