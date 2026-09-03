import { useEffect, useRef, useState, type ComponentType } from "react";
import {
  Banknote,
  Building2,
  CircleDot,
  Coins,
  DoorClosed,
  Gavel,
  Globe,
  Landmark,
  LineChart,
  Lock,
  Mountain,
  Scale,
  ScrollText,
  Shield,
  TrendingDown,
  Warehouse,
} from "lucide-react";
import { historyTimeline, timelineEras, type TimelineEra, type TimelineStop } from "@/lib/content/timeline";

const ICONS: Record<string, ComponentType<{ className?: string; strokeWidth?: number }>> = {
  "markets-choose": Coins,
  lydia: CircleDot,
  greece: Landmark,
  rome: Shield,
  solidus: Coins,
  potosi: Mountain,
  "piece-of-eight": Globe,
  warehouses: Warehouse,
  amsterdam: Building2,
  boe: Landmark,
  law: TrendingDown,
  assignats: ScrollText,
  "us-1792": Scale,
  jackson: Gavel,
  greenbacks: Banknote,
  "1873": Scale,
  "1907": Building2,
  "1914": Shield,
  weimar: TrendingDown,
  "1933": Lock,
  "1971": DoorClosed,
  "1980": LineChart,
};

const WAVES = 3.15;

function sinePath(height: number, width: number, amp: number, waves: number) {
  if (height <= 0) return "";
  const cx = width / 2;
  const step = 4;
  let d = "";
  for (let y = 0; y <= height; y += step) {
    const x = cx + amp * Math.sin((y / height) * Math.PI * 2 * waves);
    d += y === 0 ? `M ${x.toFixed(1)} ${y}` : ` L ${x.toFixed(1)} ${y}`;
  }
  return d;
}

function metalStroke(metal: TimelineStop["metal"], active: boolean) {
  if (metal === "silver") return active ? "text-silver" : "text-silver/75";
  if (metal === "paper") return active ? "text-muted" : "text-faint";
  return active ? "text-gold" : "text-gold/75";
}

function metalFill(metal: TimelineStop["metal"], active: boolean) {
  if (metal === "silver") return active ? "bg-silver" : "bg-silver/65";
  if (metal === "paper") return active ? "bg-muted" : "bg-faint";
  return active ? "bg-gold" : "bg-gold-deep";
}

