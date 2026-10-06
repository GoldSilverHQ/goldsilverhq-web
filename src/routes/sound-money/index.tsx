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
        "Whether the issuer can create more of the unit by decision alone: hard money, fiat, what the unit buys, and a vault you can or cannot claim.",
      path: "/sound-money",
    }),
  }),
  component: IdeaHub,
});

function IdeaHub() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Sound Money" }]} />
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">The idea</p>
        <h1 className="mt-2 font-display text-4xl">Sound Money</h1>
        <div className="mt-8">
          <ArticleSections sections={soundMoneyHubBody} />
        </div>

        <ol className="mt-16 grid gap-3">
          {ideaPages.map((page) => (
            <li key={page.slug}>
              <Link
                to="/sound-money/$slug"
                params={{ slug: page.slug }}
                className="flex gap-4 rounded-lg bg-surface px-4 py-4 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
              >
                <span>
                  <span className="block font-medium">{page.title}</span>
                  <span className="text-sm text-muted">{page.summary}</span>
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
