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
const WEDDING_HREF =
  "https://www.peterstone.com/collections/gold-accented-rings/products/celtic-knotwork-silver-and-gold-accent-wedding-ring-mri2353?ref=qsrtsqfn&variant=42310962839723";
const TRISKELION_HREF =
  "https://www.peterstone.com/collections/gold-accented-rings/products/triskelion-spiral-silver-and-gold-ring-mri1585?ref=qsrtsqfn&variant=41094166413483";
const ANGEL_HREF =
  "https://www.peterstone.com/collections/gold-accented-rings/products/angel-wings-infinity-silver-gold?ref=qsrtsqfn&variant=30003838222400";
const MICHAEL_HREF =
  "https://www.peterstone.com/collections/best-sellers/products/sigil-of-the-archangel-michael-solid-gold-pendant?ref=qsrtsqfn&variant=29999828500544";
const ARCHANGELS_HREF =
  "https://www.peterstone.com/collections/best-sellers/products/the-seven-archangels-silver-pendant-tpd5154?ref=qsrtsqfn&variant=43294323671211";
const BANGLE_HREF =
  "https://www.peterstone.com/collections/best-sellers/products/seven-archangels-bracelet-tba154?ref=qsrtsqfn&variant=41710585577643";
const PHOENIX_HREF =
  "https://www.peterstone.com/collections/best-sellers/products/soar-to-the-heavens-flying-phoenix-solid-gold-pendant?ref=qsrtsqfn&variant=30001670520896";
const CLADDAGH_HREF =
  "https://www.peterstone.com/collections/best-sellers/products/celtic-claddagh-love-silver-commitment-band-ring-tri1942?ref=qsrtsqfn&variant=31164646654016";
const MAJESTIC_HREF =
  "https://www.peterstone.com/collections/best-sellers/products/majestic-phoenix-silver-and-gold-pendant-mpd2916?ref=qsrtsqfn&variant=26324951728192";
const ANKH_HREF =
  "https://www.peterstone.com/collections/best-sellers/products/egyptian-ankh-solid-gold-pendant-gpd5504?ref=qsrtsqfn&variant=43312411541675";
const THOR_HREF =
  "https://www.peterstone.com/collections/best-sellers/products/thors-hammer-solid-gold-pendant-gpd864?ref=qsrtsqfn&variant=41098246127787";
const BORRE_HREF =
  "https://www.peterstone.com/collections/best-sellers/products/viking-borre-knot-solid-gold-ring-gri573?ref=qsrtsqfn&variant=39395214852267";
const TRIPLE_MOON_HREF =
  "https://www.peterstone.com/collections/best-sellers/products/celtic-triple-moon-bracelet-tbg760?ref=qsrtsqfn&variant=26323449249856";
const FEATHER_HREF =
  "https://www.peterstone.com/collections/best-sellers/products/dali-inspired-feather-ring-tri580?ref=qsrtsqfn&variant=42711829643435";
const TRINITY_HREF =
  "https://www.peterstone.com/collections/best-sellers/products/the-majestic-power-of-three-solid-gold-trinity-goddess-pendant-gpd5150?ref=qsrtsqfn&variant=31143344701504";

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

const wedding = {
  title: "Celtic Knotwork Sterling Silver with 14K Gold Vermeil Accent Wedding Ring",
  price: 33797,
  price_varies: true,
  featured_image: "//cdn.shopify.com/s/files/1/0061/1522/9760/products/MRI2353-0.jpg?v=1720542363",
  variants: [
    { id: 42310962839723, price: 33797, featured_image: null },
    { id: 42310963200171, price: 35297, featured_image: null },
  ],
};

const triskelion = {
  title: "Triskelion Spiral Sterling Silver and 14K Gold Accent Ring",
  price: 11097,
  price_varies: true,
  featured_image: "//cdn.shopify.com/s/files/1/0061/1522/9760/products/MRI1585-0.jpg?v=1720540568",
  variants: [
    { id: 41094166413483, price: 11097, featured_image: null },
    { id: 41094166773931, price: 12097, featured_image: null },
  ],
};

