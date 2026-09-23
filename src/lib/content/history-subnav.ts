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

/** Chapter order readers expect; Years + Notable people sit after the five chapters. */
export const HISTORY_SUBNAV: HistorySubnavItem[] = [
  { label: "Ancient", href: "/history/ancient", cluster: "ancient" },
  { label: "Banks & paper", href: "/history/banks-paper", cluster: "banks-paper" },
  { label: "America", href: "/history/america", cluster: "america" },
  { label: "Silver", href: "/history/silver", cluster: "silver" },
  { label: "20th century", href: "/history/20th-century", cluster: "20th-century" },
  { label: "Years", href: "/history/year" },
  { label: "Notable people", href: "/history/vip" },
];

/** Header flyout: hub overview, then the shared subnav list. */
export const HISTORY_NAV_MENU: HistorySubnavItem[] = [
  { label: "Overview", href: "/history" },
  ...HISTORY_SUBNAV,
];
