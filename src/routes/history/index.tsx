import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleSections, Breadcrumb, RelatedLinks } from "@/components/Article";
import { HistorySubnav } from "@/components/HistorySubnav";
import { HistoryYearCards } from "@/components/HistoryYearCards";
import { SiteShell } from "@/components/SiteShell";
import { historyHubBody } from "@/lib/content/bodies";
import { HISTORY_PEOPLE } from "@/lib/content/history-people";
import { historyClusters, historyHub, seoTitle } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/history/")({
  head: () => ({
    meta: pageShareMeta({
      title: seoTitle(historyHub.titleTag),
      description:
        "What happened when money was metal, paper, or both — from clipped coins and warehouse receipts to Weimar, Bretton Woods, and the 1971 gold-window close.",
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
        <HistorySubnav className="mt-6" />
        <div className="mt-8">
          <ArticleSections sections={historyHubBody} />
        </div>

        <HistoryYearCards />

        <h2 className="mt-16 font-display text-3xl">Notable people</h2>
        <p className="mt-2 max-w-prose text-muted">
          Financiers, economists, and the politicians who signed the statutes. One page each.
        </p>
        <p className="mt-4 flex flex-wrap gap-2">
          {HISTORY_PEOPLE.map((person) => (
            <Link
              key={person.slug}
              to="/history/vip/$person"
              params={{ person: person.slug }}
              className="rounded-full bg-surface px-3 py-1.5 text-sm text-gold shadow-[var(--shadow-border)] hover:text-gold-soft"
            >
              {person.name}
            </Link>
          ))}
          <Link to="/history/vip" className="rounded-full px-3 py-1.5 text-sm text-muted hover:text-fg">
            All people →
          </Link>
        </p>

        <h2 className="mt-16 font-display text-3xl">Where the story continues</h2>
        <p className="mt-2 max-w-prose text-muted">
          Coinage before paper, paper before fiat, statutes that redefined the dollar, and the century that closed the gold window.
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
