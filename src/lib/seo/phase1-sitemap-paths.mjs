/** Canonical host. Apex 308s to www — sitemap and robots must use www. */
export const CANONICAL_ORIGIN = "https://www.goldsilverhq.com";

/**
 * Thick topical-map URLs only (Phase-1 discipline). Thin stubs stay off the
 * sitemap (omitted, not noindexed): remaining Practice spokes, Sell, and short
 * disclaimers. `/gold-silver` and `/gold-silver/bars-vs-coins` are listed.
 * Plain ESM so OG card scripts and the Grok head injector can share it.
 */
/** Spot years before the continuous run. Notable hinges only — not every quiet year. */
export const HISTORY_EARLY_YEARS = [312, 1545, 1609, 1640, 1672, 1694, 1716, 1720, 1775];

/** Inclusive. One page every calendar year from Independence through Silver Thursday. */
export const HISTORY_YEAR_SPAN = [1776, 1980];

export function allHistoryYearNumbers() {
  const years = [...HISTORY_EARLY_YEARS];
  for (let year = HISTORY_YEAR_SPAN[0]; year <= HISTORY_YEAR_SPAN[1]; year += 1) years.push(year);
  return years;
}

const HISTORY_YEAR_PATHS = allHistoryYearNumbers().map((year) => `/history/${year}`);

export const PHASE1_SITEMAP_PATHS = [
  "/history",
  "/history/year",
  ...HISTORY_YEAR_PATHS,
  "/history/vip",
  "/history/vip/john-law",
  "/history/vip/adam-smith",
  "/history/vip/alexander-hamilton",
  "/history/vip/andrew-jackson",
  "/history/vip/woodrow-wilson",
  "/history/vip/ludwig-von-mises",
  "/history/ancient",
  "/history/ancient/why-markets-chose-gold-silver",
  "/history/ancient/lydia-first-coins",
  "/history/ancient/greece-silver-trade",
  "/history/ancient/rome-denarius-aureus",
  "/history/ancient/solidus-continuity",
  "/history/banks-paper",
  "/history/banks-paper/warehouses-to-public-banks",
  "/history/banks-paper/bank-of-amsterdam",
  "/history/banks-paper/bank-of-england",
  "/history/banks-paper/john-law",
  "/history/banks-paper/assignats",
  "/history/america",
  "/history/america/early-us-coinage",
  "/history/america/jackson-and-the-bank",
  "/history/america/greenbacks-civil-war",
  "/history/america/crime-of-1873",
  "/history/america/road-back-gold",
  "/history/20th-century",
  "/history/20th-century/panic-1907-fed",
  "/history/20th-century/classical-gold-standard-end",
  "/history/20th-century/weimar-1923",
  "/history/20th-century/1933-gold-recall",
  "/history/20th-century/bretton-woods-nixon-1971",
  "/history/silver",
  "/history/silver/potosi",
  "/history/silver/piece-of-eight",
  "/history/silver/bimetallism",
  "/history/silver/silver-thursday",
  "/history/silver/monetary-and-industry",
  "/sound-money",
  "/sound-money/what-is-sound-money",
  "/sound-money/hard-money-vs-fiat",
  "/sound-money/inflation-purchasing-power",
  "/sound-money/backed-money",
  "/gold-silver",
  "/gold-silver/bars-vs-coins",
  "/markets",
  "/markets/official-gold-book-value",
  "/markets/central-bank-gold-reserves",
  "/markets/gold-silver-ratio",
  "/markets/physical-silver-demand-by-country",
  "/blog",
  "/blog/when-exchanges-change-the-silver-rules",
  "/blog/ltcm-1998-consortium",
  "/blog/newton-1717-guinea",
  "/blog/gold-silver-ratio-what-it-counts",
  "/blog/weimar-purchasing-power-note",
];

export const DEFAULT_OG_IMAGE_PATH = "/og.jpg";

const PHASE1_SET = new Set(PHASE1_SITEMAP_PATHS);

/** Stable filename stem for a sitemap path (`/a/b` → `a-b`).
 * @param {string} [pathname]
 */
export function ogCardKey(pathname) {
  const clean = String(pathname ?? "/").replace(/\/+$/, "") || "/";
  if (clean === "/") return "home";
  return clean.replace(/^\//, "").replace(/\//g, "-");
}

/** Public URL path for a generated thick-page card, or "" for non-sitemap routes.
 * @param {string} [pathname]
 */
export function ogImagePathForRoute(pathname) {
  const clean = String(pathname ?? "/").replace(/\/+$/, "") || "/";
  if (PHASE1_SET.has(clean)) {
    return `/og/cards/${ogCardKey(clean)}.jpg`;
  }
  return "";
}

/** Thick card when available; otherwise the site-wide fallback.
 * @param {string} [pathname]
 */
export function ogImagePathForRouteOrDefault(pathname) {
  return ogImagePathForRoute(pathname) || DEFAULT_OG_IMAGE_PATH;
}
