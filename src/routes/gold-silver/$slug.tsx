import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticleLead, Breadcrumb, EpisodeBody } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { articleHeroForPath } from "@/lib/content/article-media";
import { getPractice, seoTitle } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/gold-silver/$slug")({
  loader: ({ params }) => {
    const page = getPractice(params.slug);
    if (!page) throw notFound();
    const path = `/gold-silver/${params.slug}`;
    return { page, path, hero: articleHeroForPath(path) };
  },
  head: ({ loaderData, params }) => {
    const page = loaderData?.page;
    const path = `/gold-silver/${params.slug}`;
    const hero = loaderData?.hero ?? articleHeroForPath(path);
    return {
      meta: pageShareMeta({
        title: seoTitle(page?.title ?? "Gold & Silver"),
        description: page?.summary ?? "",
        path,
        imagePath: hero?.ogSrc ?? "/og.jpg",
      }),
    };
  },
  component: PracticePage,
});

function PracticePage() {
  const { page, hero } = Route.useLoaderData();
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: "/gold-silver", label: "In Practice" },
            { label: page.title },
          ]}
        />
        <ArticleLead kicker="In practice" title={page.title} teaser={page.summary} hero={hero} />
        <div className="mt-10">
          <EpisodeBody episode={page} clusterSlug="gold-silver" />
        </div>
      </div>
    </SiteShell>
  );
}
