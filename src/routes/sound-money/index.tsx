import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumb, RichText } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { ideaPages } from "@/lib/content/map";
import { pageHead } from "@/lib/seo";

const INTRO = [
  "This pillar answers what sound money *means* — not what happened in 1923 or 1971, and not how to buy a bar. History has its own pillar. Practice has its own pillar.",
  "Cases stay in [history](/history). Handling metal stays in [practice](/gold-silver).",
];

export const Route = createFileRoute("/sound-money/")({
  head: () =>
    pageHead({
      title: "What sound money means — GoldSilverHQ",
      description:
        "What sound money means: a unit that cannot be expanded at will. Hard money vs fiat, inflation, and backed money — definitions only. History lives elsewhere.",
      path: "/sound-money",
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
        {INTRO.map((p) => (
          <p key={p.slice(0, 32)} className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
            <RichText text={p} />
          </p>
        ))}
        <ol className="mt-10 grid gap-3">
          {ideaPages.map((page, i) => (
            <li key={page.slug}>
              <Link
                to="/sound-money/$slug"
                params={{ slug: page.slug }}
                className="flex gap-4 rounded-lg bg-surface px-4 py-4 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
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
