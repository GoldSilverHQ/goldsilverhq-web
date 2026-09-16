/**
 * Article titlebild (= on-page hero) that also doubles as the Open Graph / X card.
 *
 * Convention for later articles:
 * 1. Drop the full illustration under `public/images/<pillar>/...`.
 * 2. Write a 1200×630 JPEG crop to the Phase-1 card path under `public/og/cards/`
 *    (same key as `ogImagePathForRoute(path)` — see `phase1-sitemap-paths.mjs`).
 * 3. Register one entry here with matching `src` + `ogSrc`, alt, caption, credit.
 * 4. `npm run og:cards` skips paths listed here so branded text cards do not overwrite.
 *
 * Only ship real artwork — do not invent placeholders for other articles.
 */

export type ArticleHero = {
  /** Route pathname (no trailing slash), e.g. `/history/america/jackson-and-the-bank`. */
  path: string;
  /** On-page titlebild (public URL path). */
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
    alt: "1836 political cartoon: Andrew Jackson, cane labeled Veto, facing a many-headed monster representing the Second Bank of the United States and its state branches during the Bank War.",
    caption:
      "“General Jackson Slaying the Many Headed Monster” (1836) — Bank War / Second Bank veto cartoon.",
    credit:
      "Library of Congress, Prints & Photographs Division, LC-DIG-ds-14740. No known restrictions on publication.",
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
