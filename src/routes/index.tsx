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
          "Gold, silver, the ratio, official gold, and how much of world government debt that gold covers. Media only.",
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
