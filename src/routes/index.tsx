import { createFileRoute } from "@tanstack/react-router";
import { HomeMap } from "@/components/HomeMap";
import { SiteShell } from "@/components/SiteShell";
import { pageHead, siteOrigin } from "@/lib/seo";

const title = "Sound money history — GoldSilverHQ";
const description =
  "A topical map of sound money: what it means, what happened from coinage to 1971, and how people handle gold and silver. Media only.";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead({ title, description, path: "/" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "GoldSilverHQ",
          url: siteOrigin(),
          description,
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <HomeMap />
    </SiteShell>
  );
}
