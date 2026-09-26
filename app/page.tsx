import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Check,
  Clock3,
  Gauge,
  Headset,
  Leaf,
  LineChart,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Nav } from "./components/nav";
import { QuoteForm } from "./components/quote-form";
import { Reveal } from "./components/reveal";
import { Eyebrow, Muted, PillButton } from "./components/ui";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Partners />
      <Features />
      <Solutions />
      <SupplyModels />
      <Pillars />
      <Team />
      <Footer />
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
          src="/images/hero.jpg"
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
              <Eyebrow tone="dark">Groothandel in energie voor leveranciers</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-7 text-[44px] leading-[1.02] font-medium tracking-[-0.035em] text-white sm:text-7xl lg:text-[88px]">
                De energie achter
                <br />
                <span className="font-light text-sky">uw energie.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-md text-[15px] leading-relaxed text-white/80 sm:text-base">
                Elexys koopt, balanceert en levert elektriciteit en gas aan
                vergunde energieleveranciers — zodat u zich op uw klanten kunt
                focussen, terwijl wij de markt opvolgen.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-9 flex flex-wrap items-center gap-4">
              <PillButton href="#contact">Vraag een leveringsofferte aan</PillButton>
              <Link
                href="#solutions"
                className="text-sm font-medium text-white/85 underline decoration-white/30 underline-offset-8 transition-colors hover:text-white hover:decoration-white"
              >
                Ontdek onze oplossingen
              </Link>
            </Reveal>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            {/* Glass product card, AeroWind-style */}
            <Reveal delay={0.3} className="hidden sm:block">
              <div className="flex items-center gap-4 rounded-3xl border border-white/25 bg-white/10 p-2 pr-8 backdrop-blur-xl">
                <div className="relative h-24 w-36 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/offshore.jpg"
                    alt=""
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="rounded-full bg-sky px-2.5 py-0.5 text-[11px] font-medium text-brand-ink">
                    Nieuw
                  </span>
                  <p className="mt-2 text-xl font-light text-white">
                    Green Supply Pro
                  </p>
                  <p className="mt-1 text-xs text-white/70">
                    Gecertificeerde hernieuwbare volumes, inclusief garanties van oorsprong
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Stat card, Ecoriz-style */}
            <Reveal delay={0.38}>
              <div className="flex items-center gap-4 rounded-3xl bg-white p-2 pr-7 shadow-2xl shadow-brand-ink/25">
                <div className="relative h-24 w-32 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/trading.jpg"
                    alt=""
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-3xl font-medium tracking-tight text-ink">
                    40+
                  </p>
                  <p className="mt-1 max-w-[190px] text-xs leading-snug text-muted">
                    energieleveranciers vertrouwen op Elexys voor hun groothandelspositie
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
/* Partner logo strip                                                  */
/* ------------------------------------------------------------------ */

const partners = [
  { name: "Voltara", icon: Zap },
  { name: "NordGrid", icon: Activity },
  { name: "Lumen Energie", icon: Leaf },
  { name: "Ampéra", icon: Gauge },
  { name: "Helios Supply", icon: LineChart },
  { name: "Brabant Power", icon: ShieldCheck },
];

