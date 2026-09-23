import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { blogPostSitemapPaths, blogPosts, getBlogPost, listBlogPosts } from "./blog.ts";
import { getBody } from "./bodies.ts";
import { PHASE1_SITEMAP_PATHS } from "../seo/phase1-sitemap-paths.mjs";

const root = dirname(fileURLToPath(import.meta.url));

function bodyWordCount(slug: string) {
  const body = getBody("blog", slug);
  assert.ok(body, `missing body for blog/${slug}`);
  return body
    .flatMap((s) => [
      ...(s.callout?.paragraphs ?? []),
      ...s.paragraphs,
      ...(s.list ?? []),
      s.table?.caption,
      ...(s.table?.headers ?? []),
      ...(s.table?.rows.flat() ?? []),
    ])
    .filter(Boolean)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}

describe("blog section", () => {
  it("ships the Newton 1717 essay as the first ready post", () => {
    assert.equal(blogPosts.length, 1);
    const post = getBlogPost("newton-1717-guinea");
    assert.ok(post);
    assert.equal(post.status, "ready");
    assert.equal(post.date, "2026-09-21");
    assert.equal(listBlogPosts().length, 1);
    assert.deepEqual(blogPostSitemapPaths(), ["/blog/newton-1717-guinea"]);
    assert.match(post.xArticleUrl ?? "", /x\.com\/i\/article\/2102003835015155712/);
  });

  it("lists the blog hub and post on the Phase-1 sitemap", () => {
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/blog"));
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/blog/newton-1717-guinea"));
  });

  it("keeps the site essay longer than the ~1.2k-word X Article for anti-cannibalization", () => {
    const words = bodyWordCount("newton-1717-guinea");
    assert.ok(words > 1400, `expected site essay >1400 words, got ${words}`);
  });

  it("interlinks naturally and credits the X Article once", () => {
    const body = getBody("blog", "newton-1717-guinea")!;
    const text = body
      .flatMap((s) => [...s.paragraphs, ...(s.callout?.paragraphs ?? [])])
      .join("\n");
    assert.match(text, /\/history\/silver\/bimetallism/);
    assert.match(text, /\/history\/silver\/piece-of-eight/);
    assert.match(text, /\/history\/banks-paper\/bank-of-england/);
    assert.match(text, /\/markets\/gold-silver-ratio/);
    assert.match(text, /\/sound-money\/hard-money-vs-fiat/);
    assert.equal(
      (text.match(/x\.com\/i\/article\/2102003835015155712/g) ?? []).length,
      1,
    );
    assert.doesNotMatch(text, /if you arrived|we do not sell|buy (gold|silver)|hinges?|pillars?/i);
  });

  it("exposes /blog index and /blog/$slug routes", () => {
    const indexSrc = readFileSync(join(root, "../../routes/blog/index.tsx"), "utf8");
    const slugSrc = readFileSync(join(root, "../../routes/blog/$slug.tsx"), "utf8");
    assert.match(indexSrc, /createFileRoute\("\/blog\/"\)/);
    assert.match(indexSrc, /Notes and follow-ups/);
    assert.match(slugSrc, /createFileRoute\("\/blog\/\$slug"\)/);
  });

  it("keeps Blog in the site chrome nav", () => {
    const shell = readFileSync(join(root, "../../components/SiteShell.tsx"), "utf8");
    assert.match(shell, /href:\s*"\/blog"/);
    assert.match(shell, /label:\s*"Blog"/);
  });
});
