/** Client-side 4:5 portrait share cards for desk metrics. */

export const METRIC_SHARE_WIDTH = 1080;
export const METRIC_SHARE_HEIGHT = 1350; // 4:5
export const METRIC_SHARE_BRAND = "GoldSilverHQ.com";

export type MetricShareTone = "gold" | "silver" | "fg";

export type MetricSharePayload = {
  kicker: string;
  label: string;
  value: string;
  unit: string;
  note?: string;
  tone?: MetricShareTone;
  /** Optional second line under the value (e.g. full-year mine estimate). */
  secondary?: string;
};

const COLORS = {
  bgTop: "#14120f",
  bgMid: "#070605",
  bgBot: "#0a0908",
  fg: "#f2ede4",
  muted: "#9a9388",
  faint: "#6e6860",
  gold: "#c9a227",
  goldSoft: "#e8d48b",
  silver: "#c5cdd4",
  line: "rgba(201, 162, 39, 0.34)",
  goldGlow: "rgba(201, 162, 39, 0.18)",
} as const;

function toneColor(tone: MetricShareTone): string {
  if (tone === "silver") return COLORS.silver;
  if (tone === "fg") return COLORS.fg;
  return COLORS.gold;
}

function slugify(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

/** Build a download filename like `gold-spot-goldsilverhq.png`. */
export function metricShareFilename(label: string): string {
  const slug = slugify(label) || "metric";
  return `${slug}-goldsilverhq.png`;
}

/**
 * Draw a documentary dark desk share card onto a canvas (4:5).
 * Uses Figtree when available; falls back to system sans.
 */
export function drawMetricShareCard(
  canvas: HTMLCanvasElement,
  payload: MetricSharePayload,
): void {
  const w = METRIC_SHARE_WIDTH;
  const h = METRIC_SHARE_HEIGHT;
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas 2D unavailable");

  const tone = payload.tone ?? "gold";
  const accent = toneColor(tone);

  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, COLORS.bgTop);
  bg.addColorStop(0.52, COLORS.bgMid);
  bg.addColorStop(1, COLORS.bgBot);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  const glow = ctx.createRadialGradient(w * 0.5, h * 0.28, 40, w * 0.5, h * 0.28, w * 0.55);
  glow.addColorStop(0, COLORS.goldGlow);
  glow.addColorStop(1, "transparent");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = COLORS.line;
  ctx.lineWidth = 2;
  ctx.strokeRect(36, 36, w - 72, h - 72);

  const padX = 96;
  let y = 160;

  ctx.fillStyle = accent;
  ctx.font = "600 28px Figtree, ui-sans-serif, system-ui, sans-serif";
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  fillSpacedText(ctx, payload.kicker.toUpperCase(), padX, y, 6);

  y += 72;
  ctx.fillStyle = COLORS.muted;
  ctx.font = "500 40px Figtree, ui-sans-serif, system-ui, sans-serif";
  wrapText(ctx, payload.label, padX, y, w - padX * 2, 52);
  y += estimateWrappedHeight(ctx, payload.label, w - padX * 2, 52) + 56;

  ctx.fillStyle = accent;
  ctx.font = "600 120px Figtree, ui-sans-serif, system-ui, sans-serif";
  const value = payload.value || "—";
  const valueWidth = ctx.measureText(value).width;
  ctx.fillText(value, padX, y);

  if (payload.unit) {
    ctx.fillStyle = COLORS.muted;
    ctx.font = "500 36px Figtree, ui-sans-serif, system-ui, sans-serif";
    ctx.fillText(payload.unit, padX + valueWidth + 28, y - 12);
  }

  if (payload.secondary) {
    y += 64;
    ctx.fillStyle = COLORS.faint;
    ctx.font = "500 32px Figtree, ui-sans-serif, system-ui, sans-serif";
    wrapText(ctx, payload.secondary, padX, y, w - padX * 2, 44);
  }

  if (payload.note) {
    y += payload.secondary ? 100 : 80;
    ctx.fillStyle = COLORS.faint;
    ctx.font = "400 30px Figtree, ui-sans-serif, system-ui, sans-serif";
    wrapText(ctx, payload.note, padX, y, w - padX * 2, 42);
  }

  ctx.fillStyle = COLORS.goldSoft;
  ctx.font = "600 34px Figtree, ui-sans-serif, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(METRIC_SHARE_BRAND, w / 2, h - 96);
}

function fillSpacedText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  tracking: number,
): void {
  let cx = x;
  for (const ch of text) {
    ctx.fillText(ch, cx, y);
    cx += ctx.measureText(ch).width + tracking;
  }
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
): void {
  const words = text.split(/\s+/);
  let line = "";
  let cy = y;
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, cy);
      line = word;
      cy += lineHeight;
    } else {
      line = test;
    }
  }
  if (line) ctx.fillText(line, x, cy);
}

function estimateWrappedHeight(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  lineHeight: number,
): number {
  const words = text.split(/\s+/);
  let line = "";
  let lines = 1;
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      line = word;
      lines += 1;
    } else {
      line = test;
    }
  }
  return lines * lineHeight;
}

/** Render + trigger a PNG download in the browser. */
export async function downloadMetricShareCard(payload: MetricSharePayload): Promise<void> {
  if (typeof document === "undefined") return;
  const canvas = document.createElement("canvas");
  drawMetricShareCard(canvas, payload);
  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob((b) => resolve(b), "image/png"),
  );
  if (!blob) throw new Error("Could not encode share card");
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = metricShareFilename(payload.label);
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
