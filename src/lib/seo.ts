import { historyClusters, ideaPages, practicePages } from "./content/map.ts";

export const DEFAULT_SITE_ORIGIN = "https://goldsilverhq.com";

export function siteOrigin(request?: Request): string {
  if (request) {
    try {
      const host = new URL(request.url).hostname;
      if (host !== "localhost" && host !== "127.0.0.1") {
        return new URL(request.url).origin;
      }
    } catch {
      /* fall through */
    }
  }
  const env =
    (typeof import.meta !== "undefined" && import.meta.env && "VITE_SITE_URL" in import.meta.env
      ? (import.meta.env.VITE_SITE_URL as string | undefined)
      : undefined) ||
    (typeof process !== "undefined" ? process.env.VITE_SITE_URL || process.env.SITE_URL : undefined);
  if (env) return env.replace(/\/$/, "");
  return DEFAULT_SITE_ORIGIN;
}

/** Crawlable URLs for the topical map. No kit, no newsletter, no redirects. */
export function indexPaths(): string[] {
  const paths = ["/", "/sound-money", "/history", "/gold-silver", "/about", "/desk", "/maps", "/quiz"];
  for (const page of ideaPages) paths.push(`/sound-money/${page.slug}`);
  for (const cluster of historyClusters) {
    paths.push(`/history/${cluster.slug}`);
    for (const episode of cluster.episodes) paths.push(`/history/${cluster.slug}/${episode.slug}`);
  }
  for (const page of practicePages) paths.push(`/gold-silver/${page.slug}`);
  return paths;
}

export function pageHead({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}) {
  const url = `${siteOrigin()}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function sitemapXml(origin: string): string {
  const body = indexPaths()
    .map((path) => `  <url><loc>${origin}${path}</loc></url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}

export function robotsTxt(origin: string): string {
  return `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`;
}
