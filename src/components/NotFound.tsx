import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";

export function NotFound() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <p className="text-xs tracking-[0.16em] text-gold uppercase">Missing page</p>
        <h1 className="mt-3 font-display text-4xl">This page was not found</h1>
        <p className="mt-4 text-muted">Return home, or open Sound Money, History, or Markets from the menu.</p>
        <Link to="/" className="mt-8 inline-flex min-h-11 items-center rounded-full bg-gold px-5 text-sm font-medium text-bg">
          Home
        </Link>
      </div>
    </SiteShell>
  );
}
