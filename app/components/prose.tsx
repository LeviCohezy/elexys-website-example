import { markdownToHtml } from "../lib/scraped";

/** Renders scraped Markdown (build time) with the site's typography. */
export function Prose({ markdown, className = "" }: { markdown: string; className?: string }) {
  return (
    <div
      className={`prose-elexys ${className}`}
      dangerouslySetInnerHTML={{ __html: markdownToHtml(markdown) }}
    />
  );
}
