import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleSections, Breadcrumb, RelatedLinks } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { marketsHubBody } from "@/lib/content/bodies";
import { marketPages, marketsHub, seoTitle } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/markets/")({
  head: () => ({
    meta: pageShareMeta({
      title: seoTitle(marketsHub.titleTag),
      description:
        "Why the U.S. still books gold at $42.22, how central banks report gold reserves, what the gold–silver ratio measures, and which countries buy and use the most silver.",
      path: "/markets",
    }),
  }),
  component: MarketsHub,
});

function MarketsHub() {
  return (
    <SiteShell ui="markets">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Markets" }]} />
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Markets</p>
        <h1 className="mt-2 font-sans text-4xl sm:text-5xl">Gold &amp; silver markets</h1>
        <div className="mt-8">
          <ArticleSections sections={marketsHubBody} face="sans" />
        </div>

        <h2 className="mt-16 font-sans text-3xl">The articles</h2>
        <p className="mt-2 max-w-prose text-muted">
          Each one takes a single number and explains where it comes from.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {marketPages.map((page) => (
            <Link
              key={page.slug}
              to="/markets/$slug"
              params={{ slug: page.slug }}
              className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
            >
              <h3 className="font-sans text-2xl">{page.title}</h3>
              <p className="mt-2 text-sm text-muted">{page.summary}</p>
              <p className="mt-4 text-sm text-gold">Continue →</p>
            </Link>
          ))}
        </div>
        <RelatedLinks links={marketsHub.related} face="sans" />
      </div>
    </SiteShell>
  );
}
