import type { Metadata } from "next";
import Link from "next/link";
import { Flame, Sun, Zap } from "lucide-react";
import { CtaBand } from "../components/cta-band";
import { PageHero } from "../components/page-hero";
import { ProductCard } from "../components/product-card";
import { ProductFinder } from "../components/product-finder";
import { Reveal } from "../components/reveal";
import { Eyebrow, PillButton } from "../components/ui";
import { energyLabels, products, type Energy } from "../lib/products";

export const metadata: Metadata = {
  title: "Ontdek onze oplossingen",
  description:
    "Elektriciteit, aardgas of een gecombineerd energiecontract voor uw bedrijf, en een eerlijke prijs voor de energie die u zelf produceert.",
};

const groups: { id: Energy; icon: typeof Zap; intro: string }[] = [
  {
    id: "elektriciteit",
    icon: Zap,
    intro: "Van een vaste prijs tot een variabele prijs op basis van de BELPEX, met of zonder clicks.",
  },
  {
    id: "gas",
    icon: Flame,
    intro: "Aardgas aan een vaste prijs, gespreid vastgelegd of variabel op basis van de TTF spotmarkt.",
  },
  {
    id: "injectie",
    icon: Sun,
    intro: "Een eerlijke prijs voor de stroom die uw zonnepanelen, windmolen of WKK op het net zetten.",
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Oplossingen"
        title={
          <>
            Ontdek onze <span className="font-light text-sky">oplossingen</span>
          </>
        }
        intro="Elexys is een allround energieleverancier. U kiest tussen elektriciteit, gas of een gecombineerd energiecontract, en voor de energie die u zelf produceert."
        image="/images/industry.jpg"
        imageAlt="Productiehal van een Belgisch bedrijf"
        crumbs={[{ label: "Oplossingen" }]}
        aside={
          <div className="grid grid-cols-3 gap-2 rounded-3xl border border-white/20 bg-white/10 p-2 backdrop-blur-xl">
            {groups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="rounded-2xl px-4 py-3 text-white transition-colors hover:bg-white/10"
              >
                <g.icon className="size-5 text-sky" />
                <p className="mt-3 text-2xl font-medium">
                  {products.filter((p) => p.energy === g.id).length}
                </p>
                <p className="text-xs text-white/65">{energyLabels[g.id]}</p>
              </a>
            ))}
          </div>
        }
      />

      {/* Product finder on a dark panel (Creaenergy-style services block) */}
      <section className="px-2 py-10 sm:px-3">
        <div className="mx-auto max-w-[1400px] rounded-[36px] bg-brand-ink px-6 py-16 text-white sm:px-10 sm:py-20">
          <div className="mx-auto max-w-[1240px]">
            <Reveal>
              <Eyebrow tone="dark">Productzoeker</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-4xl leading-[1.1] font-light tracking-[-0.03em] sm:text-5xl">
                Welk energieproduct <span className="text-sky">past bij u?</span>
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/65">
                Twee vragen, en u ziet welke formules in aanmerking komen. Twijfelt u?{" "}
                <Link href="/contact" className="text-sky underline underline-offset-4">
                  We helpen u graag verder.
                </Link>
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-12">
              <ProductFinder />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Full catalogue */}
      {groups.map((g, gi) => (
        <section
          key={g.id}
          id={g.id}
          className="mx-auto max-w-[1240px] scroll-mt-24 px-6 py-16 sm:px-10 sm:py-20"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-end">
            <Reveal>
              <span className="flex items-center gap-3 text-sm text-muted">
                <span className="grid size-10 place-items-center rounded-full bg-sky-soft text-brand">
                  <g.icon className="size-5" />
                </span>
                0{gi + 1}
              </span>
              <h2 className="mt-5 text-4xl leading-[1.1] font-light tracking-[-0.03em] sm:text-5xl">
                {energyLabels[g.id]}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="max-w-md text-[15px] leading-relaxed text-muted lg:justify-self-end">
                {g.intro}
              </p>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((p) => p.energy === g.id)
              .map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 0.06} className="h-full">
                  <ProductCard product={p} />
                </Reveal>
              ))}
          </div>
          {g.id === "injectie" && (
            <Reveal className="mt-8">
              <PillButton href="/energie-verkopen" variant="brand">
                Meer over energie verkopen
              </PillButton>
            </Reveal>
          )}
        </section>
      ))}

      <CtaBand
        title={
          <>
            Keuzestress? <span className="text-white/60">Of interesse in een</span>{" "}
            <span className="text-sky">gecombineerd contract?</span>
          </>
        }
        text="We adviseren u graag. Uw vaste accountmanager bekijkt welke strategie het best aansluit bij de noden van uw bedrijf."
      />
    </main>
  );
}
