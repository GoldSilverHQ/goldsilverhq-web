/**
 * Peter Stone jewelry — curated affiliate catalog for `/shop`.
 *
 * Tracking: paste full referral URLs from the affiliate dashboard into
 * `affiliateUrl`. Do not invent query-param patterns or fake affiliate IDs.
 *
 * Env (optional ops marker; Vite exposes only `VITE_*` to the browser):
 *   VITE_PETER_STONE_AFFILIATE_ID — dashboard affiliate code/ID once known.
 */

export type PeterStoneProduct = {
  id: string;
  name: string;
  blurb: string;
  /** Public product or collection URL on peterstone.com (untracked reference). */
  productUrl?: string;
  /**
   * Full tracked affiliate URL from the dashboard.
   * Leave empty until the user pastes a real link — CTAs stay disabled.
   */
  affiliateUrl?: string;
  /** Local or approved image path under `/public`. Omit for placeholder plate. */
  imageSrc?: string;
  imageAlt?: string;
};

/** Optional ID from env — never hardcode a fabricated value. */
export function peterStoneAffiliateId(): string {
  const env = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env;
  const raw = env?.VITE_PETER_STONE_AFFILIATE_ID;
  return typeof raw === "string" ? raw.trim() : "";
}

export function hasAffiliateTracking(product: PeterStoneProduct): boolean {
  return Boolean(product.affiliateUrl?.trim());
}

export function ctaHref(product: PeterStoneProduct): string | null {
  const url = product.affiliateUrl?.trim();
  return url || null;
}

/**
 * Placeholder slots — replace name/blurb/images and paste dashboard
 * `affiliateUrl` values when credentials are available.
 *
 * TODO(user): set VITE_PETER_STONE_AFFILIATE_ID and real affiliateUrl + images.
 */
export const PETER_STONE_PRODUCTS: readonly PeterStoneProduct[] = [
  {
    id: "ps-placeholder-01",
    name: "Sterling silver piece (placeholder)",
    blurb: "Craft jewelry in sterling silver — cultural motifs, not a desk bullion product.",
    productUrl: "https://www.peterstone.com/",
  },
  {
    id: "ps-placeholder-02",
    name: "Gold-accent jewelry (placeholder)",
    blurb: "Wearable gold and silver craft from Peter Stone’s retail catalog.",
    productUrl: "https://www.peterstone.com/",
  },
  {
    id: "ps-placeholder-03",
    name: "Symbolic pendant (placeholder)",
    blurb: "A short fact blurb goes here once a real SKU and image are chosen.",
    productUrl: "https://www.peterstone.com/",
  },
  {
    id: "ps-placeholder-04",
    name: "Ring or cuff (placeholder)",
    blurb: "Swap this slot for a dashboard deep link and approved product photo.",
    productUrl: "https://www.peterstone.com/",
  },
] as const;
