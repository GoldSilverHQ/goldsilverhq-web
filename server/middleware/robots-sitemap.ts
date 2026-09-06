/**
 * Production (Nitro/Vercel) half of robots.txt + sitemap.xml.
 *
 * `public/robots.txt` and `public/sitemap.xml` are served by Vite in `dev`
 * but are not emitted in a way that wins over the TanStack Start SPA on
 * Vercel — those paths 404 as the “Missing page” HTML shell. This
 * middleware is auto-registered via `serverDir: "./server"` (same as
 * grok-pwa) and returns the bodies before Start’s not-found route.
 */
import { robotsTxtResponse, sitemapXmlResponse } from "../../src/lib/seo/robots-sitemap.ts";

interface SeoEvent {
  url: URL;
  req: { method: string };
}

export default function robotsSitemapMiddleware(
  event: SeoEvent,
  next: () => unknown | Promise<unknown>,
): unknown | Promise<unknown> {
  const method = (event.req.method ?? "GET").toUpperCase();
  if (method !== "GET" && method !== "HEAD") return next();

  const path = event.url.pathname;
  if (path === "/robots.txt") return robotsTxtResponse();
  if (path === "/sitemap.xml") return sitemapXmlResponse();
  return next();
}
