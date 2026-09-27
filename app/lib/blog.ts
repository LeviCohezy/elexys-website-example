import { listScraped, readScraped, stripChrome } from "./scraped";

const MONTHS: Record<string, number> = {
  januari: 1, februari: 2, maart: 3, april: 4, mei: 5, juni: 6,
  juli: 7, augustus: 8, september: 9, oktober: 10, november: 11, december: 12,
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string | null;
  sortKey: number;
  image: string | null;
  imageAlt: string;
  body: string;
};

/** Teaser image + alt per post, from the blog overview page. */
function teasers() {
  const { body } = readScraped("blog");
  const map = new Map<string, { src: string; alt: string }>();
  const re = /\[!\[([^\]]*?)\]\((https:\/\/www\.elexys\.be\/sites\/[^)\s]+)[^)]*\)\]\(https:\/\/www\.elexys\.be\/blog\/([^)]+)\)/g;
  for (const m of body.matchAll(re)) {
    const alt = m[1].includes("<a ") ? "" : m[1];
    if (!map.has(m[3])) map.set(m[3], { src: m[2], alt });
  }
  return map;
}

function parseDate(line: string) {
  const m = line.trim().match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
  if (!m) return null;
  const month = MONTHS[m[2].toLowerCase()];
  if (!month) return null;
  return { label: `${Number(m[1])} ${m[2].toLowerCase()} ${m[3]}`, key: Number(m[3]) * 10000 + month * 100 + Number(m[1]) };
}

function toPost(file: string, images: ReturnType<typeof teasers>): Post {
  const page = readScraped(file);
  const slug = file.replace(/^blog__/, "");
  let body = stripChrome(page.body);

  // Drop the H1 and the date line under it; the page template renders both.
  body = body.replace(/^# .*\n+/, "");
  let date: ReturnType<typeof parseDate> = null;
  const firstLine = body.split("\n")[0];
  if ((date = parseDate(firstLine))) body = body.slice(firstLine.length).trimStart();

  // Trailing "contact us" link-headings are replaced by the page's own CTA.
  body = body
    .replace(/\n## \[?\*{0,2}<?https:\/\/www\.elexys\.be\/contact>?\*{0,2}\]?(\([^)]*\))?\s*$/, "")
    .replace(/\n## \*\*(Heeft u|Neem vandaag)[^\n]*\*\*\s*$/, "")
    .trim();

  // Older posts fall off the paginated overview: use their first inline image.
  const inline = body.match(/!\[([^\]]*)\]\((https:\/\/www\.elexys\.be\/sites\/[^)\s]+)/);
  const img = images.get(slug) ?? (inline ? { src: inline[2], alt: inline[1] } : undefined);
  return {
    slug,
    title: page.h1 || page.title,
    description: page.description,
    date: date?.label ?? null,
    sortKey: date?.key ?? 0,
    image: img?.src ?? null,
    imageAlt: img?.alt ?? "",
    body,
  };
}

let cache: Post[] | null = null;

export function getPosts() {
  if (!cache) {
    const images = teasers();
    cache = listScraped("blog__")
      .map((f) => toPost(f, images))
      .sort((a, b) => b.sortKey - a.sortKey);
  }
  return cache;
}

export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);
