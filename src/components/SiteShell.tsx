import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { PriceTicker } from "@/components/PriceTicker";
import { HISTORY_NAV_MENU } from "@/lib/content/history-subnav";
import { MARKETS_NAV_MENU } from "@/lib/content/markets-subnav";
import { SOUND_MONEY_NAV_MENU } from "@/lib/content/sound-money-subnav";

type NavMenuItem = {
  label: string;
  href: string;
  cluster?: string;
};

const NAV: {
  href: string;
  label: string;
  menu?: readonly NavMenuItem[];
}[] = [
  { href: "/desk", label: "Desk" },
  { href: "/sound-money", label: "Sound Money", menu: SOUND_MONEY_NAV_MENU },
  { href: "/history", label: "History", menu: HISTORY_NAV_MENU },
  { href: "/markets", label: "Markets", menu: MARKETS_NAV_MENU },
  { href: "/blog", label: "Blog" },
  { href: "/gold-silver", label: "In Practice" },
];


const SOCIALS = [
  { href: "https://x.com/GoldSilverHQ", label: "X", name: "GoldSilverHQ on X" },
  { href: "https://www.instagram.com/goldsilverhq/", label: "Instagram", name: "GoldSilverHQ on Instagram" },
  { href: "https://www.tiktok.com/@goldsilver.hq", label: "TikTok", name: "GoldSilverHQ on TikTok" },
  { href: "https://www.youtube.com/@GoldSilverHQ", label: "YouTube", name: "GoldSilverHQ on YouTube" },
] as const;

function IconX({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.851L1.254 2.25H8.08l4.258 5.888L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconTikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.76-.39 2.89 2.89 0 0 1 2.88-2.89c.28 0 .54.04.79.1v-3.5a6.34 6.34 0 0 0-7.55 6.17 6.34 6.34 0 0 0 12.68 0V8.73a8.19 8.19 0 0 0 4.2 1.16V6.42a4.84 4.84 0 0 1-2.02.27z" />
    </svg>
  );
}

function IconYouTube({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.55 12 3.55 12 3.55s-7.54 0-9.38.5A3.02 3.02 0 0 0 .38 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.84.5 9.38.5 9.38.5s7.54 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.55 15.57V8.43L15.82 12z" />
    </svg>
  );
}

const SOCIAL_ICONS = {
  X: IconX,
  Instagram: IconInstagram,
  TikTok: IconTikTok,
  YouTube: IconYouTube,
} as const;

function SocialLinks({
  compact = false,
  onNavigate,
}: {
  compact?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <div className={compact ? "flex items-center" : "flex flex-col gap-2"}>
      {SOCIALS.map((item) => {
        const Icon = SOCIAL_ICONS[item.label];
        return (
          <a
            key={item.href}
            href={item.href}
            aria-label={item.name}
            title={item.name}
            target="_blank"
            rel="noreferrer"
            onClick={onNavigate}
            className={
              compact
                ? "grid size-8 place-items-center text-muted hover:text-gold-soft sm:size-9"
                : "inline-flex min-h-8 items-center gap-2 text-muted hover:text-gold-soft"
            }
          >
            <Icon className="size-4" />
            {compact ? null : <span>{item.label}</span>}
          </a>
        );
      })}
    </div>
  );
}

function Wordmark() {
  return (
    <span className="font-display font-bold tracking-tight">
      <span className="text-gold">Gold</span>
      <span className="text-silver">Silver</span>
      <span className="text-fg">HQ</span>
    </span>
  );
}

function Brand() {
  return (
    <span className="flex items-center gap-2.5">
      <img
        src="/logo.png?v=3"
        alt=""
        width={43}
        height={43}
        className="size-[2.65rem] shrink-0 object-contain"
      />
      <Wordmark />
    </span>
  );
}

function NavMenuLink({
  item,
  className,
  onNavigate,
}: {
  item: NavMenuItem;
  className: string;
  onNavigate?: () => void;
}) {
  if (item.cluster) {
    return (
      <Link
        to="/history/$cluster"
        params={{ cluster: item.cluster }}
        className={className}
        onClick={onNavigate}
        activeOptions={{ exact: true }}
      >
        {item.label}
      </Link>
    );
  }
  return (
    <Link to={item.href} className={className} onClick={onNavigate} activeOptions={{ exact: true }}>
      {item.label}
    </Link>
  );
}

