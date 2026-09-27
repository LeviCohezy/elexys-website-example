import { readScraped } from "./scraped";

/** "[Market Update 03.09.2026\n\n03 sep 2026\n\nDownloaden](…pdf)" entries on elexys.be/market-updates. */
export function getMarketUpdates() {
  const { body } = readScraped("market-updates");
  const re = /\[(Market Updates? [^\n]+)\n+([^\n]+)\n+Downloaden\]\(([^)\s]+)\)/g;
  return [...body.matchAll(re)].map((m) => ({
    title: m[1].trim().replace(/^Market Updates/, "Market Update"),
    date: m[2].trim(),
    href: m[3],
  }));
}
