import { Link } from "@tanstack/react-router";
import { FEATURED } from "@/lib/content/featured";
import { pillars } from "@/lib/content/map";

export function HomeEditorial() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-8">
      <section className="border-t border-line pt-10">
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Best of the map</p>
        <h2 className="mt-2 font-display text-3xl">Start with a date, or with a definition</h2>
        <p className="mt-2 max-w-xl text-muted">Four pages that carry the rest of the site.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {FEATURED.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
            >
              <p className="text-xs font-semibold tracking-[0.12em] text-gold uppercase">{item.kicker}</p>
              <h3 className="mt-2 font-display text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.summary}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Four pillars</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <a
              key={p.id}
              href={p.path}
              className="rounded-lg bg-surface px-4 py-3 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
            >
              <p className="text-xs text-gold">{p.kicker}</p>
              <p className="mt-1 font-medium">{p.title}</p>
              <p className="mt-1 text-sm text-muted">{p.question}</p>
            </a>
          ))}
        </div>
        <p className="mt-6 text-sm">
          <Link to="/maps" className="text-gold hover:text-gold-soft">
            World map →
          </Link>
        </p>
      </section>
    </div>
  );
}
