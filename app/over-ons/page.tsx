import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, Headset, Home, MessagesSquare, Phone, Quote, Shuffle } from "lucide-react";
import { CtaBand } from "../components/cta-band";
import { CountUp } from "../components/motion/count-up";
import { ScrollScale } from "../components/motion/scroll-scale";
import { GroupNetwork } from "../components/group-network";
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
  { value: 2010, label: "Opgericht door Eric Olivier en Jean-Charles Carrette", count: false },
  {
    value: 2200,
    suffix: " m²",
    label: "Hoofdgebouw in het Blue Oak bedrijvencentrum",
    count: true,
  },
  { value: 300, suffix: " kW", label: "Zonnepanelen op de loodsen en carport", count: true },
  { value: 22, label: "Laadpalen voor wie elektrisch op bezoek komt", count: true },
];

/** The four "Altijd tot uw dienst" strengths from the elexys.be homepage. */
const strengths = [
  {
    icon: Home,
    title: "Onafhankelijk familiebedrijf",
    body: "Op en top Belgisch. Dat laat ons toe onafhankelijk met u mee te denken en wendbaar te zijn.",
  },
  {
    icon: GraduationCap,
    title: "Expertise op elk vlak",
    body: "Een ambitieus team dat u met kennis van zaken begeleidt, en een uitgebreid partnernetwerk.",
  },
  {
    icon: MessagesSquare,
    title: "Persoonlijk contact",
    body: "We ontmoeten u graag persoonlijk. Na elke online aanvraag bellen we binnen de 24u.",
  },
  {
    icon: Shuffle,
    title: "Flexibele oplossingen",
    body: "Niet gebonden aan één pasklare oplossing: verandert uw bedrijf, dan passen wij ons aan.",
  },
];

function Strength({ f, delay }: { f: (typeof strengths)[number]; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="flex h-full min-h-[172px] flex-col justify-between rounded-[24px] bg-white/[0.06] p-6 ring-1 ring-white/10">
        <span className="grid size-10 place-items-center rounded-xl bg-white text-brand">
          <f.icon className="size-5" />
        </span>
        <p className="mt-8 text-sm leading-relaxed text-white/65">
          <strong className="font-medium text-white">{f.title}.</strong> {f.body}
        </p>
      </article>
    </Reveal>
  );
}

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
          <Image
            src={asset("/images/trading.jpg")}
            alt=""
            fill
            sizes="176px"
            className="object-cover"
          />
        </div>
        <div className="pointer-events-none absolute bottom-20 left-10 hidden h-28 w-44 overflow-hidden rounded-2xl lg:block">
          <Image
            src={asset("/images/solar.jpg")}
            alt=""
            fill
            sizes="176px"
            className="object-cover"
          />
        </div>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-10 max-w-4xl text-center text-3xl leading-[1.2] font-medium tracking-[-0.03em] sm:text-[44px]">
            Een investering in zonnepanelen bracht weinig op. Die frustratie zette de schoonbroers
            aan tot onderzoek.{" "}
            <Muted>
              De conclusie was duidelijk: het bestaande energieaanbod loste de noden van kmo’s niet
              voldoende in.
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
              key={s.label}
              delay={i * 0.06}
              className={`px-2 sm:px-6 ${i > 0 ? "lg:border-l lg:border-line" : ""} ${i % 2 ? "border-l border-line lg:border-l" : ""}`}
            >
              <p className="text-4xl font-medium tracking-tight text-ink sm:text-5xl">
                {s.count ? <CountUp to={s.value} suffix={s.suffix} /> : s.value}
              </p>
              <p className="mt-3 max-w-[200px] text-xs leading-snug text-muted uppercase">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Advisora-style dark block: four strengths around a photo */}
      <section className="px-2 py-10 sm:px-3">
        <div className="mx-auto max-w-[1400px] rounded-[36px] bg-brand-ink px-6 py-20 text-white sm:px-10 sm:py-24">
          <div className="mx-auto max-w-[1240px]">
            <Reveal variant="mask">
              <h2 className="mx-auto max-w-2xl text-center text-4xl leading-[1.1] font-light tracking-[-0.03em] sm:text-5xl">
                Altijd tot uw dienst, <span className="text-sky">op elk vlak</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-white/65">
                Met anticipatie en een transparante prijszetting maken we het verschil in een
                constant bewegende markt.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1.1fr_1fr]">
              <div className="grid gap-4">
                {strengths.slice(0, 2).map((f, i) => (
                  <Strength key={f.title} f={f} delay={i * 0.06} />
                ))}
              </div>
              <Reveal
                delay={0.1}
                className="md:col-span-2 md:row-start-1 lg:col-span-1 lg:col-start-2"
              >
                <div className="relative h-full min-h-[360px] overflow-hidden rounded-[24px]">
                  <Image
                    src={asset("/images/contact.jpg")}
                    alt="Accountmanager van Elexys in gesprek met een klant"
                    fill
                    sizes="(min-width: 1024px) 35vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute top-5 left-5 flex items-center gap-2 rounded-full bg-white py-1.5 pr-3 pl-1.5 text-xs font-medium text-ink shadow-lg">
                    <span className="grid size-6 place-items-center rounded-full bg-brand text-white">
                      <Headset className="size-3.5" />
                    </span>
                    Vaste accountmanager
                  </span>
                  <span className="absolute right-5 bottom-5 flex items-center gap-2 rounded-full bg-white py-1.5 pr-3 pl-1.5 text-xs font-medium text-ink shadow-lg">
                    <span className="grid size-6 place-items-center rounded-full bg-sky text-brand-ink">
                      <Phone className="size-3.5" />
                    </span>
                    Binnen 24u contact
                  </span>
                </div>
              </Reveal>
              <div className="grid gap-4">
                {strengths.slice(2).map((f, i) => (
                  <Strength key={f.title} f={f} delay={0.12 + i * 0.06} />
                ))}
              </div>
            </div>
          </div>
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
                informeren over opportuniteiten, prijsontwikkelingen en manieren om aankooprisico’s
                te beperken.
              </Muted>
            </blockquote>
            <p className="mt-8 text-sm">
              <strong className="font-medium text-ink">Eric Olivier</strong>
              <span className="text-muted"> · medeoprichter</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Group companies: floating cards joined by a dotted loop */}
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

            <Reveal delay={0.1} className="mt-14">
              <GroupNetwork />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Building */}
      <section className="mx-auto max-w-[1240px] px-6 py-20 sm:px-10 sm:py-24">
        <Reveal>
          <ScrollScale className="relative isolate">
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
          </ScrollScale>
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
