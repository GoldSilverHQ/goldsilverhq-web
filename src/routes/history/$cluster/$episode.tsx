import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticleHeroImage, Breadcrumb, EpisodeBody } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { articleHeroForPath } from "@/lib/content/article-media";
import { getCluster, getEpisode, seoTitle } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/history/$cluster/$episode")({
  loader: ({ params }) => {
    const cluster = getCluster(params.cluster);
    const episode = getEpisode(params.cluster, params.episode);
    if (!cluster || !episode) throw notFound();
    const path = `/history/${params.cluster}/${params.episode}`;
    return { cluster, episode, path, hero: articleHeroForPath(path) };
  },
  head: ({ loaderData, params }) => {
    const title = seoTitle(
      loaderData?.episode?.seo?.titleTag ?? loaderData?.episode?.title ?? "History",
    );
    const description = loaderData?.episode?.summary ?? "";
    const path = `/history/${params.cluster}/${params.episode}`;
    const hero = loaderData?.hero ?? articleHeroForPath(path);
    return {
      meta: pageShareMeta({
        title,
        description,
        path,
        imagePath: hero?.ogSrc,
      }),
    };
  },
  component: EpisodePage,
});

function EpisodePage() {
  const { cluster, episode, hero } = Route.useLoaderData();
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
        <p className="text-xs text-muted">{cluster.title}</p>
        <h1 className="mt-2 font-display text-4xl">{episode.title}</h1>
        <p className="mt-3 max-w-2xl text-muted">{episode.summary}</p>
        {hero ? <ArticleHeroImage hero={hero} /> : null}
        <div className="mt-10">
          <EpisodeBody episode={episode} clusterSlug={cluster.slug} />
        </div>
      </div>
    </SiteShell>
  );
}
