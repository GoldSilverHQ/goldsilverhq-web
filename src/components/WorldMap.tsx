import { geoEquirectangular, geoGraticule, geoPath, type GeoPermissibleObjects } from "d3-geo";
import { select } from "d3-selection";
import { zoom as d3zoom, zoomIdentity } from "d3-zoom";
import { useEffect, useMemo, useRef, useState } from "react";
import { feature } from "topojson-client";
import world from "world-atlas/countries-110m.json";
import {
  formatTonnes,
  METRIC_TABS,
  metricMax,
  metricValue,
  type Metal,
  type MetricId,
} from "@/lib/maps/metrics";

type CountryFeat = {
  type: "Feature";
  id?: string | number;
  properties: { name?: string };
  geometry: GeoPermissibleObjects;
};

const countries = feature(
  world as Parameters<typeof feature>[0],
  (world as { objects: { countries: Parameters<typeof feature>[1] } }).objects.countries,
) as { type: "FeatureCollection"; features: CountryFeat[] };

const SKIP = new Set(["010"]); // Antarctica

function padId(id: string | number | undefined): string {
  return String(id ?? "").padStart(3, "0");
}

function fillFor(t: number, metal: Metal) {
  const pct = Math.round(18 + t * 72);
  const accent = metal === "gold" ? "var(--color-gold)" : "var(--color-silver)";
  return `color-mix(in oklab, ${accent} ${pct}%, var(--color-raised))`;
}

