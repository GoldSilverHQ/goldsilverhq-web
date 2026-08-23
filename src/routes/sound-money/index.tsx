import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { ideaPages } from "@/lib/content/map";

export const Route = createFileRoute("/sound-money/")({
  head: () => ({
    meta: [
      { title: "Sound Money (the idea) — GoldSilverHQ" },
      {
        name: "description",
        content:
          "What sound money means: hard money vs fiat, inflation, and what backed money does and does not mean. History lives in a separate pillar.",
      },
    ],
  }),
  component: IdeaHub,
});

function IdeaHub() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Sound Money" }]} />
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Pillar 1</p>
        <h1 className="mt-2 font-display text-4xl">Sound Money (the idea)</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Definitions and distinctions only. Do not park Weimar or Nixon here. Those episodes belong under history.
        </p>
        <ol className="mt-10 grid gap-3">
          {ideaPages.map((page, i) => (
            <li key={page.slug}>
              <Link
                to="/sound-money/$slug"
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
