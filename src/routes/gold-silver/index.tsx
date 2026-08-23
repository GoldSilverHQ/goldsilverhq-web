import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { practicePages } from "@/lib/content/map";

export const Route = createFileRoute("/gold-silver/")({
  head: () => ({
    meta: [
      { title: "Gold & Silver in Practice — GoldSilverHQ" },
      {
        name: "description",
        content:
          "Practical notes on bars versus coins, premiums, storage, fakes, and first ounces. Neutral and educational.",
      },
    ],
  }),
  component: PracticeHub,
});

function PracticeHub() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "In Practice" }]} />
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Pillar 3</p>
        <h1 className="mt-2 font-display text-4xl">Gold & Silver in Practice</h1>
        <p className="mt-4 max-w-2xl text-muted">
          How people handle the metals. Neutral, high-level, and linked back to the idea and history pillars.
        </p>
        <ol className="mt-10 grid gap-3">
          {practicePages.map((page, i) => (
            <li key={page.slug}>
              <Link
                to="/gold-silver/$slug"
                params={{ slug: page.slug }}
                className="flex gap-4 rounded-lg bg-surface px-4 py-4 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_10%,transparent)] hover:shadow-[0_0_0_1px_var(--color-gold)]"
              >
                <span className="w-6 text-sm text-gold">{i + 1}</span>
                <span>
                  <span className="block font-medium">{page.title}</span>
                  <span className="text-sm text-muted">{page.summary}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </SiteShell>
  );
}