export function WorldMap() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const gRef = useRef<SVGGElement>(null);
  const [size, setSize] = useState({ w: 640, h: 380 });
  const [metal, setMetal] = useState<Metal>("gold");
  const [metric, setMetric] = useState<MetricId>("production");
  const [hover, setHover] = useState<{ id: string; name: string; x: number; y: number } | null>(null);
  const [selected, setSelected] = useState<{ id: string; name: string } | null>(null);

  const tab = METRIC_TABS.find((t) => t.id === metric)!;
  const max = metricMax(metal, metric);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const ro = new ResizeObserver(() => {
      const w = wrap.clientWidth;
      const h = Math.max(240, Math.round(w * 0.5));
      setSize({ w, h: Math.min(h, 520) });
    });
    ro.observe(wrap);
    setSize({
      w: wrap.clientWidth || 640,
      h: Math.min(520, Math.max(240, Math.round((wrap.clientWidth || 640) * 0.5))),
    });
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    const g = gRef.current;
    if (!svg || !g) return;
    const z = d3zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 8])
      .on("zoom", (event) => {
        g.setAttribute("transform", event.transform.toString());
      });
    const sel = select(svg);
    sel.call(z);
    sel.call(z.transform, zoomIdentity);
    return () => {
      sel.on(".zoom", null);
    };
  }, [size.w, size.h]);

  const { path, graticule } = useMemo(() => {
    const frame = {
      type: "Polygon" as const,
      coordinates: [
        [
          [-180, -56],
          [180, -56],
          [180, 84],
          [-180, 84],
          [-180, -56],
        ],
      ],
    };
    const projection = geoEquirectangular().fitExtent(
      [
        [0, 0],
        [size.w, size.h],
      ],
      frame,
    );
    const path = geoPath(projection);
    return {
      path,
      graticule: path(geoGraticule().extent([[-180, -56], [180, 84]]).step([30, 30])()) ?? "",
    };
  }, [size.w, size.h]);

  const selectedVal = selected ? metricValue(metal, metric, selected.id) : null;
  const hoverVal = hover ? metricValue(metal, metric, hover.id) : null;

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div
          className="inline-flex w-fit rounded-full bg-surface p-1 shadow-[var(--shadow-border)]"
          role="tablist"
          aria-label="Metal"
        >
          {(["gold", "silver"] as const).map((m) => {
            const on = metal === m;
            return (
              <button
                key={m}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setMetal(m)}
                className={`min-h-11 rounded-full px-5 text-sm font-medium capitalize transition-[color,background-color] duration-150 ease-out active:scale-[0.96] ${
                  on
                    ? m === "gold"
                      ? "bg-gold text-bg"
                      : "bg-silver text-bg"
                    : "text-muted hover:text-fg"
                }`}
              >
                {m}
              </button>
            );
          })}
        </div>

        <div
          className="flex gap-1 overflow-x-auto border-b border-line [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Metric"
        >
          {METRIC_TABS.map((t) => {
            const on = metric === t.id;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setMetric(t.id)}
                className={`min-h-11 shrink-0 border-b-2 px-4 text-sm transition-[color,border-color] duration-150 ${
                  on
                    ? "border-gold text-gold"
                    : "border-transparent text-muted hover:text-fg"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
        <p className="text-sm text-muted">
          {tab.hint} Unit: {tab.unit}.
        </p>
      </div>

      <div ref={wrapRef} className="relative mt-5 overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${size.w} ${size.h}`}
          width="100%"
          height={size.h}
          role="img"
          aria-label="World map of gold and silver metrics"
          className="touch-none"
        >
          <defs>
            <clipPath id="map-frame">
              <rect width={size.w} height={size.h} />
            </clipPath>
          </defs>
          <rect width={size.w} height={size.h} fill="var(--color-bg)" />
          <g clipPath="url(#map-frame)">
            <g ref={gRef}>
            <path d={graticule} fill="none" stroke="var(--color-line)" strokeWidth={0.5} />
            {countries.features.map((f, i) => {
              const id = padId(f.id);
              if (SKIP.has(id) || id === "000") return null;
              const d = path(f as GeoPermissibleObjects);
              if (!d) return null;
              const value = metricValue(metal, metric, id);
              const t = value == null ? 0 : Math.pow(value / max, 0.5);
              const name = f.properties.name ?? "Unknown";
              const isSel = selected?.id === id;
              return (
                <path
                  key={`${id}-${i}`}
                  d={d}
                  fill={value == null ? "var(--color-raised)" : fillFor(t, metal)}
                  stroke={isSel ? "var(--color-gold-soft)" : "var(--color-bg)"}
                  strokeWidth={isSel ? 1.4 : 0.4}
                  className="cursor-pointer transition-[fill] duration-150"
                  onMouseEnter={(e) => {
                    const rect = wrapRef.current?.getBoundingClientRect();
                    setHover({
                      id,
                      name,
                      x: e.clientX - (rect?.left ?? 0),
                      y: e.clientY - (rect?.top ?? 0),
                    });
                  }}
                  onMouseMove={(e) => {
                    const rect = wrapRef.current?.getBoundingClientRect();
                    setHover({
                      id,
                      name,
                      x: e.clientX - (rect?.left ?? 0),
                      y: e.clientY - (rect?.top ?? 0),
                    });
                  }}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => setSelected({ id, name })}
                />
              );
            })}
            </g>
          </g>
        </svg>

        {hover ? (
          <div
            className="pointer-events-none absolute z-10 rounded-lg bg-raised px-3 py-2 text-sm shadow-[var(--shadow-border)]"
            style={{
              left: Math.min(hover.x + 12, size.w - 160),
              top: Math.max(8, hover.y - 48),
            }}
          >
            <p className="font-medium text-fg">{hover.name}</p>
            <p className={metal === "gold" ? "text-gold" : "text-silver"}>{formatTonnes(hoverVal)}</p>
          </div>
        ) : null}

        <p className="pointer-events-none absolute right-3 bottom-3 text-xs text-faint">Drag to pan · scroll to zoom</p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <Legend metal={metal} />
        {selected ? (
          <div className="min-w-0 flex-1 rounded-xl bg-raised px-4 py-3 shadow-[var(--shadow-border)]">
            <p className="text-xs tracking-[0.12em] text-faint uppercase">{tab.label}</p>
            <p className="font-display text-2xl text-fg">{selected.name}</p>
            <p className={`text-lg ${metal === "gold" ? "text-gold" : "text-silver"}`}>
              {selectedVal == null ? "—" : selectedVal.toLocaleString("en-US")}
              <span className="ml-2 text-sm text-muted">{tab.unit}</span>
            </p>
          </div>
        ) : (
          <p className="text-sm text-muted">Tap a country. Figures are draft until you replace them.</p>
        )}
      </div>
    </div>
  );
}

function Legend({ metal }: { metal: Metal }) {
  const accent = metal === "gold" ? "var(--color-gold)" : "var(--color-silver)";
  return (
    <div className="flex items-center gap-2 text-xs text-muted">
      <span>Low</span>
      <span
        className="h-2 w-24 rounded-full sm:w-32"
        style={{
          background: `linear-gradient(90deg, var(--color-raised), ${accent})`,
        }}
      />
      <span>High</span>
    </div>
  );
}
