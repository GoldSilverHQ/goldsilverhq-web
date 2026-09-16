import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticleLead, Breadcrumb, EpisodeBody } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { articleHeroForPath } from "@/lib/content/article-media";
import { getMarket, seoTitle } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/markets/$slug")({
  loader: ({ params }) => {
    const page = getMarket(params.slug);
    if (!page) throw notFound();
    const path = `/markets/${params.slug}`;
    return { page, path, hero: articleHeroForPath(path) };
  },
  head: ({ loaderData, params }) => {
    const title = seoTitle(loaderData?.page?.seo?.titleTag ?? loaderData?.page?.title ?? "Markets");
    const description = loaderData?.page?.summary ?? "";
    const path = `/markets/${params.slug}`;
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
  component: MarketPage,
});

function MarketPage() {
  const { page, hero } = Route.useLoaderData();
  return (
    <SiteShell ui="markets">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: "/markets", label: "Markets" },
            { label: page.title },
          ]}
        />
        <ArticleLead
          kicker="Markets"
          title={page.title}
          teaser={page.summary}
          hero={hero}
          face="sans"
        />
        <div className="mt-10">
          <EpisodeBody episode={page} clusterSlug="markets" />
        </div>
      </div>
    </SiteShell>
  );
}
