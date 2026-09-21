import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArticleSections, Breadcrumb, RelatedLinks, RichText } from "@/components/Article";
import { HistoryYearPage } from "@/components/HistoryYearPage";
import { SiteShell } from "@/components/SiteShell";
import { getHistoryYear } from "@/lib/content/history-years";
import { getCluster, seoTitle } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/history/$cluster/")({
  loader: ({ params }) => {
    const year = getHistoryYear(params.cluster);
    if (year) return { kind: "year" as const, year };
    const cluster = getCluster(params.cluster);
    if (!cluster) throw notFound();
    return { kind: "cluster" as const, cluster };
  },
  head: ({ loaderData, params }) => {
    if (loaderData?.kind === "year") {
      const year = loaderData.year;
      return {
        meta: pageShareMeta({
          title: seoTitle(`${year.year}: ${year.title}`),
          description: year.summary,
          path: `/history/${year.year}`,
          imagePath: year.image.ogSrc,
        }),
      };
    }
    const title = seoTitle(loaderData?.cluster?.seo?.titleTag ?? loaderData?.cluster?.title ?? "History");
    const description = loaderData?.cluster?.summary ?? "";
    return {
      meta: pageShareMeta({
        title,
        description,
        path: `/history/${params.cluster}`,
      }),
    };
  },
  component: ClusterOrYearPage,
});

function ClusterOrYearPage() {
  const data = Route.useLoaderData();
  if (data.kind === "year") {
    return (
      <SiteShell>
        <HistoryYearPage year={data.year} />
      </SiteShell>
    );
  }
  const cluster = data.cluster;
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
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">History</p>
        <h1 className="mt-2 font-display text-4xl">{cluster.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{cluster.summary}</p>
        {cluster.sections?.length ? (
          <div className="mt-8">
            <ArticleSections sections={cluster.sections} />
          </div>
        ) : (
          cluster.intro?.map((p) => (
            <p key={p.slice(0, 40)} className="mt-4 max-w-prose text-lg leading-relaxed text-fg/90">
              <RichText text={p} />
            </p>
          ))
        )}
        <h2 className="mt-14 font-display text-2xl">Continue into an episode</h2>
        <ol className="mt-6 grid gap-3">
          {cluster.episodes.map((ep) => (
            <li key={ep.slug}>
              <Link
                to="/history/$cluster/$episode"
                params={{ cluster: cluster.slug, episode: ep.slug }}
                className="flex gap-4 rounded-lg bg-surface px-4 py-4 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
              >
                <span>
                  <span className="block font-medium">{ep.title}</span>
                  <span className="text-sm text-muted">{ep.summary}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
        {cluster.related?.length ? <RelatedLinks links={cluster.related} /> : null}
        <p className="mt-10 text-sm">
          <a href="/history" className="text-gold hover:text-gold-soft">
            ← Sound Money History
          </a>
        </p>
      </div>
    </SiteShell>
  );
}
