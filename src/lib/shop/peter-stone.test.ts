import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  PETER_STONE_PRODUCTS,
  ctaHref,
  hasAffiliateTracking,
  peterStoneAffiliateId,
} from "./peter-stone.ts";

const root = dirname(fileURLToPath(import.meta.url));

describe("peter stone shop catalog", () => {
  it("ships curated placeholders without inventing affiliate URLs or IDs", () => {
    assert.ok(PETER_STONE_PRODUCTS.length >= 2);
    assert.ok(PETER_STONE_PRODUCTS.length <= 8);
    for (const product of PETER_STONE_PRODUCTS) {
      assert.ok(product.id);
      assert.ok(product.name);
      assert.ok(product.blurb);
      assert.equal(hasAffiliateTracking(product), false);
      assert.equal(ctaHref(product), null);
      assert.ok(!product.affiliateUrl);
    }
    assert.equal(peterStoneAffiliateId(), "");
  });

  it("keeps shop source free of fabricated affiliate IDs", () => {
    const source = readFileSync(join(root, "peter-stone.ts"), "utf8");
    assert.ok(source.includes("VITE_PETER_STONE_AFFILIATE_ID"));
    assert.ok(!/affiliateUrl:\s*["']https?:\/\//.test(source));
    assert.ok(!/VITE_PETER_STONE_AFFILIATE_ID\s*=\s*["'][^"']+["']/.test(source));
  });
});
