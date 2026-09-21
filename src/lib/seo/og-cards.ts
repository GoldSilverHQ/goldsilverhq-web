import { getHistoryPerson, HISTORY_VIP_DESCRIPTION } from "../content/history-people.ts";
import { getHistoryYear } from "../content/history-years.ts";
import {
  getCluster,
  getEpisode,
  getIdea,
  getMarket,
  getPractice,
  historyHub,
  marketsHub,
  pillars,
  practiceHub,
  seoTitle,
  soundMoneyHub,
} from "../content/map.ts";
import {
  CANONICAL_ORIGIN,
  DEFAULT_OG_IMAGE_PATH,
  PHASE1_SITEMAP_PATHS,
  ogCardKey,
  ogImagePathForRoute,
  ogImagePathForRouteOrDefault,
} from "./phase1-sitemap-paths.mjs";

export {
  CANONICAL_ORIGIN,
  DEFAULT_OG_IMAGE_PATH,
  ogCardKey,
  ogImagePathForRoute,
  ogImagePathForRouteOrDefault,
};

export type SharePage = {
  path: string;
  /** Short title drawn on the card (no site suffix). */
  cardTitle: string;
  /** Full document / og:title. */
  title: string;
  description: string;
  /** Section label on the card (History · Ancient, Markets, …). */
  kicker: string;
};

export function absoluteOgImageUrl(pathname: string, origin = CANONICAL_ORIGIN): string {
  return `${origin}${ogImagePathForRouteOrDefault(pathname)}`;
}

function pillarKicker(id: "sound-money" | "history" | "gold-silver" | "markets"): string {
  const pillar = pillars.find((p) => p.id === id);
  return pillar?.kicker ?? "GoldSilverHQ";
}

/** Resolve title/description/kicker for a Phase-1 sitemap path (and home). */
export function sharePageForPath(pathname: string): SharePage | null {
  const path = pathname.replace(/\/+$/, "") || "/";

  if (path === "/") {
    return {
      path,
      cardTitle: "Gold, silver, and sound money",
      title: "Gold, silver, and sound money — GoldSilverHQ",
      description:
        "A short gold and silver dashboard: live prices, estimated ounces mined this year, and the map of sound money and history. Media only.",
      kicker: "Desk · Media",
    };
  }

  if (path === "/history") {
    return {
      path,
      cardTitle: historyHub.titleTag,
      title: seoTitle(historyHub.titleTag),
      description:
        "What happened when money was metal, paper, or both. A documentary path through coinage, banks, crises, and statute—from ancient coinage to the 1971 gold-window close.",
      kicker: pillarKicker("history"),
    };
  }

  if (path === "/history/year") {
    return {
      path,
      cardTitle: "Sound money by year",
      title: seoTitle("Sound money by year"),
      description:
        "Sound-money years, one page each: a short note and one picture. 1776, 1792, 1914, 1971, and the other dated breaks already on this site.",
      kicker: pillarKicker("history"),
    };
  }

  const yearMatch = path.match(/^\/history\/(\d{3,4})$/);
  if (yearMatch) {
    const year = getHistoryYear(yearMatch[1]);
    if (!year) return null;
    return {
      path,
      cardTitle: `${year.year}: ${year.title}`,
      title: seoTitle(`${year.year}: ${year.title}`),
      description: year.summary,
      kicker: "History · Year",
    };
  }

  if (path === "/history/vip") {
    return {
      path,
      cardTitle: "Notable people",
      title: seoTitle("Notable people"),
      description: HISTORY_VIP_DESCRIPTION,
      kicker: pillarKicker("history"),
    };
  }

  const personMatch = path.match(/^\/history\/vip\/([^/]+)$/);
  if (personMatch) {
    const person = getHistoryPerson(personMatch[1]);
    if (!person) return null;
    return {
      path,
      cardTitle: person.name,
      title: seoTitle(person.name),
      description: person.summary,
      kicker: "History · People",
    };
  }

  if (path === "/sound-money") {
    return {
      path,
      cardTitle: soundMoneyHub.titleTag,
      title: seoTitle(soundMoneyHub.titleTag),
      description: pillars.find((p) => p.id === "sound-money")?.summary ?? "",
      kicker: pillarKicker("sound-money"),
    };
  }

  if (path === "/gold-silver") {
    return {
      path,
      cardTitle: "Gold & Silver in Practice",
      title: seoTitle(practiceHub.titleTag),
      description: pillars.find((p) => p.id === "gold-silver")?.summary ?? "",
      kicker: pillarKicker("gold-silver"),
    };
  }

  const practiceMatch = path.match(/^\/gold-silver\/([^/]+)$/);
  if (practiceMatch) {
    const page = getPractice(practiceMatch[1]);
    if (!page) return null;
    const tag = page.seo?.titleTag ?? page.title;
    return {
      path,
      cardTitle: tag,
      title: seoTitle(tag),
      description: page.summary,
      kicker: pillarKicker("gold-silver"),
    };
  }

  if (path === "/markets") {
    return {
      path,
      cardTitle: marketsHub.titleTag,
      title: seoTitle(marketsHub.titleTag),
      description: pillars.find((p) => p.id === "markets")?.summary ?? "",
      kicker: pillarKicker("markets"),
    };
  }

  const historyMatch = path.match(/^\/history\/([^/]+)(?:\/([^/]+))?$/);
  if (historyMatch) {
    const [, clusterSlug, episodeSlug] = historyMatch;
    const cluster = getCluster(clusterSlug);
    if (!cluster) return null;
    if (!episodeSlug) {
      const tag = cluster.seo?.titleTag ?? cluster.title;
      return {
        path,
        cardTitle: tag,
        title: seoTitle(tag),
        description: cluster.summary,
        kicker: `History · ${cluster.title}`,
      };
    }
    const episode = getEpisode(clusterSlug, episodeSlug);
    if (!episode) return null;
    const tag = episode.seo?.titleTag ?? episode.title;
    return {
      path,
      cardTitle: tag,
      title: seoTitle(tag),
      description: episode.summary,
      kicker: `History · ${cluster.title}`,
    };
  }

  const ideaMatch = path.match(/^\/sound-money\/([^/]+)$/);
  if (ideaMatch) {
    const page = getIdea(ideaMatch[1]);
    if (!page) return null;
    const tag = page.seo?.titleTag ?? page.title;
    return {
      path,
      cardTitle: tag,
      title: seoTitle(tag),
      description: page.summary,
      kicker: pillarKicker("sound-money"),
    };
  }

  const marketMatch = path.match(/^\/markets\/([^/]+)$/);
  if (marketMatch) {
    const page = getMarket(marketMatch[1]);
    if (!page) return null;
    const tag = page.seo?.titleTag ?? page.title;
    return {
      path,
      cardTitle: tag,
      title: seoTitle(tag),
      description: page.summary,
      kicker: pillarKicker("markets"),
    };
  }

  return null;
}

/** All Phase-1 sitemap pages with share metadata (for card generation + tests). */
export function phase1SharePages(): SharePage[] {
  return PHASE1_SITEMAP_PATHS.map((path) => {
    const page = sharePageForPath(path);
    if (!page) {
      throw new Error(`Missing share metadata for sitemap path: ${path}`);
    }
    return page;
  });
}
