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
        "Golden Numbers: gold and silver prices and ratios, central-bank gold, debt and money, supply and demand, and vaults and ETFs — dated public figures.",
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
