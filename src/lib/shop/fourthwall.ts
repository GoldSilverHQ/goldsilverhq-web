/**
 * Live merch for `/shop` from the Fourthwall public product feed.
 *
 * Official feed (no storefront token):
 *   https://goldsilverhq-shop.fourthwall.com/.well-known/merchant-center/rss.xml
 *
 * The public product page is the feed's <g:link>. A selected size is
 * ?variant=<variant-uuid> on that page.
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
  /** Product page from the feed's link. Null when the feed has none. */
  productUrl: string | null;
  /**
   * Stable merch type such as "poster". "other" when nothing in the feed
   * identifies a type. Filters are built only from ids that have products.
   */
  categoryId: string;
  /** Human label such as "Poster" or "Framed poster". */
  categoryLabel: string;
  variants: FourthwallVariant[];
};

/** Product page for one size. Null unless `productUrl` is a Fourthwall product path. */
export function fourthwallProductUrl(productUrl: string, variantId: string): string | null {
  const page = productPageUrl(productUrl);
  if (!page || !VARIANT_ID.test(variantId)) return null;
  const url = new URL(page);
  url.searchParams.set("variant", variantId);
  return url.toString();
}

export function fourthwallCheckoutUrl(variantId: string, currency: string): string {
  const params = new URLSearchParams({
    products: `${variantId}:1`,
    currency: currency || "USD",
  });
  return `${FOURTHWALL_SHOP_ORIGIN}/cart/checkout?${params.toString()}`;
}

export function parseFourthwallFeed(xml: string): FourthwallProduct[] {
  const products = new Map<string, FourthwallProduct>();
  const variantMeta = new Map<FourthwallVariant, { size: string; color: string }>();

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

    const pageUrl = productPageUrl(tag(item, "link"));
    variantMeta.set(variant, { size, color });
    const existing = products.get(groupId);
    if (existing) {
      existing.variants.push(variant);
      if (!existing.imageUrl && variant.imageUrl) existing.imageUrl = variant.imageUrl;
      if (!existing.description) existing.description = tag(item, "description");
      if (!existing.productUrl && pageUrl) existing.productUrl = pageUrl;
      continue;
    }

    products.set(groupId, {
      id: groupId,
      title,
      description: tag(item, "description"),
      imageUrl: variant.imageUrl,
      productUrl: pageUrl,
      ...categoryForItem({
        title,
        productUrl: pageUrl,
        productType: tag(item, "product_type"),
        googleCategory: tag(item, "google_product_category"),
      }),
      variants: [variant],
    });
  }

  for (const product of products.values()) {
    applyVariantLabels(product, variantMeta);
    const featured = defaultFourthwallVariant(product);
    if (featured?.imageUrl) product.imageUrl = featured.imageUrl;
  }

  return [...products.values()];
}

/**
 * Largest variant: printed area (the 20×30 portrait case), then volume
 * for oz/ml sizes such as mugs, then the first variant.
 */
export function defaultFourthwallVariant(
  product: FourthwallProduct,
): FourthwallVariant | undefined {
  let bestArea: FourthwallVariant | undefined;
  let bestAreaValue = -1;
  let bestVolume: FourthwallVariant | undefined;
  let bestVolumeValue = -1;
  for (const variant of product.variants) {
    const area = sizeArea(variant.label);
    if (area != null && area > bestAreaValue) {
      bestArea = variant;
      bestAreaValue = area;
    }
    const volume = sizeVolume(variant.label);
    if (volume != null && volume > bestVolumeValue) {
      bestVolume = variant;
      bestVolumeValue = volume;
    }
  }
  return bestArea ?? bestVolume ?? product.variants[0];
}