const angel = {
  title: "Angel Wings with Infinity Sterling Silver with 14K Gold Vermeil Accent Ring",
  price: 29097,
  price_varies: true,
  featured_image: "//cdn.shopify.com/s/files/1/0061/1522/9760/products/MRI1711-0.jpg?v=1621396691",
  variants: [
    { id: 30003838222400, price: 29097, featured_image: null },
    { id: 30003838582848, price: 30497, featured_image: null },
  ],
};

const michael = {
  title: "Sigil of the Archangel Michael Solid Gold Pendant",
  price: 220000,
  price_varies: true,
  featured_image: "//cdn.shopify.com/s/files/1/0061/1522/9760/files/GPD2818-CH.jpg?v=1720539257",
  variants: [
    {
      id: 29999828500544,
      price: 285000,
      featured_image: {
        src: "https://cdn.shopify.com/s/files/1/0061/1522/9760/files/GPD2818-CH.jpg?v=1720539257",
      },
    },
    { id: 43643275870379, price: 220000, featured_image: null },
  ],
};

const archangels = {
  title: "Seven Archangels Sterling Silver Pendant For Divine Guidance And Spiritual Protection",
  price: 54597,
  price_varies: true,
  featured_image: "//cdn.shopify.com/s/files/1/0061/1522/9760/files/TSE884-0.jpg?v=1720538783",
  variants: [
    {
      id: 43294323671211,
      price: 56397,
      featured_image: {
        src: "https://cdn.shopify.com/s/files/1/0061/1522/9760/files/TSE884-0.jpg?v=1720538783",
      },
    },
    { id: 43294323703979, price: 54597, featured_image: null },
  ],
};

const bangle = {
  title:
    "Sterling Silver Seven Archangels Bangle Engraved With Michael Gabriel Raphael Uriel Selaphiel Jegudiel Barachiel",
  price: 74997,
  price_varies: true,
  featured_image:
    "//cdn.shopify.com/s/files/1/0061/1522/9760/files/SevenArchangelsBangleTBA154.jpg?v=1760356206",
  variants: [
    { id: 41710585577643, price: 74997, featured_image: null },
    { id: 41710585675947, price: 79497, featured_image: null },
  ],
};

const phoenix = {
  title:
    "Soar to the Heavens Flying Phoenix Pendant in Solid 14K Gold Elegant Statement Necklace Jewelry Gift For Her",
  price: 110000,
  price_varies: true,
  featured_image:
    "//cdn.shopify.com/s/files/1/0061/1522/9760/files/GPD5072-0_e489cedb-82f8-4b60-846e-dca19ac865db.jpg?v=1770712191",
  variants: [
    { id: 30001670520896, price: 110000, featured_image: null },
    { id: 30001705091136, price: 140000, featured_image: null },
  ],
};

const claddagh = {
  title: "Celtic Claddagh Love Sterling Silver Commitment Band Ring",
  price: 22797,
  price_varies: true,
  featured_image: "//cdn.shopify.com/s/files/1/0061/1522/9760/products/TRI1942-0.jpg?v=1621397885",
  variants: [
    {
      id: 31164646654016,
      price: 22997,
      featured_image: {
        src: "https://cdn.shopify.com/s/files/1/0061/1522/9760/products/TRI1942-EG.jpg?v=1621397894",
      },
    },
    { id: 31170333376576, price: 715697, featured_image: null },
  ],
};

const majestic = {
  title:
    "Majestic Phoenix Pendant In Sterling Silver And 14K Gold Accent Exquisite Sterling Jewelry Collection",
  price: 50597,
  price_varies: false,
  featured_image: "//cdn.shopify.com/s/files/1/0061/1522/9760/products/mpd2916-0.jpg?v=1634030053",
  variants: [
    {
      id: 26324951728192,
      price: 50597,
      featured_image: {
        src: "https://cdn.shopify.com/s/files/1/0061/1522/9760/products/mpd2916-0.jpg?v=1634030053",
      },
    },
  ],
};

