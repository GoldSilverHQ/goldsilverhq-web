import { Banknote, Building2, Globe2, Landmark, Scale } from "lucide-react";
import { useEffect, useState } from "react";
import { Board, Live, Tile, fmtTonnes } from "@/components/clock-ui";
import { getOfficialGold, type OfficialGold } from "@/lib/dashboard/cb-desk";
import { formatAsOf } from "@/lib/dashboard/central-banks";
import {
  COMPILED_OFFICIAL,
  dollarLostVsGold,
  fmtCompact,
  fmtUsdCompact,
  latestUsM2,
  officialMtmUsd,
  pctLostDisplay,
} from "@/lib/dashboard/clock-prints";
import { COMPILED_PRINTERS, getPrinters, type Printers } from "@/lib/dashboard/printers";
import { getSpotLite } from "@/lib/dashboard/spot";
import {
  CB_YTD_2026,
  FX_START,
  IMF_GOV_DEBT,
  USGS_MINE_2025,
  WGC_STOCK,
  cbTakeOfMine,
  coverPct,
  investmentGoldGramsPerPerson,
  investmentSilverOzPerPerson,
  lostVsStart,
  mineOutputRatio,
  silverOfficialT,
  silverSupplyGapT,
  silverVisibleMonths,
  wgcShare,
} from "@/lib/dashboard/stocks";

type Spot = { gold: number; silver: number; ratio: number; asOf?: string };

