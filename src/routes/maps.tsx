import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/maps")({
  head: () => ({
    meta: pageShareMeta({
      title: "World map — in progress — GoldSilverHQ",
      description:
        "A country-by-country gold and silver map is in progress. Dated production, reserves, and survey figures live under Markets until the map is ready.",
      imagePath: "/og.jpg",
    }),
  }),
  component: MapsPage,
});

function MapsPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Maps" }]} />
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">In progress</p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">
          The world in <span className="text-gold">gold</span> & <span className="text-silver">silver</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          A country-by-country picture of mine production and official or identified reserves will live here. The
          map is in progress. Today’s figures are not ready to publish, so this page does not show draft
          placeholders.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Until then, dated survey and official figures live under{" "}
          <a href="/markets" className="text-gold hover:text-gold-soft">
            Markets
          </a>
          . Silver’s historical geography — Cerro Rico, the piece of eight — lives under{" "}
          <a href="/history/silver" className="text-gold hover:text-gold-soft">
            Silver in history
          </a>
          .
        </p>
      </div>
    </SiteShell>
  );
}
