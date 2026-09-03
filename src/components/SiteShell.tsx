import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Newsletter } from "@/components/Newsletter";
import { PriceTicker } from "@/components/PriceTicker";

const NAV = [
  { href: "/desk", label: "Desk" },
  { href: "/sound-money", label: "Sound Money" },
  { href: "/history", label: "History" },
  { href: "/gold-silver", label: "In Practice" },
  { href: "/quiz", label: "Quiz" },
  { href: "/maps", label: "Maps" },
];

function Wordmark() {
  return (
    <span className="font-display tracking-tight">
      <span className="text-gold">Gold</span>
      <span className="text-silver">Silver</span>
      <span className="text-fg">HQ</span>
    </span>
  );
}

function Brand({ compact = false }: { compact?: boolean }) {
  const px = compact ? 36 : 48;
  return (
    <span className="flex items-center gap-2.5">
      <img
        src="/logo.png?v=3"
        alt=""
        width={px}
        height={px}
        className={compact ? "size-9 shrink-0 object-contain" : "size-12 shrink-0 object-contain"}
      />
      <Wordmark />
    </span>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-40 overflow-visible border-b border-line bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex min-h-16 max-w-6xl items-center gap-3 px-4">
          <Link to="/" className="shrink-0 text-xl" aria-label="GoldSilverHQ home">
            <Brand />
          </Link>
          <div className="hidden min-w-0 flex-1 md:block">
            <PriceTicker />
          </div>
          <nav className="ml-auto hidden items-center gap-5 xl:flex">
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
              className="btn-gold inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium"
            >
              Newsletter
            </Link>
          </nav>
          <button
            type="button"
            className="ml-auto grid size-11 place-items-center text-fg xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        <div className="border-t border-line px-4 py-2 md:hidden">
          <PriceTicker />
        </div>
        {open ? (
          <nav className="flex flex-col gap-1 border-t border-line px-4 py-3 xl:hidden">
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
              className="btn-gold mt-2 inline-flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-medium"
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
              <p className="text-lg">
                <Brand compact />
              </p>
              <p className="mt-2 max-w-xs text-sm text-muted">
                Media only. Sound money, history, and practical notes on physical metal. Not investment advice.
              </p>
            </div>
            <div className="text-sm">
              <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-faint uppercase">Pillars</p>
              <div className="flex flex-col gap-2">
                <Link to="/desk" className="text-muted hover:text-gold-soft">Desk</Link>
                <Link to="/sound-money" className="text-muted hover:text-gold-soft">Sound Money</Link>
                <Link to="/history" className="text-muted hover:text-gold-soft">History</Link>
                <Link to="/gold-silver" className="text-muted hover:text-gold-soft">In Practice</Link>
                <Link to="/quiz" className="text-muted hover:text-gold-soft">Quiz</Link>
                <Link to="/kit" className="text-muted hover:text-gold-soft">Kit</Link>
                <Link to="/maps" className="text-muted hover:text-gold-soft">Maps</Link>
              </div>
            </div>
            <div className="text-sm">
              <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-faint uppercase">Connect</p>
              <div className="flex flex-col gap-2">
                <Link to="/about" className="text-muted hover:text-gold-soft">About</Link>
                <Link
                  to="/sound-money/$slug"
                  params={{ slug: "information-not-advice" }}
                  className="text-muted hover:text-gold-soft"
                >
                  Information vs advice
                </Link>
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
          </div>
          <p className="mt-10 text-xs text-faint">© 2026 GoldSilverHQ. Educational media. BaFin-clean.</p>
        </div>
      </footer>
    </div>
  );
}
