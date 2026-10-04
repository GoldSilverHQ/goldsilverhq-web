/**
 * Peter Stone jewelry for `/shop`.
 *
 * Append another entry to `PETER_STONE_LISTINGS` to add a piece. Each `href`
 * is the exact affiliate URL (ref and variant included) and is not rewritten.
 * Name, image, and price come from that product's public Shopify
 * `products/<handle>.js` feed. When the URL names a variant, the card uses
 * that variant's price, and its image when the variant has one.
 */

export const JEWELRY_AFFILIATE_DISCLOSURE =
  "Affiliate link. Peter Stone sells and ships this. I may earn a commission.";

export type PeterStoneListing = {
  id: string;
  href: string;
};

export const PETER_STONE_LISTINGS: readonly PeterStoneListing[] = [
  {
    id: "wri2580",
    href: "https://www.peterstone.com/collections/empowering-word-jewelry/products/peace-infinity-heart-solid-white-gold-ring-wri2580?ref=qsrtsqfn&variant=46021529993387",
  },
  {
    id: "tr1420",
    href: "https://www.peterstone.com/collections/best-selling-jewelry/products/love-in-interconnectedness-sterling-silver-celtic-triquetra-knot-ring-with-gemstone-tr1420?ref=qsrtsqfn&variant=29579490033728",
  },
  {
    id: "gri2308",
    href: "https://www.peterstone.com/products/celtic-knotwork-solid-gold-ring-with-heart-gemstone-gri2308?ref=qsrtsqfn&variant=45577756606635",
  },
  {
    id: "mri2353",
    href: "https://www.peterstone.com/collections/gold-accented-rings/products/celtic-knotwork-silver-and-gold-accent-wedding-ring-mri2353?ref=qsrtsqfn&variant=42310962839723",
  },
  {
    id: "mri1585",
    href: "https://www.peterstone.com/collections/gold-accented-rings/products/triskelion-spiral-silver-and-gold-ring-mri1585?ref=qsrtsqfn&variant=41094166413483",
  },
  {
    id: "mri1711",
    href: "https://www.peterstone.com/collections/gold-accented-rings/products/angel-wings-infinity-silver-gold?ref=qsrtsqfn&variant=30003838222400",
  },
  {
    id: "gpd2818",
    href: "https://www.peterstone.com/collections/best-sellers/products/sigil-of-the-archangel-michael-solid-gold-pendant?ref=qsrtsqfn&variant=29999828500544",
  },
  {
    id: "tpd5154",
    href: "https://www.peterstone.com/collections/best-sellers/products/the-seven-archangels-silver-pendant-tpd5154?ref=qsrtsqfn&variant=43294323671211",
  },
  {
    id: "tba154",
    href: "https://www.peterstone.com/collections/best-sellers/products/seven-archangels-bracelet-tba154?ref=qsrtsqfn&variant=41710585577643",
  },
  {
    id: "gpd5072",
    href: "https://www.peterstone.com/collections/best-sellers/products/soar-to-the-heavens-flying-phoenix-solid-gold-pendant?ref=qsrtsqfn&variant=30001670520896",
  },
  {
    id: "tri1942",
    href: "https://www.peterstone.com/collections/best-sellers/products/celtic-claddagh-love-silver-commitment-band-ring-tri1942?ref=qsrtsqfn&variant=31164646654016",
  },
  {
    id: "mpd2916",
    href: "https://www.peterstone.com/collections/best-sellers/products/majestic-phoenix-silver-and-gold-pendant-mpd2916?ref=qsrtsqfn&variant=26324951728192",
  },
  {
    id: "gpd5504",
    href: "https://www.peterstone.com/collections/best-sellers/products/egyptian-ankh-solid-gold-pendant-gpd5504?ref=qsrtsqfn&variant=43312411541675",
  },
  {
    id: "gpd864",
    href: "https://www.peterstone.com/collections/best-sellers/products/thors-hammer-solid-gold-pendant-gpd864?ref=qsrtsqfn&variant=41098246127787",
  },
  {
    id: "gri573",
    href: "https://www.peterstone.com/collections/best-sellers/products/viking-borre-knot-solid-gold-ring-gri573?ref=qsrtsqfn&variant=39395214852267",
  },
  {
    id: "tbg760",
    href: "https://www.peterstone.com/collections/best-sellers/products/celtic-triple-moon-bracelet-tbg760?ref=qsrtsqfn&variant=26323449249856",
  },
  {
    id: "tri580",
    href: "https://www.peterstone.com/collections/best-sellers/products/dali-inspired-feather-ring-tri580?ref=qsrtsqfn&variant=42711829643435",
  },
  {
    id: "gpd5150",
    href: "https://www.peterstone.com/collections/best-sellers/products/the-majestic-power-of-three-solid-gold-trinity-goddess-pendant-gpd5150?ref=qsrtsqfn&variant=31143344701504",
  },
];