export function HistoryTimeline() {
  const listRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(historyTimeline[0]?.id ?? "");
  const [progress, setProgress] = useState(0);
  const [height, setHeight] = useState(0);
  const [amp, setAmp] = useState(22);
  const [svgW, setSvgW] = useState(80);
  const [mids, setMids] = useState<number[]>([]);

  const activeEra: TimelineEra =
    historyTimeline.find((s) => s.id === activeId)?.era ?? "origins";
  const path = sinePath(height, svgW, amp, WAVES);

  useEffect(() => {
    const root = listRef.current;
    if (!root) return;

    const measure = () => {
      const mobile = window.innerWidth < 640;
      setAmp(mobile ? 14 : 34);
      setSvgW(mobile ? 64 : 112);
      setHeight(root.offsetHeight);
      const rows = [...root.querySelectorAll<HTMLElement>("[data-stop]")];
      setMids(rows.map((el) => el.offsetTop + el.offsetHeight / 2));
    };

    const ro = new ResizeObserver(measure);
    ro.observe(root);
    measure();

    const nodes = [...root.querySelectorAll<HTMLElement>("[data-stop]")];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target.getAttribute("data-stop");
        if (id) setActiveId(id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.15, 0.4, 0.7] },
    );
    nodes.forEach((n) => io.observe(n));

    const onScroll = () => {
      const rect = root.getBoundingClientRect();
      const total = root.offsetHeight;
      if (total <= 0) return;
      const marker = window.innerHeight * 0.4;
      setProgress(Math.min(1, Math.max(0, (marker - rect.top) / total)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const jumpEra = (era: TimelineEra) => {
    const first = historyTimeline.find((s) => s.era === era);
    if (!first) return;
    document.getElementById(`tl-${first.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="mt-12" aria-labelledby="timeline-heading">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Timeline</p>
      <h2 id="timeline-heading" className="mt-2 font-display text-3xl text-fg sm:text-4xl">
        From Lydia to the gold window
      </h2>
      <p className="mt-3 max-w-prose text-muted">
        The spine of the ebook. Tap a year to open the episode.
      </p>

      <div className="sticky top-16 z-20 -mx-4 mt-8 border-y border-line bg-bg/90 backdrop-blur-md sm:top-[4.5rem]">
        <nav
          aria-label="Eras"
          className="flex gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {timelineEras.map((era) => {
            const on = era.id === activeEra;
            return (
              <button
                key={era.id}
                type="button"
                onClick={() => jumpEra(era.id)}
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm transition-[color,background-color] duration-150 ease-out active:scale-[0.96] ${
                  on ? "bg-gold text-bg" : "bg-surface text-muted shadow-[var(--shadow-border)] hover:text-fg"
                }`}
              >
                {era.label}
              </button>
            );
          })}
        </nav>
      </div>

      <div ref={listRef} className="timeline-board relative mt-4 sm:mt-8">
        <svg
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
          width={svgW}
          height={Math.max(height, 1)}
          viewBox={`0 0 ${svgW} ${Math.max(height, 1)}`}
          fill="none"
        >
          <defs>
            <linearGradient id="tl-wave" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-gold)" />
              <stop offset="50%" stopColor="var(--color-gold-soft)" />
              <stop offset="100%" stopColor="var(--color-silver)" />
            </linearGradient>
          </defs>
          {path ? (
            <>
              <path d={path} stroke="var(--color-line)" strokeWidth="3" />
              <path
                d={path}
                stroke="url(#tl-wave)"
                strokeWidth="3"
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray={`${progress} 1`}
              />
            </>
          ) : null}
        </svg>

        <ol className="relative">
          {historyTimeline.map((stop, i) => {
            const left = i % 2 === 0;
            const active = stop.id === activeId;
            const Icon = ICONS[stop.id] ?? Coins;
            const mid = mids[i] ?? 0;
            const x =
              height > 0 ? Math.sin((mid / height) * Math.PI * 2 * WAVES) * amp : 0;
            return (
              <li
                key={stop.id}
                id={`tl-${stop.id}`}
                data-stop={stop.id}
                className="timeline-row items-center py-5 sm:py-9"
              >
                <div className="min-w-0">
                  {left ? <StopCard stop={stop} icon={Icon} side="left" active={active} /> : null}
                </div>

                <div className="relative flex h-full min-h-10 items-center justify-center">
                  <span
                    aria-hidden
                    className="absolute top-1/2 h-px w-8 -translate-y-1/2 bg-line-gold sm:w-10"
                    style={{ transform: `translate(${left ? -16 - x : 16 + x}px, -50%)` }}
                  />
                  <span
                    aria-hidden
                    className={`relative z-10 size-2.5 rounded-full sm:size-3 ${metalFill(stop.metal, active)} ${
                      active ? "ring-4 ring-gold/30" : "ring-4 ring-bg"
                    }`}
                    style={{ transform: `translateX(${x}px)` }}
                  />
                </div>

                <div className="min-w-0">
                  {!left ? <StopCard stop={stop} icon={Icon} side="right" active={active} /> : null}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function StopCard({
  stop,
  icon: Icon,
  side,
  active,
}: {
  stop: TimelineStop;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  side: "left" | "right";
  active: boolean;
}) {
  const towardSpine = side === "left";
  return (
    <a
      href={stop.href}
      className={`group flex items-start gap-2.5 transition-[opacity,color] duration-200 ease-out active:scale-[0.99] sm:gap-4 ${
        towardSpine ? "flex-row-reverse text-right" : "flex-row text-left"
      } ${active ? "opacity-100" : "opacity-75 hover:opacity-100"}`}
    >
      <Icon
        className={`mt-1 size-8 shrink-0 sm:size-11 ${metalStroke(stop.metal, active)}`}
        strokeWidth={1.25}
      />
      <span className="min-w-0">
        <span className="block font-display text-lg leading-none text-gold sm:text-2xl">{stop.year}</span>
        <span
          className={`mt-1 block font-display text-lg leading-snug sm:mt-1.5 sm:text-2xl ${
            active ? "text-gold-soft" : "text-fg"
          }`}
        >
          {stop.title}
        </span>
        <span className="mt-1 block text-xs leading-relaxed text-muted sm:mt-1.5 sm:text-sm">
          {stop.blurb}
        </span>
      </span>
    </a>
  );
}
