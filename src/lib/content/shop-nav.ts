/**
 * Shop header flyout — commerce corner + metal partners (kept distinct).
 * Existing `/shop` and `/partners` routes only.
 */
export type ShopNavItem = {
  label: string;
  href: string;
};

export const SHOP_NAV_MENU: ShopNavItem[] = [
  { label: "Jewelry & merch", href: "/shop" },
  { label: "Metal partners", href: "/partners" },
];

/** Path prefixes that light the Shop trigger when Partners is open. */
export const SHOP_MATCH_HREFS = SHOP_NAV_MENU.map((item) => item.href);
