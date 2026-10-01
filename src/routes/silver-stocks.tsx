import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/silver-stocks")({
  head: () => ({
    meta: [
      ...pageShareMeta({
        title: "Silver stocks report — GoldSilverHQ",
        description: "Daily figures for listed silver producers. Coming soon.",
        imagePath: "/og.jpg",
      }),
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: SilverStocksPage,
});

function SilverStocksPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Silver stocks report" }]} />
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Coming soon</p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">Silver stocks report</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          A dated table of listed silver producers — closing prices and daily changes — is being
          prepared. Until then, the homepage shows the last trading day&rsquo;s five largest daily
          moves.
        </p>
      </div>
    </SiteShell>
  );
}
