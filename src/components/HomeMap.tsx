import { FEATURED } from "@/lib/content/featured";
import { pillars } from "@/lib/content/map";

export function HomeMap() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-12 pt-4">
      <section className="border-t border-line pt-8">
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Read</p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {FEATURED.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="flex min-h-11 items-baseline gap-3 rounded-md px-1 py-2 hover:bg-raised">
                <span className="w-14 shrink-0 text-xs font-semibold tracking-[0.12em] text-gold uppercase">
                  {item.kicker}
                </span>
                <span className="text-sm text-fg">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
          {pillars.map((p) => (
            <a key={p.id} href={p.path} className="hover:text-gold">
              {p.title}
            </a>
          ))}
        </p>
      </section>
    </div>
  );
}
