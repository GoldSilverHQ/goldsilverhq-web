import { createFileRoute } from "@tanstack/react-router";
import { HomeDashboard } from "@/components/HomeDashboard";
import { HomeEditorial } from "@/components/HomeEditorial";
import { SiteShell } from "@/components/SiteShell";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageShareMeta({
      title: "Gold, silver, and sound money — GoldSilverHQ",
      description:
        "A short gold and silver dashboard: live prices, estimated ounces mined this year, and the map of sound money and history. Media only.",
      path: "/",
      imagePath: "/og.jpg",
    }),
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
