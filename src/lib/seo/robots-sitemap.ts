import {
  CANONICAL_ORIGIN,
  DEFAULT_OG_IMAGE_PATH,
  PHASE1_SITEMAP_PATHS,
  ogCardKey,
  ogImagePathForRoute,
} from "./phase1-sitemap-paths.mjs";

export {
  CANONICAL_ORIGIN,
  DEFAULT_OG_IMAGE_PATH,
  PHASE1_SITEMAP_PATHS,
  ogCardKey,
  ogImagePathForRoute,
};

/**
 * Phase-1 robots + sitemap responses. Path list lives in
 * `phase1-sitemap-paths.mjs` so OG card scripts share the same source.
 */

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
