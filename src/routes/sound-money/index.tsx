import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumb, RichText } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { ideaPages } from "@/lib/content/map";

const INTRO = [
  "This pillar answers what sound money *means* — not what happened in 1923 or 1971, and not how to buy a bar. History has its own pillar. Practice has its own pillar.",
  "The four definition pages now have first drafts. The disclaimer is short and done. Cases stay in [history](/history).",
  "Sell here is the newsletter, not the ebook.",
];

export const Route = createFileRoute("/sound-money/")({
  head: () => ({
    meta: [
      { title: "What sound money means — GoldSilverHQ" },
      {
        name: "description",
        content:
          "What sound money means: a unit that cannot be expanded at will. Hard money vs fiat, inflation, and backed money — definitions only. History lives elsewhere.",
      },
    ],
  }),
  component: IdeaHub,
});

function IdeaHub() {
  const ready = ideaPages.filter((p) => p.status === "ready").length;
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Sound Money" }]} />
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Pillar 1</p>
        <h1 className="mt-2 font-display text-4xl">Sound Money (the idea)</h1>
        {INTRO.map((p) => (
          <p key={p.slice(0, 32)} className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
            <RichText text={p} />
          </p>
        ))}
        <p className="mt-6 text-sm text-faint">
          {ready} of {ideaPages.length} pages drafted · definition → this hub → newsletter
        </p>
        <ol className="mt-10 grid gap-3">
          {ideaPages.map((page, i) => (
            <li key={page.slug}>
              <Link
                to="/sound-money/$slug"
                params={{ slug: page.slug }}
                className="flex gap-4 rounded-lg bg-surface px-4 py-4 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
              >
                <span className="w-6 text-sm text-gold">{i + 1}</span>
                <span>
                  <span className="block font-medium">{page.title}</span>
                  <span className="text-sm text-muted">{page.summary}</span>
                  <span className="mt-1 block text-xs text-faint">
                    {page.status === "ready" ? "Draft" : "Skeleton"}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <aside className="mt-12 max-w-prose rounded-xl bg-raised px-5 py-6 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-gold)_28%,transparent)]">
          <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Newsletter</p>
          <p className="mt-2 font-display text-2xl text-fg">Notes from the map</p>
          <p className="mt-2 text-sm text-muted">Definitions and history. Media only.</p>
          <a href="/#newsletter" className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-gold hover:text-gold-soft">
            Subscribe →
          </a>
        </aside>
      </div>
    </SiteShell>
  );
}