function DesktopNavFlyout({
  label,
  hubHref,
  items,
}: {
  label: string;
  hubHref: string;
  items: readonly NavMenuItem[];
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative shrink-0"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      onFocusCapture={openMenu}
      onBlurCapture={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node)) setOpen(false);
      }}
    >
      <Link
        to={hubHref}
        className={`site-nav-link inline-flex items-center whitespace-nowrap px-2 py-1 text-nav ${open ? "is-open" : ""}`}
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="menu"
      >
        {label}
      </Link>
      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-label={label}
          className="absolute top-full left-0 z-50 mt-0 min-w-[14rem] pt-2"
        >
          <div className="site-nav-flyout">
            {items.map((item) => (
              <NavMenuLink
                key={item.href}
                item={item}
                onNavigate={() => setOpen(false)}
                className="site-nav-menu-item"
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function MobileNavSection({
  label,
  hubHref,
  items,
  onNavigate,
}: {
  label: string;
  hubHref: string;
  items: readonly NavMenuItem[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div>
      <div className="flex min-h-11 items-center gap-1">
        <Link to={hubHref} onClick={onNavigate} className={`site-nav-mobile-link ${open ? "is-open" : ""}`}>
          {label}
        </Link>
        <button
          type="button"
          className={`grid size-11 place-items-center rounded-sm text-muted transition-colors hover:bg-[color-mix(in_oklab,var(--color-gold-soft)_14%,transparent)] hover:text-gold ${open ? "text-gold" : ""}`}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? `Hide ${label} sections` : `Show ${label} sections`}
          onClick={() => setOpen((value) => !value)}
        >
          <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
      </div>
      {open ? (
        <div id={panelId} className="site-nav-mobile-panel">
          {items
            .filter((item) => item.href !== hubHref)
            .map((item) => (
              <NavMenuLink
                key={item.href}
                item={item}
                onNavigate={onNavigate}
                className="site-nav-menu-item min-h-11"
              />
            ))}
        </div>
      ) : null}
    </div>
  );
}

export function SiteShell({
  children,
  ui,
}: {
  children: ReactNode;
  /** `data` = desk/maps sans + tabular nums. `markets` = Figtree titles, body, and figures. */
  ui?: "data" | "markets";
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-40 overflow-visible border-b border-line bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex min-h-16 max-w-6xl flex-nowrap items-center gap-4 px-4 xl:gap-8">
          <Link to="/" className="shrink-0 text-[1.159rem]" aria-label="GoldSilverHQ home">
            <Brand />
          </Link>
          <nav className="hidden min-w-0 flex-1 flex-nowrap items-center gap-4 whitespace-nowrap xl:flex xl:pl-2">
            {NAV.map((item) =>
              item.menu ? (
                <DesktopNavFlyout key={item.href} label={item.label} hubHref={item.href} items={item.menu} />
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="site-nav-link shrink-0 whitespace-nowrap px-2 py-1 text-nav"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="ml-auto flex shrink-0 items-center">
            <div className="hidden min-w-0 md:block xl:pr-5">
              <PriceTicker />
            </div>
            <div className="flex items-center gap-0.5 xl:border-l xl:border-line xl:pl-5">
              <SocialLinks compact />
              <button
                type="button"
                className="grid size-11 place-items-center text-fg xl:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-line px-4 py-2 md:hidden">
          <PriceTicker />
        </div>
        {open ? (
          <nav className="flex flex-col gap-1 border-t border-line px-4 py-3 xl:hidden">
            {NAV.map((item) =>
              item.menu ? (
                <MobileNavSection
                  key={item.href}
                  label={item.label}
                  hubHref={item.href}
                  items={item.menu}
                  onNavigate={() => setOpen(false)}
                />
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="site-nav-mobile-link"
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="mt-3 border-t border-line pt-3">
              <SocialLinks onNavigate={() => setOpen(false)} />
            </div>
          </nav>
        ) : null}
      </header>
      <main className={ui === "data" ? "data-ui" : ui === "markets" ? "markets" : undefined}>{children}</main>
      <footer className="mt-8 border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3">
          <Link to="/" className="text-sm" aria-label="GoldSilverHQ home">
            <Wordmark />
          </Link>
          <nav className="flex flex-wrap items-center gap-x-4 text-xs text-muted">
            <Link to="/about" className="hover:text-gold-soft">
              About
            </Link>
            <Link to="/impressum" className="hover:text-gold-soft">
              Impressum
            </Link>
            <Link
              to="/sound-money/$slug"
              params={{ slug: "information-not-advice" }}
              className="hover:text-gold-soft"
            >
              Information vs advice
            </Link>
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <SocialLinks compact />
            <p className="text-xs text-faint">© 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
