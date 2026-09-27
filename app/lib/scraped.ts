import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

/**
 * Build-time access to the Markdown scraped from www.elexys.be
 * (content/scraped/*.md, written by scripts/scrape_elexys.py).
 */

const DIR = path.join(process.cwd(), "content", "scraped");
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export type ScrapedPage = {
  slug: string;
  url: string;
  title: string;
  description: string;
  h1: string;
  body: string;
};

export function readScraped(slug: string): ScrapedPage {
  const raw = fs.readFileSync(path.join(DIR, `${slug}.md`), "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`No front matter in ${slug}.md`);
  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    const key = line.slice(0, i).trim();
    const value = line.slice(i + 1).trim();
    meta[key] = value.startsWith('"') ? JSON.parse(value) : value;
  }
  return {
    slug,
    url: meta.url,
    title: meta.title.replace(/\s*\|\s*Elexys$/, ""),
    description: meta.description,
    h1: meta.h1,
    body: match[2].replace(/<!-- Source: .* -->\n/, ""),
  };
}

export function listScraped(prefix: string) {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.startsWith(prefix) && f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

/** Old elexys.be paths that exist as routes on this site. */
function internalPath(pathname: string) {
  const p = pathname.replace(/\/$/, "") || "/";
  if (p === "/") return "/";
  const slug = p.slice(1).replace(/\//g, "__");
  if (fs.existsSync(path.join(DIR, `${slug}.md`))) return `${p}/`;
  return null;
}

/** Point elexys.be links at our own routes where we have them. */
export function rewriteHref(href: string) {
  try {
    const u = new URL(href, "https://www.elexys.be");
    if (!/(^|\.)elexys\.be$/.test(u.hostname) || u.hostname.startsWith("portal"))
      return href;
    const internal = internalPath(u.pathname);
    return internal ? `${BASE_PATH}${internal}${u.hash}` : u.toString();
  } catch {
    return href;
  }
}

/** Remove Drupal chrome (menus, honeypots, back links) from a page body. */
export function stripChrome(body: string) {
  return body
    .replace(/^Open submenu\n+### Insights menu\n+(?:[ \t]*- .*\n)+/m, "")
    .replace(/^\[Terug naar overzicht\]\(.*\)\n/m, "")
    .replace(/^Laat dit veld leeg\n?/gm, "")
    .replace(/!\[Brand element[^\]]*\]\([^)]*\)/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function markdownToHtml(md: string) {
  const html = marked.parse(md, { async: false, gfm: true });
  return html
    .replace(/href="([^"]+)"/g, (_, href) => `href="${rewriteHref(href)}"`)
    .replace(/<a href="(https?:[^"]+)"/g, '<a target="_blank" rel="noopener" href="$1"')
    .replace(/<img /g, '<img loading="lazy" ');
}

/** Parse GitHub-flavoured Markdown tables out of a page body. */
export type Table = { head: string[]; rows: string[][] };

export function extractTables(md: string): Table[] {
  const tables: Table[] = [];
  const lines = md.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (!lines[i].startsWith("|") || !/^\|\s*-/.test(lines[i + 1] ?? "")) continue;
    const cells = (l: string) =>
      l.slice(1, -1).split("|").map((c) => c.replace(/\*\*/g, "").trim());
    const head = cells(lines[i]);
    const rows: string[][] = [];
    for (i += 2; i < lines.length && lines[i].startsWith("|"); i++) rows.push(cells(lines[i]));
    tables.push({ head, rows });
  }
  return tables;
}

/** "€ 1.234,56" / "10.48" / "-2,95%" → number */
export function parseNumber(cell: string) {
  const s = cell.replace(/[€%\s]/g, "");
  if (!s || s === "-") return null;
  const normalised = s.includes(",") ? s.replace(/\./g, "").replace(",", ".") : s;
  const n = Number(normalised);
  return Number.isFinite(n) ? n : null;
}
