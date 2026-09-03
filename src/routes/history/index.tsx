import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Article";
import { HistoryTimeline } from "@/components/HistoryTimeline";
import { SiteShell } from "@/components/SiteShell";
import { historyClusters } from "@/lib/content/map";

export const Route = createFileRoute("/history/")({
  head: () => ({
    meta: [
      { title: "History of sound money — GoldSilverHQ" },
      {
        name: "description",
        content:
          "Interactive timeline of gold, silver, and paper money: from Lydia’s first coins through Weimar, 1933, and the Nixon shock of 1971.",
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
        <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
          From ancient coinage to the closing of the gold window. The timeline is the spine.
          The clusters below group the same episodes for reading in order.
        </p>

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
        <aside className="mt-12 max-w-prose rounded-xl bg-raised px-5 py-6 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-gold)_28%,transparent)]">
          <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Ebook companion</p>
          <p className="mt-2 font-display text-2xl text-fg">A Short History of Sound Money</p>
          <p className="mt-2 text-sm text-muted">The book follows this same spine.</p>
          <a href="/#newsletter" className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-gold hover:text-gold-soft">
            Get launch notes →
          </a>
        </aside>
      </div>
    </SiteShell>
  );
}
