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
      title: seoTitle("Blog"),
      description: "Notes from GoldSilverHQ on sound money, metals history, and markets.",
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
        <h1 className="mt-2 font-sans text-4xl">Blog</h1>

        {hasPosts ? (
          <BlogIndexGrid />
        ) : (
          <p className="mt-12 max-w-prose text-fg/90">Nothing published here yet.</p>
        )}
      </div>
    </SiteShell>
  );
}