/** Categories that actually have products, in shop display order. */
export function merchCategories(products: FourthwallProduct[]): { id: string; label: string }[] {
  const present = new Map<string, string>();
  for (const product of products) {
    if (!product.categoryId || !product.categoryLabel) continue;
    if (!present.has(product.categoryId)) present.set(product.categoryId, product.categoryLabel);
  }
  const ordered = CATEGORY_DISPLAY_ORDER.filter((id) => present.has(id)).map((id) => ({
    id,
    label: present.get(id) ?? id,
  }));
  const rest = [...present.entries()]
    .filter(([id]) => !CATEGORY_DISPLAY_ORDER.includes(id))
    .map(([id, label]) => ({ id, label }))
    .sort((a, b) => a.label.localeCompare(b.label, "en"));
  return [...ordered, ...rest];
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
  const match = block.match(
    new RegExp(`<(?:g:)?${name}\\b[^>]*>([\\s\\S]*?)</(?:g:)?${name}>`, "i"),
  );
  if (!match) return "";
  return decodeXml(stripCdata(match[1] ?? "").trim());
}

function stripCdata(value: string): string {
  const match = value.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/);
  return match ? (match[1] ?? "") : value.replace(/<[^>]+>/g, "");
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

/**
 * This store's Merchant Center RSS does not send g:product_type or
 * g:google_product_category. Category is the first type phrase below found
 * in the title or the /products/ slug (hyphens treated as spaces), so
 * "framed poster" stays distinct from "poster". An explicit g:product_type
 * wins when the feed sends one. Items that still match nothing are "Other"
 * and remain visible under All.
 */
const TYPE_RULES: { id: string; label: string; pattern: RegExp }[] = [
  { id: "framed-poster", label: "Framed poster", pattern: /(?:^|\s)framed\s+posters?(?:\s|$)/i },
  { id: "art-print", label: "Art print", pattern: /(?:^|\s)art\s+prints?(?:\s|$)/i },
  { id: "phone-case", label: "Phone case", pattern: /(?:^|\s)phone\s+cases?(?:\s|$)/i },
  { id: "t-shirt", label: "T-shirt", pattern: /(?:^|\s)t[\s-]?shirts?(?:\s|$)/i },
  { id: "hoodie", label: "Hoodie", pattern: /(?:^|\s)hoodies?(?:\s|$)/i },
  { id: "sweatshirt", label: "Sweatshirt", pattern: /(?:^|\s)sweatshirts?(?:\s|$)/i },
  { id: "sticker", label: "Sticker", pattern: /(?:^|\s)stickers?(?:\s|$)/i },
  { id: "canvas", label: "Canvas", pattern: /(?:^|\s)canvas(?:es)?(?:\s|$)/i },
  { id: "poster", label: "Poster", pattern: /(?:^|\s)posters?(?:\s|$)/i },
  { id: "mug", label: "Mug", pattern: /(?:^|\s)mugs?(?:\s|$)/i },
  { id: "tote", label: "Tote", pattern: /(?:^|\s)totes?(?:\s|$)/i },
  { id: "notebook", label: "Notebook", pattern: /(?:^|\s)notebooks?(?:\s|$)/i },
  { id: "puzzle", label: "Puzzle", pattern: /(?:^|\s)puzzles?(?:\s|$)/i },
  { id: "magnet", label: "Magnet", pattern: /(?:^|\s)magnets?(?:\s|$)/i },
  { id: "hat", label: "Hat", pattern: /(?:^|\s)hats?(?:\s|$)/i },
  { id: "print", label: "Print", pattern: /(?:^|\s)prints?(?:\s|$)/i },
];

const CATEGORY_DISPLAY_ORDER = [
  "poster",
  "framed-poster",
  "art-print",
  "print",
  "canvas",
  "mug",
  "t-shirt",
  "hoodie",
  "sweatshirt",
  "sticker",
  "tote",
  "hat",
  "phone-case",
  "notebook",
  "puzzle",
  "magnet",
  "other",
];

const OTHER_CATEGORY = { categoryId: "other", categoryLabel: "Other" };

