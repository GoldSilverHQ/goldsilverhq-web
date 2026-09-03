import { Link } from "@tanstack/react-router";
import {
  Banknote,
  Building2,
  ChevronDown,
  Globe2,
  Landmark,
  Pickaxe,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Segmented } from "@/components/Segmented";
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
  SILVER_2024,
  USGS_MINE_2025,
  WGC_STOCK,
  cbTakeOfMine,
  coverPct,
  investmentGoldGramsPerPerson,
  investmentSilverOzPerPerson,
  lostVsStart,
  mineOutputRatio,
  silverIdentifiableMoz,
  silverOfficialT,
  silverSupplyGapT,
  silverVisibleMonths,
  wgcShare,
} from "@/lib/dashboard/stocks";

type Tone = "gold" | "silver" | "fg";
type Face = "both" | "gold" | "silver" | "fiat";
type Cadence = "live" | "daily" | "monthly" | "yearly" | "const";

type Spot = { gold: number; silver: number; ratio: number; asOf?: string };

function fmtMoney(n: number, d: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: d, minimumFractionDigits: d });
}

function fmtTonnes(n: number) {
  return Math.round(n).toLocaleString("en-US");
}

function Dash({ tone = "gold", unit }: { tone?: Tone; unit?: string }) {
  const color = tone === "gold" ? "text-gold" : tone === "silver" ? "text-silver" : "text-fg";
  return (
    <p className={`clock-value font-display tabular-nums tracking-tight ${color}`}>
      <span className="clock-dash">— — —</span>
      {unit ? (
        <span className="ml-2 align-middle font-sans text-xs tracking-widest text-muted">{unit}</span>
      ) : null}
    </p>
  );
}

function Live({
  children,
  tone = "gold",
  unit,
}: {
  children: ReactNode;
  tone?: Tone;
  unit?: string;
}) {
  const color = tone === "gold" ? "text-gold" : tone === "silver" ? "text-silver" : "text-fg";
  return (
    <p className={`clock-value font-display tabular-nums tracking-tight ${color}`}>
      {children}
      {unit ? (
        <span className="ml-2 align-middle font-sans text-xs tracking-widest text-muted">{unit}</span>
      ) : null}
    </p>
  );
}

function Tile({
  kicker,
  label,
  tone = "gold",
  unit,
  note,
  cadence,
  asOf,
  wide,
  live,
}: {
  kicker: string;
  label: string;
  tone?: Tone;
  unit?: string;
  note?: string;
  cadence: Cadence;
  asOf?: string;
  wide?: boolean;
  live?: ReactNode;
}) {
  return (
    <article className={`rounded-lg bg-surface p-4 shadow-[var(--shadow-border)] ${wide ? "sm:col-span-2" : ""}`}>
      <div className="flex items-baseline justify-between gap-2">
        <p className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">{kicker}</p>
        <p className="text-xs text-faint">{asOf ?? cadence}</p>
      </div>
      <h3 className="mt-1 text-sm text-muted">{label}</h3>
      <div className="mt-3">{live ? <Live tone={tone} unit={unit}>{live}</Live> : <Dash tone={tone} unit={unit} />}</div>
      {note ? <p className="mt-2 text-xs text-faint">{note}</p> : null}
    </article>
  );
}

function Board({
  icon: Icon,
  title,
  kicker,
  open,
  children,
}: {
  icon: LucideIcon;
  title: string;
  kicker?: string;
  open?: boolean;
  children: ReactNode;
}) {
  return (
    <details open={open} className="mt-6 rounded-lg bg-raised/40 p-1 shadow-[var(--shadow-border)]">
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-md px-3 py-2 [&::-webkit-details-marker]:hidden">
        <Icon className="size-4 shrink-0 text-gold" aria-hidden />
        <span className="font-display text-2xl">{title}</span>
        {kicker ? <span className="ml-auto text-xs text-faint">{kicker}</span> : <span className="ml-auto" />}
        <ChevronDown className="clock-chevron size-4 text-faint" aria-hidden />
      </summary>
      <div className="grid gap-3 p-3 pt-1 sm:grid-cols-2 lg:grid-cols-4">{children}</div>
    </details>
  );
}

