import { createFileRoute } from "@tanstack/react-router";
import { FullDesk } from "@/components/FullDesk";
import { SiteShell } from "@/components/SiteShell";
import { seoTitle } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/desk")({
  head: () => ({
    meta: pageShareMeta({
      title: seoTitle("Golden Numbers"),
      description:
        "Gold and silver live by category: prices and five-year COMEX history, official gold holdings, stocks and flows, money supply, and exchange paper.",
      imagePath: "/og.jpg",
    }),
  }),
  component: DeskPage,
});

function DeskPage() {
  return (
    <SiteShell ui="data">
      <FullDesk />
    </SiteShell>
  );
}
