import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  JEWELRY_AFFILIATE_DISCLOSURE,
  PETER_STONE_LISTINGS,
  loadPeterStoneJewelry,
  parsePeterStoneProduct,
  peterStoneJewelryFallback,
  peterStoneProductJsUrl,
} from "./peter-stone.ts";

const root = dirname(fileURLToPath(import.meta.url));

const PEACE_HREF =
  "https://www.peterstone.com/collections/empowering-word-jewelry/products/peace-infinity-heart-solid-white-gold-ring-wri2580?ref=qsrtsqfn&variant=46021529993387";
const CELTIC_HREF =
  "https://www.peterstone.com/collections/best-selling-jewelry/products/love-in-interconnectedness-sterling-silver-celtic-triquetra-knot-ring-with-gemstone-tr1420?ref=qsrtsqfn&variant=29579490033728";
const GOLD_HREF =
  "https://www.peterstone.com/products/celtic-knotwork-solid-gold-ring-with-heart-gemstone-gri2308?ref=qsrtsqfn&variant=45577756606635";

const peace = {
  title: "Peace Infinity Heart Solid White Gold Ring",
  price: 95000,
  price_varies: true,
  featured_image: "//cdn.shopify.com/s/files/1/0061/1522/9760/files/TRI2580-0.jpg?v=1755762272",
  variants: [
    { id: 46021529993387, price: 95000, featured_image: null },
    { id: 46021530091691, price: 105000, featured_image: null },
  ],
};

const celtic = {
  title: "Love in interconnectedness ~ Sterling Silver Celtic Triquetra Knot Ring with Gemstone",
  price: 8897,
  price_varies: true,
  featured_image:
    "//cdn.shopify.com/s/files/1/0061/1522/9760/products/TR1420-GA_e955774e-8eba-48fe-899b-fac499b1dfaa.jpg?v=1634036444",
  variants: [
    {
      id: 29579490033728,
      price: 10797,
      featured_image: {
        src: "https://cdn.shopify.com/s/files/1/0061/1522/9760/products/TR1420-0.jpg?v=1621504114",
      },
    },
    { id: 29579490066496, price: 8897, featured_image: null },
  ],
};

const gold = {
  title: "Celtic Knotwork Solid Yellow Gold Ring With Heart Gemstone",
  price: 76000,
  price_varies: true,
  featured_image: "//cdn.shopify.com/s/files/1/0061/1522/9760/files/GRI2308-AM.jpg?v=1756975626",
  variants: [
    {
      id: 45577756606635,
      price: 76000,
      featured_image: {
        src: "https://cdn.shopify.com/s/files/1/0061/1522/9760/files/GRI2308-AM.jpg?v=1756975626",
      },
    },
    { id: 45577756639403, price: 100000, featured_image: null },
  ],
};

