/**
 * Library header flyout — reading shelves grouped under one top-level label.
 * Existing hub routes only (no new pillar URLs).
 */
export type LibraryNavItem = {
  label: string;
  href: string;
};

/** Punchy shelf names — hubs only; chapter/definition lists stay on each hub. */
export const LIBRARY_NAV_MENU: LibraryNavItem[] = [
  { label: "Sound Money", href: "/sound-money" },
  { label: "Markets", href: "/markets" },
  { label: "Guides", href: "/gold-silver" },
];

/** Path prefixes that light the Library trigger (no /library hub page). */
export const LIBRARY_MATCH_HREFS = LIBRARY_NAV_MENU.map((item) => item.href);
