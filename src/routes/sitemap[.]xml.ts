import { createFileRoute } from "@tanstack/react-router";
import { sitemapXmlResponse } from "@/lib/seo/robots-sitemap";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => sitemapXmlResponse(),
    },
  },
});
