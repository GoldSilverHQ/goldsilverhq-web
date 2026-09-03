import { getBody } from "@/lib/content/bodies";
import { continueLinks, type Episode } from "@/lib/content/map";

export function Breadcrumb({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-sm text-muted">
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`} className="flex items-center gap-2">
          {i > 0 ? <span className="text-faint">/</span> : null}
          {item.href ? (
            <a href={item.href} className="hover:text-gold-soft">
              {item.label}
            </a>
          ) : (
            <span className="text-fg">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const href = link[2];
          const external = href.startsWith("http");
          return (
            <a
              key={i}
              href={href}
              className="text-gold-soft underline decoration-line-gold underline-offset-4 hover:text-gold"
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {link[1]}
            </a>
          );
        }
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <strong key={i} className="font-semibold text-fg">{bold[1]}</strong>;
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function Conversion({ kind }: { kind: "ebook" | "newsletter" }) {
  if (kind === "newsletter") {
    return (
      <aside className="mt-10 rounded-xl bg-raised px-5 py-6 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-gold)_28%,transparent)]">
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Newsletter</p>
        <p className="mt-2 font-display text-2xl text-fg">Notes from the map</p>
        <p className="mt-2 text-sm text-muted">Definitions and history, not tips. Media only.</p>
        <a href="/#newsletter" className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-gold hover:text-gold-soft">
          Subscribe →
        </a>
      </aside>
    );
  }
  return (
    <aside className="mt-10 rounded-xl bg-raised px-5 py-6 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-gold)_28%,transparent)]">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Ebook companion</p>
      <p className="mt-2 font-display text-2xl text-fg">A Short History of Sound Money</p>
      <p className="mt-2 text-sm text-muted">The book follows this same map. Media only — not a recommendation.</p>
      <a href="/#newsletter" className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-gold hover:text-gold-soft">
        Get launch notes →
      </a>
    </aside>
  );
}

export function EpisodeBody({
  episode,
  clusterSlug,
}: {
  episode: Episode;
  clusterSlug?: string;
}) {
  const sections = clusterSlug ? getBody(clusterSlug, episode.slug) : null;
  const blocks = sections ?? [{ heading: "", paragraphs: episode.paragraphs }];

  return (
    <article className="max-w-prose">
      {episode.status === "skeleton" && !sections ? (
        <p className="mb-6 text-sm text-gold">Skeleton in the topical map — structure first, full draft next.</p>
      ) : null}
      {blocks.map((block, i) => (
        <section key={block.heading || i} className="mb-10">
          {block.heading ? (
            <h2 className="mb-4 font-display text-3xl text-fg">{block.heading}</h2>
          ) : null}
          {block.paragraphs.map((p) => (
            <p key={p.slice(0, 48)} className="mb-4 text-lg leading-relaxed text-fg/90">
              <RichText text={p} />
            </p>
          ))}
          {block.list?.length ? (
            <ol className="mb-4 list-decimal space-y-3 pl-6 text-lg leading-relaxed text-fg/90">
              {block.list.map((item) => (
                <li key={item.slice(0, 40)}>
                  <RichText text={item} />
                </li>
              ))}
            </ol>
          ) : null}
        </section>
      ))}
      <div className="mt-12 border-t border-line pt-8">
        <h2 className="mb-4 font-display text-xl text-silver">Continue the map</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {continueLinks(episode, clusterSlug).map((r) => (
            <li key={r.href}>
              <a
                href={r.href}
                className="block rounded-lg bg-surface px-4 py-3 text-sm text-fg shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
              >
                {r.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Conversion
        kind={clusterSlug === "sound-money" || clusterSlug === "gold-silver" ? "newsletter" : "ebook"}
      />
    </article>
  );
}
