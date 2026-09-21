import { Link } from "@tanstack/react-router";
import { ArticleHeroImage, Breadcrumb } from "@/components/Article";
import { adjacentHistoryPeople, type HistoryPerson } from "@/lib/content/history-people";

export function HistoryPersonPage({ person }: { person: HistoryPerson }) {
  const { prev, next } = adjacentHistoryPeople(person.slug);
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/history", label: "History" },
          { href: "/history/vip", label: "People" },
          { label: person.name },
        ]}
      />
      <header>
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">
          {person.role} · {person.life}
        </p>
        <h1 className="mt-2 font-display text-4xl text-fg sm:text-5xl">{person.name}</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{person.summary}</p>
        <ArticleHeroImage hero={person.image} />
      </header>
      <div className="mt-8 max-w-prose">
        {person.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="mt-4 text-lg leading-relaxed text-fg/90">
            {paragraph}
          </p>
        ))}
        {person.more ? (
          <p className="mt-8 text-sm">
            <a href={person.more.href} className="text-gold hover:text-gold-soft">
              {person.more.title} →
            </a>
          </p>
        ) : null}
      </div>
      <nav className="mt-12 flex flex-wrap gap-4 text-sm" aria-label="Other people">
        {prev ? (
          <Link
            to="/history/vip/$person"
            params={{ person: prev.slug }}
            className="text-gold hover:text-gold-soft"
          >
            ← {prev.name}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to="/history/vip/$person"
            params={{ person: next.slug }}
            className="text-gold hover:text-gold-soft"
          >
            {next.name} →
          </Link>
        ) : null}
        <Link to="/history/vip" className="text-muted hover:text-fg">
          All people
        </Link>
      </nav>
    </div>
  );
}
