import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { WorldMap } from "@/components/WorldMap";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/maps")({
  head: () => ({
    meta: pageShareMeta({
      title: "The world in gold & silver — GoldSilverHQ",
      description:
        "Interactive world map of gold and silver: mine production and reserves. Toggle metal, pick a metric, inspect a country.",
      imagePath: "/og.jpg",
    }),
  }),
  component: MapsPage,
});

function MapsPage() {
  return (
    <SiteShell ui="data">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Maps" }]} />
        <h1 className="font-sans text-4xl sm:text-5xl">
          The world in <span className="text-gold">gold</span> & <span className="text-silver">silver</span>
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Production and reserves, country by country. Numbers are draft — the map is ready for your series.
        </p>
        <div className="mt-8">
          <WorldMap />
        </div>
      </div>
    </SiteShell>
  );
}
