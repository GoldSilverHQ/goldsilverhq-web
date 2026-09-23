import { Link } from "@tanstack/react-router";
import { HISTORY_HUB_YEAR_CARDS, historyHubYearHref } from "@/lib/content/history-hub-years";

export function HistoryYearCards() {
  return (
    <section className="mt-12" aria-labelledby="year-cards-heading">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Years</p>
      <h2 id="year-cards-heading" className="mt-2 font-display text-3xl text-fg sm:text-4xl">
        Key years
      </h2>
      <p className="mt-3 max-w-prose text-muted">
        Dates that changed the money rule. Each card opens that year.
      </p>

      <ul className="mt-8 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {HISTORY_HUB_YEAR_CARDS.map((card) => {
          const href = historyHubYearHref(card);
          return (
            <li key={card.year}>
              <Link
                to={href}
                className="block h-full rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow,color] duration-150 ease-out hover:shadow-[var(--shadow-border-hover)] active:scale-[0.99] sm:p-6"
              >
                <span className="block font-display text-3xl leading-none tabular-nums text-gold sm:text-4xl">
                  {card.year}
                </span>
                <span className="mt-3 block text-sm leading-relaxed text-muted">{card.blurb}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <p className="mt-6 text-sm">
        <Link to="/history/year" className="text-gold hover:text-gold-soft">
          All years →
        </Link>
      </p>
    </section>
  );
}
