import { getBody, type Section } from "@/lib/content/bodies";
import type { ArticleHero as ArticleHeroMeta } from "@/lib/content/article-media";
import { continueLinks, type Episode } from "@/lib/content/map";

type ArticleFace = "display" | "sans";

function faceClass(face: ArticleFace) {
  return face === "sans" ? "font-sans" : "font-display";
}

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

export function ArticleSections({
  sections,
  face = "display",
}: {
  sections: Section[];
  face?: ArticleFace;
}) {
  const nums = face === "sans" ? "tabular-nums" : "";
  return (
    <>
      {sections.map((block, i) => (
        <section key={block.heading || i} className="mb-10">
          {block.heading ? (
            <h2 className={`mb-4 ${faceClass(face)} text-3xl text-fg`}>{block.heading}</h2>
          ) : null}
          {block.callout ? (
            <aside className="mb-6 rounded-xl bg-raised px-5 py-6 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-silver)_28%,transparent)]">
              <p className="font-sans text-xs font-semibold tracking-[0.14em] text-silver uppercase">
                {block.callout.label}
              </p>
              {block.callout.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className={`mt-3 font-sans text-lg leading-relaxed text-fg/90 ${nums}`}>
                  <RichText text={p} />
                </p>
              ))}
            </aside>
          ) : null}
          {block.paragraphs.map((p) => (
            <p key={p.slice(0, 48)} className={`mb-4 font-sans text-lg leading-relaxed text-fg/90 ${nums}`}>
              <RichText text={p} />
            </p>
          ))}
          {block.table ? (
            <div className="-mx-1 mb-6 overflow-x-auto">
              <table className={`w-full min-w-[36rem] border-collapse text-left text-sm leading-relaxed text-fg/90 ${nums}`}>
                {block.table.caption ? (
                  <caption className="mb-3 caption-top text-left text-sm leading-relaxed text-muted">
                    <RichText text={block.table.caption} />
                  </caption>
                ) : null}
                <thead>
                  <tr className="border-b border-line text-xs tracking-[0.12em] text-silver uppercase">
                    {block.table.headers.map((header) => (
                      <th key={header} className="px-3 py-3 font-semibold first:pl-0 last:pr-0">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.table.rows.map((row) => (
                    <tr key={row[0]} className="border-b border-line last:border-0">
                      {row.map((cell, i) => (
                        <td
                          key={`${row[0]}-${i}`}
                          className={`px-3 py-3 align-top first:pl-0 last:pr-0 ${i === 1 ? "text-gold-soft" : ""}`}
                        >
                          <RichText text={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
          {block.list?.length ? (
            <ol className={`mb-4 list-decimal space-y-3 pl-6 font-sans text-lg leading-relaxed text-fg/90 ${nums}`}>
              {block.list.map((item) => (
                <li key={item.slice(0, 40)}>
                  <RichText text={item} />
                </li>
              ))}
            </ol>
          ) : null}
        </section>
      ))}
    </>
  );
}

export function RelatedLinks({
  links,
  face = "display",
}: {
  links: { title: string; href: string }[];
  face?: ArticleFace;
}) {
  if (!links.length) return null;
  return (
    <div className="mt-12 max-w-prose border-t border-line pt-8">
      <h2 className={`mb-4 ${faceClass(face)} text-xl text-silver`}>Continue reading</h2>
      <ul className="grid gap-2 sm:grid-cols-2">
        {links.map((r) => (
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
  );
}

/**
 * Titlebild media bar — X “article” card language (Querformat ≈1200×630).
 * Minimal chrome: no stroke border; soft clip; object-cover landscape only.
 * Always under the lead title via `ArticleLead` — never a tall full plate.
 */
export function ArticleHeroImage({ hero }: { hero: ArticleHeroMeta }) {
  return (
    <figure className="mt-5 sm:mt-6">
      <div className="relative -mx-4 overflow-hidden bg-raised sm:mx-0 sm:rounded-xl">
        <img
          src={hero.src}
          alt={hero.alt}
          width={1200}
          height={630}
          className="aspect-[1200/630] w-full object-cover object-center"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      {hero.caption || hero.credit ? (
        <figcaption className="mt-2 max-w-prose text-sm leading-snug text-muted">
          {hero.caption ? <span className="block">{hero.caption}</span> : null}
          {hero.credit ? <span className="mt-0.5 block text-xs text-faint">{hero.credit}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

/**
 * Shared article lead: kicker → title → teaser → Querformat titlebild.
 * Matches X Articles’ reading order on-site (text first, landscape media under),
 * not the tall full-illustration hero and not image-above-title feed cards.
 */
export function ArticleLead({
  kicker,
  title,
  teaser,
  hero,
  face = "display",
}: {
  kicker?: string;
  title: string;
  teaser?: string;
  hero?: ArticleHeroMeta;
  face?: ArticleFace;
}) {
  return (
    <header>
      {kicker ? <p className="text-xs text-muted">{kicker}</p> : null}
      <h1 className={`mt-2 ${faceClass(face)} text-4xl text-fg`}>{title}</h1>
      {teaser ? <p className="mt-3 max-w-2xl text-muted">{teaser}</p> : null}
      {hero ? <ArticleHeroImage hero={hero} /> : null}
    </header>
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
  const face: ArticleFace = clusterSlug === "markets" ? "sans" : "display";

  return (
    <article className={`max-w-prose ${face === "sans" ? "font-sans" : ""}`}>
      {episode.status === "skeleton" && !sections ? (
        <p className="mb-6 text-sm text-gold">This page is still being written.</p>
      ) : null}
      <ArticleSections sections={blocks} face={face} />
      <RelatedLinks links={continueLinks(episode, clusterSlug)} face={face} />
    </article>
  );
}
