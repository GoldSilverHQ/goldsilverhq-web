import { createFileRoute } from "@tanstack/react-router";
import { HomeEditorial } from "@/components/HomeEditorial";
import { MetalsClock } from "@/components/MetalsClock";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gold, silver, and sound money — GoldSilverHQ" },
      {
        name: "description",
        content:
          "Global precious metals clock, plus the map: sound money, monetary history, and practical notes on physical metal. Media only.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <MetalsClock />
      <HomeEditorial />
    </SiteShell>
  );
}
