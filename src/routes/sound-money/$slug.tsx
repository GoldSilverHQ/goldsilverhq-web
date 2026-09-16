import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticleLead, Breadcrumb, EpisodeBody } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { articleHeroForPath } from "@/lib/content/article-media";
import { getIdea, seoTitle } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/sound-money/$slug")({
  loader: ({ params }) => {
    const page = getIdea(params.slug);
    if (!page) throw notFound();
    const path = `/sound-money/${params.slug}`;
    return { page, path, hero: articleHeroForPath(path) };
  },
  head: ({ loaderData, params }) => {
    const title = seoTitle(loaderData?.page?.seo?.titleTag ?? loaderData?.page?.title ?? "Sound Money");
    const description = loaderData?.page?.summary ?? "";
    const path = `/sound-money/${params.slug}`;
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
  component: IdeaPage,
});

function IdeaPage() {
  const { page, hero } = Route.useLoaderData();
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: "/sound-money", label: "Sound Money" },
            { label: page.title },
          ]}
        />
        <ArticleLead kicker="Definition" title={page.title} teaser={page.summary} hero={hero} />
        <div className="mt-10">
          <EpisodeBody episode={page} clusterSlug="sound-money" />
        </div>
      </div>
    </SiteShell>
  );
}
