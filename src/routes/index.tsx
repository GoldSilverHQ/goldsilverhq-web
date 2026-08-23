import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { lazy, Suspense } from "react";
import { FlowMap } from "@/components/FlowMap";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/ui/button";
import { pillars } from "@/lib/content/map";

const GoldCoin = lazy(() =>
  import("@/components/GoldCoin").then((m) => ({ default: m.GoldCoin })),
);

const PHASE1 = [
  {
    href: "/history/20th-century/weimar-1923",
    title: "Weimar 1923",
    cluster: "20th century",
  },
  {
    href: "/history/20th-century/bretton-woods-nixon-1971",
    title: "Bretton Woods → Nixon 1971",
    cluster: "20th century",
  },
  {
    href: "/history/20th-century/panic-1907-fed",
    title: "Panic of 1907 and the Fed",
    cluster: "20th century",
  },
  {
    href: "/history/banks-paper/john-law",
    title: "John Law and the Mississippi Bubble",
    cluster: "Banks & paper",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GoldSilverHQ — Sound money, history, and physical metal" },
      {
        name: "description",
        content:
          "Clear writing on sound money, the history of gold and silver, and practical guidance for holding metal. Media only.",
      },
    ],
  }),
  component: Home,
});

function CoinFallback() {
  return (
    <div className="grid h-full w-full place-items-center" aria-hidden>
      <div className="size-40 rounded-full bg-gold/30 shadow-[0_0_80px_color-mix(in_oklab,var(--color-gold)_35%,transparent)]" />
    </div>
  );
}

function Home() {
  return (
    <SiteShell>
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_0%,color-mix(in_oklab,var(--color-gold)_16%,transparent),transparent_52%)]" />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-16">
          <div className="relative z-10">
            <p className="mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-[0.14em] text-gold uppercase shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-gold)_35%,transparent)]">
              Media · Sound money · No advice
            </p>
            <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-fg sm:text-5xl">
              Five thousand years
              <span className="mt-1 block">
                of <span className="text-gold">gold</span> &{" "}
                <span className="text-silver">silver</span>
              </span>
            </h1>
            <p className="mt-3 font-display text-xl text-muted sm:text-2xl">explained clearly.</p>
          </div>

          <div className="relative z-10 h-coin w-full lg:row-span-2 lg:h-full lg:min-h-coin-lg">
            <Suspense fallback={<CoinFallback />}>
              <GoldCoin />
            </Suspense>
          </div>

          <div className="relative z-10">
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              What sound money means, what actually happened, and how people handle physical metal.
              Structured as a topical map so every page has a job.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/history">
                  Explore the history <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/flows">Watch metal flows</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Topical map</p>
        <h2 className="mt-2 font-display text-3xl">Three pillars. One path.</h2>
        <p className="mt-2 max-w-xl text-muted">
          Idea → History → Practice. Internal links follow that order so authority does not leak.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {pillars.map((p) => (
            <a
              key={p.id}
              href={p.path}
              className="group rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)]"
            >
              <p className="text-xs font-semibold tracking-[0.12em] text-gold uppercase">{p.kicker}</p>
              <h3 className="mt-3 font-display text-2xl">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.summary}</p>
              <p className="mt-5 text-sm font-medium text-gold group-hover:text-gold-soft">Enter the pillar →</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Phase 1 drafts</p>
        <h2 className="mt-2 font-display text-3xl">Start with the 20th century</h2>
        <p className="mt-2 max-w-xl text-muted">
          Weimar, the Fed, Nixon, and John Law — ready pages, linked back into their cluster hubs.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {PHASE1.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg bg-surface px-5 py-4 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
            >
              <p className="text-xs tracking-[0.12em] text-gold uppercase">{item.cluster}</p>
              <p className="mt-1 font-display text-xl text-fg">{item.title}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <FlowMap />
      </section>
    </SiteShell>
  );
}
