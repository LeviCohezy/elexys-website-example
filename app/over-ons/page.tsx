import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Quote } from "lucide-react";
import { CtaBand } from "../components/cta-band";
import { PageHero } from "../components/page-hero";
import { Reveal } from "../components/reveal";
import { Eyebrow, Muted, PillButton } from "../components/ui";
import { asset } from "../lib/asset";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Elexys is een Belgisch, familiaal verankerd energiebedrijf dat sinds 2010 bedrijven begeleidt bij slim energiebeheer. Thuisbasis: Blue Oak in Deerlijk.",
};

const stats = [
  { value: "2010", label: "Opgericht door Eric Olivier en Jean-Charles Carrette" },
  { value: "2.200 m²", label: "Hoofdgebouw in het Blue Oak bedrijvencentrum" },
  { value: "300 kW", label: "Zonnepanelen op de loodsen en carport" },
  { value: "22", label: "Laadpalen voor wie elektrisch op bezoek komt" },
];

const group = [
  {
    floor: "3e verdieping",
    name: "Elexys",
    body: "Onze thuisbasis. Energieleverancier voor bedrijven, van kmo tot grootverbruiker.",
    href: null,
  },
  {
    floor: "2e verdieping",
    name: "Cogenius",
    body: "Ontwikkelt IT-oplossingen voor bedrijven en organisaties die actief zijn in de energiemarkt.",
    href: "https://www.cogenius.be/",
  },
  {
    floor: "2e verdieping",
    name: "European Commodities",
    body: "Biedt energieleveranciers en grote industriële bedrijven toegang tot de Europese energiemarkt, als BRP en trader.",
    href: "https://www.europeancommodities.eu/",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Over ons"
        title={
          <>
            Energie voor bedrijven <span className="font-light text-sky">sinds 2010</span>
          </>
        }
        intro="Gedreven door geloof in het potentieel van de markt richtten Eric Olivier en Jean-Charles Carrette in 2010 Elexys op."
        image="/images/office-solar.jpg"
        imageAlt="Modern kantoorgebouw met zonnepanelen op het dak"
        crumbs={[{ label: "Over ons" }]}
      />

      {/* G Energy-style centred statement with floating photos */}
      <section className="relative mx-auto max-w-[1240px] px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <Eyebrow>Ons verhaal</Eyebrow>
        </Reveal>
        <div className="pointer-events-none absolute top-24 right-10 hidden h-28 w-44 overflow-hidden rounded-2xl lg:block">
          <Image src={asset("/images/trading.jpg")} alt="" fill sizes="176px" className="object-cover" />
        </div>
        <div className="pointer-events-none absolute bottom-20 left-10 hidden h-28 w-44 overflow-hidden rounded-2xl lg:block">
          <Image src={asset("/images/solar.jpg")} alt="" fill sizes="176px" className="object-cover" />
        </div>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-10 max-w-4xl text-center text-3xl leading-[1.2] font-medium tracking-[-0.03em] sm:text-[44px]">
            Een investering in zonnepanelen bracht weinig op. Die frustratie zette de schoonbroers
            aan tot onderzoek.{" "}
            <Muted>
              De conclusie was duidelijk: het bestaande energieaanbod loste de noden van kmo’s
              niet voldoende in.
            </Muted>
          </p>
        </Reveal>
        <Reveal delay={0.16} className="mt-10 flex justify-center">
          <PillButton href="/contact" variant="brand">
            Leer ons kennen
          </PillButton>
        </Reveal>
      </section>

      {/* Stats row with dividers */}
      <section className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="grid grid-cols-2 gap-y-10 border-y border-line py-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.value}
              delay={i * 0.06}
              className={`px-2 sm:px-6 ${i > 0 ? "lg:border-l lg:border-line" : ""} ${i % 2 ? "border-l border-line lg:border-l" : ""}`}
            >
              <p className="text-4xl font-medium tracking-tight text-ink sm:text-5xl">{s.value}</p>
              <p className="mt-3 max-w-[200px] text-xs leading-snug text-muted uppercase">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founder quote */}
      <section className="mx-auto max-w-[1240px] px-6 py-24 sm:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">
              <Image
                src={asset("/images/team.jpg")}
                alt="Het team van Elexys in overleg"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <Quote className="size-10 text-sky" />
            <blockquote className="mt-6 text-2xl leading-snug font-light tracking-[-0.02em] text-ink sm:text-3xl">
              Elexys is een familiaal verankerd energiebedrijf dat grootverbruikers begeleidt bij
              slim energiebeheer, met een sterke focus op technologie en transparantie.{" "}
              <Muted>
                Zo kunnen we snel inspelen op marktveranderingen en onze klanten proactief
                informeren over opportuniteiten, prijsontwikkelingen en manieren om
                aankooprisico’s te beperken.
              </Muted>
            </blockquote>
            <p className="mt-8 text-sm">
              <strong className="font-medium text-ink">Eric Olivier</strong>
              <span className="text-muted"> · medeoprichter</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Group companies: numbered rows (G Energy service list) */}
      <section className="px-2 py-10 sm:px-3">
        <div className="mx-auto max-w-[1400px] rounded-[36px] bg-surface px-6 py-20 sm:px-10 sm:py-24">
          <div className="mx-auto max-w-[1240px]">
            <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:items-end">
              <Reveal>
                <Eyebrow>Blue Oak, Deerlijk</Eyebrow>
                <h2 className="mt-5 text-4xl leading-[1.1] font-light tracking-[-0.03em] sm:text-5xl">
                  Een nieuwe stek <Muted>in Blue Oak</Muted>
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="max-w-lg text-[15px] leading-relaxed text-muted lg:justify-self-end">
                  In 2018 verhuisde Elexys met haar zusterbedrijven naar het Blue Oak
                  bedrijvencentrum, op de site van het voormalige Ravel Textiles. Een
                  warmtekrachtkoppeling produceert er tegelijk elektriciteit en warmte, en in de
                  zomer gebeurt de koeling passief.
                </p>
              </Reveal>
            </div>

            <ul className="mt-14 border-t border-line">
              {group.map((g, i) => (
                <Reveal key={g.name} delay={i * 0.06}>
                  <li className="grid gap-3 border-b border-line py-8 sm:grid-cols-[80px_180px_1fr_auto] sm:items-center sm:gap-6">
                    <span className="text-sm text-subtle">0{i + 1}</span>
                    <span className="text-xs tracking-[0.14em] text-muted uppercase">{g.floor}</span>
                    <div>
                      <p className={`text-2xl tracking-tight ${g.name === "Elexys" ? "font-medium text-brand" : "font-light text-ink"}`}>
                        {g.name}
                      </p>
                      <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">{g.body}</p>
                    </div>
                    {g.href ? (
                      <a
                        href={g.href}
                        target="_blank"
                        rel="noopener"
                        aria-label={`Website van ${g.name}`}
                        className="grid size-11 place-items-center rounded-full bg-white text-brand transition-colors hover:bg-brand hover:text-white"
                      >
                        <ArrowUpRight className="size-4" />
                      </a>
                    ) : (
                      <span className="rounded-full bg-sky px-3 py-1 text-xs font-medium text-brand-ink">
                        Thuisbasis
                      </span>
                    )}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Building */}
      <section className="mx-auto max-w-[1240px] px-6 py-20 sm:px-10 sm:py-24">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[32px]">
            <div className="relative aspect-[16/9] min-h-[380px] w-full">
              <Image
                src={asset("/images/office-solar.jpg")}
                alt="Kantoorgebouw met zonnepanelen op het dak"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-x-4 bottom-4 rounded-3xl border border-white/25 bg-white/15 p-6 text-white backdrop-blur-xl sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-sm">
              <p className="text-3xl font-medium tracking-tight">300 kW</p>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                aan zonnepanelen wekt minstens evenveel hernieuwbare energie op als we verbruiken
                aan klassieke energie.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand
        title={
          <>
            We leren u <span className="text-sky">graag kennen.</span>
          </>
        }
        text="De ideale energiestrategie is voor elk bedrijf anders. Persoonlijke begeleiding en eerlijke kennisdeling vinden we vanzelfsprekend: ons team biedt u een luisterend oor en advies om het meeste uit uw energiecontract te halen."
      />
    </main>
  );
}
