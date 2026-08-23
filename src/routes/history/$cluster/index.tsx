import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Article";
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
      { title: seoTitle(loaderData?.title ?? "History") },
      { name: "description", content: loaderData?.summary ?? "" },
    ],
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
        <h1 className="font-display text-4xl">{cluster.title}</h1>
        <p className="mt-3 max-w-2xl text-muted">{cluster.summary}</p>
        <ol className="mt-10 grid gap-3">
          {cluster.episodes.map((ep, i) => (
            <li key={ep.slug}>
              <Link
                to="/history/$cluster/$episode"
                params={{ cluster: cluster.slug, episode: ep.slug }}
                className="flex gap-4 rounded-lg bg-surface px-4 py-4 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_10%,transparent)] hover:shadow-[0_0_0_1px_var(--color-gold)]"
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
      </div>
    </SiteShell>
  );
}
