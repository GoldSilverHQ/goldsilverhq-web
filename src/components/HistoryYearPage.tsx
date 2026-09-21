import { Link } from "@tanstack/react-router";
import { ArticleHeroImage, Breadcrumb } from "@/components/Article";
import { adjacentHistoryYears, type HistoryYear } from "@/lib/content/history-years";

export function HistoryYearPage({ year }: { year: HistoryYear }) {
  const { prev, next } = adjacentHistoryYears(year.year);
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/history", label: "History" },
          { href: "/history/year", label: "Years" },
          { label: String(year.year) },
        ]}
      />
      <header>
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">{year.year}</p>
        <h1 className="mt-2 font-display text-4xl text-fg sm:text-5xl">{year.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{year.summary}</p>
        <ArticleHeroImage hero={year.image} />
      </header>
      <div className="mt-8 max-w-prose">
        {year.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="mt-4 text-lg leading-relaxed text-fg/90">
            {paragraph}
          </p>
        ))}
        {year.more ? (
          <p className="mt-8 text-sm">
            <a href={year.more.href} className="text-gold hover:text-gold-soft">
              {year.more.title} →
            </a>
          </p>
        ) : null}
      </div>
      <nav className="mt-12 flex flex-wrap gap-4 text-sm" aria-label="Other years">
        {prev ? (
          <Link to="/history/$cluster" params={{ cluster: String(prev.year) }} className="text-gold hover:text-gold-soft">
            ← {prev.year}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to="/history/$cluster" params={{ cluster: String(next.year) }} className="text-gold hover:text-gold-soft">
            {next.year} →
          </Link>
        ) : null}
        <Link to="/history/year" className="text-muted hover:text-fg">
          All years
        </Link>
      </nav>
    </div>
  );
}
