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
      <div className="relative isolate min-h-[640px] overflow-hidden rounded-[28px] sm:min-h-[760px] sm:rounded-[36px] lg:h-[calc(100svh-24px)] lg:max-h-[920px]">
        <Image
          src="/images/hero.jpg"
          alt="High-voltage transmission lines crossing an open landscape under a clear blue sky"
          fill
          preload
          sizes="100vw"
          className="animate-hero-zoom -z-20 object-cover object-[70%_center]"
        />
        {/* Brand-tinted legibility wash */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a1a4a]/65 via-[#0a1a4a]/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-brand-ink/40 to-transparent" />

        <Nav />

        <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-between px-6 pt-36 pb-8 sm:px-10 sm:pt-44 lg:pt-52">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow tone="dark">Wholesale energy for suppliers</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-7 text-[44px] leading-[1.02] font-medium tracking-[-0.035em] text-white sm:text-7xl lg:text-[88px]">
                The power behind
                <br />
                <span className="font-light text-sky">your power.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-md text-[15px] leading-relaxed text-white/80 sm:text-base">
                Elexys sources, balances and delivers electricity and gas to
                licensed energy suppliers — so you can focus on your customers
                while we handle the market.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-9 flex flex-wrap items-center gap-4">
              <PillButton href="#contact">Request a supply quote</PillButton>
              <Link
                href="#solutions"
                className="text-sm font-medium text-white/85 underline decoration-white/30 underline-offset-8 transition-colors hover:text-white hover:decoration-white"
              >
                Explore our solutions
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-6 lg:mt-0 lg:flex-row lg:items-end">
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
                    New
                  </span>
                  <p className="mt-2 text-xl font-light text-white">
                    Green Supply Pro
                  </p>
                  <p className="mt-1 text-xs text-white/70">
                    Certified renewable volumes, bundled with GoOs
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
                    Energy suppliers trust Elexys for their wholesale position
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
        Supplying suppliers across Belgium &amp; the Benelux
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
          <Eyebrow>Why Elexys</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-4xl leading-[1.08] font-medium tracking-[-0.03em] sm:text-5xl">
            Smart sourcing, balanced portfolios.
            <br />
            <Muted>Delivered without friction.</Muted>
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        <Reveal className="h-full">
          <article className="flex h-full min-h-[380px] flex-col justify-between rounded-[28px] bg-surface p-8">
            <div className="flex items-start justify-between gap-6">
              <h3 className="text-2xl leading-tight font-medium tracking-tight">
                Day-ahead to multi-year hedging
              </h3>
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-brand">
                <Zap className="size-5" />
              </span>
            </div>
            <p className="max-w-[260px] text-sm leading-relaxed text-muted">
              Lock in volumes on the forward curve or float with spot — tailored
              to the risk appetite of your book.
            </p>
            <p className="flex items-baseline gap-3">
              <span className="text-5xl font-medium tracking-tight text-ink">
                24/7
              </span>
              <span className="text-sm font-medium text-ink">
                Balancing desk
              </span>
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.08} className="h-full">
          <article className="relative isolate flex h-full min-h-[380px] flex-col justify-between overflow-hidden rounded-[28px] p-8 text-white">
            <Image
              src="/images/trading.jpg"
              alt="Energy traders monitoring price curves"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="-z-10 object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-ink/75 via-brand-ink/20 to-brand-ink/40" />
            <div>
              <h3 className="text-2xl leading-tight font-medium tracking-tight">
                Portfolio
                <br />
                optimisation
              </h3>
              <p className="mt-3 max-w-[240px] text-sm leading-relaxed text-white/80">
                Continuous re-balancing of your position against live market
                signals.
              </p>
            </div>
            <span className="self-start rounded-full bg-white px-4 py-2 text-xs font-medium text-ink">
              <strong className="font-semibold">Real-time</strong> positions
            </span>
          </article>
        </Reveal>

        <Reveal delay={0.16} className="h-full">
          <article className="flex h-full min-h-[380px] flex-col justify-between rounded-[28px] bg-brand p-8 text-white">
            <div>
              <p className="text-5xl font-medium tracking-tight">99.98%</p>
              <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-white/75">
                Nomination accuracy across every delivery day last year.
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
  { label: "Baseload", value: 45, color: "var(--color-brand)" },
  { label: "Renewables", value: 30, color: "var(--color-sky)" },
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
          <Muted>Comprehensive</Muted> wholesale solutions{" "}
          <Muted>for</Muted> licensed energy suppliers
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <ImageTile
            src="/images/engineers.jpg"
            alt="Engineers reviewing a high-voltage substation"
            tag="Sourcing"
            title="Electricity & gas procurement"
          />
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-7">
          <ImageTile
            src="/images/offshore.jpg"
            alt="Offshore wind farm in open sea"
            tag="Renewables"
            title="Green PPAs & Guarantees of Origin"
          />
        </Reveal>
        <Reveal className="lg:col-span-7">
          <ImageTile
            src="/images/solar.jpg"
            alt="Solar park with battery storage"
            tag="Flexibility"
            title="Balancing, nominations & storage"
          />
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-5">
          <article className="flex h-full min-h-[340px] flex-col rounded-[28px] border border-line p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Typical portfolio mix</p>
              <span className="text-xs text-muted">Last 12 months</span>
            </div>
            <div className="relative flex flex-1 items-center justify-center py-4">
              <Donut />
              <div className="absolute text-center">
                <p className="text-3xl font-medium tracking-tight">1.8</p>
                <p className="text-xs text-muted">TWh supplied</p>
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
            Transparent <Muted>supply</Muted>
            <br />
            <Muted>for</Muted> every book
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted lg:justify-self-end">
            Two clear contract structures, priced openly against the market —
            no hidden margins, no surprise settlements.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        <Reveal className="h-full">
          <article className="flex h-full flex-col rounded-[28px] bg-brand p-8 text-white sm:p-10">
            <p className="text-2xl font-medium text-sky">Fixed Supply</p>
            <p className="mt-1 text-sm text-white/60">
              Most chosen by growing suppliers
            </p>
            <p className="mt-10 flex items-baseline gap-2">
              <span className="text-6xl font-light tracking-tight">Fixed</span>
              <span className="text-sm text-white/60">/ MWh, up to 5 years</span>
            </p>
            <Link
              href="#contact"
              className="mt-8 rounded-full bg-sky py-3.5 text-center text-sm font-medium text-brand-ink transition-colors hover:bg-white"
            >
              Get a fixed quote
            </Link>
            <ul className="mt-8 space-y-3 border-t border-white/15 pt-8 text-sm text-white/85">
              {[
                "Forward-hedged volumes on your load profile",
                "Shape & balancing risk carried by Elexys",
                "Monthly settlement, one consolidated invoice",
                "Dedicated account trader",
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
            <p className="text-2xl font-medium text-ink">Indexed Supply</p>
            <p className="mt-1 text-sm text-subtle">
              For experienced portfolio managers
            </p>
            <p className="mt-10 flex items-baseline gap-2">
              <span className="text-6xl font-light tracking-tight text-ink">
                Spot+
              </span>
              <span className="text-sm text-muted">
                / MWh, EPEX &amp; TTF linked
              </span>
            </p>
            <Link
              href="#contact"
              className="mt-8 rounded-full bg-brand-ink py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-brand"
            >
              Choose indexed
            </Link>
            <ul className="mt-8 space-y-3 border-t border-line pt-8 text-sm text-muted">
              {[
                "Click-and-fix tranches at your own timing",
                "Full transparency on market index & fee",
                "API access to positions and nominations",
                "Optional green certificate bundling",
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
    title: "Direct market access",
    body: "Membership on EPEX, ICE Endex and the Belgian balancing market, without the overhead of your own trading floor.",
    icon: LineChart,
  },
  {
    n: 2,
    title: "Speed of execution",
    body: "Quotes within the hour and intraday adjustments handled by a desk that never sleeps.",
    icon: Clock3,
  },
  {
    n: 3,
    title: "Risk under control",
    body: "Credit, volume and price risk structured so your margins stay predictable through any market cycle.",
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
              Powering a <Muted>smarter</Muted> market with{" "}
              <Muted>reliable</Muted> wholesale supply
            </h2>
            <p className="mt-5 text-center text-[15px] text-muted">
              Everything a supplier needs from the wholesale side — in one
              partner.
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
            Meet the desk behind
            <br />
            <Muted>your supply</Muted>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <PillButton href="#contact" variant="brand">
            Meet our team
          </PillButton>
        </Reveal>
      </div>

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="max-w-md text-lg leading-relaxed text-ink">
            Traders, analysts and grid specialists who have spent their careers
            on the wholesale side of the Belgian energy market.
          </p>
          <h3 className="mt-10 text-sm font-medium tracking-[0.14em] text-subtle uppercase">
            Why suppliers choose Elexys
          </h3>
          <ul className="mt-6 space-y-5">
            {[
              {
                t: "Market experts",
                d: "Decades of combined experience in power & gas trading.",
              },
              {
                t: "Built for suppliers",
                d: "We never compete for your end customers — we only serve you.",
              },
              {
                t: "Always reachable",
                d: "A named account trader and a 24/7 balancing line.",
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
              alt="The Elexys trading and operations team"
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
                Wholesale electricity and gas for licensed energy suppliers.
                Talk to our desk for a tailored supply proposal.
              </p>
            </div>
            <div className="lg:pt-4">
              <p className="text-lg font-medium">Request a supply quote</p>
              <p className="mt-1 text-sm text-white/60">
                Share your volumes — we reply within one business day.
              </p>
              <form className="mt-6 flex gap-2 rounded-full bg-white/10 p-1.5 ring-1 ring-white/15 focus-within:ring-sky">
                <label htmlFor="email" className="sr-only">
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your work email"
                  className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white placeholder:text-white/45 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-sky px-5 py-2.5 text-sm font-medium text-brand-ink transition-colors hover:bg-white"
                >
                  Contact us
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-6 border-t border-white/15 pt-8 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
            <nav className="flex flex-wrap gap-x-7 gap-y-2">
              <Link href="#solutions" className="hover:text-white">Solutions</Link>
              <Link href="#supply" className="hover:text-white">Supply models</Link>
              <Link href="#team" className="hover:text-white">Team</Link>
              <Link href="#" className="hover:text-white">Careers</Link>
            </nav>
            <a href="mailto:desk@elexys.be" className="font-medium text-white">
              desk@elexys.be
            </a>
            <nav className="flex flex-wrap gap-x-7 gap-y-2">
              <Link href="#" className="hover:text-white">Market data</Link>
              <Link href="#" className="hover:text-white">Support</Link>
              <Link href="#contact" className="hover:text-white">Contact</Link>
            </nav>
          </div>

          <div className="mt-14 flex flex-col gap-3 text-xs text-white/45 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} Elexys. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white">Terms &amp; Conditions</Link>
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