export type PeterStoneCard = {
  id: string;
  name: string;
  /** Null when the feed has no price for the linked variant. */
  priceLabel: string | null;
  imageUrl: string | null;
  href: string;
};

export type PeterStoneJewelryItem =
  ({ status: "ready" } & PeterStoneCard) | { status: "unavailable"; id: string; href: string };

const PETER_STONE_HOSTS = new Set(["www.peterstone.com", "peterstone.com"]);

/** Public Shopify product JSON for a Peter Stone listing. Null for any other URL. */
export function peterStoneProductJsUrl(href: string): string | null {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" || !PETER_STONE_HOSTS.has(url.hostname)) return null;
  const parts = url.pathname.split("/").filter(Boolean);
  const index = parts.lastIndexOf("products");
  const handle = index >= 0 ? parts[index + 1] : "";
  if (!handle || !/^[a-z0-9-]+$/i.test(handle)) return null;
  return `https://www.peterstone.com/products/${handle}.js`;
}

export function parsePeterStoneProduct(
  payload: unknown,
  listing: PeterStoneListing,
): PeterStoneCard | null {
  if (!isRecord(payload)) return null;
  const name = typeof payload.title === "string" ? payload.title.trim() : "";
  if (!name) return null;
  const variantId = variantIdFromHref(listing.href);
  const variant = findVariant(payload.variants, variantId);
  return {
    id: listing.id,
    name,
    priceLabel: priceLabelFor(payload, variant, variantId),
    imageUrl: imageFor(payload, variant),
    href: listing.href,
  };
}

/** Visible stand-in for every listing when the feed cannot be read. */
export function peterStoneJewelryFallback(
  listings: readonly PeterStoneListing[] = PETER_STONE_LISTINGS,
): PeterStoneJewelryItem[] {
  return listings.map((listing) => ({
    status: "unavailable",
    id: listing.id,
    href: listing.href,
  }));
}

export async function loadPeterStoneJewelry(
  fetchImpl: typeof fetch = fetch,
): Promise<PeterStoneJewelryItem[]> {
  return Promise.all(PETER_STONE_LISTINGS.map((listing) => loadListing(listing, fetchImpl)));
}

async function loadListing(
  listing: PeterStoneListing,
  fetchImpl: typeof fetch,
): Promise<PeterStoneJewelryItem> {
  const unavailable: PeterStoneJewelryItem = {
    status: "unavailable",
    id: listing.id,
    href: listing.href,
  };
  const jsUrl = peterStoneProductJsUrl(listing.href);
  if (!jsUrl) return unavailable;
  try {
    const res = await fetchImpl(jsUrl, {
      headers: { Accept: "application/json" },
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return unavailable;
    const card = parsePeterStoneProduct(await res.json(), listing);
    if (!card) return unavailable;
    return { status: "ready", ...card };
  } catch {
    return unavailable;
  }
}

function variantIdFromHref(href: string): string | null {
  try {
    const id = new URL(href).searchParams.get("variant");
    return id && /^\d+$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

function findVariant(
  variants: unknown,
  variantId: string | null,
): Record<string, unknown> | undefined {
  if (!variantId || !Array.isArray(variants)) return undefined;
  return variants.find((item) => isRecord(item) && String(item.id) === variantId) as
    Record<string, unknown> | undefined;
}

function priceLabelFor(
  product: Record<string, unknown>,
  variant: Record<string, unknown> | undefined,
  variantId: string | null,
): string | null {
  if (variantId) {
    const cents = variant ? shopifyCents(variant.price) : null;
    return cents == null ? null : formatUsd(cents);
  }
  if (product.price_varies === true) return null;
  const cents = shopifyCents(product.price);
  return cents == null ? null : formatUsd(cents);
}

function imageFor(
  product: Record<string, unknown>,
  variant: Record<string, unknown> | undefined,
): string | null {
  const variantImage = variant ? imageSrc(variant.featured_image) : null;
  if (variantImage) return variantImage;
  const featured = imageSrc(product.featured_image);
  if (featured) return featured;
  if (Array.isArray(product.images)) {
    for (const image of product.images) {
      const src = imageSrc(image);
      if (src) return src;
    }
  }
  if (Array.isArray(product.media)) {
    for (const item of product.media) {
      if (!isRecord(item)) continue;
      const src = imageSrc(item.src);
      if (src) return src;
    }
  }
  return null;
}

function imageSrc(value: unknown): string | null {
  if (typeof value === "string") return absoluteHttps(value);
  if (isRecord(value)) return absoluteHttps(value.src);
  return null;
}

function absoluteHttps(value: unknown): string | null {
  if (typeof value !== "string" || !value) return null;
  if (value.startsWith("//")) return `https:${value}`;
  if (value.startsWith("https://")) return value;
  return null;
}

/** Shopify product `.js` prices are integer cents. */
function shopifyCents(value: unknown): number | null {
  if (typeof value === "number" && Number.isInteger(value)) return value;
  if (typeof value === "string" && /^\d+$/.test(value)) return Number(value);
  return null;
}

function formatUsd(cents: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value);
}
