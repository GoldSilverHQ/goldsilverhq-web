import { createFileRoute, Link } from "@tanstack/react-router";
import { MetalDesk } from "@/components/MetalDesk";
import { MetalsClock } from "@/components/MetalsClock";
import { MoneyPath } from "@/components/MoneyPath";
import { SiteShell } from "@/components/SiteShell";
import { pillars } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/desk")({
  head: () => ({
    meta: pageShareMeta({
      title: "Metals desk — prices, ratio, central banks — GoldSilverHQ",
      description:
        "Gold and silver desk: the full metals clock, five-year COMEX tape, 1980 highs, dollar purchasing power, and central-bank gold.",
      imagePath: "/og.jpg",
    }),
  }),
  component: DeskPage,
});

function DeskConstructionBanner() {
  return (
    <aside role="status" aria-label="Under construction" className="border-b border-line-gold bg-raised">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3">
        <p className="inline-flex items-center rounded-full border border-line-gold bg-surface px-2.5 py-1 text-xs font-semibold tracking-[0.16em] text-gold uppercase">
          Under construction
        </p>
        <p className="text-sm text-muted">This desk is not finished.</p>
      </div>
    </aside>
  );
}

function DeskPage() {
  return (
    <SiteShell ui="data">
      <DeskConstructionBanner />
      <MetalDesk />
      <MetalsClock asSection />
      <div className="mx-auto max-w-6xl px-4">
        <MoneyPath />
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-12 pt-12">
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Read next</p>
        <h2 className="mt-2 font-sans text-3xl">History and the ideas</h2>
        <p className="mt-2 max-w-xl text-muted">
          The desk is the numbers. The articles explain why they matter.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {pillars.map((p) => (
            <a
              key={p.id}
              href={p.path}
              className="group rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
            >
              <p className="text-xs font-semibold tracking-[0.12em] text-gold uppercase">{p.kicker}</p>
              <h3 className="mt-3 font-sans text-2xl">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.summary}</p>
              <p className="mt-5 text-sm font-medium text-gold group-hover:text-gold-soft">Enter →</p>
            </a>
          ))}
        </div>
        <p className="mt-6 text-sm">
          <Link to="/maps" className="text-gold hover:text-gold-soft">
            Open the world map →
          </Link>
        </p>
      </section>
    </SiteShell>
  );
}
