import { createFileRoute, notFound } from "@tanstack/react-router";
import { Breadcrumb, EpisodeBody } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { getIdea, seoTitle } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/sound-money/$slug")({
  loader: ({ params }) => {
    const page = getIdea(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData, params }) => {
    const title = seoTitle(loaderData?.seo?.titleTag ?? loaderData?.title ?? "Sound Money");
    const description = loaderData?.summary ?? "";
    return {
      meta: pageShareMeta({
        title,
        description,
        path: `/sound-money/${params.slug}`,
      }),
    };
  },
  component: IdeaPage,
});

function IdeaPage() {
  const page = Route.useLoaderData();
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
        <p className="text-xs text-muted">
          Episode · Pillar 1
          {page.status === "ready" ? " · Definition" : " · Skeleton"}
        </p>
        <h1 className="mt-2 font-display text-4xl">{page.title}</h1>
        <p className="mt-3 max-w-2xl text-muted">{page.summary}</p>
        <div className="mt-10">
          <EpisodeBody episode={page} clusterSlug="sound-money" />
        </div>
      </div>
    </SiteShell>
  );
}
