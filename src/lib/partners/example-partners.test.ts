import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { EXAMPLE_PARTNERS, partnerCtaHref } from "./example-partners.ts";

const root = dirname(fileURLToPath(import.meta.url));

describe("example partners catalog", () => {
  it("ships placeholder dealers without live external hrefs or real names", () => {
    assert.ok(EXAMPLE_PARTNERS.length >= 1);
    for (const partner of EXAMPLE_PARTNERS) {
      assert.ok(partner.id);
      assert.ok(partner.name);
      assert.ok(partner.blurb);
      assert.equal(partnerCtaHref(partner), null);
      assert.ok(!partner.href);
      assert.match(partner.name, /example|partner|placeholder/i);
      assert.ok(!/aubullion/i.test(partner.name + partner.blurb + (partner.note ?? "")));
    }
  });

  it("keeps partner source free of real dealer domains", () => {
    const source = readFileSync(join(root, "example-partners.ts"), "utf8");
    assert.ok(!/aubullion/i.test(source));
    assert.ok(!/href:\s*["']https?:\/\//.test(source));
  });
});
