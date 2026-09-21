import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleSections, Breadcrumb, RelatedLinks } from "@/components/Article";
import { HistoryTimeline } from "@/components/HistoryTimeline";
import { SiteShell } from "@/components/SiteShell";
import { historyHubBody } from "@/lib/content/bodies";
import { HISTORY_YEARS } from "@/lib/content/history-years";
import { historyClusters, historyHub, seoTitle } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/history/")({
  head: () => ({
    meta: pageShareMeta({
      title: seoTitle(historyHub.titleTag),
      description:
        "What happened when money was metal, paper, or both. A documentary path through coinage, banks, crises, and statute—from ancient coinage to the 1971 gold-window close.",
      path: "/history",
    }),
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

        <h2 className="mt-16 font-display text-3xl">One year</h2>
        <p className="mt-2 max-w-prose text-muted">
          A short note and one picture for a single year. The longer articles stay in the stretches below.
        </p>
        <p className="mt-4 flex flex-wrap gap-2">
          {HISTORY_YEARS.map((year) => (
            <Link
              key={year.year}
              to="/history/$cluster"
              params={{ cluster: String(year.year) }}
              className="rounded-full bg-surface px-3 py-1.5 font-sans text-sm tabular-nums text-gold shadow-[var(--shadow-border)] hover:text-gold-soft"
            >
              {year.year}
            </Link>
          ))}
          <Link to="/history/year" className="rounded-full px-3 py-1.5 text-sm text-muted hover:text-fg">
            All years →
          </Link>
        </p>

        <h2 className="mt-16 font-display text-3xl">Where the story continues</h2>
        <p className="mt-2 max-w-prose text-muted">
          From ancient coinage to the gold-window close — five stretches, each with its own dated articles.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {historyClusters.map((cluster) => (
            <Link
              key={cluster.slug}
              to="/history/$cluster"
              params={{ cluster: cluster.slug }}
              className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
            >
              <h3 className="font-display text-2xl">{cluster.title}</h3>
              <p className="mt-2 text-sm text-muted">{cluster.summary}</p>
              <p className="mt-4 text-sm text-gold">Continue →</p>
            </Link>
          ))}
        </div>
        <RelatedLinks links={historyHub.related} />
      </div>
    </SiteShell>
  );
}
