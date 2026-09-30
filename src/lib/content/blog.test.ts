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
  it("ships ready posts including the 1980 rules note, LTCM, and Newton with tags and source ids", () => {
    assert.equal(blogPosts.length, 12);
    assert.equal(listBlogPosts().length, 12);
    const greenspan = getBlogPost("greenspan-1966-print-money");
    assert.ok(greenspan);
    assert.equal(
      greenspan.title,
      "How Alan Greenspan Went from His 1966 Gold Essay to “We Can Always Print Money”",
    );
    assert.deepEqual(greenspan.tags, ["History", "Ideas"]);
    assert.equal(greenspan.date, "2026-09-30");
    assert.equal(greenspan.sourceXId, "2105187582904500224");
    assert.match(greenspan.xArticleUrl ?? "", /x\.com\/i\/article\/2105187582904500224/);
    assert.ok(
      greenspan.summary.length >= 140 && greenspan.summary.length <= 160,
      `summary length ${greenspan.summary.length}`,
    );
    const mises = getBlogPost("mises-inflation-as-policy");
    assert.ok(mises);
    assert.equal(mises.title, "Ludwig von Mises and the Policy Behind Inflation");
    assert.deepEqual(mises.tags, ["History", "Ideas"]);
    assert.equal(mises.date, "2026-09-29");
    assert.equal(mises.sourceXId, "2104952749670481920");
    assert.match(mises.xArticleUrl ?? "", /x\.com\/i\/article\/2104952749670481920/);
    assert.ok(
      mises.summary.length >= 140 && mises.summary.length <= 160,
      `summary length ${mises.summary.length}`,
    );
    const spanish = getBlogPost("spanish-silver-first-global-money");
    assert.ok(spanish);
    assert.equal(
      spanish.title,
      "How Spanish Silver Became the World's First Global Money",
    );
    assert.deepEqual(spanish.tags, ["History", "Metals"]);
    assert.equal(spanish.date, "2026-09-28");
    assert.equal(spanish.sourceXId, "2104667282366402560");
    assert.match(spanish.xArticleUrl ?? "", /x\.com\/i\/article\/2104667282366402560/);
    assert.ok(
      spanish.summary.length >= 140 && spanish.summary.length <= 160,
      `summary length ${spanish.summary.length}`,
    );
    const sweden = getBlogPost("sweden-1931-left-gold");
    assert.ok(sweden);
    assert.equal(sweden.title, "The Night Sweden Left Gold and Aimed at Prices Instead");
    assert.deepEqual(sweden.tags, ["History", "Metals"]);
    assert.equal(sweden.date, "2026-09-27");
    assert.equal(sweden.sourceXId, "2104261329636712450");
    assert.match(sweden.xArticleUrl ?? "", /x\.com\/i\/article\/2104261329636712450/);
    assert.ok(
      sweden.summary.length >= 140 && sweden.summary.length <= 160,
      `summary length ${sweden.summary.length}`,
    );
    const interest = getBlogPost("interest-costs-vs-us-gold");
    assert.ok(interest);
    assert.equal(
      interest.title,
      "When One Year of Interest Costs More Than All of America's Gold",
    );
    assert.deepEqual(interest.tags, ["Markets", "Metals"]);
    assert.equal(interest.date, "2026-09-26");
    assert.equal(interest.sourceXId, "2103742623928156160");
    assert.match(interest.xArticleUrl ?? "", /x\.com\/i\/article\/2103742623928156160/);
    assert.ok(
      interest.summary.length >= 140 && interest.summary.length <= 160,
      `summary length ${interest.summary.length}`,
    );
    const g10 = getBlogPost("september-1971-official-gold-price");
    assert.ok(g10);
    assert.equal(
      g10.title,
      "How a September Meeting in 1971 Led to Raising the Official Gold Price",
    );
    assert.deepEqual(g10.tags, ["History", "Metals"]);
    assert.equal(g10.date, "2026-09-26");
    assert.equal(g10.sourceXId, "2103888968727060480");
    assert.match(g10.xArticleUrl ?? "", /x\.com\/i\/article\/2103888968727060480/);
    assert.ok(
      g10.summary.length >= 140 && g10.summary.length <= 160,
      `summary length ${g10.summary.length}`,
    );
    const china = getBlogPost("china-1934-silver-appeal");
    assert.ok(china);
    assert.equal(china.title, "The Day China Asked America to Stop Buying Silver");
    assert.deepEqual(china.tags, ["History", "Metals"]);
    assert.equal(china.date, "2026-09-24");
    assert.equal(china.sourceXId, "2103038843947466754");
    assert.match(china.xArticleUrl ?? "", /x\.com\/i\/article\/2103038843947466754/);
    assert.ok(
      china.summary.length >= 140 && china.summary.length <= 160,
      `summary length ${china.summary.length}`,
    );
    const rules = getBlogPost("when-exchanges-change-the-silver-rules");
    assert.ok(rules);
    assert.equal(rules.title, "When Exchanges Change the Silver Rules");
    assert.deepEqual(rules.tags, ["History", "Markets"]);
    assert.equal(rules.date, "2026-09-24");
    assert.equal(rules.sourceXId, "2103033593492537345");
    assert.match(rules.xArticleUrl ?? "", /x\.com\/i\/article\/2103033593492537345/);
    assert.ok(
      rules.summary.length >= 140 && rules.summary.length <= 160,
      `summary length ${rules.summary.length}`,
    );
    const ltcm = getBlogPost("ltcm-1998-consortium");
    assert.ok(ltcm);
    assert.deepEqual(ltcm.tags, ["History", "Markets"]);
    assert.equal(ltcm.sourceXId, "2102821638521688064");
    assert.match(ltcm.xArticleUrl ?? "", /x\.com\/i\/article\/2102821638521688064/);
    const newton = getBlogPost("newton-1717-guinea");
    assert.ok(newton);
    assert.deepEqual(newton.tags, ["History", "Metals"]);
    assert.equal(newton.sourceXId, "2102003835015155712");
    assert.match(newton.xArticleUrl ?? "", /x\.com\/i\/article\/2102003835015155712/);
    assert.ok(getBlogPost("gold-silver-ratio-what-it-counts")?.tags.includes("Markets"));
    assert.ok(getBlogPost("weimar-purchasing-power-note")?.tags.includes("Ideas"));
    assert.deepEqual(
      blogPostSitemapPaths(),
      [
        "/blog/greenspan-1966-print-money",
        "/blog/mises-inflation-as-policy",
        "/blog/spanish-silver-first-global-money",
        "/blog/sweden-1931-left-gold",
        "/blog/interest-costs-vs-us-gold",
        "/blog/september-1971-official-gold-price",
        "/blog/china-1934-silver-appeal",
        "/blog/when-exchanges-change-the-silver-rules",
        "/blog/ltcm-1998-consortium",
        "/blog/newton-1717-guinea",
        "/blog/gold-silver-ratio-what-it-counts",
        "/blog/weimar-purchasing-power-note",
      ],
    );
  });

  it("filters by tag and exposes the closed tag set", () => {
    assert.deepEqual([...BLOG_TAGS], ["History", "Metals", "Markets", "Ideas"]);
    assert.deepEqual(activeBlogTags(), ["History", "Metals", "Markets", "Ideas"]);
    assert.equal(listBlogPostsByTag("History").length, 10);
    assert.equal(listBlogPostsByTag("Metals").length, 7);
    assert.equal(listBlogPostsByTag("Markets").length, 4);
    assert.equal(listBlogPostsByTag("Ideas").length, 3);
  });

  it("lists the blog hub and posts on the Phase-1 sitemap", () => {
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/blog"));
    for (const path of blogPostSitemapPaths()) {
      assert.ok(PHASE1_SITEMAP_PATHS.includes(path), path);
    }
  });

  it("keeps mirrored site essays longer than their X Articles", () => {
    for (const slug of [
      "greenspan-1966-print-money",
      "mises-inflation-as-policy",
      "spanish-silver-first-global-money",
      "sweden-1931-left-gold",
      "interest-costs-vs-us-gold",
      "september-1971-official-gold-price",
      "china-1934-silver-appeal",
      "when-exchanges-change-the-silver-rules",
      "newton-1717-guinea",
      "ltcm-1998-consortium",
    ]) {
      const words = bodyWordCount(slug);
      assert.ok(words > 1200, `expected site essay >1200 words for ${slug}, got ${words}`);
    }
  });

  it("interlinks the Mises inflation note lightly and credits the X Article once", () => {
    const body = getBody("blog", "mises-inflation-as-policy")!;
    const text = body
      .flatMap((s) => [...s.paragraphs, ...(s.list ?? []), ...(s.callout?.paragraphs ?? [])])
      .join("\n");
    assert.match(text, /\[Ludwig von Mises\]\(\/history\/vip\/ludwig-von-mises\)/);
    assert.match(text, /\[purchasing power\]\(\/sound-money\/inflation-purchasing-power\)/);
    assert.equal((text.match(/\]\(\/history\//g) ?? []).length, 1);
    assert.equal((text.match(/\]\(\/sound-money\//g) ?? []).length, 1);
    assert.doesNotMatch(
      text,
      /page carries|fact page|sits under|if you arrived|we do not sell|buy (gold|silver)|hinges?|pillars?|stock tip|should buy/i,
    );
    assert.equal(
      (text.match(/x\.com\/i\/article\/2104952749670481920/g) ?? []).length,
      1,
    );
    const words = bodyWordCount("mises-inflation-as-policy");
    assert.ok(words <= 1800, `expected site essay ≤1800 words, got ${words}`);
    assert.ok(words > 1200, `expected site essay >1200 words, got ${words}`);
  });

  it("embeds the Greenspan inline quote card and credits the X Article once", () => {
    const body = getBody("blog", "greenspan-1966-print-money")!;
    const text = body
      .flatMap((s) => [...s.paragraphs, ...(s.list ?? []), ...(s.callout?.paragraphs ?? [])])
      .join("\n");
    assert.match(text, /\[gold window\]\(\/history\/20th-century\/bretton-woods-nixon-1971\)/);
    assert.match(text, /\[purchasing power\]\(\/sound-money\/inflation-purchasing-power\)/);
    assert.equal((text.match(/\]\(\/history\//g) ?? []).length, 1);
    assert.equal((text.match(/\]\(\/sound-money\//g) ?? []).length, 1);
    assert.doesNotMatch(
      text,
      /page carries|fact page|sits under|if you arrived|we do not sell|buy (gold|silver)|hinges?|pillars?|stock tip|should buy/i,
    );
    assert.equal(
      (text.match(/x\.com\/i\/article\/2105187582904500224/g) ?? []).length,
      1,
    );
    const words = bodyWordCount("greenspan-1966-print-money");
    assert.ok(words <= 1800, `expected site essay ≤1800 words, got ${words}`);
    assert.ok(words > 1200, `expected site essay >1200 words, got ${words}`);
    const figures = body.map((s) => s.figure).filter(Boolean);
    assert.equal(figures.length, 1, `expected 1 inline figure, got ${figures.length}`);
    assert.equal(
      figures[0]!.src,
      "/images/blog/greenspan-1966-print-money-quote-confiscation.jpg",
    );
    assert.match(figures[0]!.credit ?? "", /GoldSilverHQ X Article/);
    assert.ok(existsSync(join(publicRoot, figures[0]!.src.replace(/^\//, ""))));
  });

  it("embeds every inline X Article figure for the Mises note (not cover-only)", () => {
    const body = getBody("blog", "mises-inflation-as-policy")!;
    const figures = body.map((s) => s.figure).filter(Boolean);
    assert.equal(figures.length, 4, `expected 4 inline figures, got ${figures.length}`);
    const srcs = figures.map((f) => f!.src).sort();
    assert.deepEqual(srcs, [
      "/images/blog/mises-inflation-as-policy-portrait.jpg",
      "/images/blog/mises-inflation-as-policy-quote-inflation.jpg",
      "/images/blog/mises-inflation-as-policy-quote-interference.jpg",
      "/images/blog/mises-inflation-as-policy-quote-state.jpg",
    ]);
    for (const f of figures) {
      assert.match(f!.credit ?? "", /GoldSilverHQ X Article/);
      assert.ok(f!.alt.length > 20);
      assert.ok(f!.caption.length > 10);
    }
  });

  it("interlinks the Spanish silver note lightly and credits the X Article once", () => {
    const body = getBody("blog", "spanish-silver-first-global-money")!;
    const text = body
      .flatMap((s) => [...s.paragraphs, ...(s.list ?? []), ...(s.callout?.paragraphs ?? [])])
      .join("\n");
    assert.match(text, /\[Potosí\]\(\/history\/silver\/potosi\)/);
    assert.match(text, /\[piece of eight\]\(\/history\/silver\/piece-of-eight\)/);
    assert.equal((text.match(/\]\(\/history\//g) ?? []).length, 2);
    assert.doesNotMatch(
      text,
      /page carries|fact page|sits under|if you arrived|we do not sell|buy (gold|silver)|hinges?|pillars?|stock tip|should buy/i,
    );
    assert.equal(
      (text.match(/x\.com\/i\/article\/2104667282366402560/g) ?? []).length,
      1,
    );
    const words = bodyWordCount("spanish-silver-first-global-money");
    assert.ok(words <= 1800, `expected site essay ≤1800 words, got ${words}`);
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

  it("interlinks the 1931 Sweden note lightly and credits the X Article once", () => {
    const body = getBody("blog", "sweden-1931-left-gold")!;
    const text = body
      .flatMap((s) => [...s.paragraphs, ...(s.list ?? []), ...(s.callout?.paragraphs ?? [])])
      .join("\n");
    assert.match(text, /\[purchasing power\]\(\/sound-money\/inflation-purchasing-power\)/);
    assert.equal((text.match(/\]\(\/sound-money\//g) ?? []).length, 1);
    assert.equal((text.match(/\]\(\/history\//g) ?? []).length, 0);
    assert.doesNotMatch(
      text,
      /page carries|fact page|sits under|if you arrived|we do not sell|buy (gold|silver)|hinges?|pillars?|stock tip|should buy/i,
    );
    assert.equal(
      (text.match(/x\.com\/i\/article\/2104261329636712450/g) ?? []).length,
      1,
    );
    const words = bodyWordCount("sweden-1931-left-gold");
    assert.ok(words <= 1800, `expected site essay ≤1800 words, got ${words}`);
  });

  it("interlinks the interest-vs-gold note lightly and credits the X Article once", () => {
    const body = getBody("blog", "interest-costs-vs-us-gold")!;
    const text = body
      .flatMap((s) => [...s.paragraphs, ...(s.list ?? []), ...(s.callout?.paragraphs ?? [])])
      .join("\n");
    assert.match(text, /\[official gold book value\]\(\/markets\/official-gold-book-value\)/);
    assert.match(text, /\[central-bank gold reserves\]\(\/markets\/central-bank-gold-reserves\)/);
    assert.equal((text.match(/\]\(\/markets\//g) ?? []).length, 2);
    assert.doesNotMatch(
      text,
      /page carries|fact page|sits under|if you arrived|we do not sell|buy (gold|silver)|hinges?|pillars?|stock tip|should buy/i,
    );
    assert.equal(
      (text.match(/x\.com\/i\/article\/2103742623928156160/g) ?? []).length,
      1,
    );
    const words = bodyWordCount("interest-costs-vs-us-gold");
    assert.ok(words <= 1800, `expected site essay ≤1800 words, got ${words}`);
  });

  it("interlinks the September 1971 note lightly and credits the X Article once", () => {
    const body = getBody("blog", "september-1971-official-gold-price")!;
    const text = body
      .flatMap((s) => [...s.paragraphs, ...(s.list ?? []), ...(s.callout?.paragraphs ?? [])])
      .join("\n");
    assert.match(text, /\[gold window\]\(\/history\/20th-century\/bretton-woods-nixon-1971\)/);
    assert.equal((text.match(/\]\(\/history\//g) ?? []).length, 1);
    assert.doesNotMatch(
      text,
      /page carries|fact page|sits under|if you arrived|we do not sell|buy (gold|silver)|hinges?|pillars?|stock tip|should buy/i,
    );
    assert.equal(
      (text.match(/x\.com\/i\/article\/2103888968727060480/g) ?? []).length,
      1,
    );
    const words = bodyWordCount("september-1971-official-gold-price");
    assert.ok(words <= 1800, `expected site essay ≤1800 words, got ${words}`);
  });

  it("interlinks the 1934 China note lightly and credits the X Article once", () => {
    const body = getBody("blog", "china-1934-silver-appeal")!;
    const text = body
      .flatMap((s) => [...s.paragraphs, ...(s.list ?? []), ...(s.callout?.paragraphs ?? [])])
      .join("\n");
    assert.match(text, /\[bimetallism\]\(\/history\/silver\/bimetallism\)/);
    assert.match(text, /\[monetary history and industry\]\(\/history\/silver\/monetary-and-industry\)/);
    assert.equal((text.match(/\]\(\/history\//g) ?? []).length, 2);
    assert.doesNotMatch(
      text,
      /page carries|fact page|sits under|if you arrived|we do not sell|buy (gold|silver)|hinges?|pillars?|stock tip|should buy/i,
    );
    assert.equal(
      (text.match(/x\.com\/i\/article\/2103038843947466754/g) ?? []).length,
      1,
    );
    const words = bodyWordCount("china-1934-silver-appeal");
    assert.ok(words <= 1800, `expected site essay ≤1800 words, got ${words}`);
  });

  it("interlinks the 1980 rules note lightly and credits the X Article once", () => {
    const body = getBody("blog", "when-exchanges-change-the-silver-rules")!;
    const text = body
      .flatMap((s) => [...s.paragraphs, ...(s.callout?.paragraphs ?? [])])
      .join("\n");
    assert.match(text, /\[Silver Thursday\]\(\/history\/silver\/silver-thursday\)/);
    assert.match(text, /\[monetary history and industry\]\(\/history\/silver\/monetary-and-industry\)/);
    assert.equal((text.match(/\]\(\/history\//g) ?? []).length, 2);
    assert.doesNotMatch(
      text,
      /page carries|fact page|sits under|if you arrived|we do not sell|buy (gold|silver)|hinges?|pillars?|stock tip|should buy/i,
    );
    assert.equal(
      (text.match(/x\.com\/i\/article\/2103033593492537345/g) ?? []).length,
      1,
    );
    const words = bodyWordCount("when-exchanges-change-the-silver-rules");
    assert.ok(words <= 1800, `expected site essay ≤1800 words, got ${words}`);
  });

  it("interlinks LTCM lightly and credits the X Article once", () => {
    const body = getBody("blog", "ltcm-1998-consortium")!;
    const text = body
      .flatMap((s) => [...s.paragraphs, ...(s.callout?.paragraphs ?? [])])
      .join("\n");
    assert.match(text, /\[Panic of 1907\]\(\/history\/20th-century\/panic-1907-fed\)/);
    assert.match(text, /\[fiat\]\(\/sound-money\/hard-money-vs-fiat\)/);
    assert.doesNotMatch(
      text,
      /page carries|fact page|sits under|if you arrived|we do not sell|buy (gold|silver)|hinges?|pillars?|stock tip|should buy/i,
    );
    assert.equal(
      (text.match(/x\.com\/i\/article\/2102821638521688064/g) ?? []).length,
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

  it("surfaces recent notes on the home editorial and reverse-links from related pages", () => {
    const home = readFileSync(join(root, "../../components/HomeEditorial.tsx"), "utf8");
    assert.match(home, /listBlogPosts/);
    assert.match(home, /From the blog/);
    assert.match(home, /href=\{`\/blog\/\$\{post\.slug\}`\}/);

    const mapSrc = readFileSync(join(root, "map.ts"), "utf8");
    for (const path of [
      "/blog/greenspan-1966-print-money",
      "/blog/mises-inflation-as-policy",
      "/blog/spanish-silver-first-global-money",
      "/blog/sweden-1931-left-gold",
      "/blog/newton-1717-guinea",
      "/blog/september-1971-official-gold-price",
      "/blog/ltcm-1998-consortium",
      "/blog/interest-costs-vs-us-gold",
      "/blog/when-exchanges-change-the-silver-rules",
      "/blog/china-1934-silver-appeal",
      "/blog/gold-silver-ratio-what-it-counts",
      "/blog/weimar-purchasing-power-note",
    ]) {
      assert.ok(mapSrc.includes(`href: "${path}"`), `missing reverse related link ${path}`);
    }
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
    assert.match(
      articleHeroForPath("/blog/ltcm-1998-consortium")?.credit ?? "",
      /X Article/i,
    );
  });
});
