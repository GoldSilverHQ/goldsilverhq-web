import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  FOURTHWALL_PRODUCT_FEED,
  defaultFourthwallVariant,
  fourthwallCheckoutUrl,
  fourthwallProductUrl,
  merchCategories,
  parseFourthwallFeed,
} from "./fourthwall.ts";

const root = dirname(fileURLToPath(import.meta.url));

const FEED = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <g:title><![CDATA[GoldSilverHQ]]></g:title>
    <item>
      <g:id>4a36ade0-ac62-4ae1-9a87-83afa593bdd0</g:id>
      <g:item_group_id>fa4fd02b-22e2-4dac-a49e-52dacdb02192</g:item_group_id>
      <g:title><![CDATA[Andrew Jackson Portrait]]></g:title>
      <g:description><![CDATA[]]></g:description>
      <g:link>https://goldsilverhq-shop.fourthwall.com/products/andrew-jackson-portrait</g:link>
      <g:image_link>https://imgproxy.fourthwall.dev/example.jpg</g:image_link>
      <g:availability>in stock</g:availability>
      <g:price>12.00 USD</g:price>
      <g:color>White</g:color>
      <g:size>5" x 7"</g:size>
    </item>
    <item>
      <g:id>9b57634e-02fc-4248-93f7-64c8fa2a8f7b</g:id>
      <g:item_group_id>fa4fd02b-22e2-4dac-a49e-52dacdb02192</g:item_group_id>
      <g:title><![CDATA[Andrew Jackson Portrait]]></g:title>
      <g:description></g:description>
      <g:image_link>https://imgproxy.fourthwall.dev/larger.jpg</g:image_link>
      <g:availability>in stock</g:availability>
      <g:price>14.00 USD</g:price>
      <g:size>8" x 10"</g:size>
    </item>
    <item>
      <g:id>26ca1421-9f1f-46a0-bdb3-6f546b77fffb</g:id>
      <g:item_group_id>fa4fd02b-22e2-4dac-a49e-52dacdb02192</g:item_group_id>
      <g:title><![CDATA[Andrew Jackson Portrait]]></g:title>
      <g:image_link>https://imgproxy.fourthwall.dev/twenty-by-thirty.jpg</g:image_link>
      <g:availability>in stock</g:availability>
      <g:price>27.00 USD</g:price>
      <g:size>20" x 30"</g:size>
    </item>
    <item>
      <g:id>not-a-uuid</g:id>
      <g:title><![CDATA[Skip me]]></g:title>
      <g:price>1.00 USD</g:price>
    </item>
  </channel>
</rss>`;

const TYPED_FEED = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <item>
      <g:id>11111111-1111-4111-8111-111111111111</g:id>
      <g:item_group_id>aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaa1</g:item_group_id>
      <g:title><![CDATA[The Bank is Trying to Kill Me Framed Poster]]></g:title>
      <g:link>https://shop.goldsilverhq.com/products/the-bank-is-trying-to-kill-me-framed-poster</g:link>
      <g:availability>in stock</g:availability>
      <g:price>29.00 USD</g:price>
      <g:color>Black</g:color>
      <g:size>8" x 10"</g:size>
    </item>
    <item>
      <g:id>11111111-1111-4111-8111-111111111112</g:id>
      <g:item_group_id>aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaa1</g:item_group_id>
      <g:title><![CDATA[The Bank is Trying to Kill Me Framed Poster]]></g:title>
      <g:availability>in stock</g:availability>
      <g:price>29.00 USD</g:price>
      <g:color>White</g:color>
      <g:size>8" x 10"</g:size>
    </item>
    <item>
      <g:id>11111111-1111-4111-8111-111111111113</g:id>
      <g:item_group_id>aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaa1</g:item_group_id>
      <g:title><![CDATA[The Bank is Trying to Kill Me Framed Poster]]></g:title>
      <g:availability>in stock</g:availability>
      <g:price>99.00 USD</g:price>
      <g:color>Black</g:color>
      <g:size>24" x 36"</g:size>
    </item>
    <item>
      <g:id>22222222-2222-4222-8222-222222222221</g:id>
      <g:item_group_id>bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbb1</g:item_group_id>
      <g:title><![CDATA[The Bank is Trying to Kill Me Mug]]></g:title>
      <g:link>https://shop.goldsilverhq.com/products/the-bank-is-trying-to-kill-me-mug</g:link>
      <g:availability>in stock</g:availability>
      <g:price>15.00 USD</g:price>
      <g:color>White</g:color>
      <g:size>11oz</g:size>
    </item>
    <item>
      <g:id>22222222-2222-4222-8222-222222222222</g:id>
      <g:item_group_id>bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbb1</g:item_group_id>
      <g:title><![CDATA[The Bank is Trying to Kill Me Mug]]></g:title>
      <g:availability>in stock</g:availability>
      <g:price>21.00 USD</g:price>
      <g:color>White</g:color>
      <g:size>20 oz</g:size>
    </item>
    <item>
      <g:id>33333333-3333-4333-8333-333333333331</g:id>
      <g:item_group_id>cccccccc-cccc-4ccc-8ccc-ccccccccccc1</g:item_group_id>
      <g:title><![CDATA[Andrew Jackson Portrait Canvas]]></g:title>
      <g:link>https://shop.goldsilverhq.com/products/andrew-jackson-portrait-canvas</g:link>
      <g:availability>in stock</g:availability>
      <g:price>29.00 USD</g:price>
      <g:color>All-Over Print</g:color>
      <g:size>16″×20″</g:size>
    </item>
    <item>
      <g:id>33333333-3333-4333-8333-333333333332</g:id>
      <g:item_group_id>cccccccc-cccc-4ccc-8ccc-ccccccccccc1</g:item_group_id>
      <g:title><![CDATA[Andrew Jackson Portrait Canvas]]></g:title>
      <g:availability>in stock</g:availability>
      <g:price>138.14 USD</g:price>
      <g:color>All-Over Print</g:color>
      <g:size>40″×60″</g:size>
    </item>
    <item>
      <g:id>44444444-4444-4444-8444-444444444441</g:id>
      <g:item_group_id>dddddddd-dddd-4ddd-8ddd-ddddddddddd1</g:item_group_id>
      <g:title><![CDATA[Andrew Jackson Portrait Poster]]></g:title>
      <g:link>https://shop.goldsilverhq.com/products/andrew-jackson-portrait-poster-2</g:link>
      <g:availability>in stock</g:availability>
      <g:price>22.00 USD</g:price>
      <g:color>White</g:color>
      <g:size>12" x 16"</g:size>
    </item>
    <item>
      <g:id>44444444-4444-4444-8444-444444444442</g:id>
      <g:item_group_id>dddddddd-dddd-4ddd-8ddd-ddddddddddd1</g:item_group_id>
      <g:title><![CDATA[Andrew Jackson Portrait Poster]]></g:title>
      <g:availability>in stock</g:availability>
      <g:price>39.00 USD</g:price>
      <g:color>White</g:color>
      <g:size>24" x 36"</g:size>
    </item>
    <item>
      <g:id>55555555-5555-4555-8555-555555555551</g:id>
      <g:item_group_id>eeeeeeee-eeee-4eee-8eee-eeeeeeeeeee1</g:item_group_id>
      <g:title><![CDATA[Mystery Object]]></g:title>
      <g:link>https://shop.goldsilverhq.com/products/mystery-object</g:link>
      <g:availability>in stock</g:availability>
      <g:price>9.00 USD</g:price>
    </item>
  </channel>
</rss>`;

