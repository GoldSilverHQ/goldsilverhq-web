import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArticleSections, Breadcrumb, RelatedLinks, RichText } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { getCluster, seoTitle } from "@/lib/content/map";

export const Route = createFileRoute("/history/$cluster/")({
  loader: ({ params }) => {
    const cluster = getCluster(params.cluster);
    if (!cluster) throw notFound();
    return cluster;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: seoTitle(loaderData?.seo?.titleTag ?? loaderData?.title ?? "History") },
      { name: "description", content: loaderData?.summary ?? "" },
    ],
  }),
  component: ClusterPage,
});

function ClusterPage() {
  const cluster = Route.useLoaderData();
  const ready = cluster.episodes.filter((e) => e.status === "ready").length;
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: "/history", label: "History" },
            { label: cluster.title },
          ]}
        />
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Cluster</p>
        <h1 className="mt-2 font-display text-4xl">{cluster.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{cluster.summary}</p>
        {cluster.sections?.length ? (
          <div className="mt-8">
            <ArticleSections sections={cluster.sections} />
          </div>
        ) : (
          cluster.intro?.map((p) => (
            <p key={p.slice(0, 40)} className="mt-4 max-w-prose text-lg leading-relaxed text-fg/90">
              <RichText text={p} />
            </p>
          ))
        )}
        <p className="mt-6 text-sm text-faint">
          {ready} of {cluster.episodes.length} episodes drafted · episode → this hub → history pillar → ebook
        </p>
        <ol className="mt-10 grid gap-3">
          {cluster.episodes.map((ep, i) => (
            <li key={ep.slug}>
              <Link
                to="/history/$cluster/$episode"
                params={{ cluster: cluster.slug, episode: ep.slug }}
                className="flex gap-4 rounded-lg bg-surface px-4 py-4 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
              >
                <span className="w-6 text-sm text-gold">{i + 1}</span>
                <span>
                  <span className="block font-medium">{ep.title}</span>
                  <span className="text-sm text-muted">{ep.summary}</span>
                  <span className="mt-1 block text-xs text-faint">
                    {ep.status === "ready" ? "Draft" : "Skeleton"}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
        {cluster.related?.length ? <RelatedLinks links={cluster.related} /> : null}
        <p className="mt-10 text-sm">
          <a href="/history" className="text-gold hover:text-gold-soft">
            ← All five history clusters
          </a>
        </p>
      </div>
    </SiteShell>
  );
}