const ankh = {
  title: "Egyptian Ankh Solid Gold Pendant",
  price: 30000,
  price_varies: true,
  featured_image:
    "//cdn.shopify.com/s/files/1/0061/1522/9760/files/GPD5504-0_56ed29f9-79e0-44d6-a78a-5162247009f8.jpg?v=1720540665",
  variants: [
    {
      id: 43312411541675,
      price: 60000,
      featured_image: {
        src: "https://cdn.shopify.com/s/files/1/0061/1522/9760/files/GSE925-0.jpg?v=1720540654",
      },
    },
    { id: 41121496170667, price: 30000, featured_image: null },
  ],
};

const thor = {
  title:
    "Thors Hammer Solid Gold Pendant Embrace The Power Of The Norse God Symbol Of Strength And Courage",
  price: 85000,
  price_varies: true,
  featured_image: "//cdn.shopify.com/s/files/1/0061/1522/9760/products/GPD864-0.jpg?v=1720539599",
  variants: [
    { id: 41098246127787, price: 85000, featured_image: null },
    { id: 41098246160555, price: 105000, featured_image: null },
  ],
};

const borre = {
  title:
    "Viking Borre Knot Solid Gold Ring Fine Viking Inspired Jewelry With Bold Clean Lines And Distinctive Design",
  price: 149000,
  price_varies: true,
  featured_image: "//cdn.shopify.com/s/files/1/0061/1522/9760/products/GRI573-14K.jpg?v=1634037828",
  variants: [
    {
      id: 39395214852267,
      price: 149000,
      featured_image: {
        src: "https://cdn.shopify.com/s/files/1/0061/1522/9760/products/GRI573-14K.jpg?v=1634037828",
      },
    },
    { id: 39395214885035, price: 169000, featured_image: null },
  ],
};

const tripleMoon = {
  title: "Celtic Blue Moon Sterling Silver Cuff Bracelet With Gemstone Centerpiece Design",
  price: 55497,
  price_varies: true,
  featured_image: "//cdn.shopify.com/s/files/1/0061/1522/9760/products/tbg760-0.jpg?v=1634027929",
  variants: [
    {
      id: 26323449249856,
      price: 55497,
      featured_image: {
        src: "https://cdn.shopify.com/s/files/1/0061/1522/9760/products/tbg760-am_1.jpg?v=1634027933",
      },
    },
    { id: 26323449741376, price: 67197, featured_image: null },
  ],
};

const feather = {
  title: "Graceful and free ~ Dali-inspired fine Sterling Silver Ring with Citrine gemstones",
  price: 34397,
  price_varies: true,
  featured_image: "//cdn.shopify.com/s/files/1/0061/1522/9760/files/TRI580-SHOT-GMN.jpg?v=1760373864",
  variants: [
    {
      id: 42711829643435,
      price: 34397,
      featured_image: {
        src: "https://cdn.shopify.com/s/files/1/0061/1522/9760/products/tri580-abci.jpg?v=1760373864",
      },
    },
    { id: 1, price: 959297, featured_image: null },
  ],
};

const trinity = {
  title: "Solid Gold Trinity Goddess Pendant Elegant Triquetra Celtic Knot Jewelry For Women",
  price: 159000,
  price_varies: false,
  featured_image: "//cdn.shopify.com/s/files/1/0061/1522/9760/products/GPD5150-0.jpg?v=1634036938",
  variants: [{ id: 31143344701504, price: 159000, featured_image: null }],
};

