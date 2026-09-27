import { readScraped, stripChrome } from "./scraped";

export type Faq = { question: string; answer: string; image: string | null };
export type FaqGroup = { icon: string; title: string; slug: string; items: Faq[] };

const clean = (s: string) => s.replace(/\*\*/g, "").trim();
const EMOJI = /^(\p{Extended_Pictographic})️?\s*(.+)$/u;

/**
 * faqs.md: `# <emoji> Category`, then `## Question` (or `# **Question**` in the
 * last group). An image line directly above a question illustrates it.
 */
export function getFaqs(): FaqGroup[] {
  const lines = stripChrome(readScraped("faqs").body).split("\n");
  const groups: FaqGroup[] = [];
  let current: Faq | null = null;
  let pendingImage: string | null = null;

  const flush = () => {
    if (current) {
      current.answer = current.answer.trim();
      groups.at(-1)?.items.push(current);
    }
    current = null;
  };

  for (const line of lines) {
    const h = line.match(/^(#{1,2}) (.+)$/);
    const img = line.match(/^!\[[^\]]*\]\(([^)\s]+)/);
    if (h) {
      const text = clean(h[2]);
      const cat = text.match(EMOJI);
      if (h[1] === "#" && cat) {
        flush();
        groups.push({
          icon: cat[1],
          title: cat[2],
          slug: cat[2].toLowerCase().replace(/&/g, "en").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
          items: [],
        });
      } else if (groups.length) {
        flush();
        current = { question: text, answer: "", image: pendingImage };
        pendingImage = null;
      }
      continue;
    }
    if (img && !current?.answer.trim()) {
      pendingImage = img[1];
      continue;
    }
    if (img) {
      // An image after an answer belongs to the next question.
      pendingImage = img[1];
      continue;
    }
    if (current) current.answer += line + "\n";
  }
  flush();
  return groups.filter((g) => g.items.length);
}
