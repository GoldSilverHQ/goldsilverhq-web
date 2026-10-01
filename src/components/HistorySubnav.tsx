import { Link } from "@tanstack/react-router";
import { HISTORY_SUBNAV } from "@/lib/content/history-subnav";

/**
 * Compact chapter row for the History hub — plain labels, existing URLs only.
 * Survives hub prose rewrites: chrome only, no body copy.
 */
export function HistorySubnav({ className = "" }: { className?: string }) {
  return (
    <nav
      aria-label="History sections"
      className={`rounded-xl bg-surface/60 px-3 py-3 shadow-[var(--shadow-border)] sm:px-4 ${className}`}
    >
      <ul className="m-0 flex list-none flex-wrap items-center gap-x-1 gap-y-1.5 p-0">
        {HISTORY_SUBNAV.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1">
            {index > 0 ? (
              <span className="hidden text-faint sm:inline" aria-hidden="true">
                ·
              </span>
            ) : null}
            {item.cluster ? (
              <Link
                to="/history/$cluster"
                params={{ cluster: item.cluster }}
                className="inline-flex min-h-10 items-center rounded-md px-2.5 text-sm text-gold hover:bg-raised hover:text-gold-soft"
              >
                {item.label}
              </Link>
            ) : (
              <Link
                to={item.href}
                className="inline-flex min-h-10 items-center rounded-md px-2.5 text-sm text-gold hover:bg-raised hover:text-gold-soft"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
