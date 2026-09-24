import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticleLead, ArticleSections, Breadcrumb, RelatedLinks } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { articleHeroForPath } from "@/lib/content/article-media";
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
    return {
      post,
      path,
      sections: blogPostSections(post, body),
      hero: articleHeroForPath(path),
    };
  },
  head: ({ loaderData, params }) => {
    const title = seoTitle(loaderData?.post?.title ?? "Blog");
    const description = loaderData?.post?.summary ?? "";
    const path = `/blog/${params.slug}`;
    const hero = loaderData?.hero ?? articleHeroForPath(path);
    return {
      meta: pageShareMeta({
        title,
        description,
        path,
        imagePath: hero?.ogSrc,
      }),
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post, sections, hero } = Route.useLoaderData();

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
          kicker={`Blog · ${post.date} · ${post.tags.join(" · ")}`}
          title={post.title}
          teaser={post.summary}
          hero={hero}
          face="sans"
        />
        <div className="mt-10">
          <article className="max-w-prose font-sans">
            <ArticleSections sections={sections} face="sans" />
            <RelatedLinks links={post.related} face="sans" />
          </article>
        </div>
      </div>
    </SiteShell>
  );
}
