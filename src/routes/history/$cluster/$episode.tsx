import { createFileRoute, notFound } from "@tanstack/react-router";
import { Breadcrumb, EpisodeBody } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { getCluster, getEpisode, seoTitle } from "@/lib/content/map";

export const Route = createFileRoute("/history/$cluster/$episode")({
  loader: ({ params }) => {
    const cluster = getCluster(params.cluster);
    const episode = getEpisode(params.cluster, params.episode);
    if (!cluster || !episode) throw notFound();
    return { cluster, episode };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: seoTitle(loaderData?.episode?.seo?.titleTag ?? loaderData?.episode?.title ?? "History") },
      { name: "description", content: loaderData?.episode?.summary ?? "" },
    ],
  }),
  component: EpisodePage,
});

function EpisodePage() {
  const { cluster, episode } = Route.useLoaderData();
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: "/history", label: "History" },
            { href: `/history/${cluster.slug}`, label: cluster.title },
            { label: episode.title },
          ]}
        />
        <p className="text-xs text-muted">
          Episode · {cluster.title}
          {episode.status === "skeleton" ? " · Skeleton" : ""}
        </p>
        <h1 className="mt-2 font-display text-4xl">{episode.title}</h1>
        <p className="mt-3 max-w-2xl text-muted">{episode.summary}</p>
        <div className="mt-10">
          <EpisodeBody episode={episode} clusterSlug={cluster.slug} />
        </div>
      </div>
    </SiteShell>
  );
}
