/** Signed percent with a true minus sign, so direction never relies on colour alone. */
export function fmtSignedPct(n: number, digits = 2) {
  const r = roundTo(n, digits);
  const s = Math.abs(r).toFixed(digits);
  return r > 0 ? `+${s}%` : r < 0 ? `\u2212${s}%` : `${s}%`;
}

/** Tailwind colour class for the same rounded value `fmtSignedPct` shows. */
export function pctToneClass(n: number, digits = 2) {
  const r = roundTo(n, digits);
  return r > 0 ? "text-up" : r < 0 ? "text-down" : "text-muted";
}

function roundTo(n: number, digits: number) {
  const f = 10 ** digits;
  return Math.round(n * f) / f;
}
