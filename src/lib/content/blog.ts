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
export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  /** ISO calendar date `YYYY-MM-DD`. */
  date: string;
  status: "ready" | "skeleton";
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
    paragraphs: [],
    related: [
      { title: "Bimetallism", href: "/history/silver/bimetallism" },
      { title: "The piece of eight", href: "/history/silver/piece-of-eight" },
      { title: "Bank of England", href: "/history/banks-paper/bank-of-england" },
      { title: "Gold–silver ratio", href: "/markets/gold-silver-ratio" },
    ],
    relatedArticlePaths: [
      "/history/silver/bimetallism",
      "/history/silver/piece-of-eight",
      "/history/banks-paper/bank-of-england",
      "/markets/gold-silver-ratio",
      "/sound-money/hard-money-vs-fiat",
    ],
    xArticleUrl: "https://x.com/i/article/2102003835015155712",
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

/** Sitemap paths for individual posts (hub `/blog` lives in Phase-1 list). */
export function blogPostSitemapPaths(): string[] {
  return listBlogPosts().map((post) => `/blog/${post.slug}`);
}

/** Resolve display sections: thickened body registry first, else paragraphs. */
export function blogPostSections(post: BlogPost, body: Section[] | null): Section[] {
  if (body?.length) return body;
  return [{ heading: "", paragraphs: post.paragraphs }];
}
