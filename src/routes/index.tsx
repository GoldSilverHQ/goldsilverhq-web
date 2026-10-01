import { createFileRoute } from "@tanstack/react-router";
import { HomeDashboard } from "@/components/HomeDashboard";
import { HomeEditorial } from "@/components/HomeEditorial";
import { HomeSidebar } from "@/components/HomeSidebar";
import { SiteShell } from "@/components/SiteShell";
import { onThisDay } from "@/lib/content/on-this-day";
import { getSilverMovers } from "@/lib/dashboard/silver-movers";
import { getSpotPerformance } from "@/lib/dashboard/spot-performance";
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
  loader: async () => {
    const [movers, performance] = await Promise.all([
      getSilverMovers().catch(() => null),
      getSpotPerformance().catch(() => null),
    ]);
    return { day: onThisDay(new Date()), movers, performance };
  },
  staleTime: 5 * 60 * 1000,
  component: Home,
});

function Home() {
  const { day, movers, performance } = Route.useLoaderData();
  return (
    <SiteShell>
      <HomeDashboard
        performance={performance}
        sidebar={<HomeSidebar dayLabel={day.label} events={day.events} movers={movers} />}
      />
      <HomeEditorial />
    </SiteShell>
  );
}