describe("peter stone jewelry", () => {
  it("ships the three affiliate rings and keeps each ref and variant", () => {
    assert.deepEqual(
      PETER_STONE_LISTINGS.map((item) => item.href),
      [PEACE_HREF, CELTIC_HREF, GOLD_HREF],
    );
    assert.deepEqual(
      PETER_STONE_LISTINGS.map((item) => item.id),
      ["wri2580", "tr1420", "gri2308"],
    );
    assert.ok(PETER_STONE_LISTINGS.every((item) => !item.href.includes("pr_")));
  });

  it("reads each listing from that product's public Shopify feed", () => {
    assert.equal(
      peterStoneProductJsUrl(PEACE_HREF),
      "https://www.peterstone.com/products/peace-infinity-heart-solid-white-gold-ring-wri2580.js",
    );
    assert.equal(
      peterStoneProductJsUrl(CELTIC_HREF),
      "https://www.peterstone.com/products/love-in-interconnectedness-sterling-silver-celtic-triquetra-knot-ring-with-gemstone-tr1420.js",
    );
    assert.equal(
      peterStoneProductJsUrl(GOLD_HREF),
      "https://www.peterstone.com/products/celtic-knotwork-solid-gold-ring-with-heart-gemstone-gri2308.js",
    );
    assert.equal(peterStoneProductJsUrl("https://example.com/products/ring"), null);
  });

  it("uses the linked variant price and keeps a native product image", () => {
    const card = parsePeterStoneProduct(peace, PETER_STONE_LISTINGS[0]!);
    assert.equal(card?.name, "Peace Infinity Heart Solid White Gold Ring");
    assert.equal(card?.priceLabel, "$950.00");
    assert.equal(
      card?.imageUrl,
      "https://cdn.shopify.com/s/files/1/0061/1522/9760/files/TRI2580-0.jpg?v=1755762272",
    );
    assert.equal(card?.href, PEACE_HREF);
  });

  it("uses the variant price and image when they differ from the product default", () => {
    const card = parsePeterStoneProduct(celtic, PETER_STONE_LISTINGS[1]!);
    assert.equal(
      card?.name,
      "Love in interconnectedness ~ Sterling Silver Celtic Triquetra Knot Ring with Gemstone",
    );
    assert.equal(card?.priceLabel, "$107.97");
    assert.equal(
      card?.imageUrl,
      "https://cdn.shopify.com/s/files/1/0061/1522/9760/products/TR1420-0.jpg?v=1621504114",
    );
    assert.equal(card?.href, CELTIC_HREF);
  });

  it("uses the gold ring variant price even when another size costs more", () => {
    const card = parsePeterStoneProduct(gold, PETER_STONE_LISTINGS[2]!);
    assert.equal(card?.name, "Celtic Knotwork Solid Yellow Gold Ring With Heart Gemstone");
    assert.equal(card?.priceLabel, "$760.00");
    assert.equal(
      card?.imageUrl,
      "https://cdn.shopify.com/s/files/1/0061/1522/9760/files/GRI2308-AM.jpg?v=1756975626",
    );
    assert.equal(card?.href, GOLD_HREF);
  });

  it("omits a price when the linked variant is missing and the price varies", () => {
    const card = parsePeterStoneProduct(peace, {
      id: "wri2580",
      href: PEACE_HREF.replace("46021529993387", "999"),
    });
    assert.equal(card?.priceLabel, null);
    assert.equal(card?.name, "Peace Infinity Heart Solid White Gold Ring");
  });

  it("keeps a visible fallback for every listing when the feed fails", async () => {
    const items = await loadPeterStoneJewelry(async () => {
      throw new Error("peter stone down");
    });
    assert.deepEqual(items, peterStoneJewelryFallback());
    assert.equal(items.length, PETER_STONE_LISTINGS.length);
    assert.ok(
      items.every((item) => item.status === "unavailable" && item.href.includes("ref=qsrtsqfn")),
    );
  });

  it("loads one card per listing from the product feed", async () => {
    const items = await loadPeterStoneJewelry(async (input) => {
      const url = String(input);
      const body = url.includes("wri2580") ? peace : url.includes("gri2308") ? gold : celtic;
      return new Response(JSON.stringify(body), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    });
    assert.equal(items.length, 3);
    assert.ok(items.every((item) => item.status === "ready"));
    if (items[0]?.status === "ready") assert.equal(items[0].priceLabel, "$950.00");
    if (items[1]?.status === "ready") assert.equal(items[1].priceLabel, "$107.97");
    if (items[2]?.status === "ready") assert.equal(items[2].priceLabel, "$760.00");
  });

  it("shows the rings on the jewelry panel and leaves ebook and merch alone", () => {
    assert.equal(
      JEWELRY_AFFILIATE_DISCLOSURE,
      "Affiliate link. Peter Stone sells and ships this. I may earn a commission.",
    );
    const shop = readFileSync(join(root, "../../routes/shop.tsx"), "utf8");
    assert.match(shop, /loadPeterStoneJewelry/);
    assert.match(shop, /JEWELRY_AFFILIATE_DISCLOSURE/);
    assert.match(shop, /View at Peter Stone/);
    assert.match(shop, /id="shop-panel-jewelry"/);
    assert.match(shop, /<ComingSoon id="ebook"/);
    assert.equal(shop.includes('<ComingSoon id="jewelry"'), false);
    assert.equal(shop.includes("qsrtsqfn"), false);
    assert.equal(shop.includes("$950.00"), false);
    assert.equal(shop.includes("$107.97"), false);
    assert.equal(shop.includes("$760.00"), false);
    assert.equal(shop.includes("object-cover"), false);
    assert.match(shop, /h-auto w-full/);
    assert.match(shop, /lg:grid-cols-3/);
    assert.equal(shop.includes("/cart/checkout"), false);
    const source = readFileSync(join(root, "peter-stone.ts"), "utf8");
    assert.equal(source.includes("PETER_STONE_LISTINGS"), true);
    assert.equal((source.match(/href: "https:\/\/www\.peterstone\.com\//g) ?? []).length, 3);
  });
});
