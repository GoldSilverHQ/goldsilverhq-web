import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { historyClusters } from "@/lib/content/map";

export const Route = createFileRoute("/history/")({
  head: () => ({
    meta: [
      { title: "Sound Money History — GoldSilverHQ" },
      {
        name: "description",
        content:
          "The history of sound money in five clusters: ancient coinage, banks and paper, America, the 20th century, and silver.",
      },
    ],
  }),
  component: HistoryHub,
});

function HistoryHub() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "History" }]} />
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Pillar 2</p>
        <h1 className="mt-2 font-display text-4xl">Sound Money History</h1>
        <p className="mt-4 max-w-2xl text-muted">
          What happened — not just the idea. Episode → cluster hub → this page → ebook.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {historyClusters.map((cluster, i) => (
            <Link
              key={cluster.slug}
              to="/history/$cluster"
              params={{ cluster: cluster.slug }}
              className="rounded-xl bg-surface p-6 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_10%,transparent)] hover:shadow-[0_0_0_1px_var(--color-gold)]"
            >
              <p className="text-xs text-gold">Cluster 2.{i + 1}</p>
              <h2 className="mt-2 font-display text-2xl">{cluster.title}</h2>
              <p className="mt-2 text-sm text-muted">{cluster.summary}</p>
              <p className="mt-4 text-sm text-gold">{cluster.episodes.length} episodes →</p>
            </Link>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