export function ClockBoards() {
  const [spot, setSpot] = useState<Spot | null>(null);
  const [official, setOfficial] = useState<OfficialGold>(COMPILED_OFFICIAL);
  const [printers, setPrinters] = useState<Printers>(COMPILED_PRINTERS);

  useEffect(() => {
    let on = true;
    getSpotLite()
      .then((s) => {
        if (on) setSpot(s);
      })
      .catch(() => undefined);
    getOfficialGold()
      .then((d) => {
        if (on && d) setOfficial(d);
      })
      .catch(() => undefined);
    getPrinters()
      .then((d) => {
        if (on) setPrinters(d);
      })
      .catch(() => undefined);
    return () => {
      on = false;
    };
  }, []);

  const spotAsOf = spot?.asOf
    ? new Date(`${spot.asOf}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "short" })
    : "live";
  const spread = spot && spot.ratio > 0 ? spot.ratio / 15 : null;
  const goldLoss = spot ? dollarLostVsGold(spot.gold) : null;
  const m2 = latestUsM2();
  const officialMtm = spot ? officialMtmUsd(official.world.tonnes, spot.gold) : null;
  const allGoldMtm = spot ? officialMtmUsd(WGC_STOCK.aboveGroundT, spot.gold) : null;
  const officialCover = spot ? coverPct(official.world.tonnes, spot.gold) : null;
  const allCover = spot ? coverPct(WGC_STOCK.aboveGroundT, spot.gold) : null;
  const goldEur = spot ? spot.gold / printers.fx.eurUsd : null;
  const goldCny = spot ? spot.gold * printers.fx.cnyUsd : null;
  const goldJpy = spot ? spot.gold * printers.fx.jpyUsd : null;
  const eurLoss = goldEur != null ? lostVsStart(goldEur, FX_START.eur.localGold) : null;
  const cnyLoss = goldCny != null ? lostVsStart(goldCny, FX_START.cny.localGold) : null;
  const jpyLoss = goldJpy != null ? lostVsStart(goldJpy, FX_START.jpy.localGold) : null;
  const silverGap = silverSupplyGapT();

  return (
    <section className="mt-10">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Stocks, printers, books</p>
      <h2 className="mt-2 font-display text-3xl">Behind the six numbers</h2>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Dated prints. Two official gold books on purpose: our country sum is not the WGC above-ground split.
      </p>

      <Board icon={Landmark} title="Stock versus flow" kicker="the spine" open>
        <article className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)] sm:col-span-2">
          <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">Gold — a stock</p>
          <h3 className="mt-1 text-sm text-muted">Almost all ever mined still exists</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div>
              <p className="text-xs text-faint">Official reserves</p>
              <Live tone="gold" unit="t">
                {fmtTonnes(official.world.tonnes)}
              </Live>
            </div>
            <div>
              <p className="text-xs text-faint">Net official buying, YTD</p>
              <Live tone="gold" unit="t">
                {fmtTonnes(CB_YTD_2026.tonnes)}
              </Live>
            </div>
            <div>
              <p className="text-xs text-faint">CB take of mine supply</p>
              <Live tone="gold" unit="%">
                {(cbTakeOfMine() * 100).toFixed(0)}
              </Live>
            </div>
            <div>
              <p className="text-xs text-faint">Investment gold per person</p>
              <Live tone="gold" unit="g">
                {investmentGoldGramsPerPerson().toFixed(1)}
              </Live>
            </div>
          </div>
          <p className="mt-3 text-xs text-faint">
            Buying is WGC GDT H1 2026. Take is 2025 official / WGC mine. Grams: bars, coins, ETFs over 8.2bn people.
          </p>
        </article>
        <article className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)] sm:col-span-2">
          <p className="text-xs font-semibold tracking-[0.16em] text-silver uppercase">Silver — a flow</p>
          <h3 className="mt-1 text-sm text-muted">A large share is used up, not stored</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div>
              <p className="text-xs text-faint">Official silver</p>
              <Live tone="silver" unit="t">
                {Math.round(silverOfficialT())}
              </Live>
            </div>
            <div>
              <p className="text-xs text-faint">Mine + recycle vs demand</p>
              <Live tone="silver" unit="t">
                {`${silverGap > 0 ? "+" : ""}${Math.round(silverGap).toLocaleString("en-US")}`}
              </Live>
            </div>
            <div>
              <p className="text-xs text-faint">Months of visible cover</p>
              <Live tone="silver" unit="mo">
                {silverVisibleMonths().toFixed(1)}
              </Live>
            </div>
            <div>
              <p className="text-xs text-faint">Investment silver per person</p>
              <Live tone="silver" unit="oz">
                {investmentSilverOzPerPerson().toFixed(2)}
              </Live>
            </div>
          </div>
          <p className="mt-3 text-xs text-faint">
            2024 Silver Institute. Official sector is a rounding error. Visible ounces are vaulted bullion, not jewelry.
          </p>
        </article>
      </Board>

      <Board icon={Globe2} title="Who holds the gold" kicker={`WGC Q2 2026 · ${fmtTonnes(WGC_STOCK.aboveGroundT)} t`}>
        <Tile
          kicker="Official"
          label="Central banks and IFIs"
          unit="%"
          cadence="yearly"
          asOf={formatAsOf(WGC_STOCK.asOf)}
          live={wgcShare(WGC_STOCK.officialT).toFixed(0)}
          aside={`${fmtTonnes(WGC_STOCK.officialT)} t`}
          note="WGC above-ground split. Wider than our official book."
        />
        <Tile
          kicker="Jewelry"
          label="Jewelry stock"
          unit="%"
          cadence="yearly"
          asOf={formatAsOf(WGC_STOCK.asOf)}
          live={wgcShare(WGC_STOCK.jewelryT).toFixed(0)}
          aside={`${fmtTonnes(WGC_STOCK.jewelryT)} t`}
          note="Mostly India and China. Not a vault float."
        />
        <Tile
          kicker="Investment"
          label="Bars, coins, ETFs"
          unit="%"
          cadence="yearly"
          asOf={formatAsOf(WGC_STOCK.asOf)}
          live={wgcShare(WGC_STOCK.barsCoinsT + WGC_STOCK.etfT).toFixed(0)}
          aside={`${fmtTonnes(WGC_STOCK.barsCoinsT + WGC_STOCK.etfT)} t`}
        />
        <Tile
          kicker="Other"
          label="Industry, OTC, unaccounted"
          unit="%"
          cadence="yearly"
          asOf={formatAsOf(WGC_STOCK.asOf)}
          live={wgcShare(WGC_STOCK.otcT + WGC_STOCK.otherT).toFixed(0)}
          aside={`${fmtTonnes(WGC_STOCK.otcT + WGC_STOCK.otherT)} t`}
        />
      </Board>

      <Board icon={Scale} title="Ratios" kicker="price vs geology">
        <Tile
          kicker="History"
          label="Bimetallic mint ratio"
          unit="Ag : Au"
          cadence="const"
          asOf="const"
          live="15 : 1"
          note="Rome / 19th-c. US coinage. Not a forecast."
        />
        <Tile
          kicker="Spread"
          label="Today vs 15 : 1"
          unit="×"
          cadence="live"
          asOf={spotAsOf}
          live={spread ? spread.toFixed(1) : undefined}
          note="How many times the old mint ratio the market is paying."
        />
        <Tile
          kicker="Geology"
          label="Mine output ratio"
          tone="silver"
          unit="Ag : Au"
          cadence="yearly"
          asOf={USGS_MINE_2025.asOf}
          live={`${mineOutputRatio().toFixed(1)} : 1`}
          note={`USGS 2025e: ${USGS_MINE_2025.silverT.toLocaleString("en-US")} t silver / ${USGS_MINE_2025.goldT.toLocaleString("en-US")} t gold. A byproduct fact, not fair value.`}
        />
      </Board>

      <Board icon={Globe2} title="Sovereign debt vs gold" kicker="two different stocks">
        <Tile
          kicker="World"
          label="Global sovereign debt"
          unit="USD"
          cadence="yearly"
          asOf={IMF_GOV_DEBT.asOf}
          wide
          live={fmtUsdCompact(IMF_GOV_DEBT.usd)}
          note="IMF WEO gross public debt, 2025. Not IIF’s larger ‘all debt’ stock."
        />
        <Tile
          kicker="All gold"
          label="Above-ground gold, mark-to-market"
          unit="USD"
          cadence="live"
          asOf={spotAsOf}
          live={allGoldMtm != null ? fmtUsdCompact(allGoldMtm) : undefined}
          note={`WGC ${formatAsOf(WGC_STOCK.asOf)} stock × spot. Jewelry plus vaults. Not all of it can be sold at the posted price.`}
        />
        <Tile
          kicker="Official"
          label="Official gold, mark-to-market"
          unit="USD"
          cadence="live"
          asOf={spotAsOf}
          live={officialMtm != null ? fmtUsdCompact(officialMtm) : undefined}
          note="World official tonnes × spot. A mark, not a bid for the whole stack."
        />
        <Tile
          kicker="Cover"
          label="All gold vs world gov debt"
          unit="%"
          cadence="live"
          asOf={spotAsOf}
          live={allCover != null ? (allCover * 100).toFixed(0) : undefined}
        />
        <Tile
          kicker="Cover"
          label="Official gold vs world gov debt"
          unit="%"
          cadence="live"
          asOf={spotAsOf}
          live={officialCover != null ? (officialCover * 100).toFixed(1) : undefined}
        />
      </Board>

      <Board
        icon={Banknote}
        title="Four printers"
        kicker={printers.source === "live" ? "ECB live · Asia compiled" : "compiled prints"}
      >
        <Tile
          kicker="USD"
          label="US M2"
          unit="USD"
          cadence="yearly"
          asOf={String(m2.year)}
          live={fmtUsdCompact(m2.bn * 1e9)}
          note="FRED M2SL, compiled year. Not per-second. 2026 is latest, not a completed year."
        />
        <Tile
          kicker="EUR"
          label="Euro-area M3"
          unit="EUR"
          cadence="monthly"
          asOf={formatAsOf(printers.eurM3.asOf)}
          live={fmtCompact(printers.eurM3.value, "€")}
          note={
            printers.source === "live"
              ? "ECB BSI M3, latest month. China and Japan M2 stay compiled — FRED dropped those series."
              : "Compiled ECB print (Jul 2026). Live feed missed; this is the seed, not a gag."
          }
        />
        <Tile
          kicker="CNY"
          label="China M2"
          unit="CNY"
          cadence="monthly"
          asOf={formatAsOf(printers.cnyM2.asOf)}
          live={fmtCompact(printers.cnyM2.value, "CN¥")}
          note="PBOC Jul 2026. Dwarfs the others. Do not hide it in a world sum."
        />
        <Tile
          kicker="JPY"
          label="Japan M2"
          unit="JPY"
          cadence="monthly"
          asOf={formatAsOf(printers.jpyM2.asOf)}
          live={fmtCompact(printers.jpyM2.value, "¥")}
          note="BOJ Jul 2026. FRED’s Japan M2 series stopped years ago."
        />
        <Tile
          kicker="USD"
          label="Dollar vs gold since 1971"
          unit="% lost"
          cadence="live"
          asOf={spotAsOf}
          live={goldLoss != null ? pctLostDisplay(goldLoss) : undefined}
          note="Share of the 1971 gold ounce a dollar no longer buys. Bretton Woods closed 15 Aug 1971."
        />
        <Tile
          kicker="EUR"
          label="Euro vs gold since 1999"
          unit="% lost"
          cadence="live"
          asOf={spotAsOf}
          live={eurLoss != null ? pctLostDisplay(eurLoss) : undefined}
          note="First euro session, 4 Jan 1999 (~€244/oz). Gold in euros = USD gold ÷ EURUSD."
        />
        <Tile
          kicker="CNY"
          label="Yuan vs gold since 1971"
          unit="% lost"
          cadence="live"
          asOf={spotAsOf}
          live={cnyLoss != null ? pctLostDisplay(cnyLoss) : undefined}
          note="Official 1971 rate, not a market yuan. Same gold-window dollar as the USD tile."
        />
        <Tile
          kicker="JPY"
          label="Yen vs gold since 1971"
          unit="% lost"
          cadence="live"
          asOf={spotAsOf}
          live={jpyLoss != null ? pctLostDisplay(jpyLoss) : undefined}
          note="¥360 × $40.62 at the gold window. Bretton Woods closed 15 Aug 1971."
        />
      </Board>

      <Board icon={Building2} title="Three official books" kicker="drill-in">
        <Tile
          kicker="Fed"
          label="United States official gold"
          unit="t"
          cadence="yearly"
          asOf={official.usa ? formatAsOf(official.usa.asOf) : "yearly"}
          live={official.usa ? fmtTonnes(official.usa.tonnes) : undefined}
        />
        <Tile
          kicker="ECB"
          label="ECB gold (institution)"
          unit="t"
          cadence="yearly"
          asOf={official.ecb ? formatAsOf(official.ecb.asOf) : "yearly"}
          live={official.ecb ? fmtTonnes(official.ecb.tonnes) : undefined}
          note="The ECB’s own book. Eurosystem (national banks + ECB) is a larger sum, not this tile."
        />
        <Tile
          kicker="PBoC"
          label="China reported official gold"
          unit="t"
          cadence="monthly"
          asOf={official.chn ? formatAsOf(official.chn.asOf) : "monthly"}
          live={official.chn ? fmtTonnes(official.chn.tonnes) : undefined}
          note="Latest PBoC/SAFE print. Newer than the world year-end stock."
        />
        <Tile
          kicker="World"
          label="All official gold"
          unit="t"
          cadence="yearly"
          asOf={formatAsOf(official.world.asOf)}
          live={fmtTonnes(official.world.tonnes)}
          note="Same world official figure as the homepage. Compiled seed if GSHQ is offline."
        />
      </Board>
    </section>
  );
}
