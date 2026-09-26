/**
 * Shared History discovery links — short reader labels for header + hub chrome.
 * Keep URLs on existing routes only (no new article paths).
 */
export type HistorySubnavItem = {
  label: string;
  href: string;
  /** Cluster slug when the target is a chapter hub. */
  cluster?: string;
};

/** Chapter order readers expect; Years + VIPs sit after the five chapters. */
export const HISTORY_SUBNAV: HistorySubnavItem[] = [
  { label: "Ancient money", href: "/history/ancient", cluster: "ancient" },
  { label: "Banks & paper money", href: "/history/banks-paper", cluster: "banks-paper" },
  { label: "US gold & silver politics", href: "/history/america", cluster: "america" },
  { label: "Silver as money", href: "/history/silver", cluster: "silver" },
  { label: "Fed, gold & 1971", href: "/history/20th-century", cluster: "20th-century" },
  { label: "Year by year", href: "/history/year" },
  { label: "VIPs", href: "/history/vip" },
];

/** Header flyout: hub overview, then the shared subnav list. */
export const HISTORY_NAV_MENU: HistorySubnavItem[] = [
  { label: "Overview", href: "/history" },
  ...HISTORY_SUBNAV,
];
