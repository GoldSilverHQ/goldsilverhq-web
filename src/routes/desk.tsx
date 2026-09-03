import { createFileRoute, Link } from "@tanstack/react-router";
import { MetalDesk } from "@/components/MetalDesk";
import { MoneyPath } from "@/components/MoneyPath";
import { SiteShell } from "@/components/SiteShell";
import { pillars } from "@/lib/content/map";

export const Route = createFileRoute("/desk")({
  head: () => ({
    meta: [
      { title: "Metals desk — prices, ratio, central banks — GoldSilverHQ" },
      {
        name: "description",
        content:
          "Gold and silver desk: five-year COMEX tape, 1980 highs, dollar purchasing power, and central-bank gold.",
      },
    ],
  }),
  component: DeskPage,
});

function DeskPage() {
  return (
    <SiteShell>
      <MetalDesk />
      <div className="mx-auto max-w-6xl px-4">
        <MoneyPath />
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-12 pt-12">
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Read next</p>
        <h2 className="mt-2 font-display text-3xl">History and the map</h2>
        <p className="mt-2 max-w-xl text-muted">
          The desk is the numbers. The pillars are why they matter.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {pillars.map((p) => (
            <a
              key={p.id}
              href={p.path}
              className="group rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
            >
              <p className="text-xs font-semibold tracking-[0.12em] text-gold uppercase">{p.kicker}</p>
              <h3 className="mt-3 font-display text-2xl">{p.title}</h3>
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
