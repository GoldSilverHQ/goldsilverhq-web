import { Download } from "lucide-react";
import { useState } from "react";
import {
  downloadMetricShareCard,
  type MetricSharePayload,
} from "@/lib/dashboard/metric-share-card";

/** Compact download control for a desk metric → 4:5 GoldSilverHQ.com PNG. */
export function MetricDownloadButton({
  payload,
  className = "",
}: {
  payload: MetricSharePayload | null;
  className?: string;
}) {
  const [busy, setBusy] = useState(false);

  async function onDownload() {
    if (!payload?.value || busy) return;
    setBusy(true);
    try {
      await downloadMetricShareCard(payload);
    } catch {
      // Browser may block the blob download — leave the live tile as-is.
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onDownload}
      disabled={!payload?.value || busy}
      className={`grid size-9 place-items-center rounded-full text-muted transition-colors hover:text-gold-soft focus-visible:text-gold-soft focus-visible:outline-none disabled:opacity-40 ${className}`}
      aria-label={`Download ${payload?.label ?? "metric"} as image`}
      title="Download 4:5 share card"
    >
      <Download className="size-3.5" strokeWidth={2} />
    </button>
  );
}
