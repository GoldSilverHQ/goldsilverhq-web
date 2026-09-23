/**
 * Top-nav grouping for Ideas & markets (Sound Money + Markets).
 * Display/IA only — existing hub URLs, no new routes.
 */
export type IdeasMarketsNavItem = {
  label: string;
  href: string;
};

export const IDEAS_MARKETS_NAV: IdeasMarketsNavItem[] = [
  { label: "Sound Money", href: "/sound-money" },
  { label: "Markets", href: "/markets" },
];
