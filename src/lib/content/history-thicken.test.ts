import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { getBody } from "./bodies.ts";

function bodyText(cluster: string, slug: string) {
  const body = getBody(cluster, slug);
  assert.ok(body);
  return body
    .flatMap((s) => [s.heading, ...(s.callout?.paragraphs ?? []), ...s.paragraphs, ...(s.list ?? [])])
    .filter(Boolean)
    .join("\n");
}

function wordCount(text: string) {
  const plain = text.replace(/\[[^\]]+\]\([^)]+\)/g, (m) => m.match(/\[([^\]]+)\]/)?.[1] ?? "").replace(/\*\*/g, "");
  return plain.trim().split(/\s+/).length;
}

describe("ancient why-markets thicken (no new URLs)", () => {
  it("thickens the existing episode and locks a two-stop ledger", () => {
    const text = bodyText("ancient", "why-markets-chose-gold-silver");
    const words = wordCount(text);
    assert.ok(words >= 900 && words <= 1200, `expected 900–1200 words, got ${words}`);

    assert.match(text, /Durability/);
    assert.match(text, /Divisibility/);
    assert.match(text, /Homogeneity/);
    assert.match(text, /Scarcity/);
    assert.match(text, /Recognizability/);
    assert.match(text, /Portability/);
    assert.match(text, /metal came first/i);
    assert.match(text, /stamp came second/i);
    assert.match(text, /\[ancient money hub\]\(\/history\/ancient\)/);
    assert.match(text, /\[Lydia and the first coins\]\(\/history\/ancient\/lydia-first-coins\)/);
    assert.doesNotMatch(text, /ebook|LemonSqueezy|buy gold|buy silver|Kauf/i);
  });
});
