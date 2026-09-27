import type { Metadata } from "next";
import Image from "next/image";
import { Coffee, Leaf, Presentation, Users } from "lucide-react";
import { CtaBand } from "../components/cta-band";
import { PageHero } from "../components/page-hero";
import { Reveal } from "../components/reveal";
import { Eyebrow, Muted, PillButton } from "../components/ui";
import { asset } from "../lib/asset";

export const metadata: Metadata = {
  title: "Werken bij Elexys? Dat wekt vonken!",
  description:
    "Werken bij een Belgisch familiebedrijf op de energiemarkt, in een energieneutraal kantoor in Deerlijk. Solliciteer spontaan.",
};

const perks = [
  {
    icon: Leaf,
    title: "Energieneutraal kantoor",
    body: "Ons hoofdgebouw in Blue Oak is volledig energieneutraal dankzij zonnepanelen en een warmtekrachtkoppeling.",
  },
  {
    icon: Presentation,
    title: "Moderne vergaderruimtes",
    body: "Drie vergaderruimtes op het gelijkvloers, ideaal voor productieve meetings en workshops.",
  },
  {
    icon: Coffee,
    title: "Cafetaria en bar",
    body: "’s Middags is het gezellig in onze cafetaria met uitgeruste keuken, bar en ontspanningsruimte.",
  },
  {
    icon: Users,
    title: "Last Friday Lunch",
    body: "Met zusterbedrijven Cogenius, Blue Oak en European Commodities sluiten we elke werkmaand samen af.",
  },
];

export default function JobsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Vacatures"
        title={
          <>
            Werken bij Elexys? <span className="font-light text-sky">Dat wekt vonken!</span>
          </>
        }
        intro="Als kleinschalige speler op de energiemarkt hechten we veel belang aan de diversiteit van ons team. We staan altijd open voor nieuwe profielen en expertise die een meerwaarde betekenen voor onze klanten."
        image="/images/careers.jpg"
        imageAlt="Collega's van Elexys aan het werk"
        crumbs={[{ label: "Vacatures" }]}
      />

      {/* Open positions */}
      <section className="mx-auto max-w-[1240px] px-6 py-20 sm:px-10 sm:py-24">
        <Reveal>
          <div className="grid items-center gap-8 rounded-[32px] bg-surface p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <Eyebrow>Openstaande vacatures</Eyebrow>
              <h2 className="mt-5 text-3xl leading-[1.15] font-light tracking-[-0.03em] sm:text-4xl">
                Biedt u ons team <Muted>een nieuwe bron van kennis?</Muted>
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
                Momenteel zijn er geen openstaande vacatures, maar wie weet overtuigt u ons met een
                spontane sollicitatie. Verras ons met uw cv en motivatiebrief en we laten snel weten
                of het klikt.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <PillButton href="/vacatures/spontane-sollicitatie" variant="brand">
                Solliciteer spontaan
              </PillButton>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Creaenergy-style image stack + 2×2 feature cards */}
      <section className="mx-auto max-w-[1240px] px-6 pb-20 sm:px-10 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
            {[
              { src: "/images/office-solar.jpg", alt: "Het kantoor van Elexys in Deerlijk" },
              { src: "/images/team.jpg", alt: "Collega's in overleg" },
            ].map((img, i) => (
              <Reveal key={img.src} delay={i * 0.08}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                  <Image src={asset(img.src)} alt={img.alt} fill sizes="(min-width: 1024px) 35vw, 50vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
          <div>
            <Reveal>
              <Eyebrow>Welkom in het team</Eyebrow>
              <p className="mt-6 text-2xl leading-snug font-medium tracking-[-0.02em] sm:text-3xl">
                Elexys is een familiebedrijf pur sang.{" "}
                <Muted>
                  Dat uit zich in persoonlijke, rechttoe rechtaan communicatie, naar onze klanten
                  maar evengoed binnen ons eigen team.
                </Muted>
              </p>
            </Reveal>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {perks.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.06} className="h-full">
                  <article className="h-full rounded-[24px] bg-surface p-6">
                    <p.icon className="size-7 text-brand" strokeWidth={1.5} />
                    <h3 className="mt-5 font-medium text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Op zoek naar een job <span className="text-sky">die u energie geeft?</span>
          </>
        }
        text="Stuur ons uw cv en motivatiebrief. We laten snel weten of het klikt."
      />
    </main>
  );
}
