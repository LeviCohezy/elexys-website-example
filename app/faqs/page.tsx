import type { Metadata } from "next";
import { Plus } from "lucide-react";
import { CtaBand } from "../components/cta-band";
import { PageHero } from "../components/page-hero";
import { Prose } from "../components/prose";
import { Reveal } from "../components/reveal";
import { getFaqs } from "../lib/faqs";

export const metadata: Metadata = {
  title: "Veelgestelde vragen over energie voor bedrijven",
  description:
    "Antwoorden over uw aansluiting, energiecontracten, prijsformules, de kosten op uw energiefactuur en energie optimaliseren.",
};

export default function FaqPage() {
  const groups = getFaqs();
  const total = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Veelgestelde <span className="font-light text-sky">vragen</span>
          </>
        }
        intro="Van EAN-code tot onbalanskosten: de energiemarkt heeft haar eigen taal. Hier vindt u de antwoorden die we het vaakst geven."
        image="/images/engineers.jpg"
        imageAlt="Ingenieurs inspecteren een hoogspanningsstation"
        crumbs={[{ label: "FAQ" }]}
        aside={
          <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-brand-ink/25">
            <p className="text-4xl font-medium tracking-tight text-ink">{total}</p>
            <p className="mt-1 text-xs text-muted">antwoorden in {groups.length} thema’s</p>
          </div>
        }
      />

      <section className="mx-auto max-w-[1240px] px-6 py-20 sm:px-10 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          <nav aria-label="Thema’s" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-medium tracking-[0.16em] text-subtle uppercase">Thema’s</p>
            <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {groups.map((g) => (
                <li key={g.slug}>
                  <a
                    href={`#${g.slug}`}
                    className="flex items-center gap-3 rounded-full bg-surface px-4 py-2 text-sm text-ink transition-colors hover:bg-sky-soft hover:text-brand lg:rounded-2xl lg:bg-transparent lg:py-3"
                  >
                    <span aria-hidden>{g.icon}</span>
                    {g.title}
                    <span className="ml-auto hidden text-xs text-subtle lg:inline">{g.items.length}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-16">
            {groups.map((g) => (
              <section key={g.slug} id={g.slug} className="scroll-mt-28">
                <Reveal variant="mask">
                  <h2 className="flex items-center gap-3 text-3xl font-light tracking-[-0.03em] sm:text-4xl">
                    <span aria-hidden className="text-2xl">{g.icon}</span>
                    {g.title}
                  </h2>
                </Reveal>
                <div className="mt-8 divide-y divide-line border-y border-line">
                  {g.items.map((f) => (
                    <details key={f.question} className="group py-2">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-medium tracking-tight text-ink marker:hidden hover:text-brand [&::-webkit-details-marker]:hidden">
                        {f.question}
                        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-surface text-brand transition-transform duration-300 group-open:rotate-45">
                          <Plus className="size-4" />
                        </span>
                      </summary>
                      <div className="grid gap-6 pb-6 md:grid-cols-[1fr_220px]">
                        <Prose markdown={f.answer} className="text-[15px]" />
                        {f.image && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={f.image}
                            alt=""
                            loading="lazy"
                            className="hidden w-full self-start rounded-2xl md:block"
                          />
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Uw vraag <span className="text-sky">er niet bij?</span>
          </>
        }
        text="Uw vaste accountmanager staat klaar voor vragen of advies. Bel ons of stuur uw vraag via het contactformulier."
      />
    </main>
  );
}
