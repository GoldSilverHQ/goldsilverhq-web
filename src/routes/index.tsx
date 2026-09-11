import { createFileRoute } from "@tanstack/react-router";
import { HomeDashboard } from "@/components/HomeDashboard";
import { HomeEditorial } from "@/components/HomeEditorial";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gold, silver, and sound money — GoldSilverHQ" },
      {
        name: "description",
        content:
          "A short gold and silver dashboard: live prices, estimated ounces mined this year, and the map of sound money and history. Media only.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <HomeDashboard />
      <HomeEditorial />
    </SiteShell>
  );
}
