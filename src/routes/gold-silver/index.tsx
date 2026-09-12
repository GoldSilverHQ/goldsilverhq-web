import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleSections, Breadcrumb, RelatedLinks } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { practiceHubBody } from "@/lib/content/bodies";
import { practiceHub, practicePages, seoTitle } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/gold-silver/")({
  head: () => ({
    meta: pageShareMeta({
      title: seoTitle(practiceHub.titleTag),
      description:
        "Practical notes on gold bars versus coins, premiums over spot, storage, fakes, and first ounces. Neutral and educational. Not investment advice.",
      path: "/gold-silver",
    }),
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
        <div className="mt-8">
          <ArticleSections sections={practiceHubBody} />
        </div>

        <h2 className="mt-16 font-display text-3xl">Read by topic</h2>
        <p className="mt-2 max-w-prose text-muted">
          Six handling pages. Start anywhere; each one returns here. Still not a shop.
        </p>
        <ol className="mt-10 grid gap-3">
          {practicePages.map((page, i) => (
            <li key={page.slug}>
              <Link
                to="/gold-silver/$slug"
                params={{ slug: page.slug }}
                className="flex gap-4 rounded-lg bg-surface px-4 py-4 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
              >
                <span className="w-6 text-sm text-gold">{i + 1}</span>
                <span>
                  <span className="block font-medium">{page.title}</span>
                  <span className="text-sm text-muted">{page.summary}</span>
                  <span className="mt-1 block text-xs text-faint">Practice</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <RelatedLinks links={practiceHub.related} />
      </div>
    </SiteShell>
  );
}
