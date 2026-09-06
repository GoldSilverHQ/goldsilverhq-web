import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleSections, Breadcrumb, RelatedLinks } from "@/components/Article";
import { HistoryTimeline } from "@/components/HistoryTimeline";
import { SiteShell } from "@/components/SiteShell";
import { historyHubBody } from "@/lib/content/bodies";
import { historyClusters, historyHub, seoTitle } from "@/lib/content/map";

export const Route = createFileRoute("/history/")({
  head: () => ({
    meta: [
      { title: seoTitle(historyHub.titleTag) },
      {
        name: "description",
        content:
          "This pillar records what happened when money was metal, paper, or both. A documentary path through coinage, banks, crises, and statute—from ancient coinage to the 1971 gold-window close.",
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
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">History</p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">A short history of sound money</h1>
        <div className="mt-8">
          <ArticleSections sections={historyHubBody} />
        </div>

        <HistoryTimeline />

        <h2 className="mt-16 font-display text-3xl">Read by cluster</h2>
        <p className="mt-2 max-w-prose text-muted">Same stories, grouped. Start anywhere; the links keep the sequence.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {historyClusters.map((cluster, i) => (
            <Link
              key={cluster.slug}
              to="/history/$cluster"
              params={{ cluster: cluster.slug }}
              className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
            >
              <p className="text-xs text-gold">Cluster {i + 1}</p>
              <h3 className="mt-2 font-display text-2xl">{cluster.title}</h3>
              <p className="mt-2 text-sm text-muted">{cluster.summary}</p>
              <p className="mt-4 text-sm text-gold">Open cluster →</p>
            </Link>
          ))}
        </div>
        <RelatedLinks links={historyHub.related} />
      </div>
    </SiteShell>
  );
}
