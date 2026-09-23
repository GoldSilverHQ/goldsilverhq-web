import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticleLead, ArticleSections, Breadcrumb, RelatedLinks } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { blogPostSections, getBlogPost } from "@/lib/content/blog";
import { getBody } from "@/lib/content/bodies";
import { seoTitle } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post || post.status !== "ready") throw notFound();
    const path = `/blog/${params.slug}`;
    const body = getBody("blog", params.slug);
    return { post, path, sections: blogPostSections(post, body) };
  },
  head: ({ loaderData, params }) => {
    const title = seoTitle(loaderData?.post?.title ?? "Blog");
    const description = loaderData?.post?.summary ?? "";
    const path = `/blog/${params.slug}`;
    return {
      meta: pageShareMeta({
        title,
        description,
        path,
      }),
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post, sections } = Route.useLoaderData();

  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: "/blog", label: "Blog" },
            { label: post.title },
          ]}
        />
        <ArticleLead
          kicker={`Blog · ${post.date}`}
          title={post.title}
          teaser={post.summary}
        />
        <div className="mt-10">
          <article className="max-w-prose">
            <ArticleSections sections={sections} />
            <RelatedLinks links={post.related} />
          </article>
        </div>
      </div>
    </SiteShell>
  );
}
