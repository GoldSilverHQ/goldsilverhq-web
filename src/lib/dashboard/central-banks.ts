/** Central-bank gold. Country bars use reported_delta (IMF net). World headline uses wgc_net. */

export const CB_YEARS = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] as const;
export type CbYear = (typeof CB_YEARS)[number];

export type CbTimeframe = "1Y" | "3Y" | "5Y" | "10Y";

export const CB_TIMEFRAMES: { id: CbTimeframe; label: string; years: CbYear[] }[] = [
  { id: "1Y", label: "2026", years: [2026] },
  { id: "3Y", label: "3 yr", years: [2024, 2025, 2026] },
  { id: "5Y", label: "5 yr", years: [2022, 2023, 2024, 2025, 2026] },
  { id: "10Y", label: "10 yr", years: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
];

export type CbLiveCountry = {
  id: string;
  name: string;
  stock: number;
  stockAsOf?: string;
  byYear: Partial<Record<number, number>>;
  holdYear: Partial<Record<number, number>>;
};

export type CbDesk = {
  source: "gshq" | "compiled";
  worldWgc: Partial<Record<number, number>>;
  countries: CbLiveCountry[];
};

export const CB_WORLD_TOTAL: Record<CbYear, number> = {
  2016: 394.9,
  2017: 378.6,
  2018: 656.2,
  2019: 605.4,
  2020: 254.9,
  2021: 450.1,
  2022: 1080,
  2023: 1050.8,
  2024: 1092.4,
  2025: 863.3,
  2026: 345.9,
};

const COMPILED: { name: string; id: string; stock: number; byYear: Partial<Record<number, number>> }[] = [
  { id: "pol", name: "Poland", stock: 550, byYear: { 2019: 100, 2022: 34, 2023: 130, 2024: 90, 2025: 102, 2026: 82 } },
  { id: "chn", name: "China", stock: 2366, byYear: { 2019: 96, 2022: 62, 2023: 225, 2024: 44, 2025: 27, 2026: 60 } },
  { id: "tur", name: "Türkiye", stock: 623, byYear: { 2017: 86, 2018: 52, 2020: 34, 2022: 148, 2023: 84, 2024: 75, 2025: 27 } },
  { id: "ind", name: "India", stock: 876, byYear: { 2018: 42, 2019: 38, 2022: 33, 2023: 16, 2024: 73, 2025: 18 } },
  { id: "kaz", name: "Kazakhstan", stock: 307, byYear: { 2023: 15, 2024: 20, 2025: 57 } },
  { id: "cze", name: "Czechia", stock: 71, byYear: { 2023: 19, 2024: 20, 2025: 20 } },
  { id: "sgp", name: "Singapore", stock: 204, byYear: { 2024: 76, 2025: -15 } },
  { id: "bra", name: "Brazil", stock: 173, byYear: { 2025: 43 } },
  { id: "aze", name: "Azerbaijan", stock: 172, byYear: { 2025: 38 } },
  { id: "hun", name: "Hungary", stock: 94, byYear: { 2018: 28, 2021: 63 } },
  { id: "qat", name: "Qatar", stock: 110, byYear: { 2022: 35 } },
  { id: "uzb", name: "Uzbekistan", stock: 378, byYear: { 2022: 27, 2024: 12, 2025: 33 } },
  { id: "rus", name: "Russia", stock: 2333, byYear: { 2016: 201, 2017: 224, 2018: 274, 2019: 159, 2020: 26 } },
];

export const COMPILED_DESK: CbDesk = {
  source: "compiled",
  worldWgc: { ...CB_WORLD_TOTAL },
  countries: COMPILED.map((c) => ({ ...c, holdYear: {} })),
};

export function cbWindow(id: CbTimeframe) {
  return CB_TIMEFRAMES.find((t) => t.id === id)!;
}

export function sumYears(byYear: Partial<Record<number, number>>, years: number[]) {
  return years.reduce((acc, y) => acc + (byYear[y] ?? 0), 0);
}

export type CbGrowth = {
  id: string;
  name: string;
  tonnes: number;
  start: number;
  stock: number;
  growth: number;
  asOf: string | undefined;
};

/** Reported net tonnes vs stock at the start of the window (holdings year-end prior year). */
export function cbGrowth(id: CbTimeframe, desk: CbDesk = COMPILED_DESK): CbGrowth[] {
  const years = cbWindow(id).years;
  const startYear = years[0] - 1;
  const rows: CbGrowth[] = [];
  for (const c of desk.countries) {
    const tonnes = sumYears(c.byYear, years);
    const start = c.holdYear[startYear] ?? (c.stock > 0 ? c.stock - tonnes : 0);
    if (!(start > 0 && tonnes > 0)) continue;
    rows.push({
      id: c.id,
      name: c.name,
      tonnes,
      start: Math.round(start),
      stock: c.stock,
      growth: tonnes / start,
      asOf: years.includes(2026) ? formatAsOf(c.stockAsOf) : undefined,
    });
  }
  return rows.sort((a, b) => b.growth - a.growth).slice(0, 15);
}

export function cbWorld(id: CbTimeframe, desk: CbDesk = COMPILED_DESK) {
  return cbWindow(id).years.reduce((acc, y) => acc + (desk.worldWgc[y] ?? 0), 0);
}

const ISO3_TO_2: Record<string, string> = {
  afg: "AF", alb: "AL", dza: "DZ", ago: "AO", arg: "AR", arm: "AM", abw: "AW", aus: "AU", aut: "AT", aze: "AZ",
  bhr: "BH", bgd: "BD", blr: "BY", bel: "BE", bol: "BO", bih: "BA", bra: "BR", brn: "BN", bgr: "BG", khm: "KH",
  can: "CA", chl: "CL", chn: "CN", col: "CO", hrv: "HR", cub: "CU", cyp: "CY", cze: "CZ", dnk: "DK", ecu: "EC",
  egy: "EG", slv: "SV", est: "EE", eth: "ET", fin: "FI", fra: "FR", geo: "GE", deu: "DE", gha: "GH", grc: "GR",
  gtm: "GT", hun: "HU", ind: "IN", idn: "ID", irn: "IR", irq: "IQ", irl: "IE", isr: "IL", ita: "IT", jam: "JM",
  jpn: "JP", jor: "JO", kaz: "KZ", ken: "KE", kor: "KR", kwt: "KW", kgz: "KG", lao: "LA", lva: "LV", lbn: "LB",
  lby: "LY", ltu: "LT", lux: "LU", mys: "MY", mex: "MX", mda: "MD", mng: "MN", mar: "MA", moz: "MZ", mmr: "MM",
  npl: "NP", nld: "NL", nzl: "NZ", nga: "NG", mkd: "MK", nor: "NO", omn: "OM", pak: "PK", per: "PE", phl: "PH",
  pol: "PL", prt: "PT", qat: "QA", rou: "RO", rus: "RU", sau: "SA", srb: "RS", sgp: "SG", svk: "SK", svn: "SI",
  zaf: "ZA", esp: "ES", lka: "LK", swe: "SE", che: "CH", tjk: "TJ", tha: "TH", tun: "TN", tur: "TR", uga: "UG",
  ukr: "UA", are: "AE", gbr: "GB", usa: "US", ury: "UY", uzb: "UZ", ven: "VE", vnm: "VN", zwe: "ZW",
};

export function flagEmoji(iso3: string) {
  const iso2 = ISO3_TO_2[iso3.toLowerCase()];
  if (!iso2) return "";
  return String.fromCodePoint(...[...iso2].map((c) => 0x1f1e6 - 65 + c.charCodeAt(0)));
}

export function formatAsOf(iso?: string) {
  if (!iso) return "Jun 2026";
  const [y, m] = iso.slice(0, 7).split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const mi = Number(m) - 1;
  if (!y || mi < 0 || mi > 11) return iso.slice(0, 7);
  return `${months[mi]} ${y}`;
}
