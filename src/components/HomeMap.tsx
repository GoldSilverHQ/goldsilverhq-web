import { Link } from "@tanstack/react-router";
import { FEATURED } from "@/lib/content/featured";
import { historyClusters, pillars } from "@/lib/content/map";

export function HomeMap() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Topical map</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
        Sound money, in three pillars
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        A history blog with a map: what the idea means, what happened, and how people handle metal.
        Media only. Not a newsletter, not an ebook, not a shop.
      </p>

      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {pillars.map((pillar) => (
          <li key={pillar.id}>
            <a
              href={pillar.path}
              className="flex h-full flex-col rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] transition-[box-shadow] hover:shadow-[var(--shadow-border-hover)]"
            >
              <p className="text-xs font-semibold tracking-[0.12em] text-gold uppercase">{pillar.kicker}</p>
              <h2 className="mt-3 font-display text-2xl">{pillar.title}</h2>
              <p className="mt-2 text-sm text-muted">{pillar.question}</p>
              <p className="mt-3 flex-1 text-sm text-muted">{pillar.summary}</p>
              <p className="mt-5 text-sm text-gold">Open pillar →</p>
            </a>
          </li>
        ))}
      </ol>

      <section className="mt-16">
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">History clusters</p>
        <h2 className="mt-2 font-display text-3xl">Five groups, one spine</h2>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Episode → cluster → this hub. Start in 1971 if you want, but the map does not start there.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {historyClusters.map((cluster, i) => (
            <Link
              key={cluster.slug}
              to="/history/$cluster"
              params={{ cluster: cluster.slug }}
              className="rounded-lg bg-surface px-4 py-4 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
            >
              <p className="text-xs text-gold">Cluster {i + 1}</p>
              <h3 className="mt-1 font-display text-xl">{cluster.title}</h3>
              <p className="mt-1 text-sm text-muted">{cluster.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Start here</p>
        <h2 className="mt-2 font-display text-3xl">Four entries on the map</h2>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {FEATURED.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex min-h-11 items-baseline gap-3 rounded-md px-1 py-2 hover:bg-raised"
              >
                <span className="w-16 shrink-0 text-xs font-semibold tracking-[0.12em] text-gold uppercase">
                  {item.kicker}
                </span>
                <span>
                  <span className="block text-sm text-fg">{item.title}</span>
                  <span className="text-sm text-muted">{item.summary}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-14 text-sm text-muted">
        Live gold and silver prints sit on the{" "}
        <Link to="/desk" className="text-gold hover:text-gold-soft">
          desk
        </Link>
        . They are a tool, not a pillar.
      </p>
    </div>
  );
}
