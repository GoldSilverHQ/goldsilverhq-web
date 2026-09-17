/**
 * Article titlebild (= on-page hero) that also doubles as the Open Graph / X card.
 *
 * On-page layout (via `ArticleLead`): **title (+ teaser) first, then Querformat
 * media under** — X Articles reading order. Do not put the image above the title
 * (feed-card style) and never ship a tall full-bleed of the whole illustration.
 *
 * Media rule: Querformat only — same landscape crop as X/Twitter article cards
 * (≈16:9 / **1200×630**), full content-column width, minimal chrome.
 *
 * Convention for later articles:
 * 1. Keep the master illustration elsewhere if needed; write the **landscape**
 *    titlebild JPEG under `public/images/<pillar>/...` at OG aspect (1200×630).
 * 2. Write the **same** 1200×630 crop to the Phase-1 card path under `public/og/cards/`
 *    (same key as `ogImagePathForRoute(path)` — see `phase1-sitemap-paths.mjs`).
 * 3. Register one entry here with matching `src` + `ogSrc`, alt, caption, credit.
 * 4. Render with `ArticleLead` + `ArticleHeroImage` (`aspect-[1200/630]`, object-cover).
 * 5. `npm run og:cards` skips paths listed here so branded text cards do not overwrite.
 *
 * Only ship real artwork — do not invent placeholders for other articles.
 */

export type ArticleHero = {
  /** Route pathname (no trailing slash), e.g. `/history/america/jackson-and-the-bank`. */
  path: string;
  /** On-page titlebild (public URL path) — landscape / OG aspect, not a tall full plate. */
  src: string;
  /** 1200×630 share JPEG (public URL path). Usually the Phase-1 `/og/cards/*.jpg` file. */
  ogSrc: string;
  alt: string;
  /** Short caption under the hero (historical context). */
  caption?: string;
  /** Attribution / rights advisory. */
  credit?: string;
};

/** Articles that use a photographic/illustration hero as both titlebild and OG. */
export const ARTICLE_HEROES: readonly ArticleHero[] = [
  {
    path: "/history/america/jackson-and-the-bank",
    src: "/images/history/america/jackson-and-the-bank.jpg",
    ogSrc: "/og/cards/history-america-jackson-and-the-bank.jpg",
    alt: "Colorized 1836 political cartoon: Andrew Jackson, cane raised, facing a many-headed monster representing the Second Bank of the United States and its state branches during the Bank War.",
    caption:
      "“General Jackson Slaying the Many Headed Monster” (1836) — colorized Bank War / Second Bank veto cartoon.",
    credit:
      "Colorized reproduction of the 1836 Bank War cartoon (original: Library of Congress LC-DIG-ds-14740).",
  },
] as const;

const byPath = new Map(ARTICLE_HEROES.map((h) => [h.path.replace(/\/+$/, "") || "/", h]));

export function articleHeroForPath(pathname: string): ArticleHero | undefined {
  const path = pathname.replace(/\/+$/, "") || "/";
  return byPath.get(path);
}

/** Paths whose `/og/cards/*.jpg` files are custom artwork — skip in `og:cards` regen. */
export function articleHeroOgOverridePaths(): string[] {
  return ARTICLE_HEROES.map((h) => h.path);
}