function categoryForItem(input: {
  title: string;
  productUrl: string | null;
  productType: string;
  googleCategory: string;
}): { categoryId: string; categoryLabel: string } {
  const productType = input.productType.trim();
  if (productType && !/^\d+$/.test(productType)) {
    const known = matchKnownType(productType);
    if (known) return known;
    const label = humanTypeLabel(productType);
    const id = typeIdFromLabel(label);
    if (label && id) return { categoryId: id, categoryLabel: label };
  }
  const fromTitle = matchKnownType(`${input.title} ${productSlug(input.productUrl)}`);
  if (fromTitle) return fromTitle;
  const googleCategory = input.googleCategory.trim();
  if (googleCategory && !/^\d+$/.test(googleCategory)) {
    const fromGoogle = matchKnownType(googleCategory);
    if (fromGoogle) return fromGoogle;
  }
  return OTHER_CATEGORY;
}

function matchKnownType(text: string): { categoryId: string; categoryLabel: string } | null {
  const normalized = normalizeTypeText(text);
  if (!normalized) return null;
  for (const rule of TYPE_RULES) {
    if (rule.pattern.test(normalized)) {
      return { categoryId: rule.id, categoryLabel: rule.label };
    }
  }
  return null;
}

function normalizeTypeText(value: string): string {
  return value
    .toLowerCase()
    .replace(/[_/]+/g, " ")
    .replace(/-+/g, " ")
    .replace(/[^\p{L}\p{N}\s]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function productSlug(productUrl: string | null): string {
  if (!productUrl) return "";
  try {
    const slug = new URL(productUrl).pathname.split("/").filter(Boolean).pop() ?? "";
    return slug.replace(/-\d+$/, "");
  } catch {
    return "";
  }
}

function humanTypeLabel(value: string): string {
  const cleaned = value.replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  if (!cleaned || /^\d+$/.test(cleaned)) return "";
  return cleaned.replace(
    /\S+/g,
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  );
}

function typeIdFromLabel(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function applyVariantLabels(
  product: FourthwallProduct,
  variantMeta: Map<FourthwallVariant, { size: string; color: string }>,
): void {
  const colors = new Set(
    product.variants.map((variant) => variantMeta.get(variant)?.color ?? "").filter(Boolean),
  );
  const showColor = colors.size > 1;
  for (const variant of product.variants) {
    const meta = variantMeta.get(variant);
    if (!meta) continue;
    variant.label =
      meta.size && showColor && meta.color
        ? `${meta.size} · ${meta.color}`
        : meta.size || meta.color;
  }
}

function sizeVolume(label: string): number | null {
  const match = label.match(/(\d+(?:\.\d+)?)\s*(oz|ml)\b/i);
  if (!match) return null;
  const amount = Number(match[1]);
  if (!Number.isFinite(amount)) return null;
  return match[2]?.toLowerCase() === "ml" ? amount : amount * 29.5735;
}

function sizeArea(label: string): number | null {
  const match = label.match(/(\d+(?:\.\d+)?)\s*(?:["″']|in)?\s*[x×]\s*(\d+(?:\.\d+)?)/i);
  if (!match) return null;
  const width = Number(match[1]);
  const height = Number(match[2]);
  if (!Number.isFinite(width) || !Number.isFinite(height)) return null;
  return width * height;
}

function productPageUrl(value: string): string | null {
  const absolute = absoluteUrl(value);
  if (!absolute) return null;
  let url: URL;
  try {
    url = new URL(absolute);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") return null;
  if (url.pathname === "/password" || url.pathname.startsWith("/password/")) return null;
  if (url.pathname.startsWith("/cart/")) return null;
  if (!/^\/products\/[^/]+/.test(url.pathname)) return null;
  url.search = "";
  url.hash = "";
  return url.toString();
}

function absoluteUrl(value: string): string | null {
  if (!value) return null;
  if (value.startsWith("https://") || value.startsWith("http://")) return value;
  return null;
}
