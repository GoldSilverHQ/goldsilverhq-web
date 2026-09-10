import { createFileRoute, notFound } from "@tanstack/react-router";
import { Breadcrumb, EpisodeBody } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { getMarket, seoTitle } from "@/lib/content/map";

export const Route = createFileRoute("/markets/$slug")({
  loader: ({ params }) => {
    const page = getMarket(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: seoTitle(loaderData?.seo?.titleTag ?? loaderData?.title ?? "Markets") },
      { name: "description", content: loaderData?.summary ?? "" },
    ],
  }),
  component: MarketPage,
});

function MarketPage() {
  const page = Route.useLoaderData();
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
        <p className="text-xs text-muted">
          Markets
          {page.status === "skeleton" ? " · Skeleton" : ""}
        </p>
        <h1 className="mt-2 font-sans text-4xl">{page.title}</h1>
        <p className="mt-3 max-w-2xl text-muted">{page.summary}</p>
        <div className="mt-10">
          <EpisodeBody episode={page} clusterSlug="markets" />
        </div>
      </div>
    </SiteShell>
  );
}
