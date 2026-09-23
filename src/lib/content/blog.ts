import type { Section } from "./bodies.ts";

/**
 * Blog posts — fuller supporting essays that sit beside History, Sound Money,
 * and Markets. Not a fifth pillar; not Practice.
 *
 * Intent split (anti-cannibalization): an X Article stays the short native
 * social piece; the site post is deliberately longer — more context, a clearer
 * arc, and natural interlinks. Do not paste the X text as the page.
 *
 * Daily X→blog automation is TBD (do not scrape the X API here). When that
 * lands, it should append rows to `blogPosts` (or a generated sibling module)
 * with the same shape, then expand into a longer essay before publish.
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
  /** Optional source X Article / status permalink (credit once in the body). */
  xArticleUrl?: string;
};

/** Published catalog. */
export const blogPosts: BlogPost[] = [
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
      "Readers sometimes treat the ratio as a forecast machine. These pages do not. A quotient can sit still while both metals move, or jump when one print shifts. The claim on the Markets page is the dated figure and its sources — not a band that “must” return.",
      "When the question is law rather than quote — two metals under one mint ratio — open [bimetallism](/history/silver/bimetallism). When the question is England’s 1717 Mint arithmetic, open the [Newton note](/blog/newton-1717-guinea). Keep the jobs separate: market print here, statute story there.",
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
      "A short door from the 1923 collapse into the Sound Money definition of purchasing power — dated history on one side, vocabulary on the other.",
    date: "2026-09-15",
    status: "ready",
    tags: ["History", "Ideas"],
    paragraphs: [
      "In autumn **1923**, a German mark could buy less by the hour than it had bought that morning. The documentary path through that collapse sits under [Weimar 1923](/history/20th-century/weimar-1923) — dates, notes, and what failed.",
      "The vocabulary page is separate. [Inflation and purchasing power](/sound-money/inflation-purchasing-power) names what the unit still buys over time, without retelling Weimar hour by hour. Mixing the definition with the dated event makes both harder to follow.",
      "This note only holds the door: history for what happened; Sound Money for the words. Neither page is a tip, a forecast, or a call to buy metal.",
    ],
    related: [
      { title: "Weimar 1923", href: "/history/20th-century/weimar-1923" },
      { title: "Inflation and purchasing power", href: "/sound-money/inflation-purchasing-power" },
      { title: "What is sound money?", href: "/sound-money/what-is-sound-money" },
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
