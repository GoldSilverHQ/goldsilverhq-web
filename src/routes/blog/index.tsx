import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Article";
import { BlogIndexGrid } from "@/components/BlogIndexGrid";
import { SiteShell } from "@/components/SiteShell";
import { listBlogPosts } from "@/lib/content/blog";
import { seoTitle } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: pageShareMeta({
      title: seoTitle("Notes and follow-ups"),
      description:
        "Short notes and follow-ups that sit beside GoldSilverHQ’s History, Sound Money, and Markets pages.",
      path: "/blog",
    }),
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const hasPosts = listBlogPosts().length > 0;

  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Blog" }]} />
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Blog</p>
        <h1 className="mt-2 font-display text-4xl">Notes and follow-ups</h1>
        <p className="mt-4 max-w-prose text-muted">
          Short pieces that sit beside the longer History, Sound Money, and Markets pages.
        </p>

        {hasPosts ? (
          <BlogIndexGrid />
        ) : (
          <p className="mt-12 max-w-prose text-fg/90">Nothing published here yet.</p>
        )}
      </div>
    </SiteShell>
  );
}
