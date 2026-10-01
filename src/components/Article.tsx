import { Fragment, type CSSProperties, type ReactNode } from "react";
import { getBody, type Section, type SectionFigure } from "@/lib/content/bodies";
import type { ArticleHero as ArticleHeroMeta } from "@/lib/content/article-media";
import { continueLinks, type Episode } from "@/lib/content/map";
import { ArticleFigure } from "@/components/ArticleFigure";

type ArticleFace = "display" | "sans";

function faceClass(face: ArticleFace) {
  return face === "sans" ? "font-sans" : "font-display";
}

export function Breadcrumb({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-5 flex flex-wrap items-center gap-2 text-sm text-muted"
    >
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
        if (bold)
          return (
            <strong key={i} className="font-semibold text-fg">
              {bold[1]}
            </strong>
          );
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function figurePlacementIndex(
  figure: SectionFigure | undefined,
  paragraphCount: number,
): number | null {
  if (!figure) return null;
  const placement = figure.placement ?? "end";
  if (placement === "start") return 0;
  if (placement === "end") return paragraphCount;
  if (typeof placement === "number" && Number.isFinite(placement)) {
    return Math.max(0, Math.min(paragraphCount, Math.floor(placement)));
  }
  return paragraphCount;
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
      {sections.map((block, i) => {
        const insertAt = figurePlacementIndex(block.figure, block.paragraphs.length);
        const figureEl = block.figure ? (
          <ArticleFigure
            key={`figure-${block.figure.src}-${block.heading || i}`}
            figure={block.figure}
          />
        ) : null;

        return (
          <section
            key={block.heading || i}
            className={`mb-10${block.figure?.layout?.startsWith("float-") ? " after:clear-both after:table after:content-['']" : ""}`}
          >
            {block.heading ? (
              <h2 className={`mb-4 ${faceClass(face)} text-3xl text-fg`}>{block.heading}</h2>
            ) : null}
            {block.callout ? (
              <aside className="mb-6 rounded-xl bg-raised px-5 py-6 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-silver)_28%,transparent)]">
                <p className="font-sans text-xs font-semibold tracking-[0.14em] text-silver uppercase">
                  {block.callout.label}
                </p>
                {block.callout.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 48)}
                    className={`mt-3 font-sans text-lg leading-relaxed text-fg/90 ${nums}`}
                  >
                    <RichText text={p} />
                  </p>
                ))}
              </aside>
            ) : null}
            {block.paragraphs.map((p, pi) => (
              <Fragment key={p.slice(0, 48)}>
                {insertAt === pi ? figureEl : null}
                <p className={`mb-4 font-sans text-lg leading-relaxed text-fg/90 ${nums}`}>
                  <RichText text={p} />
                </p>
              </Fragment>
            ))}
            {insertAt === block.paragraphs.length ? figureEl : null}
            {block.table ? (
              <div className="-mx-1 mb-6 overflow-x-auto">
                <table
                  className={`w-full min-w-[36rem] border-collapse text-left text-sm leading-relaxed text-fg/90 ${nums}`}
                >
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
              <ol
                className={`mb-4 list-decimal space-y-3 pl-6 font-sans text-lg leading-relaxed text-fg/90 ${nums}`}
              >
                {block.list.map((item) => (
                  <li key={item.slice(0, 40)}>
                    <RichText text={item} />
                  </li>
                ))}
              </ol>
            ) : null}
          </section>
        );
      })}
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
 * Titlebild media bar — X Article–like 5:2 band under the lead.
 * Width matches the article text column (`max-w-prose`), not the full viewport.
 * Uses `hero.src` only (on-page). Share cards use `hero.ogSrc` (1200×630) via
 * `pageShareMeta` — paths may differ; do not assume one file for both.
 * On-page: 5:2 clipped wrapper + absolute `object-cover` fill (no letterbox matte).
 */
