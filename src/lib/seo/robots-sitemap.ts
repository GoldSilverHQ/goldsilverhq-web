/** Canonical host. Apex 308s to www — sitemap and robots must use www. */
export const CANONICAL_ORIGIN = "https://www.goldsilverhq.com";

/**
 * Thick topical-map URLs only (Phase-1 discipline). Thin stubs stay off the
 * sitemap (omitted, not noindexed): Practice, Sell, and short disclaimers.
 */
export const PHASE1_SITEMAP_PATHS = [
  "/history",
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
  "/markets",
  "/markets/official-gold-book-value",
  "/markets/central-bank-gold-reserves",
  "/markets/gold-silver-ratio",
  "/markets/physical-silver-demand-by-country",
] as const;

export const ROBOTS_TXT = [
  "User-agent: *",
  "Allow: /",
  `Sitemap: ${CANONICAL_ORIGIN}/sitemap.xml`,
  "",
].join("\n");

export function sitemapXml(paths: readonly string[] = PHASE1_SITEMAP_PATHS): string {
  const urls = paths
    .map((path) => `  <url>\n    <loc>${CANONICAL_ORIGIN}${path}</loc>\n  </url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function robotsTxtResponse(): Response {
  return new Response(ROBOTS_TXT, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}

export function sitemapXmlResponse(): Response {
  return new Response(sitemapXml(), {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}

/** Google Search Console HTML-file verification (www.goldsilverhq.com). */
export const GOOGLE_SITE_VERIFICATION_PATH = "/googleb53ee24d705afe09.html";
export const GOOGLE_SITE_VERIFICATION_BODY =
  "google-site-verification: googleb53ee24d705afe09.html";

export function googleSiteVerificationResponse(): Response {
  return new Response(GOOGLE_SITE_VERIFICATION_BODY, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
