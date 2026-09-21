import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { HISTORY_YEARS } from "@/lib/content/history-years";
import { seoTitle } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";

const DESCRIPTION =
  "One short page for every year from 1776 through 1980, plus a few earlier dates. A note and one picture. No forecast.";

export const Route = createFileRoute("/history/year")({
  head: () => ({
    meta: pageShareMeta({
      title: seoTitle("Sound money by year"),
      description: DESCRIPTION,
      path: "/history/year",
    }),
  }),
  component: YearIndex,
});

function YearIndex() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: "/history", label: "History" },
            { label: "Years" },
          ]}
        />
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">History</p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">Sound money by year</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{DESCRIPTION}</p>
        <ol className="mt-10 grid gap-3 sm:grid-cols-2">
          {HISTORY_YEARS.map((year) => (
            <li key={year.year}>
              <Link
                to="/history/$cluster"
                params={{ cluster: String(year.year) }}
                className="flex gap-4 rounded-lg bg-surface px-4 py-4 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
              >
                <span className="w-14 shrink-0 font-sans text-sm font-semibold tabular-nums text-gold">{year.year}</span>
                <span>
                  <span className="block font-medium">{year.title}</span>
                  <span className="text-sm text-muted">{year.summary}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-sm">
          <Link to="/history" className="text-gold hover:text-gold-soft">
            ← Sound Money History
          </Link>
        </p>
      </div>
    </SiteShell>
  );
}