function Partners() {
  const row = [...partners, ...partners];
  return (
    <section className="py-14 sm:py-16">
      <p className="text-center text-xs font-medium tracking-[0.18em] text-subtle uppercase">
        Wij beleveren leveranciers in heel België en de Benelux
      </p>
      <div className="relative mx-auto mt-8 max-w-[1240px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-16 pr-16">
          {row.map(({ name, icon: Icon }, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-lg font-medium tracking-tight whitespace-nowrap text-ink/45"
              aria-hidden={i >= partners.length}
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
/* Features bento                                                      */
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
            Slimme inkoop, gebalanceerde portefeuilles.
            <br />
            <Muted>Zorgeloos geleverd.</Muted>
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        <Reveal className="h-full">
          <article className="flex h-full min-h-[380px] flex-col justify-between rounded-[28px] bg-surface p-8">
            <div className="flex items-start justify-between gap-6">
              <h3 className="text-2xl leading-tight font-medium tracking-tight">
                Van day-ahead tot meerjarige indekking
              </h3>
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-brand">
                <Zap className="size-5" />
              </span>
            </div>
            <p className="max-w-[260px] text-sm leading-relaxed text-muted">
              Leg volumes vast op de forwardcurve of volg de spotmarkt —
              afgestemd op de risicobereidheid van uw portefeuille.
            </p>
            <p className="flex items-baseline gap-3">
              <span className="text-5xl font-medium tracking-tight text-ink">
                24/7
              </span>
              <span className="text-sm font-medium text-ink">
                Balanceringsdesk
              </span>
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.08} className="h-full">
          <article className="relative isolate flex h-full min-h-[380px] flex-col justify-between overflow-hidden rounded-[28px] p-8 text-white">
            <Image
              src="/images/trading.jpg"
              alt="Energietraders volgen prijscurves op"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="-z-10 object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-ink/75 via-brand-ink/20 to-brand-ink/40" />
            <div>
              <h3 className="text-2xl leading-tight font-medium tracking-tight">
                Portefeuille-
                <br />
                optimalisatie
              </h3>
              <p className="mt-3 max-w-[240px] text-sm leading-relaxed text-white/80">
                Continue herbalancering van uw positie op basis van live
                marktsignalen.
              </p>
            </div>
            <span className="self-start rounded-full bg-white px-4 py-2 text-xs font-medium text-ink">
              <strong className="font-semibold">Realtime</strong> posities
            </span>
          </article>
        </Reveal>

        <Reveal delay={0.16} className="h-full">
          <article className="flex h-full min-h-[380px] flex-col justify-between rounded-[28px] bg-brand p-8 text-white">
            <div>
              <p className="text-5xl font-medium tracking-tight">99,98%</p>
              <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-white/75">
                Nauwkeurige nominaties op elke leveringsdag van vorig jaar.
              </p>
            </div>
            <div className="flex h-36 items-end gap-2.5" aria-hidden>
              {bars.map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`flex-1 rounded-lg ${
                    i % 2 === 0 ? "bg-white" : "bg-sky/70"
                  }`}
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

function ImageTile({
  src,
  alt,
  tag,
  title,
  className = "",
}: {
  src: string;
  alt: string;
  tag: string;
  title: string;
  className?: string;
}) {
  return (
    <article
      className={`group relative isolate flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[28px] p-5 text-white sm:min-h-[340px] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="-z-10 object-cover transition-transform duration-[1200ms] ease-out-soft group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent" />
      <span className="self-start rounded-full bg-sky px-3.5 py-1.5 text-xs font-medium text-brand-ink">
        {tag}
      </span>
      <div className="flex items-end justify-between gap-4">
        <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
          {title}
        </h3>
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur-md transition-colors group-hover:bg-white group-hover:text-brand">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </article>
  );
}

const mix = [
  { label: "Basislast", value: 45, color: "var(--color-brand)" },
  { label: "Hernieuwbaar", value: 30, color: "var(--color-sky)" },
  { label: "Gas", value: 15, color: "var(--color-brand-ink)" },
  { label: "Spot", value: 10, color: "#dfe3ec" },
];

function Donut() {
  const r = 70;
  const c = 2 * Math.PI * r;
  const segments = mix.map((m, i) => ({
    ...m,
    len: (m.value / 100) * c,
    offset: (mix.slice(0, i).reduce((sum, s) => sum + s.value, 0) / 100) * c,
  }));
  return (
    <svg viewBox="0 0 200 200" className="size-48 -rotate-90 sm:size-56">
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
    <section
      id="solutions"
      className="mx-auto max-w-[1240px] scroll-mt-8 px-6 py-20 sm:px-10 sm:py-24"
    >
      <Reveal>
        <h2 className="max-w-3xl text-4xl leading-[1.1] font-light tracking-[-0.03em] sm:text-5xl">
          <Muted>Complete</Muted> groothandelsoplossingen{" "}
          <Muted>voor</Muted> vergunde energieleveranciers
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <ImageTile
            src="/images/engineers.jpg"
            alt="Ingenieurs inspecteren een hoogspanningsstation"
            tag="Inkoop"
            title="Aankoop van elektriciteit & gas"
          />
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-7">
          <ImageTile
            src="/images/offshore.jpg"
            alt="Offshore windpark op open zee"
            tag="Hernieuwbaar"
            title="Groene PPA’s & garanties van oorsprong"
          />
        </Reveal>
        <Reveal className="lg:col-span-7">
          <ImageTile
            src="/images/solar.jpg"
            alt="Zonnepark met batterijopslag"
            tag="Flexibiliteit"
            title="Balancering, nominaties & opslag"
          />
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-5">
          <article className="flex h-full min-h-[340px] flex-col rounded-[28px] border border-line p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Typische portefeuillemix</p>
              <span className="text-xs text-muted">Laatste 12 maanden</span>
            </div>
            <div className="relative flex flex-1 items-center justify-center py-4">
              <Donut />
              <div className="absolute text-center">
                <p className="text-3xl font-medium tracking-tight">1,8</p>
                <p className="text-xs text-muted">TWh geleverd</p>
              </div>
            </div>
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-muted">
              {mix.map((m) => (
                <li key={m.label} className="flex items-center gap-1.5">
                  <span
                    className="size-2 rounded-full"
                    style={{ background: m.color }}
                  />
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
/* Supply models                                                       */
/* ------------------------------------------------------------------ */

function SupplyModels() {
  return (
    <section
      id="supply"
      className="mx-auto max-w-[1240px] scroll-mt-8 px-6 py-20 sm:px-10 sm:py-24"
    >
      <div className="grid items-end gap-6 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-4xl leading-[1.1] font-light tracking-[-0.03em] sm:text-5xl">
            Transparante <Muted>levering</Muted>
            <br />
            <Muted>voor</Muted> elke portefeuille
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted lg:justify-self-end">
            Twee heldere contractvormen, open geprijsd tegenover de markt —
            geen verborgen marges, geen verrassingen bij de afrekening.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        <Reveal className="h-full">
          <article className="flex h-full flex-col rounded-[28px] bg-brand p-8 text-white sm:p-10">
            <p className="text-2xl font-medium text-sky">Vaste levering</p>
            <p className="mt-1 text-sm text-white/60">
              Meest gekozen door groeiende leveranciers
            </p>
            <p className="mt-10 flex items-baseline gap-2">
              <span className="text-6xl font-light tracking-tight">Vast</span>
              <span className="text-sm text-white/60">/ MWh, tot 5 jaar</span>
            </p>
            <Link
              href="#contact"
              className="mt-8 rounded-full bg-sky py-3.5 text-center text-sm font-medium text-brand-ink transition-colors hover:bg-white"
            >
              Vraag een vaste offerte aan
            </Link>
            <ul className="mt-8 space-y-3 border-t border-white/15 pt-8 text-sm text-white/85">
              {[
                "Vooraf ingedekte volumes op uw verbruiksprofiel",
                "Profiel- en onevenwichtsrisico gedragen door Elexys",
                "Maandelijkse afrekening, één geconsolideerde factuur",
                "Toegewijde accounttrader",
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
            <p className="text-2xl font-medium text-ink">Geïndexeerde levering</p>
            <p className="mt-1 text-sm text-subtle">
              Voor ervaren portefeuillebeheerders
            </p>
            <p className="mt-10 flex items-baseline gap-2">
              <span className="text-6xl font-light tracking-tight text-ink">
                Spot+
              </span>
              <span className="text-sm text-muted">
                / MWh, gekoppeld aan EPEX &amp; TTF
              </span>
            </p>
            <Link
              href="#contact"
              className="mt-8 rounded-full bg-brand-ink py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-brand"
            >
              Kies geïndexeerd
            </Link>
            <ul className="mt-8 space-y-3 border-t border-line pt-8 text-sm text-muted">
              {[
                "Click-and-fix: leg tranches vast wanneer het u past",
                "Volledige transparantie over marktindex en vergoeding",
                "API-toegang tot posities en nominaties",
                "Optioneel gebundeld met groenestroomcertificaten",
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
/* Pillars (numbered cards on grey panel)                              */
/* ------------------------------------------------------------------ */

const pillars = [
  {
    n: 1,
    title: "Rechtstreekse markttoegang",
    body: "Lid van EPEX, ICE Endex en de Belgische balanceringsmarkt, zonder de kosten van een eigen tradingvloer.",
    icon: LineChart,
  },
  {
    n: 2,
    title: "Snelle uitvoering",
    body: "Offertes binnen het uur en intraday-bijsturingen door een desk die nooit slaapt.",
    icon: Clock3,
  },
  {
    n: 3,
    title: "Risico onder controle",
    body: "Krediet-, volume- en prijsrisico zo gestructureerd dat uw marges voorspelbaar blijven, in elke marktcyclus.",
    icon: ShieldCheck,
  },
];

function Pillars() {
  return (
    <section className="px-2 py-10 sm:px-3">
      <div className="mx-auto max-w-[1400px] rounded-[36px] bg-surface px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-center text-4xl leading-[1.1] font-light tracking-[-0.03em] sm:text-5xl">
              Een <Muted>slimmere</Muted> markt, gedragen door{" "}
              <Muted>betrouwbare</Muted> groothandelslevering
            </h2>
            <p className="mt-5 text-center text-[15px] text-muted">
              Alles wat een leverancier nodig heeft aan de groothandelskant —
              bij één partner.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08} className="h-full">
                <article className="flex h-full flex-col rounded-[24px] bg-white p-7">
                  <span className="grid size-7 place-items-center rounded-full bg-brand text-xs font-medium text-white">
                    {p.n}
                  </span>
                  <h3 className="mt-6 text-xl font-medium tracking-tight text-brand">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {p.body}
                  </p>
                  <p.icon
                    className="mt-10 size-9 text-ink/70"
                    strokeWidth={1.25}
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Team                                                                */
/* ------------------------------------------------------------------ */

function Team() {
  return (
    <section
      id="team"
      className="mx-auto max-w-[1240px] scroll-mt-8 px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <Reveal>
          <h2 className="text-4xl leading-[1.1] font-light tracking-[-0.03em] sm:text-5xl">
            Maak kennis met de desk
            <br />
            <Muted>achter uw levering</Muted>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <PillButton href="#contact" variant="brand">
            Leer ons team kennen
          </PillButton>
        </Reveal>
      </div>

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="max-w-md text-lg leading-relaxed text-ink">
            Traders, analisten en netspecialisten met een volledige loopbaan
            aan de groothandelskant van de Belgische energiemarkt.
          </p>
          <h3 className="mt-10 text-sm font-medium tracking-[0.14em] text-subtle uppercase">
            Waarom leveranciers voor Elexys kiezen
          </h3>
          <ul className="mt-6 space-y-5">
            {[
              {
                t: "Marktexperts",
                d: "Decennia gecombineerde ervaring in stroom- en gastrading.",
              },
              {
                t: "Gebouwd voor leveranciers",
                d: "We concurreren nooit om uw eindklanten — we werken enkel voor u.",
              },
              {
                t: "Altijd bereikbaar",
                d: "Een vaste accounttrader en een 24/7 balanceringslijn.",
              },
            ].map((item) => (
              <li key={item.t} className="flex gap-4">
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-sky-soft text-brand">
                  <Check className="size-4" />
                </span>
                <p className="text-sm leading-relaxed text-muted">
                  <strong className="font-medium text-ink">{item.t}:</strong>{" "}
                  {item.d}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <Image
              src="/images/team.jpg"
              alt="Het trading- en operationsteam van Elexys"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-full bg-white/90 py-2 pr-5 pl-2 backdrop-blur">
              <span className="grid size-9 place-items-center rounded-full bg-brand text-white">
                <Headset className="size-4" />
              </span>
              <span className="text-sm font-medium">
                Desk online · 24/7
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer / final CTA                                                  */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer id="contact" className="p-2 sm:p-3">
      <div className="relative isolate overflow-hidden rounded-[28px] bg-brand-ink px-6 pt-16 pb-8 text-white sm:rounded-[36px] sm:px-10 sm:pt-20">
        <div className="absolute -top-40 -right-40 -z-10 size-[520px] rounded-full bg-brand blur-3xl" />
        <div className="absolute -bottom-60 left-1/4 -z-10 size-[420px] rounded-full bg-sky/25 blur-3xl" />

        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <Image
                src="/brand/elexys-logo-white.png"
                alt="Elexys — Think smart energy"
                width={390}
                height={144}
                className="h-20 w-auto sm:h-28"
              />
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
                Groothandel in elektriciteit en gas voor vergunde
                energieleveranciers. Contacteer onze desk voor een
                leveringsvoorstel op maat.
              </p>
            </div>
            <div className="lg:pt-4">
              <p className="text-lg font-medium">Vraag een leveringsofferte aan</p>
              <p className="mt-1 text-sm text-white/60">
                Deel uw volumes — we antwoorden binnen één werkdag.
              </p>
              <QuoteForm />
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-6 border-t border-white/15 pt-8 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
            <nav className="flex flex-wrap gap-x-7 gap-y-2">
              <Link href="#solutions" className="hover:text-white">Oplossingen</Link>
              <Link href="#supply" className="hover:text-white">Leveringsmodellen</Link>
              <Link href="#team" className="hover:text-white">Team</Link>
              <Link href="#" className="hover:text-white">Vacatures</Link>
            </nav>
            <a href="mailto:desk@elexys.be" className="font-medium text-white">
              desk@elexys.be
            </a>
            <nav className="flex flex-wrap gap-x-7 gap-y-2">
              <Link href="#" className="hover:text-white">Marktdata</Link>
              <Link href="#" className="hover:text-white">Ondersteuning</Link>
              <Link href="#contact" className="hover:text-white">Contact</Link>
            </nav>
          </div>

          <div className="mt-14 flex flex-col gap-3 text-xs text-white/45 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} Elexys. Alle rechten voorbehouden.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white">Algemene voorwaarden</Link>
              <Link href="#" className="hover:text-white">Privacybeleid</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
