import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Article";
import { GoldCoin } from "@/components/GoldCoin";
import { SiteShell } from "@/components/SiteShell";
import { KITS } from "@/lib/content/featured";

export const Route = createFileRoute("/kit")({
  head: () => ({
    meta: [
      { title: "Sound Money Survival Kit — GoldSilverHQ" },
      {
        name: "description",
        content:
          "Two companion ebooks: A Short History of Sound Money and the Sound Money Survival Kit. Media only. Not a shop and not advice.",
      },
    ],
  }),
  component: KitPage,
});

function KitPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Kit" }]} />
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Companion books</p>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl">
              The kit follows the <span className="text-gold">map</span>
            </h1>
            <p className="mt-4 max-w-prose text-lg text-muted">
              Two ebooks, one architecture. Join the list for launch notes. There is no cart on this site —
              and nothing here is a recommendation to buy or sell metal.
            </p>
            <p className="mt-4 text-sm text-faint">
              When a title is ready, checkout is via{" "}
              <a href="https://x.com/goldsilverhq" className="text-gold hover:text-gold-soft" target="_blank" rel="noreferrer">
                @GoldSilverHQ
              </a>
              .
            </p>
          </div>
          <div className="h-coin min-h-coin-lg">
            <GoldCoin />
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {KITS.map((kit) => (
            <article key={kit.id} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
              <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">{kit.kicker}</p>
              <h2 className="mt-3 font-display text-3xl">{kit.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{kit.blurb}</p>
              <p className="mt-4 text-sm text-faint">{kit.sell}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4 text-sm">
          <Link to="/history" className="text-gold hover:text-gold-soft">
            History spine →
          </Link>
          <Link
            to="/gold-silver/$slug"
            params={{ slug: "beginner-checklist" }}
            className="text-gold hover:text-gold-soft"
          >
            First-ounces checklist →
          </Link>
          <Link
            to="/sound-money/$slug"
            params={{ slug: "information-not-advice" }}
            className="text-gold hover:text-gold-soft"
          >
            Information vs advice →
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
