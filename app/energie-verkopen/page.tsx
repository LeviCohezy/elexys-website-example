import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  ArrowUpRight,
  BatteryCharging,
  Cpu,
  Factory,
  PlugZap,
  Sun,
  Wind,
} from "lucide-react";
import { CtaBand } from "../components/cta-band";
import { PageHero } from "../components/page-hero";
import { ProductCard } from "../components/product-card";
import { Reveal } from "../components/reveal";
import { Eyebrow, Muted, PillButton } from "../components/ui";
import { asset } from "../lib/asset";
import { products } from "../lib/products";

export const metadata: Metadata = {
  title: "Energie verkopen",
  description:
    "Produceert uw bedrijf zelf stroom met zonnepanelen, een windmolen of WKK? Elexys biedt een eerlijke prijs voor de energie die u op het net zet.",
};

/** Installation types listed on the elexys.be contact form. */
const installations = [
  { label: "Zonnepanelen", icon: Sun },
  { label: "Windmolen", icon: Wind },
  { label: "Warmtekrachtkoppeling", icon: Factory },
  { label: "Batterij", icon: BatteryCharging },
  { label: "Laadpalen", icon: PlugZap },
  { label: "Actieve sturing", icon: Cpu },
];

/** Connection points, from the elexys.be FAQ. */
const flows = [
  {
    title: "Afname",
    body: "De energie die u van het net afneemt om te kunnen functioneren.",
    icon: ArrowDownToLine,
  },
  {
    title: "Productie",
    body: "De totale hoeveelheid energie die uw pv-installatie, windmolen … produceert.",
    icon: Sun,
  },
  {
    title: "Injectie",
    body: "Het overschot dat u niet zelf verbruikt en dat terug op het net gaat. Dát verkoopt u aan Elexys.",
    icon: ArrowUpFromLine,
  },
];

export default function SellEnergyPage() {
  const injection = products.filter((p) => p.energy === "injectie");
  return (
    <main>
      <PageHero
        eyebrow="Injectie"
        title={
          <>
            Verkoop de energie <span className="font-light text-sky">die u zelf produceert</span>
          </>
        }
        intro="Wenst u een eerlijke prijs voor de stroom van uw zonnepanelen, windmolen of WKK? Elexys biedt oplossingen voor aankoop, injectie of de combinatie van beide."
        image="/images/rooftop-solar.jpg"
        imageAlt="Zonnepanelen op het dak van een bedrijfsgebouw"
        crumbs={[{ label: "Oplossingen", href: "/oplossingen" }, { label: "Energie verkopen" }]}
      >
        <PillButton href="/contact">Vraag een injectie-offerte aan</PillButton>
      </PageHero>

      {/* Green Power-style: photo with overlapping stat cards */}
      <section className="mx-auto max-w-[1240px] px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Hoe het werkt</Eyebrow>
            <h2 className="mt-5 text-4xl leading-[1.1] font-light tracking-[-0.03em] sm:text-5xl">
              <Muted>Wat u niet</Muted> zelf verbruikt, <Muted>levert</Muted> op
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
              Een bidirectionele meter meet twee richtingen: de energie die u afneemt en de energie
              die u injecteert. Voor dat overschot kiest u een vaste of variabele prijs, apart of
              in één offerte samen met uw aankoop.
            </p>
            <ul className="mt-10 space-y-4">
              {flows.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-sky-soft text-brand">
                    <f.icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-medium text-ink">{f.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{f.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] sm:aspect-[4/4]">
                <Image
                  src={asset("/images/solar.jpg")}
                  alt="Zonnepark met batterijopslag"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-4 max-w-[230px] rounded-3xl bg-white p-5 shadow-2xl shadow-brand-ink/15 sm:-left-8">
                <p className="text-3xl font-medium tracking-tight text-ink">5</p>
                <p className="mt-1 text-xs leading-snug text-muted">
                  injectieformules: vast, via clicks, variabel of gecombineerd met uw aankoop
                </p>
              </div>
              <div className="absolute top-6 -right-2 max-w-[220px] rounded-3xl bg-brand p-5 text-white shadow-2xl shadow-brand-ink/25 sm:-right-6">
                <p className="text-sm font-medium">Eén offerte</p>
                <p className="mt-1 text-xs leading-snug text-white/75">
                  voor levering én aankoop van uw elektriciteit met Produxion
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Injection products */}
      <section className="mx-auto max-w-[1240px] px-6 py-16 sm:px-10">
        <Reveal>
          <h2 className="text-4xl leading-[1.1] font-light tracking-[-0.03em] sm:text-5xl">
            <Muted>Onze</Muted> injectieformules
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {injection.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06} className="h-full">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Installations */}
      <section className="px-2 py-10 sm:px-3">
        <div className="mx-auto max-w-[1400px] rounded-[36px] bg-surface px-6 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto max-w-[1240px]">
            <Reveal>
              <h2 className="max-w-2xl text-3xl leading-[1.1] font-light tracking-[-0.03em] sm:text-4xl">
                <Muted>Welke installatie</Muted> heeft uw bedrijf <Muted>vandaag?</Muted>
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {installations.map((it, i) => (
                <Reveal key={it.label} delay={i * 0.04}>
                  <div className="flex h-full flex-col gap-6 rounded-[24px] bg-white p-5">
                    <it.icon className="size-7 text-brand" strokeWidth={1.5} />
                    <p className="text-sm font-medium text-ink">{it.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart control (sturing) */}
      <section className="mx-auto max-w-[1240px] px-6 py-20 sm:px-10 sm:py-24">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="h-full">
            <div className="flex h-full flex-col justify-between rounded-[32px] bg-brand-ink p-8 text-white sm:p-12">
              <div>
                <Eyebrow tone="dark">Nieuw · met Companion Energy</Eyebrow>
                <h2 className="mt-6 text-3xl leading-[1.15] font-light tracking-[-0.03em] sm:text-4xl">
                  Stuur uw assets <span className="text-sky">slim en flexibel</span>
                </h2>
                <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/70">
                  Elexys breidt haar dienstverlening uit met slimme sturing van energie-assets, in
                  samenwerking met het Gentse technologiebedrijf Companion Energy. Zo realiseert u
                  besparingen via peakshaving en optimalisatie van uw eigenverbruik.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/blog/stuur-vanaf-nu-uw-assets-via-elexys"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-brand"
                >
                  Lees de aankondiging <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href="/blog/sturing-wat-is-het-en-wat-zijn-de-voordelen"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/25 hover:bg-white/10"
                >
                  Wat is sturing?
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="h-full">
            <Link
              href="/insights/solar-imbalance"
              className="group flex h-full flex-col justify-between rounded-[32px] border border-line p-8 transition-colors hover:border-sky sm:p-10"
            >
              <div>
                <p className="text-sm text-muted">Marktinformatie</p>
                <h3 className="mt-3 text-2xl font-medium tracking-tight">Solar Imbalance</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  De maandelijkse onbalanskosten voor zonne-energie in België, en hun gewogen
                  gemiddelde over 12 maanden. Relevant voor iedereen die zonnestroom injecteert.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                Bekijk de index
                <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Een eerlijke prijs <span className="text-sky">voor uw eigen stroom.</span>
          </>
        }
        text="Laat ons weten welke installatie u heeft en hoeveel u ongeveer injecteert. Uw accountmanager stelt een injectie- of gecombineerde offerte op maat voor."
      />
    </main>
  );
}
