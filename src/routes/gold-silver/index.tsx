import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumb, RichText } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { practicePages } from "@/lib/content/map";

const INTRO = [
  "This pillar answers how people handle metal — bars versus coins, premiums, storage, fakes at a high level, first ounces. It is educational. It is not a shop, and it is not advice. Read [information vs advice](/sound-money/information-not-advice) first if that line is unclear.",
  "All six practice pages now have first drafts. History of coinage still lives under [ancient money](/history/ancient), not here.",
];

export const Route = createFileRoute("/gold-silver/")({
  head: () => ({
    meta: [
      { title: "Gold bars vs coins, storage, premiums — GoldSilverHQ" },
      {
        name: "description",
        content:
          "Practical notes on gold bars versus coins, premiums over spot, storage, fakes, and first ounces. Neutral and educational. Not investment advice.",
      },
    ],
  }),
  component: PracticeHub,
});

function PracticeHub() {
  const ready = practicePages.filter((p) => p.status === "ready").length;
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "In Practice" }]} />
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Pillar 3</p>
        <h1 className="mt-2 font-display text-4xl">Gold & Silver in Practice</h1>
        {INTRO.map((p) => (
          <p key={p.slice(0, 32)} className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
            <RichText text={p} />
          </p>
        ))}
        <p className="mt-6 text-sm text-faint">
          {ready} of {practicePages.length} pages drafted
        </p>
        <ol className="mt-10 grid gap-3">
          {practicePages.map((page, i) => (
            <li key={page.slug}>
              <Link
                to="/gold-silver/$slug"
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
      </div>
    </SiteShell>
  );
}