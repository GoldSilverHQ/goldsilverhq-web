import { createFileRoute, notFound } from "@tanstack/react-router";
import { HistoryPersonPage } from "@/components/HistoryPersonPage";
import { SiteShell } from "@/components/SiteShell";
import { getHistoryPerson } from "@/lib/content/history-people";
import { seoTitle } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/history/vip/$person")({
  loader: ({ params }) => {
    const person = getHistoryPerson(params.person);
    if (!person) throw notFound();
    return { person };
  },
  head: ({ loaderData }) => {
    const person = loaderData?.person;
    if (!person) return { meta: [] };
    return {
      meta: pageShareMeta({
        title: seoTitle(person.name),
        description: person.summary,
        path: `/history/vip/${person.slug}`,
        imagePath: person.image.ogSrc,
      }),
    };
  },
  component: PersonRoute,
});

function PersonRoute() {
  const { person } = Route.useLoaderData();
  return (
    <SiteShell>
      <HistoryPersonPage person={person} />
    </SiteShell>
  );
}
