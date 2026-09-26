import { createFileRoute } from "@tanstack/react-router";
import { FullDesk } from "@/components/FullDesk";
import { SiteShell } from "@/components/SiteShell";
import { pillars } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/desk")({
  head: () => ({
    meta: pageShareMeta({
      title: "Metals desk — prices, official gold, money — GoldSilverHQ",
      description:
        "Gold and silver desk by category: prices and five-year COMEX history, official gold holdings, stocks and flows, money supply, and exchange paper.",
      imagePath: "/og.jpg",
    }),
  }),
  component: DeskPage,
});

function DeskPage() {
  return (
    <SiteShell ui="data">
      <FullDesk />

      <section className="mx-auto max-w-6xl px-4 pb-12 pt-4">
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Read next</p>
        <h2 className="mt-2 font-sans text-3xl">History and the ideas</h2>
        <p className="mt-2 max-w-xl text-muted">
          Numbers on the desk; articles for the stories behind them.
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
      </section>
    </SiteShell>
  );
}
