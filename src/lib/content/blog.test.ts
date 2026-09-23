import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { articleHeroForPath } from "./article-media.ts";
import {
  BLOG_TAGS,
  activeBlogTags,
  blogPostSitemapPaths,
  blogPosts,
  getBlogPost,
  listBlogPosts,
  listBlogPostsByTag,
} from "./blog.ts";
import { getBody } from "./bodies.ts";
import { ogImagePathForRoute, PHASE1_SITEMAP_PATHS } from "../seo/phase1-sitemap-paths.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const publicRoot = join(root, "../../../public");

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
  it("ships three ready posts including Newton with tags", () => {
    assert.equal(blogPosts.length, 3);
    assert.equal(listBlogPosts().length, 3);
    const newton = getBlogPost("newton-1717-guinea");
    assert.ok(newton);
    assert.deepEqual(newton.tags, ["History", "Metals"]);
    assert.match(newton.xArticleUrl ?? "", /x\.com\/i\/article\/2102003835015155712/);
    assert.ok(getBlogPost("gold-silver-ratio-what-it-counts")?.tags.includes("Markets"));
    assert.ok(getBlogPost("weimar-purchasing-power-note")?.tags.includes("Ideas"));
    assert.deepEqual(
      blogPostSitemapPaths(),
      [
        "/blog/newton-1717-guinea",
        "/blog/gold-silver-ratio-what-it-counts",
        "/blog/weimar-purchasing-power-note",
      ],
    );
  });

  it("filters by tag and exposes the closed tag set", () => {
    assert.deepEqual([...BLOG_TAGS], ["History", "Metals", "Markets", "Ideas"]);
    assert.deepEqual(activeBlogTags(), ["History", "Metals", "Markets", "Ideas"]);
    assert.equal(listBlogPostsByTag("History").length, 2);
    assert.equal(listBlogPostsByTag("Metals").length, 2);
    assert.equal(listBlogPostsByTag("Markets").length, 1);
    assert.equal(listBlogPostsByTag("Ideas").length, 1);
  });

  it("lists the blog hub and posts on the Phase-1 sitemap", () => {
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/blog"));
    for (const path of blogPostSitemapPaths()) {
      assert.ok(PHASE1_SITEMAP_PATHS.includes(path), path);
    }
  });

  it("keeps the Newton site essay longer than the ~1.2k-word X Article", () => {
    const words = bodyWordCount("newton-1717-guinea");
    assert.ok(words > 1400, `expected site essay >1400 words, got ${words}`);
  });

  it("interlinks Newton lightly and credits the X Article once", () => {
    const body = getBody("blog", "newton-1717-guinea")!;
    const text = body
      .flatMap((s) => [...s.paragraphs, ...(s.callout?.paragraphs ?? [])])
      .join("\n");
    assert.match(text, /\[bimetallic\]\(\/history\/silver\/bimetallism\)/);
    assert.match(text, /\[piece of eight\]\(\/history\/silver\/piece-of-eight\)/);
    assert.equal((text.match(/\]\(\/history\//g) ?? []).length, 2);
    assert.doesNotMatch(text, /\/markets\/gold-silver-ratio|\/sound-money\/hard-money-vs-fiat|\/history\/banks-paper\/bank-of-england/);
    assert.doesNotMatch(
      text,
      /page carries|fact page|sits under|names the statute|if you arrived|we do not sell|buy (gold|silver)|hinges?|pillars?/i,
    );
    assert.equal(
      (text.match(/x\.com\/i\/article\/2102003835015155712/g) ?? []).length,
      1,
    );
  });

  it("exposes /blog index grid + /blog/$slug hero wiring", () => {
    const indexSrc = readFileSync(join(root, "../../routes/blog/index.tsx"), "utf8");
    const slugSrc = readFileSync(join(root, "../../routes/blog/$slug.tsx"), "utf8");
    const gridSrc = readFileSync(join(root, "../../components/BlogIndexGrid.tsx"), "utf8");
    assert.match(indexSrc, /createFileRoute\("\/blog\/"\)/);
    assert.match(indexSrc, /BlogIndexGrid/);
    assert.match(gridSrc, /lg:grid-cols-3/);
    assert.match(gridSrc, /Filter notes by topic/);
    assert.match(slugSrc, /articleHeroForPath/);
    assert.match(slugSrc, /hero=\{hero\}/);
  });

  it("keeps Blog in the site chrome nav", () => {
    const shell = readFileSync(join(root, "../../components/SiteShell.tsx"), "utf8");
    assert.match(shell, /href:\s*"\/blog"/);
    assert.match(shell, /label:\s*"Blog"/);
  });

  it("registers titlebild heroes for every ready blog post", () => {
    for (const post of listBlogPosts()) {
      const path = `/blog/${post.slug}`;
      const hero = articleHeroForPath(path);
      assert.ok(hero, `missing hero for ${path}`);
      assert.equal(hero.ogSrc, ogImagePathForRoute(path));
      assert.ok(existsSync(join(publicRoot, hero.src.replace(/^\//, ""))));
      assert.ok(existsSync(join(publicRoot, hero.ogSrc.replace(/^\//, ""))));
    }
    assert.match(
      articleHeroForPath("/blog/newton-1717-guinea")?.credit ?? "",
      /X Article/i,
    );
  });
});