describe("fourthwall public feed", () => {
  it("groups feed items into one product and keeps Fourthwall prices", () => {
    const products = parseFourthwallFeed(FEED);
    assert.equal(products.length, 1);
    const product = products[0];
    assert.equal(product?.id, "fa4fd02b-22e2-4dac-a49e-52dacdb02192");
    assert.equal(product?.title, "Andrew Jackson Portrait");
    assert.equal(product?.description, "");
    assert.equal(product?.imageUrl, "https://imgproxy.fourthwall.dev/twenty-by-thirty.jpg");
    assert.equal(product?.variants.length, 3);
    assert.equal(product?.variants[0]?.price, "12.00 USD");
    assert.equal(product?.variants[0]?.priceLabel, "$12.00");
    assert.equal(product?.variants[0]?.label, '5" x 7"');
    assert.equal(product?.variants[1]?.priceLabel, "$14.00");
    assert.equal(product?.variants[1]?.label, '8" x 10"');
    const featured = product ? defaultFourthwallVariant(product) : undefined;
    assert.equal(featured?.label, '20" x 30"');
    assert.equal(featured?.priceLabel, "$27.00");
    assert.equal(featured?.imageUrl, "https://imgproxy.fourthwall.dev/twenty-by-thirty.jpg");
    assert.equal(product?.categoryId, "other");
    assert.equal(product?.categoryLabel, "Other");
    assert.equal(
      product?.productUrl,
      "https://goldsilverhq-shop.fourthwall.com/products/andrew-jackson-portrait",
    );
    const href = featured
      ? fourthwallProductUrl(
          "https://shop.goldsilverhq.com/products/andrew-jackson-portrait",
          featured.id,
        )
      : null;
    const productPage = href ? new URL(href) : null;
    assert.equal(productPage?.pathname, "/products/andrew-jackson-portrait");
    assert.equal(productPage?.searchParams.get("variant"), featured?.id);
    assert.equal(productPage?.pathname.includes("/cart/checkout"), false);
    assert.equal(
      fourthwallProductUrl("https://shop.goldsilverhq.com/password", featured?.id ?? ""),
      null,
    );
  });

  it("builds a Fourthwall checkout URL from the variant id", () => {
    const href = fourthwallCheckoutUrl("4a36ade0-ac62-4ae1-9a87-83afa593bdd0", "USD");
    const url = new URL(href);
    assert.equal(url.origin, "https://goldsilverhq-shop.fourthwall.com");
    assert.equal(url.pathname, "/cart/checkout");
    assert.equal(url.searchParams.get("products"), "4a36ade0-ac62-4ae1-9a87-83afa593bdd0:1");
    assert.equal(url.searchParams.get("currency"), "USD");
  });

  it("returns nothing from an empty feed", () => {
    assert.deepEqual(parseFourthwallFeed("<rss><channel></channel></rss>"), []);
  });

  it("infers merch categories from the title and slug when the feed has no type", () => {
    const products = parseFourthwallFeed(TYPED_FEED);
    assert.deepEqual(
      products.map((product) => product.categoryLabel),
      ["Framed poster", "Mug", "Canvas", "Poster", "Other"],
    );
    assert.equal(products[0]?.categoryId, "framed-poster");
    assert.deepEqual(
      merchCategories(products).map((category) => category.label),
      ["Poster", "Framed poster", "Canvas", "Mug", "Other"],
    );
    assert.equal(
      merchCategories(products.filter((product) => product.categoryId === "mug")).length,
      1,
    );

    const framed = products[0];
    assert.equal(framed?.variants[0]?.label, '8" x 10" · Black');
    assert.equal(defaultFourthwallVariant(framed!)?.label, '24" x 36" · Black');

    const mug = products[1];
    assert.equal(defaultFourthwallVariant(mug!)?.label, "20 oz");
    assert.equal(mug?.variants[0]?.label, "11oz");

    const canvas = products[2];
    assert.equal(defaultFourthwallVariant(canvas!)?.label, "40″×60″");

    const poster = products[3];
    assert.equal(defaultFourthwallVariant(poster!)?.label, '24" x 36"');
    assert.equal(poster?.variants[0]?.label, '12" x 16"');
  });

  it("prefers an explicit product type from the feed", () => {
    const products = parseFourthwallFeed(`<?xml version="1.0"?>
      <rss xmlns:g="http://base.google.com/ns/1.0"><channel>
        <item>
          <g:id>aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaa1</g:id>
          <g:title><![CDATA[Untitled object]]></g:title>
          <g:link>https://shop.goldsilverhq.com/products/untitled-object</g:link>
          <g:price>10.00 USD</g:price>
          <g:product_type>Canvas</g:product_type>
          <g:availability>in stock</g:availability>
        </item>
      </channel></rss>`);
    assert.equal(products[0]?.categoryId, "canvas");
    assert.equal(products[0]?.categoryLabel, "Canvas");
  });

  it("points the shop at the official feed and does not hardcode the portrait", () => {
    assert.equal(
      FOURTHWALL_PRODUCT_FEED,
      "https://goldsilverhq-shop.fourthwall.com/.well-known/merchant-center/rss.xml",
    );
    const source = readFileSync(join(root, "fourthwall.ts"), "utf8");
    assert.equal(source.includes("Andrew Jackson"), false);
    const shop = readFileSync(join(root, "../../routes/shop.tsx"), "utf8");
    assert.equal(shop.includes("Andrew Jackson"), false);
    assert.equal(shop.includes("12.00 USD"), false);
    assert.equal(shop.includes("PETER_STONE_PRODUCTS"), false);
    assert.match(shop, /loadFourthwallProducts/);
    assert.match(shop, /staleTime:\s*0/);
    assert.match(shop, /no-store/);
    assert.equal(shop.includes("Jewelry — Peter Stone"), false);
    assert.equal(shop.includes("Reserved for Peter Stone"), false);
    assert.equal(shop.includes("Rare-coins ebook"), false);
    assert.equal(shop.includes("Not listed yet"), false);
    assert.equal(shop.includes('category === "jewelry"'), false);
    assert.equal(shop.includes('category === "ebook"'), false);
    assert.equal(shop.includes('<ComingSoon id="jewelry"'), false);
    assert.match(shop, /id="shop-panel-jewelry"/);
    assert.match(shop, /<ComingSoon id="ebook"/);
    assert.match(shop, /Coming soon/);
    assert.equal(shop.includes("min-h-20"), false);
    assert.equal(shop.includes("sm:text-2xl"), false);
    assert.match(shop, /role="tablist"/);
    assert.match(shop, /aria-label="Shop categories"/);
    assert.equal(shop.includes("Merch, jewelry, and a note."), false);
    assert.equal(shop.includes("Fourthwall merch is listed from their public catalog"), false);
    assert.equal(shop.includes("Merch — Fourthwall"), false);
    assert.equal(shop.includes("Names and prices come from the public Fourthwall catalog"), false);
    assert.equal(shop.includes("Affiliate link pending"), false);
    assert.equal(shop.includes("lg:grid-cols-4"), false);
    assert.equal(shop.includes("aspect-[4/5]"), false);
    assert.match(shop, /h-auto w-full/);
    assert.match(shop, /grid-cols-1/);
    assert.match(shop, /md:grid-cols-2/);
    assert.match(shop, /lg:grid-cols-3/);
    assert.match(shop, /aria-label="Product type"/);
    assert.match(shop, /Nothing in this category yet\./);
    assert.equal(shop.includes("object-cover"), false);
    assert.match(shop, /defaultFourthwallVariant/);
    assert.match(shop, /fourthwallProductUrl/);
    assert.equal(shop.includes("/cart/checkout"), false);
    assert.equal(shop.includes("Checkout on Fourthwall"), false);
  });
});
