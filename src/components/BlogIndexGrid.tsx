import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { articleHeroForPath } from "@/lib/content/article-media";
import {
  activeBlogTags,
  listBlogPostsByTag,
  type BlogPost,
  type BlogTag,
} from "@/lib/content/blog";

type FilterId = "all" | BlogTag;

function BlogCard({ post }: { post: BlogPost }) {
  const hero = articleHeroForPath(`/blog/${post.slug}`);
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
    >
      {hero ? (
        <div className="overflow-hidden bg-raised">
          <img
            src={hero.src}
            alt={hero.alt}
            width={1200}
            height={630}
            className="aspect-[5/2] w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-2 px-4 py-4">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-faint">
          <time dateTime={post.date} className="tabular-nums">
            {post.date}
          </time>
          <span aria-hidden="true">·</span>
          <span className="text-muted">{post.tags.join(" · ")}</span>
        </div>
        <h2 className="font-display text-xl leading-snug text-fg group-hover:text-gold-soft">{post.title}</h2>
        <p className="text-sm leading-relaxed text-muted">{post.summary}</p>
      </div>
    </Link>
  );
}

export function BlogIndexGrid() {
  const [filter, setFilter] = useState<FilterId>("all");
  const tags = activeBlogTags();
  const posts = listBlogPostsByTag(filter === "all" ? "all" : filter);
  const options: { id: FilterId; label: string }[] = [
    { id: "all", label: "All" },
    ...tags.map((tag) => ({ id: tag, label: tag })),
  ];

  return (
    <div className="mt-10">
      <div
        className="flex flex-wrap items-center gap-x-1 gap-y-2 border-b border-line pb-3"
        role="tablist"
        aria-label="Filter notes by topic"
      >
        {options.map((opt) => {
          const on = opt.id === filter;
          return (
            <button
              key={opt.id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setFilter(opt.id)}
              className={`min-h-10 px-3 text-sm transition-colors ${
                on ? "text-gold-soft" : "text-muted hover:text-fg"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {posts.length === 0 ? (
        <p className="mt-10 max-w-prose text-fg/90">No notes in this topic yet.</p>
      ) : (
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug} className="min-w-0">
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
