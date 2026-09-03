import { Link } from "@tanstack/react-router";
import { FEATURED } from "@/lib/content/featured";
import { pillars } from "@/lib/content/map";

export function HomeEditorial() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-4">
      <section className="mt-6 border-t border-line pt-12">
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Read first</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl">The map, not the tape</h2>
        <p className="mt-2 max-w-xl text-muted">
          The clock is the numbers. These four pages are why the numbers have a date.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {FEATURED.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
            >
              <p className="text-xs font-semibold tracking-[0.12em] text-gold uppercase">{item.kicker}</p>
              <h3 className="mt-3 font-display text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.summary}</p>
              <p className="mt-5 text-sm font-medium text-gold group-hover:text-gold-soft">Read episode →</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Three pillars</p>
        <h2 className="mt-2 font-display text-3xl">Idea, history, practice</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {pillars.map((p) => (
            <a
              key={p.id}
              href={p.path}
              className="group rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
            >
              <p className="text-xs font-semibold tracking-[0.12em] text-gold uppercase">{p.kicker}</p>
              <h3 className="mt-3 font-display text-2xl">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.question}</p>
              <p className="mt-3 text-sm text-muted">{p.summary}</p>
              <p className="mt-5 text-sm font-medium text-gold group-hover:text-gold-soft">Enter →</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-raised px-6 py-8 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-gold)_28%,transparent)]">
          <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Eight questions</p>
          <h2 className="mt-2 font-display text-3xl">Sound money quiz</h2>
          <p className="mt-3 text-sm text-muted">
            Definitions and dates only. A miss is a link, not a score to brag about.
          </p>
          <Link
            to="/quiz"
            className="btn-gold mt-6 inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium"
          >
            Take the quiz
          </Link>
        </div>
        <div className="rounded-xl bg-surface px-6 py-8 shadow-[var(--shadow-border)]">
          <p className="text-xs font-semibold tracking-[0.14em] text-silver uppercase">Companion books</p>
          <h2 className="mt-2 font-display text-3xl">The kit and the history</h2>
          <p className="mt-3 text-sm text-muted">
            Two ebooks on the same map. Launch list now. Checkout later via @GoldSilverHQ.
          </p>
          <Link to="/kit" className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-gold hover:text-gold-soft">
            See the kit →
          </Link>
        </div>
      </section>
    </div>
  );
}
