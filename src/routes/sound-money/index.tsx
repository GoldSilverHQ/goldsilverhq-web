import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleSections, Breadcrumb, RelatedLinks } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { soundMoneyHubBody } from "@/lib/content/bodies";
import { ideaPages, seoTitle, soundMoneyHub } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/sound-money/")({
  head: () => ({
    meta: pageShareMeta({
      title: seoTitle(soundMoneyHub.titleTag),
      description:
        "What sound money means: a unit that cannot be expanded at will. Hard money vs fiat, inflation, and backed money — definitions only. History lives elsewhere.",
      path: "/sound-money",
    }),
  }),
  component: IdeaHub,
});

function IdeaHub() {
  const definitionPages = ideaPages.filter((p) => p.slug !== "information-not-advice");
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Sound Money" }]} />
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Pillar 1</p>
        <h1 className="mt-2 font-display text-4xl">Sound Money (the idea)</h1>
        <div className="mt-8">
          <ArticleSections sections={soundMoneyHubBody} />
        </div>

        <h2 className="mt-16 font-display text-3xl">Read by definition</h2>
        <p className="mt-2 max-w-prose text-muted">
          Four thick definition pages, plus a short media disclaimer. Start anywhere; each one returns here.
        </p>
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
                  <span className="mt-1 block text-xs text-faint">
                    {definitionPages.some((d) => d.slug === page.slug) ? "Definition" : "Disclaimer"}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <RelatedLinks links={soundMoneyHub.related} />
      </div>
    </SiteShell>
  );
}
