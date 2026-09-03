import { createServerFn } from "@tanstack/react-start";
import type { CbDesk, CbLiveCountry } from "@/lib/dashboard/central-banks";

type EntityRow = { id: string; name: string; stock_tonnes: number | null; stock_as_of: string | null };
type FlowRow = { entity_id: string; period: string; tonnes: number };
type HoldRow = { entity_id: string; period: string; tonnes: number };

function yearOf(period: string) {
  return Number(period.slice(0, 4));
}

export const getCbDesk = createServerFn({ method: "GET" }).handler(async (): Promise<CbDesk | null> => {
  const { gshq, gshqConfigured } = await import("@/lib/data/rest");
  if (!gshqConfigured()) return null;
  try {
    const [entities, deltas, world, holdings] = await Promise.all([
      gshq<EntityRow[]>("cb_entities?kind=eq.country&select=id,name,stock_tonnes,stock_as_of&limit=400"),
      gshq<FlowRow[]>(
        "cb_flows?metric=eq.reported_delta&freq=eq.year&scope=eq.period&select=entity_id,period,tonnes&limit=2000",
      ),
      gshq<FlowRow[]>(
        "cb_flows?entity_id=eq.world&metric=eq.wgc_net&freq=eq.year&scope=eq.period&select=entity_id,period,tonnes",
      ),
      gshq<HoldRow[]>("cb_holdings?freq=eq.year&select=entity_id,period,tonnes&limit=2000"),
    ]);

    const byYear = new Map<string, Partial<Record<number, number>>>();
    for (const row of deltas) {
      if (row.entity_id === "world") continue;
      const y = yearOf(row.period);
      const cur = byYear.get(row.entity_id) ?? {};
      cur[y] = Number(row.tonnes);
      byYear.set(row.entity_id, cur);
    }
    const holdYear = new Map<string, Partial<Record<number, number>>>();
    for (const row of holdings) {
      const y = yearOf(row.period);
      const cur = holdYear.get(row.entity_id) ?? {};
      cur[y] = Number(row.tonnes);
      holdYear.set(row.entity_id, cur);
    }

    const countries: CbLiveCountry[] = entities
      .filter((e) => byYear.has(e.id))
      .map((e) => ({
        id: e.id,
        name: e.name,
        stock: Number(e.stock_tonnes ?? 0),
        stockAsOf: e.stock_as_of ?? (byYear.get(e.id)?.[2026] != null ? "2026-06-30" : undefined),
        byYear: byYear.get(e.id) ?? {},
        holdYear: holdYear.get(e.id) ?? {},
      }));

    const worldWgc: Partial<Record<number, number>> = {};
    for (const row of world) worldWgc[yearOf(row.period)] = Number(row.tonnes);

    return { source: "gshq", worldWgc, countries };
  } catch {
    return null;
  }
});

export type OfficialBook = { tonnes: number; asOf: string };

export type OfficialGold = {
  world: OfficialBook;
  usa: OfficialBook | null;
  ecb: OfficialBook | null;
  chn: OfficialBook | null;
};

export const getOfficialGold = createServerFn({ method: "GET" }).handler(async (): Promise<OfficialGold | null> => {
  const { gshq, gshqConfigured } = await import("@/lib/data/rest");
  if (!gshqConfigured()) return null;
  try {
    const rows = await gshq<{ id: string; stock_tonnes: number | null; stock_as_of: string | null }[]>(
      "cb_entities?id=in.(world,usa,ecb,chn)&select=id,stock_tonnes,stock_as_of",
    );
    const byId = new Map(rows.map((r) => [r.id, r]));
    const book = (id: string): OfficialBook | null => {
      const r = byId.get(id);
      if (!r || r.stock_tonnes == null) return null;
      return { tonnes: Number(r.stock_tonnes), asOf: r.stock_as_of ?? "2025-12-31" };
    };
    const world = book("world");
    if (!world) return null;
    return { world, usa: book("usa"), ecb: book("ecb"), chn: book("chn") };
  } catch {
    return null;
  }
});
