import { createFileRoute } from "@tanstack/react-router";
import { HomeMap } from "@/components/HomeMap";
import { MetalsClock } from "@/components/MetalsClock";
import { SiteShell } from "@/components/SiteShell";
import { pageHead, siteOrigin } from "@/lib/seo";

const title = "Gold, silver, and sound money — GoldSilverHQ";
const description =
  "Gold and silver dashboard: spot, official stocks, printers, and who holds the metal. Sound money history lives on the map. Media only.";

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
      <MetalsClock />
      <HomeMap />
    </SiteShell>
  );
}
