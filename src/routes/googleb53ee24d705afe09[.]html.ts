import { createFileRoute } from "@tanstack/react-router";
import { googleSiteVerificationResponse } from "@/lib/seo/robots-sitemap";

export const Route = createFileRoute("/googleb53ee24d705afe09.html")({
  server: {
    handlers: {
      GET: async () => googleSiteVerificationResponse(),
    },
  },
});