describe("peter stone jewelry", () => {
  it("ships the eighteen affiliate pieces and keeps each ref and variant", () => {
    assert.deepEqual(
      PETER_STONE_LISTINGS.map((item) => item.href),
      [
        PEACE_HREF,
        CELTIC_HREF,
        GOLD_HREF,
        WEDDING_HREF,
        TRISKELION_HREF,
        ANGEL_HREF,
        MICHAEL_HREF,
        ARCHANGELS_HREF,
        BANGLE_HREF,
        PHOENIX_HREF,
        CLADDAGH_HREF,
        MAJESTIC_HREF,
        ANKH_HREF,
        THOR_HREF,
        BORRE_HREF,
        TRIPLE_MOON_HREF,
        FEATHER_HREF,
        TRINITY_HREF,
      ],
    );
    assert.deepEqual(
      PETER_STONE_LISTINGS.map((item) => item.id),
      [
        "wri2580",
        "tr1420",
        "gri2308",
        "mri2353",
        "mri1585",
        "mri1711",
        "gpd2818",
        "tpd5154",
        "tba154",
        "gpd5072",
        "tri1942",
        "mpd2916",
        "gpd5504",
        "gpd864",
        "gri573",
        "tbg760",
        "tri580",
        "gpd5150",
      ],
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
    assert.equal(
      peterStoneProductJsUrl(WEDDING_HREF),
      "https://www.peterstone.com/products/celtic-knotwork-silver-and-gold-accent-wedding-ring-mri2353.js",
    );
    assert.equal(
      peterStoneProductJsUrl(TRISKELION_HREF),
      "https://www.peterstone.com/products/triskelion-spiral-silver-and-gold-ring-mri1585.js",
    );
    assert.equal(
      peterStoneProductJsUrl(ANGEL_HREF),
      "https://www.peterstone.com/products/angel-wings-infinity-silver-gold.js",
    );
    assert.equal(
      peterStoneProductJsUrl(MICHAEL_HREF),
      "https://www.peterstone.com/products/sigil-of-the-archangel-michael-solid-gold-pendant.js",
    );
    assert.equal(
      peterStoneProductJsUrl(ARCHANGELS_HREF),
      "https://www.peterstone.com/products/the-seven-archangels-silver-pendant-tpd5154.js",
    );
    assert.equal(
      peterStoneProductJsUrl(BANGLE_HREF),
      "https://www.peterstone.com/products/seven-archangels-bracelet-tba154.js",
    );
    assert.equal(
      peterStoneProductJsUrl(PHOENIX_HREF),
      "https://www.peterstone.com/products/soar-to-the-heavens-flying-phoenix-solid-gold-pendant.js",
    );
    assert.equal(
      peterStoneProductJsUrl(CLADDAGH_HREF),
      "https://www.peterstone.com/products/celtic-claddagh-love-silver-commitment-band-ring-tri1942.js",
    );
    assert.equal(
      peterStoneProductJsUrl(MAJESTIC_HREF),
      "https://www.peterstone.com/products/majestic-phoenix-silver-and-gold-pendant-mpd2916.js",
    );
    assert.equal(
      peterStoneProductJsUrl(ANKH_HREF),
      "https://www.peterstone.com/products/egyptian-ankh-solid-gold-pendant-gpd5504.js",
    );
    assert.equal(
      peterStoneProductJsUrl(THOR_HREF),
      "https://www.peterstone.com/products/thors-hammer-solid-gold-pendant-gpd864.js",
    );
    assert.equal(
      peterStoneProductJsUrl(BORRE_HREF),
      "https://www.peterstone.com/products/viking-borre-knot-solid-gold-ring-gri573.js",
    );
    assert.equal(
      peterStoneProductJsUrl(TRIPLE_MOON_HREF),
      "https://www.peterstone.com/products/celtic-triple-moon-bracelet-tbg760.js",
    );
    assert.equal(
      peterStoneProductJsUrl(FEATHER_HREF),
      "https://www.peterstone.com/products/dali-inspired-feather-ring-tri580.js",
    );
    assert.equal(
      peterStoneProductJsUrl(TRINITY_HREF),
      "https://www.peterstone.com/products/the-majestic-power-of-three-solid-gold-trinity-goddess-pendant-gpd5150.js",
    );
    assert.equal(peterStoneProductJsUrl("https://example.com/products/ring"), null);
    assert.equal(peterStoneProductJsUrl("https://peterstone.goaffpro.com/products"), null);
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

  it("uses the wedding ring size-4 price and the product image", () => {
    const card = parsePeterStoneProduct(wedding, PETER_STONE_LISTINGS[3]!);
    assert.equal(
      card?.name,
      "Celtic Knotwork Sterling Silver with 14K Gold Vermeil Accent Wedding Ring",
    );
    assert.equal(card?.priceLabel, "$337.97");
    assert.equal(
      card?.imageUrl,
      "https://cdn.shopify.com/s/files/1/0061/1522/9760/products/MRI2353-0.jpg?v=1720542363",
    );
    assert.equal(card?.href, WEDDING_HREF);
  });

  it("uses the triskelion ring size-4 price and the product image", () => {
    const card = parsePeterStoneProduct(triskelion, PETER_STONE_LISTINGS[4]!);
    assert.equal(card?.name, "Triskelion Spiral Sterling Silver and 14K Gold Accent Ring");
    assert.equal(card?.priceLabel, "$110.97");
    assert.equal(
      card?.imageUrl,
      "https://cdn.shopify.com/s/files/1/0061/1522/9760/products/MRI1585-0.jpg?v=1720540568",
    );
    assert.equal(card?.href, TRISKELION_HREF);
  });

  it("uses the angel-wings ring size-4 price and the product image", () => {
    const card = parsePeterStoneProduct(angel, PETER_STONE_LISTINGS[5]!);
    assert.equal(
      card?.name,
      "Angel Wings with Infinity Sterling Silver with 14K Gold Vermeil Accent Ring",
    );
    assert.equal(card?.priceLabel, "$290.97");
    assert.equal(
      card?.imageUrl,
      "https://cdn.shopify.com/s/files/1/0061/1522/9760/products/MRI1711-0.jpg?v=1621396691",
    );
    assert.equal(card?.href, ANGEL_HREF);
  });

  it("uses each later listing's linked variant price and image", () => {
    const expected = [
      {
        index: 6,
        payload: michael,
        name: "Sigil of the Archangel Michael Solid Gold Pendant",
        priceLabel: "$2,850.00",
        imageUrl: "https://cdn.shopify.com/s/files/1/0061/1522/9760/files/GPD2818-CH.jpg?v=1720539257",
        href: MICHAEL_HREF,
      },
      {
        index: 7,
        payload: archangels,
        name: "Seven Archangels Sterling Silver Pendant For Divine Guidance And Spiritual Protection",
        priceLabel: "$563.97",
        imageUrl: "https://cdn.shopify.com/s/files/1/0061/1522/9760/files/TSE884-0.jpg?v=1720538783",
        href: ARCHANGELS_HREF,
      },
      {
        index: 8,
        payload: bangle,
        name: "Sterling Silver Seven Archangels Bangle Engraved With Michael Gabriel Raphael Uriel Selaphiel Jegudiel Barachiel",
        priceLabel: "$749.97",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0061/1522/9760/files/SevenArchangelsBangleTBA154.jpg?v=1760356206",
        href: BANGLE_HREF,
      },
      {
        index: 9,
        payload: phoenix,
        name: "Soar to the Heavens Flying Phoenix Pendant in Solid 14K Gold Elegant Statement Necklace Jewelry Gift For Her",
        priceLabel: "$1,100.00",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0061/1522/9760/files/GPD5072-0_e489cedb-82f8-4b60-846e-dca19ac865db.jpg?v=1770712191",
        href: PHOENIX_HREF,
      },
      {
        index: 10,
        payload: claddagh,
        name: "Celtic Claddagh Love Sterling Silver Commitment Band Ring",
        priceLabel: "$229.97",
        imageUrl: "https://cdn.shopify.com/s/files/1/0061/1522/9760/products/TRI1942-EG.jpg?v=1621397894",
        href: CLADDAGH_HREF,
      },
      {
        index: 11,
        payload: majestic,
        name: "Majestic Phoenix Pendant In Sterling Silver And 14K Gold Accent Exquisite Sterling Jewelry Collection",
        priceLabel: "$505.97",
        imageUrl: "https://cdn.shopify.com/s/files/1/0061/1522/9760/products/mpd2916-0.jpg?v=1634030053",
        href: MAJESTIC_HREF,
      },
      {
        index: 12,
        payload: ankh,
        name: "Egyptian Ankh Solid Gold Pendant",
        priceLabel: "$600.00",
        imageUrl: "https://cdn.shopify.com/s/files/1/0061/1522/9760/files/GSE925-0.jpg?v=1720540654",
        href: ANKH_HREF,
      },
      {
        index: 13,
        payload: thor,
        name: "Thors Hammer Solid Gold Pendant Embrace The Power Of The Norse God Symbol Of Strength And Courage",
        priceLabel: "$850.00",
        imageUrl: "https://cdn.shopify.com/s/files/1/0061/1522/9760/products/GPD864-0.jpg?v=1720539599",
        href: THOR_HREF,
      },
      {
        index: 14,
        payload: borre,
        name: "Viking Borre Knot Solid Gold Ring Fine Viking Inspired Jewelry With Bold Clean Lines And Distinctive Design",
        priceLabel: "$1,490.00",
        imageUrl: "https://cdn.shopify.com/s/files/1/0061/1522/9760/products/GRI573-14K.jpg?v=1634037828",
        href: BORRE_HREF,
      },
      {
        index: 15,
        payload: tripleMoon,
        name: "Celtic Blue Moon Sterling Silver Cuff Bracelet With Gemstone Centerpiece Design",
        priceLabel: "$554.97",
        imageUrl: "https://cdn.shopify.com/s/files/1/0061/1522/9760/products/tbg760-am_1.jpg?v=1634027933",
        href: TRIPLE_MOON_HREF,
      },
      {
        index: 16,
        payload: feather,
        name: "Graceful and free ~ Dali-inspired fine Sterling Silver Ring with Citrine gemstones",
        priceLabel: "$343.97",
        imageUrl: "https://cdn.shopify.com/s/files/1/0061/1522/9760/products/tri580-abci.jpg?v=1760373864",
        href: FEATHER_HREF,
      },
      {
        index: 17,
        payload: trinity,
        name: "Solid Gold Trinity Goddess Pendant Elegant Triquetra Celtic Knot Jewelry For Women",
        priceLabel: "$1,590.00",
        imageUrl: "https://cdn.shopify.com/s/files/1/0061/1522/9760/products/GPD5150-0.jpg?v=1634036938",
        href: TRINITY_HREF,
      },
    ];
    for (const item of expected) {
      const card = parsePeterStoneProduct(item.payload, PETER_STONE_LISTINGS[item.index]!);
      assert.equal(card?.name, item.name);
      assert.equal(card?.priceLabel, item.priceLabel);
      assert.equal(card?.imageUrl, item.imageUrl);
      assert.equal(card?.href, item.href);
    }
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
    const feeds: [string, object][] = [
      ["wri2580", peace],
      ["gri2308", gold],
      ["mri2353", wedding],
      ["mri1585", triskelion],
      ["angel-wings", angel],
      ["archangel-michael", michael],
      ["tpd5154", archangels],
      ["tba154", bangle],
      ["flying-phoenix", phoenix],
      ["tri1942", claddagh],
      ["mpd2916", majestic],
      ["gpd5504", ankh],
      ["gpd864", thor],
      ["gri573", borre],
      ["tbg760", tripleMoon],
      ["tri580", feather],
      ["gpd5150", trinity],
    ];
    const items = await loadPeterStoneJewelry(async (input) => {
      const url = String(input);
      const body = feeds.find(([needle]) => url.includes(needle))?.[1] ?? celtic;
      return new Response(JSON.stringify(body), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    });
    assert.equal(items.length, 18);
    assert.deepEqual(
      items.map((item) => (item.status === "ready" ? item.priceLabel : null)),
      [
        "$950.00",
        "$107.97",
        "$760.00",
        "$337.97",
        "$110.97",
        "$290.97",
        "$2,850.00",
        "$563.97",
        "$749.97",
        "$1,100.00",
        "$229.97",
        "$505.97",
        "$600.00",
        "$850.00",
        "$1,490.00",
        "$554.97",
        "$343.97",
        "$1,590.00",
      ],
    );
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
    assert.equal((source.match(/href: "https:\/\/www\.peterstone\.com\//g) ?? []).length, 18);
    assert.equal(source.includes("goaffpro"), false);
    assert.equal((shop.match(/JEWELRY_AFFILIATE_DISCLOSURE/g) ?? []).length, 2);
  });
});
