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
    assert.equal(fourthwallProductUrl("https://shop.goldsilverhq.com/password", featured?.id ?? ""), null);
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
    assert.match(shop, /<ComingSoon id="jewelry"/);
    assert.match(shop, /<ComingSoon id="ebook"/);
    assert.match(shop, /Coming soon/);
    assert.equal(shop.includes("min-h-20"), false);
    assert.equal(shop.includes("sm:text-2xl"), false);
    assert.match(shop, /role="tablist"/);
    assert.match(shop, /aria-label="Shop categories"/);
    assert.equal(shop.includes("Merch, jewelry, and a note."), false);
    assert.equal(shop.includes("Fourthwall merch is listed from their public catalog"), false);
    assert.equal(shop.includes("Affiliate link pending"), false);
    assert.equal(shop.includes("lg:grid-cols-4"), false);
    assert.equal(shop.includes("aspect-[4/5]"), false);
    assert.match(shop, /h-auto w-full/);
    assert.match(shop, /defaultFourthwallVariant/);
    assert.match(shop, /fourthwallProductUrl/);
    assert.equal(shop.includes("/cart/checkout"), false);
    assert.equal(shop.includes("Checkout on Fourthwall"), false);
  });
});
