import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, LineChart } from "lucide-react";
import { CtaBand } from "../../components/cta-band";
import { PageHero } from "../../components/page-hero";
import { ProductCard } from "../../components/product-card";
import { Reveal } from "../../components/reveal";
import { Muted, PillButton } from "../../components/ui";
import { asset } from "../../lib/asset";
import {
  energyLabels,
  priceLabels,
  productBySlug,
  products,
  type Energy,
  type PriceType,
  type Product,
} from "../../lib/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/product/[slug]">): Promise<Metadata> {
  const product = productBySlug((await params).slug);
  return product ? { title: product.name, description: product.summary } : {};
}

const images: Record<Energy, { src: string; alt: string }> = {
  elektriciteit: { src: "/images/industry.jpg", alt: "Productiehal van een Belgisch bedrijf" },
  gas: { src: "/images/gas.jpg", alt: "Industriële aardgasinstallatie" },
  injectie: { src: "/images/rooftop-solar.jpg", alt: "Zonnepanelen op het dak van een bedrijfsgebouw" },
};

/** Plain-language price formulas, condensed from the elexys.be FAQ. */
const explainers: Record<PriceType, { title: string; body: string }> = {
  vast: {
    title: "Hoe werkt een vaste prijs?",
    body: "U betaalt een vast bedrag dat niet wijzigt op maandelijkse of jaarlijkse basis, voor de duur van uw overeenkomst. De prijs is gebaseerd op de forward- of langetermijnmarkt.",
  },
  click: {
    title: "Hoe werkt een click-prijs?",
    body: "U legt uw prijs niet op één moment vast, maar strategisch en gespreid via clicks op de forwardmarkt. Zo vangt u prijsschommelingen beter op en beperkt u het risico dat de prijs op het verkeerde moment wordt vastgelegd.",
  },
  variabel: {
    title: "Hoe werkt een variabele prijs?",
    body: "Uw prijs wijzigt iedere maand of ieder kwartaal en volgt de spotmarkt. Er bestaan verschillende variabele formules; daarom is het belangrijk na te gaan op welke markt uw prijs gebaseerd is.",
  },
  combinatie: {
    title: "Hoe werkt een gecombineerde prijs?",
    body: "U combineert een vast deel met een variabel deel. Meestal is de basis variabel en krijgt u de optie om op een bepaald moment een deel of uw volledige verbruik vast te leggen.",
  },
};

/** The market index a product's price is based on (see /insights). */
function marketFor(p: Product) {
  if (p.energy === "gas")
    return p.price === "variabel"
      ? { slug: "eex-ttf-gas-spot", name: "EEX TTF Gas Spot" }
      : { slug: "ice-endex-dutch-natural-gas-forward", name: "ICE Endex Dutch Natural Gas Forward" };
  if (p.slug.startsWith("belex")) return { slug: "spot-belpex", name: "Spot Belpex" };
  if (p.slug.startsWith("belix")) return { slug: "spot-belix", name: "Spot Belix" };
  return { slug: "ice-endex-belgian-power-base", name: "ICE Endex Belgian Power Base" };
}

export default async function ProductPage({ params }: PageProps<"/product/[slug]">) {
  const product = productBySlug((await params).slug);
  if (!product) notFound();

  const img = images[product.energy];
  const explainer = explainers[product.price];
  const market = marketFor(product);
  const related = products.filter((p) => p.energy === product.energy && p.slug !== product.slug);

  return (
    <main>
      <PageHero
        eyebrow={energyLabels[product.energy]}
        title={product.name}
        intro={product.summary}
        image={img.src}
        imageAlt={img.alt}
        crumbs={[{ label: "Oplossingen", href: "/oplossingen" }, { label: product.name }]}
        aside={
          <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-brand-ink/25 sm:min-w-[260px]">
            <p className="text-xs text-muted">Prijsformule</p>
            <p className="mt-1 text-2xl font-medium tracking-tight text-ink">
              {priceLabels[product.price]}
            </p>
            <p className="mt-4 text-xs text-muted">Gebaseerd op</p>
            <p className="mt-1 text-sm font-medium text-brand">{market.name}</p>
          </div>
        }
      >
        <PillButton href="/contact">Vraag een offerte aan</PillButton>
      </PageHero>

      {/* Nirosolar-style split: grey feature card + photo with glass stat */}
      <section className="mx-auto max-w-[1240px] px-6 py-20 sm:px-10 sm:py-24">
        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-[32px] bg-surface p-8 sm:p-12">
              <p className="text-sm text-muted">Wat krijgt u met {product.name}?</p>
              <h2 className="mt-3 text-3xl leading-tight font-medium tracking-[-0.03em] sm:text-4xl">
                {priceLabels[product.price]} <Muted>voor</Muted>{" "}
                {energyLabels[product.energy].toLowerCase()}
              </h2>
              <ul className="mt-8 space-y-4">
                {product.features.map((f) => (
                  <li key={f} className="flex gap-3 text-[15px] text-ink">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white text-brand">
                      <Check className="size-3.5" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <PillButton href="/contact" variant="brand">
                  Offerte voor {product.name}
                </PillButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <div className="relative isolate flex h-full min-h-[440px] flex-col justify-end overflow-hidden rounded-[32px] p-5">
              <Image
                src={asset(img.src)}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="-z-10 object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-ink/70 via-brand-ink/10 to-transparent" />
              <div className="rounded-3xl border border-white/25 bg-white/15 p-6 text-white backdrop-blur-xl">
                <h3 className="text-lg font-medium">{explainer.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{explainer.body}</p>
                <Link
                  href={`/insights/${market.slug}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-brand"
                >
                  <LineChart className="size-4" />
                  Bekijk {market.name}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-[1240px] px-6 pb-8 sm:px-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <Reveal>
              <h2 className="text-3xl leading-[1.1] font-light tracking-[-0.03em] sm:text-4xl">
                <Muted>Andere formules voor</Muted> {energyLabels[product.energy].toLowerCase()}
              </h2>
            </Reveal>
            <Link
              href={`/oplossingen/#${product.energy}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-brand"
            >
              Alle oplossingen <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {related.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06} className="h-full">
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <CtaBand />
    </main>
  );
}
