import { readScraped, stripChrome } from "../lib/scraped";
import { PageHero } from "./page-hero";
import { Prose } from "./prose";

/** Privacy policy, cookie policy, terms: the scraped text in a readable column. */
export function LegalPage({ slug, eyebrow = "Juridisch" }: { slug: string; eyebrow?: string }) {
  const page = readScraped(slug);
  const body = stripChrome(page.body).replace(/^# .*\n+/, "");
  return (
    <main>
      <PageHero
        eyebrow={eyebrow}
        title={page.h1 || page.title}
        image="/images/office-solar.jpg"
        crumbs={[{ label: page.h1 || page.title }]}
      />
      <article className="mx-auto max-w-[800px] px-6 py-16 sm:px-10 sm:py-20">
        <Prose markdown={body} className="text-[15px]" />
      </article>
    </main>
  );
}

export function legalMetadata(slug: string) {
  const page = readScraped(slug);
  return { title: page.title, description: page.description || undefined };
}