export function MetalsClock() {
  const [face, setFace] = useState<Face>("both");
  const [spot, setSpot] = useState<Spot | null>(null);
  const [official, setOfficial] = useState<OfficialGold>(COMPILED_OFFICIAL);
  const [printers, setPrinters] = useState<Printers>(COMPILED_PRINTERS);

  useEffect(() => {
    let on = true;
    const load = () =>
      getSpotLite()
        .then((s) => {
          if (on) setSpot(s);
        })
        .catch(() => undefined);
    load();
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
    const id = setInterval(load, 15 * 60_000);
    return () => {
      on = false;
      clearInterval(id);
    };
  }, []);

  const goldOn = face === "both" || face === "gold";
  const silverOn = face === "both" || face === "silver";
  const fiatOn = face === "both" || face === "fiat";
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
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
      <p className="text-center text-xs font-semibold tracking-[0.14em] text-gold uppercase">
        Global precious metals clock
      </p>
      <h1 className="mt-2 text-center font-display text-4xl leading-tight sm:text-5xl">
        Gold is a stock. Silver is a flow.
      </h1>
      <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
        Six numbers on the face. Boards underneath. Spot ticks. The rest is a dated print, or a dash.
      </p>
      <div className="mt-5 flex justify-center">
        <Segmented
          label="Clock face"
          value={face}
          onChange={setFace}
          options={[
            { id: "both", label: "Both" },
            { id: "gold", label: "Gold" },
            { id: "silver", label: "Silver" },
            { id: "fiat", label: "Fiat" },
          ]}
        />
      </div>

      <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Tile
          kicker="Au"
          label="Gold spot"
          unit="USD / oz"
          cadence="live"
          asOf={spotAsOf}
          live={spot ? `$${fmtMoney(spot.gold, 0)}` : undefined}
          note="15-minute print. Weekends stay last close."
        />
        <Tile
          kicker="Ag"
          label="Silver spot"
          tone="silver"
          unit="USD / oz"
          cadence="live"
          asOf={spotAsOf}
          live={spot ? `$${fmtMoney(spot.silver, 2)}` : undefined}
          note="Same feed as gold. Not a tick-by-tick tape."
        />
        <Tile
          kicker="GSR"
          label="Gold–silver ratio"
          unit="oz Ag / oz Au"
          cadence="live"
          asOf={spotAsOf}
          live={spot ? spot.ratio.toFixed(1) : undefined}
          note="Live ratio. 15:1 is history, not a target."
        />
        <Tile
          kicker="Official"
          label="World official gold"
          unit="t"
          cadence="yearly"
          asOf={formatAsOf(official.world.asOf)}
          live={fmtTonnes(official.world.tonnes)}
          note="Countries + IMF + ECB, one year-end vintage. Not BIS. 2026 buying is not in this stock yet."
        />
        <Tile
          kicker="Cover"
          label="World gov debt / official gold"
          unit="%"
          cadence="yearly"
          asOf={IMF_GOV_DEBT.asOf}
          live={officialCover != null ? (officialCover * 100).toFixed(1) : undefined}
          note="IMF 2025 gross public debt vs our official book mark-to-market. Not all above-ground gold."
        />
        <Tile
          kicker="Silver"
          label="Visible silver / a year of industry"
          tone="silver"
          unit="months"
          cadence="yearly"
          asOf={SILVER_2024.asOf}
          live={silverVisibleMonths().toFixed(1)}
          note="Identifiable bullion (vaults) ÷ 2024 fabrication. Gold has no analogue."
        />
      </section>

      {goldOn || silverOn ? (
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
      ) : null}

      {goldOn ? (
        <Board icon={Globe2} title="Who holds the gold" kicker="WGC Q2 2026">
          <Tile
            kicker="Official"
            label="Central banks and IFIs"
            unit="%"
            cadence="yearly"
            asOf={formatAsOf(WGC_STOCK.asOf)}
            live={wgcShare(WGC_STOCK.officialT).toFixed(0)}
            note="WGC above-ground split. Wider than our official book."
          />
          <Tile
            kicker="Jewelry"
            label="Jewelry stock"
            unit="%"
            cadence="yearly"
            asOf={formatAsOf(WGC_STOCK.asOf)}
            live={wgcShare(WGC_STOCK.jewelryT).toFixed(0)}
            note="Mostly India and China. Not a vault float."
          />
          <Tile
            kicker="Investment"
            label="Bars, coins, ETFs"
            unit="%"
            cadence="yearly"
            asOf={formatAsOf(WGC_STOCK.asOf)}
            live={wgcShare(WGC_STOCK.barsCoinsT + WGC_STOCK.etfT).toFixed(0)}
          />
          <Tile
            kicker="Other"
            label="Industry, OTC, unaccounted"
            unit="%"
            cadence="yearly"
            asOf={formatAsOf(WGC_STOCK.asOf)}
            live={wgcShare(WGC_STOCK.otcT + WGC_STOCK.otherT).toFixed(0)}
          />
        </Board>
      ) : null}

      {goldOn || silverOn ? (
        <Board icon={Scale} title="Ratios" kicker="price vs geology">
          <Tile
            kicker="Live"
            label="Gold–silver ratio"
            unit="×"
            cadence="live"
            asOf={spotAsOf}
            live={spot ? spot.ratio.toFixed(1) : undefined}
          />
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
      ) : null}

      {goldOn ? (
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
      ) : null}

      {fiatOn ? (
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
      ) : null}

      {goldOn || silverOn ? (
        <Board icon={Pickaxe} title="Paper is three rows" kicker="not one multiple">
          {goldOn ? (
            <>
              <Tile
                kicker="COMEX Au"
                label="Open interest vs registered"
                unit="×"
                cadence="daily"
                note="No clean daily feed we trust. Futures claims vs registered metal — still a dash."
              />
              <Tile
                kicker="LBMA"
                label="Clearing vs vaulted gold"
                unit="×"
                cadence="monthly"
                note="Turnover, not the same as COMEX. Stays dashed until we store a dated print."
              />
              <Tile
                kicker="ETFs"
                label="Gold ETF tonnes"
                unit="t"
                cadence="yearly"
                asOf={formatAsOf(WGC_STOCK.asOf)}
                live={fmtTonnes(WGC_STOCK.etfT)}
                note="WGC above-ground split, Q2 2026. Not a daily holdings tape."
              />
            </>
          ) : null}
          {silverOn ? (
            <>
              <Tile
                kicker="COMEX Ag"
                label="Open interest vs registered"
                tone="silver"
                unit="×"
                cadence="daily"
                note="Same gap as gold: no daily COMEX registered series in this desk."
              />
              <Tile
                kicker="Vaults"
                label="Identifiable silver"
                tone="silver"
                unit="moz"
                cadence="yearly"
                asOf={SILVER_2024.asOf}
                live={silverIdentifiableMoz().toLocaleString("en-US", { maximumFractionDigits: 0 })}
                note="Silver Institute identifiable bullion, 2024. Not a London or COMEX daily vault print."
              />
              <Tile
                kicker="ETFs"
                label="Silver ETF tonnes"
                tone="silver"
                unit="t"
                cadence="daily"
                note="No clean daily ETF stock we store. Identifiable silver is the yearly proxy above."
              />
            </>
          ) : null}
        </Board>
      ) : null}

      {goldOn ? (
        <Board icon={Building2} title="Three official books" kicker="drill-in" open>
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
            note="Same figure as the face. Compiled seed if GSHQ is offline."
          />
        </Board>
      ) : null}

      <p className="mt-8 text-center text-sm text-muted">
        Dashes are missing prints, not broken widgets. COMEX open interest and LBMA clearing stay empty on purpose.{" "}
        <Link to="/desk" className="text-gold hover:text-gold-soft">
          Desk with the figures we already store →
        </Link>
      </p>
    </div>
  );
}
