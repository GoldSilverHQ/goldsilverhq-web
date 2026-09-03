import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Breadcrumb, RichText } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { getCluster, seoTitle } from "@/lib/content/map";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/history/$cluster/")({
  loader: ({ params }) => {
    const cluster = getCluster(params.cluster);
    if (!cluster) throw notFound();
    return cluster;
  },
  head: ({ loaderData }) =>
    pageHead({
      title: seoTitle(loaderData?.title ?? "History"),
      description: loaderData?.summary ?? "",
      path: `/history/${loaderData?.slug ?? ""}`,
    }),
  component: ClusterPage,
});

function ClusterPage() {
  const cluster = Route.useLoaderData();
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
        {cluster.intro?.map((p) => (
          <p key={p.slice(0, 40)} className="mt-4 max-w-prose text-lg leading-relaxed text-fg/90">
            <RichText text={p} />
          </p>
        ))}
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
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-sm">
          <a href="/history" className="text-gold hover:text-gold-soft">
            ← All five history clusters
          </a>
        </p>
      </div>
    </SiteShell>
  );
}
