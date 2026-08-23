import { useEffect, useRef, useState } from "react";

type Metal = "gold" | "silver" | "both";

type Flow = {
  metal: "gold" | "silver";
  from: [number, number];
  to: [number, number];
  label: string;
  href: string;
};

const CONTINENTS: [number, number][][] = [
  [
    [-168, 72], [-141, 70], [-128, 59], [-125, 49], [-95, 49], [-83, 46],
    [-80, 25], [-97, 26], [-106, 22], [-110, 24], [-124, 39], [-130, 55],
    [-165, 64], [-168, 72],
  ],
  [
    [-81, 12], [-60, 8], [-50, 0], [-35, -7], [-38, -22], [-55, -35],
    [-68, -55], [-75, -45], [-81, -5], [-81, 12],
  ],
  [
    [-10, 36], [-9, 44], [-5, 48], [-1, 51], [5, 53], [12, 55], [20, 70],
    [30, 70], [30, 60], [28, 45], [18, 40], [12, 36], [-10, 36],
  ],
  [
    [-17, 32], [-5, 36], [10, 37], [32, 31], [43, 12], [51, 12], [40, -3],
    [33, -25], [20, -35], [18, -34], [12, -18], [8, 5], [-10, 6], [-17, 20], [-17, 32],
  ],
  [
    [28, 41], [36, 36], [44, 40], [60, 37], [68, 25], [77, 8], [80, 6],
    [100, 8], [108, 22], [122, 31], [142, 46], [160, 66], [140, 72],
    [100, 72], [70, 66], [40, 60], [28, 50], [28, 41],
  ],
  [
    [114, -22], [129, -12], [142, -11], [153, -27], [150, -38], [116, -35], [114, -22],
  ],
];

const FLOWS: Flow[] = [
  { metal: "silver", from: [-67, -20], to: [-6, 37], label: "Potosí → Seville", href: "/history/silver/potosi" },
  { metal: "silver", from: [-103, 23], to: [121, 14], label: "Mexico → Manila", href: "/history/silver/piece-of-eight" },
  { metal: "silver", from: [121, 14], to: [121, 31], label: "Manila → China", href: "/history/silver/piece-of-eight" },
  { metal: "gold", from: [-120, 38], to: [-74, 41], label: "California → New York", href: "/history/america/early-us-coinage" },
  { metal: "gold", from: [28, -26], to: [-0.1, 51.5], label: "Witwatersrand → London", href: "/history/20th-century" },
  { metal: "gold", from: [139, -25], to: [-0.1, 51.5], label: "Australia → London", href: "/history/20th-century" },
  { metal: "gold", from: [-70, -33], to: [-6, 37], label: "Andes → Seville", href: "/history/ancient" },
];

function project(lon: number, lat: number, w: number, h: number): [number, number] {
  const padX = w * 0.04;
  const padY = h * 0.08;
  const x = padX + ((lon + 170) / 360) * (w - padX * 2);
  const y = padY + ((85 - lat) / 150) * (h - padY * 2);
  return [x, y];
}

function curve(a: [number, number], b: [number, number], t: number): [number, number] {
  const mx = (a[0] + b[0]) / 2;
  const my = (a[1] + b[1]) / 2 - Math.hypot(b[0] - a[0], b[1] - a[1]) * 0.22;
  const u = 1 - t;
  return [
    u * u * a[0] + 2 * u * t * mx + t * t * b[0],
    u * u * a[1] + 2 * u * t * my + t * t * b[1],
  ];
}

export function FlowMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const sizeRef = useRef({ w: 0, h: 0 });
  const [metal, setMetal] = useState<Metal>("both");
  const [active, setActive] = useState<Flow | null>(FLOWS[0] ?? null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t = 0;
    let last = performance.now();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = wrap.clientWidth;
      const h = Math.max(280, Math.min(520, wrap.clientWidth * 0.52));
      if (w === sizeRef.current.w && h === sizeRef.current.h) return;
      sizeRef.current = { w, h };
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      if (!reduced) t += dt;
      resize();

      const { w, h } = sizeRef.current;
      ctx.fillStyle = "#0c0b09";
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = "rgba(197,205,212,0.22)";
      ctx.lineWidth = 1;
      for (const poly of CONTINENTS) {
        ctx.beginPath();
        poly.forEach((pt, i) => {
          const [x, y] = project(pt[0], pt[1], w, h);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.fillStyle = "rgba(197,205,212,0.06)";
        ctx.fill();
        ctx.stroke();
      }

      const shown = FLOWS.filter((f) => metal === "both" || f.metal === metal);
      shown.forEach((flow, idx) => {
        const a = project(flow.from[0], flow.from[1], w, h);
        const b = project(flow.to[0], flow.to[1], w, h);
        const gold = flow.metal === "gold";
        ctx.strokeStyle = gold ? "rgba(201,162,39,0.45)" : "rgba(197,205,212,0.4)";
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        const steps = 32;
        for (let i = 0; i <= steps; i++) {
          const p = curve(a, b, i / steps);
          if (i === 0) ctx.moveTo(p[0], p[1]);
          else ctx.lineTo(p[0], p[1]);
        }
        ctx.stroke();

        const head = (t * 0.18 + idx * 0.22) % 1;
        const p = curve(a, b, head);
        ctx.beginPath();
        ctx.fillStyle = gold ? "#e8d48b" : "#c5cdd4";
        ctx.arc(p[0], p[1], 3.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = gold ? "#c9a227" : "#8a94a0";
        ctx.arc(a[0], a[1], 3, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [metal]);

  const list = FLOWS.filter((f) => metal === "both" || f.metal === metal);

  return (
    <div className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Metal flows</p>
          <h2 className="font-display text-2xl text-fg">Gold and silver on the move</h2>
        </div>
        <div className="flex gap-2">
          {(["both", "gold", "silver"] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setMetal(key)}
              className={`min-h-11 rounded-full px-4 text-sm capitalize ${
                metal === key
                  ? "bg-gold text-bg"
                  : "text-muted shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_14%,transparent)]"
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
      <div ref={wrapRef} className="relative">
        <canvas ref={canvasRef} className="block w-full" />
      </div>
      <ul className="grid gap-2 p-4 sm:grid-cols-2">
        {list.map((flow) => (
          <li key={flow.label}>
            <a
              href={flow.href}
              onFocus={() => setActive(flow)}
              onMouseEnter={() => setActive(flow)}
              className={`flex min-h-11 items-center justify-between rounded-lg px-3 text-sm ${
                active?.label === flow.label ? "bg-raised text-fg" : "text-muted hover:text-fg"
              }`}
            >
              <span>{flow.label}</span>
              <span className={flow.metal === "gold" ? "text-gold" : "text-silver"}>{flow.metal}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
