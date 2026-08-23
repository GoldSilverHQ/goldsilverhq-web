import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Newsletter } from "@/components/Newsletter";

const NAV = [
  { href: "/sound-money", label: "Sound Money" },
  { href: "/history", label: "History" },
  { href: "/gold-silver", label: "In Practice" },
  { href: "/flows", label: "Flows" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-4">
          <Link to="/" className="font-display text-xl tracking-tight">
            <span className="text-gold">Gold</span>
            <span className="text-silver">Silver</span>
            <span className="text-fg">HQ</span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-muted hover:text-gold-soft"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/"
              hash="newsletter"
              className="inline-flex min-h-11 items-center rounded-full bg-gold px-4 text-sm font-medium text-bg"
            >
              Newsletter
            </Link>
          </nav>
          <button
            type="button"
            className="grid size-11 place-items-center text-fg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open ? (
          <nav className="flex flex-col gap-1 border-t border-line px-4 py-3 md:hidden">
            {NAV.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center text-fg"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/"
              hash="newsletter"
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center text-gold"
            >
              Newsletter
            </Link>
          </nav>
        ) : null}
      </header>
      <main>{children}</main>
      <footer className="mt-16 border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <Newsletter />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="font-display text-lg">
                <span className="text-gold">Gold</span>
                <span className="text-silver">Silver</span>HQ
              </p>
              <p className="mt-2 max-w-xs text-sm text-muted">
                Media only. Sound money, history, and practical notes on physical metal. Not investment advice.
              </p>
            </div>
            <div className="text-sm">
              <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-faint uppercase">Pillars</p>
              <div className="flex flex-col gap-2">
                <Link to="/sound-money" className="text-muted hover:text-gold-soft">Sound Money</Link>
                <Link to="/history" className="text-muted hover:text-gold-soft">History</Link>
                <Link to="/gold-silver" className="text-muted hover:text-gold-soft">In Practice</Link>
              </div>
            </div>
            <div className="text-sm">
              <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-faint uppercase">Connect</p>
              <a
                href="https://x.com/goldsilverhq"
                className="text-muted hover:text-gold-soft"
                target="_blank"
                rel="noreferrer"
              >
                @GoldSilverHQ on X
              </a>
            </div>
          </div>
          <p className="mt-10 text-xs text-faint">© 2026 GoldSilverHQ. Educational media. BaFin-clean.</p>
        </div>
      </footer>
    </div>
  );
}
