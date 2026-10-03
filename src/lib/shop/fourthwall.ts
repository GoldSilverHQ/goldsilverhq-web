/**
 * Live merch for `/shop` from the Fourthwall public product feed.
 *
 * Official feed (no storefront token):
 *   https://goldsilverhq-shop.fourthwall.com/.well-known/merchant-center/rss.xml
 *
 * Checkout stays on Fourthwall:
 *   /cart/checkout?products=<variant-uuid>:1&currency=USD
 * The themed product page is still behind the shop password, so the card
 * does not link there.
 */

export const FOURTHWALL_SHOP_ORIGIN = "https://goldsilverhq-shop.fourthwall.com";

export const FOURTHWALL_PRODUCT_FEED = `${FOURTHWALL_SHOP_ORIGIN}/.well-known/merchant-center/rss.xml`;

const VARIANT_ID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export type FourthwallVariant = {
  id: string;
  /** Size or color label from the feed. Empty when the item has neither. */
  label: string;
  /** Price string as published, e.g. "12.00 USD". */
  price: string;
  currency: string;
  /** Display form of `price`, e.g. "$12.00". Falls back to the raw string. */
  priceLabel: string;
  imageUrl: string | null;
  availability: string;
  inStock: boolean;
};

export type FourthwallProduct = {
  id: string;
  title: string;
  /** Feed description only. Empty when Fourthwall sends none. */
  description: string;
  imageUrl: string | null;
  variants: FourthwallVariant[];
};

export function fourthwallCheckoutUrl(variantId: string, currency: string): string {
  const params = new URLSearchParams({
    products: `${variantId}:1`,
    currency: currency || "USD",
  });
  return `${FOURTHWALL_SHOP_ORIGIN}/cart/checkout?${params.toString()}`;
}

export function parseFourthwallFeed(xml: string): FourthwallProduct[] {
  const products = new Map<string, FourthwallProduct>();

  for (const block of xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)) {
    const item = block[1] ?? "";
    const variantId = tag(item, "id");
    const title = tag(item, "title");
    const price = tag(item, "price");
    if (!VARIANT_ID.test(variantId) || !title || !price) continue;

    const groupId = tag(item, "item_group_id") || variantId;
    const size = tag(item, "size");
    const color = tag(item, "color");
    const currency = currencyOf(price);
    const variant: FourthwallVariant = {
      id: variantId,
      label: size || color,
      price,
      currency,
      priceLabel: formatFeedPrice(price),
      imageUrl: absoluteUrl(tag(item, "image_link")),
      availability: tag(item, "availability"),
      inStock: /in stock/i.test(tag(item, "availability")),
    };

    const existing = products.get(groupId);
    if (existing) {
      existing.variants.push(variant);
      if (!existing.imageUrl && variant.imageUrl) existing.imageUrl = variant.imageUrl;
      if (!existing.description) existing.description = tag(item, "description");
      continue;
    }

    products.set(groupId, {
      id: groupId,
      title,
      description: tag(item, "description"),
      imageUrl: variant.imageUrl,
      variants: [variant],
    });
  }

  for (const product of products.values()) {
    const featured = defaultFourthwallVariant(product);
    if (featured?.imageUrl) product.imageUrl = featured.imageUrl;
  }

  return [...products.values()];
}

/** Largest printed size in the feed. Falls back to the first variant. */
export function defaultFourthwallVariant(
  product: FourthwallProduct,
): FourthwallVariant | undefined {
  let best = product.variants[0];
  let bestArea = best ? sizeArea(best.label) : null;
  for (const variant of product.variants) {
    const area = sizeArea(variant.label);
    if (area == null) continue;
    if (bestArea == null || area > bestArea) {
      best = variant;
      bestArea = area;
    }
  }
  return best;
}

export async function loadFourthwallProducts(
  fetchImpl: typeof fetch = fetch,
): Promise<FourthwallProduct[]> {
  const res = await fetchImpl(FOURTHWALL_PRODUCT_FEED, {
    headers: { Accept: "application/xml, text/xml" },
    cache: "no-store",
  });
  if (!res.ok) return [];
  return parseFourthwallFeed(await res.text());
}

function tag(block: string, name: string): string {
  const match = block.match(new RegExp(`<(?:g:)?${name}\\b[^>]*>([\\s\\S]*?)</(?:g:)?${name}>`, "i"));
  if (!match) return "";
  return decodeXml(stripCdata(match[1] ?? "").trim());
}

function stripCdata(value: string): string {
  const match = value.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/);
  return match ? match[1] ?? "" : value.replace(/<[^>]+>/g, "");
}

function decodeXml(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'");
}

function currencyOf(price: string): string {
  return price.match(/\b([A-Z]{3})\b/)?.[1] ?? "USD";
}

function formatFeedPrice(price: string): string {
  const match = price.match(/^(\d+(?:\.\d+)?)\s+([A-Z]{3})$/);
  if (!match) return price;
  const amount = Number(match[1]);
  const currency = match[2] ?? "USD";
  if (!Number.isFinite(amount)) return price;
  try {
    return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
  } catch {
    return price;
  }
}

function sizeArea(label: string): number | null {
  const match = label.match(/(\d+(?:\.\d+)?)\s*(?:["″']|in)?\s*[x×]\s*(\d+(?:\.\d+)?)/i);
  if (!match) return null;
  const width = Number(match[1]);
  const height = Number(match[2]);
  if (!Number.isFinite(width) || !Number.isFinite(height)) return null;
  return width * height;
}

function absoluteUrl(value: string): string | null {
  if (!value) return null;
  if (value.startsWith("https://") || value.startsWith("http://")) return value;
  return null;
}
