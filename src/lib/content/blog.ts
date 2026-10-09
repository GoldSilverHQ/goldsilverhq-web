import type { Section } from "./bodies.ts";

/**
 * Blog posts — fuller supporting essays that sit beside History, Sound Money,
 * and Markets. Not a fifth pillar; not Practice.
 *
 * Intent split (anti-cannibalization): an X Article stays the short native
 * social piece; the site post is deliberately longer — more context, a clearer
 * arc, and natural interlinks. Do not paste the X text as the page.
 *
 * X→blog mirror: `scripts/x-blog-mirror/` + `data/x-articles-seen.json`.
 * Append a ready row here (and a body in `bodies.ts`) when mirroring an Article.
 * Images: cover → ARTICLE_HEROES; every inline X MEDIA figure → section.figure
 * (cover alone is incomplete — see download-inline.mjs / x-blog-automation-setup).
 */

/** Small closed tag set — mirrors reader shelves, not SEO directories. */
export const BLOG_TAGS = ["History", "Metals", "Markets", "Ideas"] as const;
export type BlogTag = (typeof BLOG_TAGS)[number];

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  /** ISO calendar date `YYYY-MM-DD`. */
  date: string;
  status: "ready" | "skeleton";
  /** One or more tags from `BLOG_TAGS`. */
  tags: BlogTag[];
  /** Inline body when no `getBody("blog", slug)` sections exist yet. */
  paragraphs: string[];
  /**
   * Continue-reading links shown on the post page when non-empty.
   * Prefer natural, earned links — never SEO shuttle lists.
   */
  related: { title: string; href: string }[];
  /**
   * Quiet frontmatter hook: existing article pathnames this note supports
   * (e.g. `/history/silver/bimetallism`). For future interlinks and
   * automation — do not auto-inject into History hubs from this field alone.
   */
  relatedArticlePaths?: string[];
  /** Optional source X Article permalink (credit once in the body). = source_x_url */
  xArticleUrl?: string;
  /** X Article id from `/i/article/{id}` (durable seen-list key). = source_x_id */
  sourceXId?: string;
};

