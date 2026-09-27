import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Check,
  Flame,
  Gauge,
  Headset,
  LineChart,
  Sun,
  Zap,
} from "lucide-react";
import { CtaBand } from "./components/cta-band";
import { ImageTile } from "./components/image-tile";
import { Nav } from "./components/nav";
import { PostCard } from "./components/post-card";
import { Reveal } from "./components/reveal";
import { Steps } from "./components/steps";
import { Eyebrow, Muted, PillButton } from "./components/ui";
import { asset } from "./lib/asset";
import { getPosts } from "./lib/blog";

export default function Home() {
  return (
    <main>
      <Hero />
      <Markets />
      <Features />
      <Solutions />
      <PriceModels />
      <Steps />
      <Team />
      <Latest />
      <CtaBand />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="p-2 sm:p-3">
      <div className="relative isolate flex min-h-[640px] flex-col overflow-hidden rounded-[28px] sm:min-h-[760px] sm:rounded-[36px] lg:min-h-[min(calc(100svh-24px),920px)]">
        <Image
          src={asset("/images/hero.jpg")}
          alt="Hoogspanningslijnen door een open landschap onder een helderblauwe lucht"
          fill
          preload
          sizes="100vw"
          className="animate-hero-zoom -z-20 object-cover object-[70%_center]"
        />
        {/* Brand-tinted legibility wash */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a1a4a]/65 via-[#0a1a4a]/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-brand-ink/40 to-transparent" />

        <Nav />

        <div className="mx-auto flex w-full max-w-[1240px] flex-1 flex-col justify-between gap-14 px-6 pt-36 pb-8 sm:px-10 sm:pt-40 lg:pt-44">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow tone="dark">Energieleverancier voor bedrijven</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-7 text-[44px] leading-[1.02] font-medium tracking-[-0.035em] text-white sm:text-7xl lg:text-[88px]">
                Een slimmere
                <br />
                <span className="font-light text-sky">energiestrategie.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-md text-[15px] leading-relaxed text-white/80 sm:text-base">
                Elexys is expert in de aankoop en verkoop van elektriciteit en gas. Een
                energiecontract dat echt bij uw bedrijf past: daar gaan we voor.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-9 flex flex-wrap items-center gap-4">
              <PillButton href="/contact">Vraag een offerte aan</PillButton>
              <Link
                href="/oplossingen"
                className="text-sm font-medium text-white/85 underline decoration-white/30 underline-offset-8 transition-colors hover:text-white hover:decoration-white"
              >
                Ontdek onze oplossingen
              </Link>
            </Reveal>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            {/* Glass card, AeroWind-style */}
            <Reveal delay={0.3} className="hidden sm:block">
              <Link
                href="/energie-verkopen"
                className="group flex items-center gap-4 rounded-3xl border border-white/25 bg-white/10 p-2 pr-8 backdrop-blur-xl transition-colors hover:bg-white/15"
              >
                <div className="relative h-24 w-36 overflow-hidden rounded-2xl">
                  <Image src={asset("/images/solar.jpg")} alt="" fill sizes="144px" className="object-cover" />
                </div>
                <div>
                  <span className="rounded-full bg-sky px-2.5 py-0.5 text-[11px] font-medium text-brand-ink">
                    Injectie
                  </span>
                  <p className="mt-2 flex items-center gap-1.5 text-xl font-light text-white">
                    Energie verkopen
                    <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
                  </p>
                  <p className="mt-1 text-xs text-white/70">
                    Een eerlijke prijs voor de stroom die u zelf produceert
                  </p>
                </div>
              </Link>
            </Reveal>

            {/* Stat card, Ecoriz-style */}
            <Reveal delay={0.38}>
              <div className="flex items-center gap-4 rounded-3xl bg-white p-2 pr-7 shadow-2xl shadow-brand-ink/25">
                <div className="relative h-24 w-32 overflow-hidden rounded-2xl">
                  <Image src={asset("/images/contact.jpg")} alt="" fill sizes="128px" className="object-cover" />
                </div>
                <div>
                  <p className="text-3xl font-medium tracking-tight text-ink">24u</p>
                  <p className="mt-1 max-w-[190px] text-xs leading-snug text-muted">
                    Na elke online aanvraag bellen we u op werkdagen binnen de 24 uur
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Market strip                                                        */
/* ------------------------------------------------------------------ */

const markets = [
  { name: "ICE Endex", icon: LineChart },
  { name: "EPEX Spot", icon: Activity },
  { name: "Belpex", icon: Zap },
  { name: "TTF", icon: Flame },
  { name: "ZTP", icon: Gauge },
  { name: "Elia", icon: BarChart3 },
];

function Markets() {
  const row = [...markets, ...markets];
  return (
    <section className="py-14 sm:py-16">
      <p className="px-6 text-center text-xs font-medium tracking-[0.18em] text-subtle uppercase">
        Transparante prijzen, gekoppeld aan de Europese energiebeurzen
      </p>
      <div className="relative mx-auto mt-8 max-w-[1240px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-16 pr-16">
          {row.map(({ name, icon: Icon }, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-lg font-medium tracking-tight whitespace-nowrap text-ink/45"
              aria-hidden={i >= markets.length}
            >
              <Icon className="size-5" strokeWidth={2.25} />
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why Elexys bento                                                    */
/* ------------------------------------------------------------------ */

const bars = [58, 72, 46, 88, 76, 94, 82];

function Features() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-20 sm:px-10 sm:py-28">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <Eyebrow>Waarom Elexys</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-4xl leading-[1.08] font-medium tracking-[-0.03em] sm:text-5xl">
            Altijd tot uw dienst.
            <br />
            <Muted>Onafhankelijk en wendbaar.</Muted>
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        <Reveal className="h-full">
          <article className="flex h-full min-h-[380px] flex-col justify-between rounded-[28px] bg-surface p-8">
            <div className="flex items-start justify-between gap-6">
              <h3 className="text-2xl leading-tight font-medium tracking-tight">
                Onafhankelijk familiebedrijf
              </h3>
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-brand">
                <Zap className="size-5" />
              </span>
            </div>
            <p className="max-w-[260px] text-sm leading-relaxed text-muted">
              Op en top Belgisch. Met anticipatie en een transparante prijszetting maken we het
              verschil in een constant bewegende markt.
            </p>
            <p className="flex items-baseline gap-3">
              <span className="text-5xl font-medium tracking-tight text-ink">2010</span>
              <span className="text-sm font-medium text-ink">Opgericht</span>
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.08} className="h-full">
          <article className="relative isolate flex h-full min-h-[380px] flex-col justify-between overflow-hidden rounded-[28px] p-8 text-white">
            <Image
              src={asset("/images/team.jpg")}
              alt="Accountmanagers van Elexys in overleg"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="-z-10 object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-ink/75 via-brand-ink/20 to-brand-ink/40" />
            <div>
              <h3 className="text-2xl leading-tight font-medium tracking-tight">
                Persoonlijk
                <br />
                contact
              </h3>
              <p className="mt-3 max-w-[240px] text-sm leading-relaxed text-white/80">
                We ontmoeten u graag persoonlijk om uw energiewensen af te stemmen.
              </p>
            </div>
            <span className="self-start rounded-full bg-white px-4 py-2 text-xs font-medium text-ink">
              <strong className="font-semibold">Vaste</strong> accountmanager
            </span>
          </article>
        </Reveal>

        <Reveal delay={0.16} className="h-full">
          <article className="flex h-full min-h-[380px] flex-col justify-between rounded-[28px] bg-brand p-8 text-white">
            <div>
              <p className="text-3xl leading-tight font-medium tracking-tight">
                Flexibele oplossingen
              </p>
              <p className="mt-3 max-w-[240px] text-sm leading-relaxed text-white/75">
                Niet gebonden aan één pasklare oplossing. Verandert uw bedrijf, dan passen wij ons
                aan binnen de mogelijkheden van uw contract.
              </p>
            </div>
            <div className="flex h-32 items-end gap-2.5" aria-hidden>
              {bars.map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`flex-1 rounded-lg ${i % 2 === 0 ? "bg-white" : "bg-sky/70"}`}
                />
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Solutions grid                                                      */
/* ------------------------------------------------------------------ */

const strategy = [
  { label: "Vast", value: 50, color: "var(--color-brand)" },
  { label: "Clicks", value: 30, color: "var(--color-sky)" },
  { label: "Variabel", value: 20, color: "var(--color-brand-ink)" },
];

function Donut() {
  const r = 70;
  const c = 2 * Math.PI * r;
  const segments = strategy.map((m, i) => ({
    ...m,
    len: (m.value / 100) * c,
    offset: (strategy.slice(0, i).reduce((sum, s) => sum + s.value, 0) / 100) * c,
  }));
  return (
    <svg viewBox="0 0 200 200" className="size-48 -rotate-90 sm:size-56" aria-hidden>
      {segments.map((s) => (
        <circle
          key={s.label}
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke={s.color}
          strokeWidth="30"
          strokeDasharray={`${s.len - 2} ${c - s.len + 2}`}
          strokeDashoffset={-s.offset}
        />
      ))}
    </svg>
  );
}

function Solutions() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-20 sm:px-10 sm:py-24">
      <Reveal>
        <h2 className="max-w-3xl text-4xl leading-[1.1] font-light tracking-[-0.03em] sm:text-5xl">
          <Muted>Oplossingen voor</Muted> aankoop, injectie <Muted>of de</Muted> combinatie van
          beide
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <ImageTile
            href="/oplossingen/#elektriciteit"
            src="/images/industry.jpg"
            alt="Productiehal van een Belgisch bedrijf"
            tag="Elektriciteit"
            title="Stroom voor uw bedrijf"
          />
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-7">
          <ImageTile
            href="/oplossingen/#gas"
            src="/images/gas.jpg"
            alt="Industriële aardgasinstallatie"
            tag="Aardgas"
            title="Aardgas aan een vaste of variabele prijs"
          />
        </Reveal>
        <Reveal className="lg:col-span-7">
          <ImageTile
            href="/energie-verkopen"
            src="/images/rooftop-solar.jpg"
            alt="Zonnepanelen op het dak van een bedrijfsgebouw"
            tag="Injectie"
            title="Verkoop de energie die u zelf produceert"
          />
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-5">
          <article className="flex h-full min-h-[340px] flex-col rounded-[28px] border border-line p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Gespreide inkoopstrategie</p>
              <span className="text-xs text-muted">Voorbeeld</span>
            </div>
            <div className="relative flex flex-1 items-center justify-center py-4">
              <Donut />
              <div className="absolute max-w-[110px] text-center">
                <p className="text-sm leading-snug font-medium">Minder risico</p>
                <p className="text-xs text-muted">op het verkeerde moment vastleggen</p>
              </div>
            </div>
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-muted">
              {strategy.map((m) => (
                <li key={m.label} className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full" style={{ background: m.color }} />
                  {m.label} {m.value}%
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Fixed vs variable                                                   */
/* ------------------------------------------------------------------ */

function PriceModels() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-20 sm:px-10 sm:py-24">
      <div className="grid items-end gap-6 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-4xl leading-[1.1] font-light tracking-[-0.03em] sm:text-5xl">
            Vast <Muted>of</Muted> variabel?
            <br />
            <Muted>Of</Muted> allebei.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted lg:justify-self-end">
            Uw prijsformule bepaalt het grootste deel van uw energiekost. We leggen elke formule
            transparant uit, zodat u geen appels met peren vergelijkt.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        <Reveal className="h-full">
          <article className="flex h-full flex-col rounded-[28px] bg-brand p-8 text-white sm:p-10">
            <p className="text-2xl font-medium text-sky">Vaste of click-prijs</p>
            <p className="mt-1 text-sm text-white/60">Zekerheid over uw budget</p>
            <p className="mt-10 flex items-baseline gap-2">
              <span className="text-6xl font-light tracking-tight">Vast</span>
              <span className="text-sm text-white/60">/ MWh, voor de duur van uw contract</span>
            </p>
            <Link
              href="/oplossingen/#elektriciteit"
              className="mt-8 rounded-full bg-sky py-3.5 text-center text-sm font-medium text-brand-ink transition-colors hover:bg-white"
            >
              Bekijk FIX, CLICKX en SAFE
            </Link>
            <ul className="mt-8 space-y-3 border-t border-white/15 pt-8 text-sm text-white/85">
              {[
                "Gebaseerd op de forwardmarkt (ICE Endex)",
                "In één keer of gespreid vastleggen via clicks",
                "De-click optie en uitgestelde prijsfixatie mogelijk",
                "Netverliezen en onbalanskosten inbegrepen",
              ].map((f) => (
                <li key={f} className="flex gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-sky" />
                  {f}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={0.08} className="h-full">
          <article className="flex h-full flex-col rounded-[28px] border border-line p-8 sm:p-10">
            <p className="text-2xl font-medium text-ink">Variabele prijs</p>
            <p className="mt-1 text-sm text-subtle">Mee met de markt, maand per maand</p>
            <p className="mt-10 flex items-baseline gap-2">
              <span className="text-6xl font-light tracking-tight text-ink">Spot</span>
              <span className="text-sm text-muted">/ MWh, Belpex of TTF</span>
            </p>
            <Link
              href="/oplossingen/#elektriciteit"
              className="mt-8 rounded-full bg-brand-ink py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-brand"
            >
              Bekijk BELIX, BELEX en GASFLEX
            </Link>
            <ul className="mt-8 space-y-3 border-t border-line pt-8 text-sm text-muted">
              {[
                "Gebaseerd op de spotmarkt (Belpex, TTF)",
                "Financiële hedge mogelijk, met unhedge optie",
                "Omzetting naar een vaste prijs mogelijk",
                "Volledige volumeflexibiliteit",
              ].map((f) => (
                <li key={f} className="flex gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  {f}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Team                                                                */
/* ------------------------------------------------------------------ */

function Team() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-20 sm:px-10 sm:py-28">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <Reveal>
          <h2 className="text-4xl leading-[1.1] font-light tracking-[-0.03em] sm:text-5xl">
            We leren u
            <br />
            <Muted>graag kennen</Muted>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <PillButton href="/over-ons" variant="brand">
            Over Elexys
          </PillButton>
        </Reveal>
      </div>

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="max-w-md text-lg leading-relaxed text-ink">
            De ideale energiestrategie is voor elk bedrijf anders. Ons team van experten biedt u
            een luisterend oor en advies om het meeste uit uw energiecontract te halen.
          </p>
          <h3 className="mt-10 text-sm font-medium tracking-[0.14em] text-subtle uppercase">
            Wat u van ons mag verwachten
          </h3>
          <ul className="mt-6 space-y-5">
            {[
              {
                t: "Expertise op elk vlak",
                d: "Een ambitieus team dat u met kennis van zaken begeleidt, en een uitgebreid partnernetwerk.",
              },
              {
                t: "Eén vast aanspreekpunt",
                d: "Een ervaren accountmanager die klaarstaat voor vragen of advies.",
              },
              {
                t: "Eerlijke kennisdeling",
                d: "Transparante offertes die we graag in detail met u overlopen.",
              },
            ].map((item) => (
              <li key={item.t} className="flex gap-4">
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-sky-soft text-brand">
                  <Check className="size-4" />
                </span>
                <p className="text-sm leading-relaxed text-muted">
                  <strong className="font-medium text-ink">{item.t}:</strong> {item.d}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <Image
              src={asset("/images/contact.jpg")}
              alt="Accountmanager van Elexys aan de telefoon met een klant"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-full bg-white/90 py-2 pr-5 pl-2 backdrop-blur">
              <span className="grid size-9 place-items-center rounded-full bg-brand text-white">
                <Headset className="size-4" />
              </span>
              <span className="text-sm font-medium">Binnen 24u persoonlijk contact</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Latest blog posts                                                   */
/* ------------------------------------------------------------------ */

function Latest() {
  const posts = getPosts().slice(0, 3);
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-16 sm:px-10">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <Reveal>
          <Eyebrow>Blijf op de hoogte</Eyebrow>
          <h2 className="mt-5 text-4xl leading-[1.1] font-light tracking-[-0.03em] sm:text-5xl">
            Nieuw <Muted>in de</Muted> energiewereld
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-deep"
          >
            Alle artikels <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08} className="h-full">
            <PostCard post={p} />
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 flex justify-center">
        <Link
          href="/energie-verkopen"
          className="inline-flex items-center gap-2 rounded-full bg-sky-soft px-5 py-2.5 text-sm font-medium text-brand"
        >
          <Sun className="size-4" /> Produceert u zelf stroom? Ontdek hoe u die verkoopt
        </Link>
      </Reveal>
    </section>
  );
}
