import type { Episode } from "@/lib/content/map";

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

export function EpisodeBody({ episode }: { episode: Episode }) {
  return (
    <article className="max-w-prose">
      {episode.status === "skeleton" ? (
        <p className="mb-6 text-sm text-gold">Skeleton in the topical map — structure first, full draft next.</p>
      ) : null}
      {episode.paragraphs.map((p) => (
        <p key={p.slice(0, 40)} className="mb-4 text-lg leading-relaxed text-fg/90">
          {p}
        </p>
      ))}
      <div className="mt-12 border-t border-line pt-8">
        <h2 className="mb-4 font-display text-xl text-silver">Continue the map</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {episode.related.map((r) => (
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
      <aside className="mt-10 rounded-xl bg-raised px-5 py-6 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-gold)_28%,transparent)]">
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Ebook companion</p>
        <p className="mt-2 font-display text-2xl text-fg">A Short History of Sound Money</p>
        <p className="mt-2 text-sm text-muted">The book follows this same map. Media only — not a recommendation.</p>
        <a href="/#newsletter" className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-gold hover:text-gold-soft">
          Get launch notes →
        </a>
      </aside>
    </article>
  );
}
