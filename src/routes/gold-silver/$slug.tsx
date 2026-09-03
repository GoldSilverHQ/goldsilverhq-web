import { createFileRoute, notFound } from "@tanstack/react-router";
import { Breadcrumb, EpisodeBody } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { getPractice, seoTitle } from "@/lib/content/map";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/gold-silver/$slug")({
  loader: ({ params }) => {
    const page = getPractice(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData }) =>
    pageHead({
      title: seoTitle(loaderData?.title ?? "Gold & Silver"),
      description: loaderData?.summary ?? "",
      path: `/gold-silver/${loaderData?.slug ?? ""}`,
      type: "article",
    }),
  component: PracticePage,
});

function PracticePage() {
  const page = Route.useLoaderData();
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
        <p className="text-xs text-muted">Pillar 3 · In practice</p>
        <h1 className="mt-2 font-display text-4xl">{page.title}</h1>
        <p className="mt-3 max-w-2xl text-muted">{page.summary}</p>
        <div className="mt-10">
          <EpisodeBody episode={page} clusterSlug="gold-silver" />
        </div>
      </div>
    </SiteShell>
  );
}