/** Published catalog. */
export const blogPosts: BlogPost[] = [
  {
    slug: "1933-double-eagle",
    title: "The $20 Gold Coin America Melted, Then Hunted for Decades",
    summary:
      "On 9 October 1934 the Smithsonian took two 1933 double eagles. The Mint had struck 445,500 of them. Nearly all the rest were melted, then hunted.",
    date: "2026-10-09",
    status: "ready",
    tags: ["History", "Metals"],
    paragraphs: [],
    related: [
      { title: "1933 U.S. gold recall", href: "/history/20th-century/1933-gold-recall" },
    ],
    relatedArticlePaths: ["/history/20th-century/1933-gold-recall"],
    xArticleUrl: "https://x.com/i/article/2108617063258308608",
    sourceXId: "2108617063258308608",
  },
  {
    slug: "france-traded-dollars-for-gold",
    title: "When France Traded Its Dollars for Gold",
    summary:
      "On 4 February 1965 Charles de Gaulle said gold has no nationality. France was already turning dollar reserves into American gold at the official price.",
    date: "2026-10-08",
    status: "ready",
    tags: ["History", "Metals"],
    paragraphs: [],
    related: [
      { title: "Nixon shock 1971", href: "/history/20th-century/bretton-woods-nixon-1971" },
    ],
    relatedArticlePaths: ["/history/20th-century/bretton-woods-nixon-1971"],
    xArticleUrl: "https://x.com/i/article/2108101796191236096",
    sourceXId: "2108101796191236096",
  },
  {
    slug: "idaho-city-1862-gold-dust",
    title:
      "The Idaho Boomtown That Ran on Gold Dust — How a Gold Camp Grew Bigger Than Portland in a Year",
    summary:
      "On 7 October 1862 miners laid out Bannock City in the Boise Basin. Within a year it was larger than Portland, and gold dust on a brass scale paid the bills.",
    date: "2026-10-07",
    status: "ready",
    tags: ["History", "Metals"],
    paragraphs: [],
    related: [
      {
        title: "Greenbacks and the Civil War",
        href: "/history/america/greenbacks-civil-war",
      },
    ],
    relatedArticlePaths: ["/history/america/greenbacks-civil-war"],
    xArticleUrl: "https://x.com/i/article/2107770779764961280",
    sourceXId: "2107770779764961280",
  },
  {
    slug: "coinage-act-1792-section-19",
    title:
      "When Cheating on Silver Coins Could Get You Hanged. And How Coins Lost Their Silver Anyway",
    summary:
      "In the spring of 1792, Congress made debasing the coins a hanging offense for Mint officers. In 1965, Congress took the silver out of the dime and the quarter.",
    date: "2026-10-07",
    status: "ready",
    tags: ["History", "Metals"],
    paragraphs: [],
    related: [
      { title: "Rome: denarius and aureus", href: "/history/ancient/rome-denarius-aureus" },
      { title: "Early U.S. coinage", href: "/history/america/early-us-coinage" },
    ],
    relatedArticlePaths: [
      "/history/ancient/rome-denarius-aureus",
      "/history/america/early-us-coinage",
    ],
    xArticleUrl: "https://x.com/i/article/2107766694064111616",
    sourceXId: "2107766694064111616",
  },
  {
    slug: "gold-futures-same-day-1974",
    title: "How Gold Futures Opened the Same Day Americans Got Their Gold Back",
    summary:
      "On 31 December 1974 an American could take a gold bar home again. The same day, a 100-ounce gold futures contract opened on COMEX in New York.",
    date: "2026-10-06",
    status: "ready",
    tags: ["History", "Markets"],
    paragraphs: [],
    related: [
      { title: "1933 U.S. gold recall", href: "/history/20th-century/1933-gold-recall" },
      { title: "Nixon shock 1971", href: "/history/20th-century/bretton-woods-nixon-1971" },
    ],
    relatedArticlePaths: [
      "/history/20th-century/1933-gold-recall",
      "/history/20th-century/bretton-woods-nixon-1971",
    ],
    xArticleUrl: "https://x.com/i/article/2107386819281084416",
    sourceXId: "2107386819281084416",
  },
  {
    slug: "edward-vi-1551-silver",
    title: "How a Teenage King Put Real Silver Back in England's Money",
    summary:
      "On 5 October 1551 the Tower indenture restored silver to about 92 parts in 100. Edward VI was thirteen. The base shilling was already down to sixpence.",
    date: "2026-10-05",
    status: "ready",
    tags: ["History", "Metals"],
    paragraphs: [],
    related: [
      { title: "Newton’s 1717 Mint report", href: "/blog/newton-1717-guinea" },
    ],
    relatedArticlePaths: ["/blog/newton-1717-guinea"],
    xArticleUrl: "https://x.com/i/article/2107028037153804288",
    sourceXId: "2107028037153804288",
  },
  {
    slug: "foreign-silver-legal-tender-1857",
    title: "When America Stopped Taking Foreign Silver as Money",
    summary:
      "On 21 February 1857 Congress ended legal tender for foreign silver. Spanish and Mexican dollars, pieces of eight, no longer had to be taken as money.",
    date: "2026-10-04",
    status: "ready",
    tags: ["History", "Metals"],
    paragraphs: [],
    related: [
      { title: "The piece of eight", href: "/history/silver/piece-of-eight" },
      {
        title: "How America started minting its own coins",
        href: "/blog/philadelphia-mint-1792",
      },
    ],
    relatedArticlePaths: [
      "/history/silver/piece-of-eight",
      "/blog/philadelphia-mint-1792",
    ],
    xArticleUrl: "https://x.com/i/article/2106666104315695104",
    sourceXId: "2106666104315695104",
  },
  {
    slug: "philadelphia-mint-1792",
    title: "How America Started Minting Its Own Coins",
    summary:
      "On 2 April 1792 Congress put a mint in Philadelphia and fixed the silver dollar by weight. The first United States dollars left that press in 1794.",
    date: "2026-10-04",
    status: "ready",
    tags: ["History", "Metals"],
    paragraphs: [],
    related: [
      { title: "The piece of eight", href: "/history/silver/piece-of-eight" },
      { title: "Early U.S. coinage", href: "/history/america/early-us-coinage" },
      {
        title: "When foreign silver lost legal tender",
        href: "/blog/foreign-silver-legal-tender-1857",
      },
    ],
    relatedArticlePaths: [
      "/history/silver/piece-of-eight",
      "/history/america/early-us-coinage",
      "/blog/foreign-silver-legal-tender-1857",
    ],
    xArticleUrl: "https://x.com/i/article/2106665525073854464",
    sourceXId: "2106665525073854464",
  },
  {
    slug: "government-only-money-printer-1877",
    title: "The Day the Government Became America's Only Money Printer",
    summary:
      "On 1 October 1877 the Bureau of Engraving and Printing took all United States Notes and National Bank Notes. Private presses no longer shared the work.",
    date: "2026-10-01",
    status: "ready",
    tags: ["History"],
    paragraphs: [],
    related: [
      {
        title: "Greenbacks and the Civil War",
        href: "/history/america/greenbacks-civil-war",
      },
    ],
    relatedArticlePaths: ["/history/america/greenbacks-civil-war"],
    xArticleUrl: "https://x.com/i/article/2105579156780052480",
    sourceXId: "2105579156780052480",
  },
  {
    slug: "us-gold-booked-at-42-22",
    title: "Why the U.S. Still Books Its Gold at $42.22 an Ounce",
    summary:
      "The U.S. Treasury still books gold certificates at $42.22 a fine troy ounce — the 1973 statutory rate, not the market price of the same metal.",
    date: "2026-10-01",
    status: "ready",
    tags: ["History", "Markets"],
    paragraphs: [],
    related: [
      {
        title: "Official gold book value",
        href: "/markets/official-gold-book-value",
      },
      {
        title: "Nixon shock 1971",
        href: "/history/20th-century/bretton-woods-nixon-1971",
      },
    ],
    relatedArticlePaths: [
      "/markets/official-gold-book-value",
      "/history/20th-century/bretton-woods-nixon-1971",
    ],
    xArticleUrl: "https://x.com/i/article/2105592919012810752",
    sourceXId: "2105592919012810752",
  },
  {
    slug: "australia-1813-holey-dollar",
    title: "When Australia Punched Holes in Spanish Silver Dollars",
    summary:
      "On 30 September 1813 New South Wales made the holey dollar and the dump legal tender, punching Spanish silver dollars so the coins would stay.",
    date: "2026-09-30",
    status: "ready",
    tags: ["History", "Metals"],
    paragraphs: [],
    related: [
      { title: "The piece of eight", href: "/history/silver/piece-of-eight" },
      {
        title: "Spanish silver as global money",
        href: "/blog/spanish-silver-first-global-money",
      },
    ],
    relatedArticlePaths: [
      "/history/silver/piece-of-eight",
      "/blog/spanish-silver-first-global-money",
    ],
    xArticleUrl: "https://x.com/i/article/2105337579369627661",
    sourceXId: "2105337579369627661",
  },
  {
    slug: "greenspan-1966-print-money",
    title:
      "How Alan Greenspan Went from His 1966 Gold Essay to “We Can Always Print Money”",
    summary:
      "In July 1966 Greenspan wrote that gold and economic freedom are inseparable. On 7 August 2011 he said the United States can always print money to pay.",
    date: "2026-09-30",
    status: "ready",
    tags: ["History", "Ideas"],
    paragraphs: [],
    related: [
      {
        title: "Nixon shock 1971",
        href: "/history/20th-century/bretton-woods-nixon-1971",
      },
      {
        title: "Inflation and purchasing power",
        href: "/sound-money/inflation-purchasing-power",
      },
    ],
    relatedArticlePaths: [
      "/history/20th-century/bretton-woods-nixon-1971",
      "/sound-money/inflation-purchasing-power",
    ],
    xArticleUrl: "https://x.com/i/article/2105187582904500224",
    sourceXId: "2105187582904500224",
  },
  {
    slug: "mises-inflation-as-policy",
    title: "Ludwig von Mises and the Policy Behind Inflation",
    summary:
      "Born 29 September 1881, Mises treated inflation as policy: more money and thinner purchasing power, not a storm, a plague, or an act of God.",
    date: "2026-09-29",
    status: "ready",
    tags: ["History", "Ideas"],
    paragraphs: [],
    related: [
      { title: "Ludwig von Mises", href: "/history/vip/ludwig-von-mises" },
      {
        title: "Inflation and purchasing power",
        href: "/sound-money/inflation-purchasing-power",
      },
    ],
    relatedArticlePaths: [
      "/history/vip/ludwig-von-mises",
      "/sound-money/inflation-purchasing-power",
    ],
    xArticleUrl: "https://x.com/i/article/2104952749670481920",
    sourceXId: "2104952749670481920",
  },
  {
    slug: "spanish-silver-first-global-money",
    title: "How Spanish Silver Became the World's First Global Money",
    summary:
      "In 1545 Cerro Rico filled Potosí with silver. The piece of eight carried it worldwide — and the U.S. dollar took its name and weight from that Spanish coin.",
    date: "2026-09-28",
    status: "ready",
    tags: ["History", "Metals"],
    paragraphs: [],
    related: [
      { title: "Potosí", href: "/history/silver/potosi" },
      { title: "The piece of eight", href: "/history/silver/piece-of-eight" },
    ],
    relatedArticlePaths: [
      "/history/silver/potosi",
      "/history/silver/piece-of-eight",
    ],
    xArticleUrl: "https://x.com/i/article/2104667282366402560",
    sourceXId: "2104667282366402560",
  },
  {
    slug: "sweden-1931-left-gold",
    title: "The Night Sweden Left Gold and Aimed at Prices Instead",
    summary:
      "Late on 27 September 1931 Sweden ended the krona’s gold convertibility. Hamrin named domestic purchasing power, not a new gold parity, as the guide.",
    date: "2026-09-27",
    status: "ready",
    tags: ["History", "Metals"],
    paragraphs: [],
    related: [
      {
        title: "Inflation and purchasing power",
        href: "/sound-money/inflation-purchasing-power",
      },
    ],
    relatedArticlePaths: ["/sound-money/inflation-purchasing-power"],
    xArticleUrl: "https://x.com/i/article/2104261329636712450",
    sourceXId: "2104261329636712450",
  },
  {
    slug: "interest-costs-vs-us-gold",
    title: "When One Year of Interest Costs More Than All of America's Gold",
    summary:
      "U.S. gross interest reached $1.267T in eleven months of FY2026 — roughly the market value of the Treasury’s reported 261.5 million ounces of gold.",
    date: "2026-09-26",
    status: "ready",
    tags: ["Markets", "Metals"],
    paragraphs: [],
    related: [
      {
        title: "Official gold book value",
        href: "/markets/official-gold-book-value",
      },
      {
        title: "Central-bank gold reserves",
        href: "/markets/central-bank-gold-reserves",
      },
    ],
    relatedArticlePaths: [
      "/markets/official-gold-book-value",
      "/markets/central-bank-gold-reserves",
    ],
    xArticleUrl: "https://x.com/i/article/2103742623928156160",
    sourceXId: "2103742623928156160",
  },
  {
    slug: "september-1971-official-gold-price",
    title: "How a September Meeting in 1971 Led to Raising the Official Gold Price",
    summary:
      "On 26 September 1971 the Group of Ten met under Connally and signed no gold deal. December’s Smithsonian accord later raised the official price from $35 to $38.",
    date: "2026-09-26",
    status: "ready",
    tags: ["History", "Metals"],
    paragraphs: [],
    related: [
      {
        title: "Nixon shock 1971",
        href: "/history/20th-century/bretton-woods-nixon-1971",
      },
    ],
    relatedArticlePaths: ["/history/20th-century/bretton-woods-nixon-1971"],
    xArticleUrl: "https://x.com/i/article/2103888968727060480",
    sourceXId: "2103888968727060480",
  },
  {
    slug: "china-1934-silver-appeal",
    title: "The Day China Asked America to Stop Buying Silver",
    summary:
      "On 24 September 1934 H. H. Kung cabled Hull: U.S. silver buying was draining China and risking panic. Hull answered on 2 October. China left silver in 1935.",
    date: "2026-09-24",
    status: "ready",
    tags: ["History", "Metals"],
    paragraphs: [],
    related: [
      { title: "Bimetallism", href: "/history/silver/bimetallism" },
      {
        title: "Silver: monetary history and industry",
        href: "/history/silver/monetary-and-industry",
      },
    ],
    relatedArticlePaths: [
      "/history/silver/bimetallism",
      "/history/silver/monetary-and-industry",
    ],
    xArticleUrl: "https://x.com/i/article/2103038843947466754",
    sourceXId: "2103038843947466754",
  },
  {
    slug: "when-exchanges-change-the-silver-rules",
    title: "When Exchanges Change the Silver Rules",
    summary:
      "In January 1980 COMEX switched silver futures to liquidation-only trading. The screen still printed a price. The paper claim behind it had already changed.",
    date: "2026-09-24",
    status: "ready",
    tags: ["History", "Markets"],
    paragraphs: [],
    related: [
      { title: "Silver Thursday", href: "/history/silver/silver-thursday" },
      {
        title: "Silver: monetary history and industry",
        href: "/history/silver/monetary-and-industry",
      },
    ],
    relatedArticlePaths: [
      "/history/silver/silver-thursday",
      "/history/silver/monetary-and-industry",
    ],
    xArticleUrl: "https://x.com/i/article/2103033593492537345",
    sourceXId: "2103033593492537345",
  },
  {
    slug: "ltcm-1998-consortium",
    title: "The Day Banks Put Up $3.6 Billion to Stop a Hedge Fund Collapse",
    summary:
      "On 23 September 1998 fourteen firms put about $3.6 billion into LTCM after New York Fed talks — private capital, Fed facilitation, no public check.",
    date: "2026-09-23",
    status: "ready",
    tags: ["History", "Markets"],
    paragraphs: [],
    related: [
      { title: "Panic of 1907 and the Fed", href: "/history/20th-century/panic-1907-fed" },
      { title: "Hard money vs fiat", href: "/sound-money/hard-money-vs-fiat" },
    ],
    relatedArticlePaths: [
      "/history/20th-century/panic-1907-fed",
      "/sound-money/hard-money-vs-fiat",
    ],
    xArticleUrl: "https://x.com/i/article/2102821638521688064",
    sourceXId: "2102821638521688064",
  },
  {
    slug: "newton-1717-guinea",
    title: "Newton’s 1717 Mint report: why England’s silver coins left",
    summary:
      "In September 1717 Isaac Newton told the Treasury that England’s silver was leaving because gold’s official price was wrong. Three months later the guinea was cut to 21 shillings.",
    date: "2026-09-21",
    status: "ready",
    tags: ["History", "Metals"],
    paragraphs: [],
    related: [
      { title: "Bimetallism", href: "/history/silver/bimetallism" },
      { title: "The piece of eight", href: "/history/silver/piece-of-eight" },
    ],
    relatedArticlePaths: ["/history/silver/bimetallism", "/history/silver/piece-of-eight"],
    xArticleUrl: "https://x.com/i/article/2102003835015155712",
    sourceXId: "2102003835015155712",
  },
  {
    slug: "gold-silver-ratio-what-it-counts",
    title: "What the gold–silver ratio is counting",
    summary:
      "Two printed prices, one quotient on a named date — not a mint law, and not a signal to trade. A short note beside the Markets fact page.",
    date: "2026-09-18",
    status: "ready",
    tags: ["Markets", "Metals"],
    paragraphs: [
      "The [gold–silver ratio](/markets/gold-silver-ratio) is ordinary arithmetic: gold’s price divided by silver’s price on a dated print. It does not invent a mint statute. It does not freeze a [bimetallic](/history/silver/bimetallism) legal number. It only reports how many ounces of silver one ounce of gold buys at that quote.",
      "A quotient can sit still while both metals move, or jump when one print shifts. The Markets page holds the dated figure and its sources — not a band that “must” return.",
      "When two metals sit under one mint ratio, that is [bimetallism](/history/silver/bimetallism). When the question is England’s 1717 Mint arithmetic, that is the [Newton note](/blog/newton-1717-guinea).",
    ],
    related: [
      { title: "Gold–silver ratio", href: "/markets/gold-silver-ratio" },
      { title: "Bimetallism", href: "/history/silver/bimetallism" },
      { title: "Newton’s 1717 Mint report", href: "/blog/newton-1717-guinea" },
    ],
    relatedArticlePaths: ["/markets/gold-silver-ratio", "/history/silver/bimetallism"],
  },
  {
    slug: "weimar-purchasing-power-note",
    title: "Weimar’s mark and what purchasing power means",
    summary:
      "A short note linking the 1923 collapse to the Sound Money vocabulary of purchasing power — dated history on one side, definitions on the other.",
    date: "2026-09-15",
    status: "ready",
    tags: ["History", "Ideas"],
    paragraphs: [
      "In autumn **1923**, a German mark could buy less by the hour than it had bought that morning. The dates, notes, and failure of that collapse are on [Weimar 1923](/history/20th-century/weimar-1923).",
      "[Inflation and purchasing power](/sound-money/inflation-purchasing-power) names what a unit still buys over time, without retelling Weimar hour by hour. The dated event and the vocabulary answer different questions.",
    ],
    related: [
      { title: "Weimar 1923", href: "/history/20th-century/weimar-1923" },
      { title: "Inflation and purchasing power", href: "/sound-money/inflation-purchasing-power" },
      { title: "Sound money", href: "/sound-money/what-is-sound-money" },
    ],
    relatedArticlePaths: [
      "/history/20th-century/weimar-1923",
      "/sound-money/inflation-purchasing-power",
      "/sound-money/what-is-sound-money",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/** Newest first. Ready posts only appear on the index. */
export function listBlogPosts(): BlogPost[] {
  return [...blogPosts]
    .filter((post) => post.status === "ready")
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function listBlogPostsByTag(tag: BlogTag | "all"): BlogPost[] {
  const posts = listBlogPosts();
  if (tag === "all") return posts;
  return posts.filter((post) => post.tags.includes(tag));
}

/** Tags that currently have at least one ready post (for filter chrome). */
export function activeBlogTags(): BlogTag[] {
  const seen = new Set<BlogTag>();
  for (const post of listBlogPosts()) {
    for (const tag of post.tags) seen.add(tag);
  }
  return BLOG_TAGS.filter((tag) => seen.has(tag));
}

/** Sitemap paths for individual posts (hub `/blog` lives in Phase-1 list). */
export function blogPostSitemapPaths(): string[] {
  return listBlogPosts().map((post) => `/blog/${post.slug}`);
}

/** Resolve display sections: thickened body registry first, else paragraphs. */
export function blogPostSections(post: BlogPost, body: Section[] | null): Section[] {
  if (body?.length) return body;
  return [{ heading: "", paragraphs: post.paragraphs }];
}