export function ArticleHeroImage({ hero }: { hero: ArticleHeroMeta }) {
  if (isPortraitHero(hero)) return <PortraitHeroImage hero={hero} />;
  return (
    <figure className="mt-5 max-w-prose sm:mt-6">
      {/*
        5:2 frame on the clipped wrapper (not the img alone) so the rounded box
        is always filled. Img is absolute cover — no letterbox/pillarbox matte
        from bg-raised showing inside the radius when the asset has edge padding.
      */}
      <div className="relative aspect-[5/2] w-full overflow-hidden rounded-xl bg-raised">
        <img
          src={hero.src}
          alt={hero.alt}
          width={1200}
          height={480}
          className="absolute inset-0 h-full w-full object-cover object-center"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      {hero.caption || hero.credit ? (
        <figcaption className="mt-2 text-sm leading-snug text-muted">
          {hero.caption ? <span className="block">{hero.caption}</span> : null}
          {hero.credit ? (
            <span className="mt-0.5 block text-xs text-faint">{hero.credit}</span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

type PortraitHero = ArticleHeroMeta & { frame: "portrait"; width: number; height: number };

function isPortraitHero(hero: ArticleHeroMeta): hero is PortraitHero {
  return hero.frame === "portrait" && Boolean(hero.width && hero.height);
}

/**
 * Portrait / tall titlebild: native aspect ratio, never cropped. Mobile caps
 * the height at 24rem (narrower for tall sources); desktop sits in a fixed
 * 15rem column beside the title (see `ArticleHeroLead`).
 */
function PortraitHeroImage({ hero }: { hero: PortraitHero }) {
  const mobileWidth = `min(18rem, ${((24 * hero.width) / hero.height).toFixed(2)}rem)`;
  return (
    <figure
      className="mt-6 w-[var(--hero-w)] max-w-full md:mt-1 md:w-full"
      style={{ "--hero-w": mobileWidth } as CSSProperties}
    >
      <img
        src={hero.src}
        alt={hero.alt}
        width={hero.width}
        height={hero.height}
        className="block h-auto w-full rounded-xl bg-raised"
        decoding="async"
        fetchPriority="high"
      />
      {hero.caption || hero.credit ? (
        <figcaption className="mt-2 text-sm leading-snug text-muted">
          {hero.caption ? <span className="block">{hero.caption}</span> : null}
          {hero.credit ? (
            <span className="mt-0.5 block text-xs text-faint">{hero.credit}</span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

/**
 * Lead wrapper at prose width. Band heroes (default) go under the text;
 * portrait heroes sit beside it from `md` up and stack under it on mobile.
 */
export function ArticleHeroLead({
  hero,
  children,
}: {
  hero?: ArticleHeroMeta;
  children: ReactNode;
}) {
  if (hero && isPortraitHero(hero)) {
    return (
      <header className="max-w-prose md:grid md:grid-cols-[minmax(0,1fr)_15rem] md:items-start md:gap-x-8">
        <div className="min-w-0">{children}</div>
        <PortraitHeroImage hero={hero} />
      </header>
    );
  }
  return (
    <header className="max-w-prose">
      {children}
      {hero ? <ArticleHeroImage hero={hero} /> : null}
    </header>
  );
}

/**
 * Shared article lead: kicker → title → teaser → 5:2 titlebild band.
 * Matches X Articles’ reading order on-site (text first, landscape media under).
 * Whole lead (title included) sits at prose width so it lines up with the
 * titlebild and body column — not the wider page shell.
 * On-page hero (`src`) is flexible landscape; OG/share (`ogSrc`) is separate 1200×630.
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
    <ArticleHeroLead hero={hero}>
      {kicker ? <p className="text-xs text-muted">{kicker}</p> : null}
      <h1 className={`mt-2 ${faceClass(face)} text-4xl text-fg`}>{title}</h1>
      {teaser ? <p className="mt-3 text-muted">{teaser}</p> : null}
    </ArticleHeroLead>
  );
}

export function EpisodeBody({ episode, clusterSlug }: { episode: Episode; clusterSlug?: string }) {
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
