import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Flame, Mail, Zap } from "lucide-react";
import { CtaBand } from "../components/cta-band";
import { PageHero } from "../components/page-hero";
import { chartFromTable } from "../components/price-chart";
import { Reveal } from "../components/reveal";
import { Eyebrow, Muted } from "../components/ui";
import { getIndices, type Index } from "../lib/insights";

export const metadata: Metadata = {
  title: "Insights: marktinformatie",
  description:
    "Volg de marktprijzen die aan de basis liggen van uw energiecontract: ICE Endex, Belpex, Belix, TTF, ZTP en solar imbalance.",
};

/** Most recent value of the first series, for the overview cards. */
function latest(index: Index) {
  const chart = index.tables[0] && chartFromTable(index.tables[0].table);
  if (!chart) return null;
  const s = chart.series[0];
  const i = chart.kind === "bar" ? 0 : s.values.findLastIndex((v) => v !== null);
  const v = s.values[i];
  return v === null || v === undefined
    ? null
    : { value: v, label: chart.kind === "bar" ? chart.x[0] : `${s.label !== "Vandaag" ? s.label + " · " : ""}${chart.x[i]}`, unit: chart.unit };
}

export default function InsightsPage() {
  const indices = getIndices();
  const groups = [
    { name: "Elektriciteit" as const, icon: Zap },
    { name: "Gas" as const, icon: Flame },
  ];

  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Marktinformatie <span className="font-light text-sky">voor uw prijsformule</span>
          </>
        }
        intro="Deze indexen liggen aan de basis van vaste en variabele energieprijzen. Volg hun evolutie en kies het juiste moment om uw prijs vast te leggen."
        image="/images/trading.jpg"
        imageAlt="Energietraders volgen prijscurves op"
        crumbs={[{ label: "Insights" }]}
      />

      {groups.map((g) => (
        <section key={g.name} className="mx-auto max-w-[1240px] px-6 py-16 sm:px-10 sm:py-20">
          <Reveal>
            <h2 className="flex items-center gap-3 text-4xl leading-[1.1] font-light tracking-[-0.03em] sm:text-5xl">
              <span className="grid size-12 place-items-center rounded-full bg-sky-soft text-brand">
                <g.icon className="size-5" />
              </span>
              {g.name}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {indices
              .filter((i) => i.group === g.name)
              .map((index, n) => {
                const l = latest(index);
                return (
                  <Reveal key={index.slug} delay={(n % 3) * 0.06} className="h-full">
                    <Link
                      href={`/insights/${index.slug}`}
                      className="group flex h-full flex-col rounded-[24px] border border-line p-7 transition-colors hover:border-sky"
                    >
                      <span
                        className={`self-start rounded-full px-3 py-1 text-[11px] font-medium ${
                          index.basis === "vast" ? "bg-brand text-white" : "bg-sky-soft text-brand"
                        }`}
                      >
                        Basis voor {index.basis === "vast" ? "vaste" : "variabele"} prijzen
                      </span>
                      <h3 className="mt-5 text-xl font-medium tracking-tight">{index.name}</h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{index.intro}</p>
                      {l && (
                        <p className="mt-6 flex items-baseline gap-2 border-t border-line pt-5">
                          <span className="text-3xl font-medium tracking-tight text-ink">
                            {l.value.toLocaleString("nl-BE", { maximumFractionDigits: 2 })}
                          </span>
                          <span className="text-xs text-muted">
                            {l.unit} · {l.label}
                          </span>
                        </p>
                      )}
                      <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-medium text-brand">
                        Grafiek en tabel
                        <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
          </div>
        </section>
      ))}

      {/* Newsletter + market updates */}
      <section className="mx-auto max-w-[1240px] px-6 py-10 sm:px-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal className="h-full">
            <Link
              href="/insights/newsletter"
              className="group flex h-full flex-col rounded-[28px] bg-brand-ink p-8 text-white"
            >
              <Mail className="size-7 text-sky" />
              <h3 className="mt-6 text-2xl font-light tracking-tight">Blijf de energiemarkt een stap voor</h3>
              <p className="mt-2 text-sm text-white/65">
                Schrijf u gratis in op de nieuwsbrief: marktupdates, praktische tips en inzichten van
                energie-experts.
              </p>
              <span className="mt-auto flex items-center gap-1.5 pt-8 text-sm font-medium text-sky">
                Inschrijven <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </Reveal>
          <Reveal delay={0.06} className="h-full">
            <Link
              href="/market-updates"
              className="group flex h-full flex-col rounded-[28px] bg-surface p-8"
            >
              <Eyebrow>Maandelijks</Eyebrow>
              <h3 className="mt-6 text-2xl font-light tracking-tight">
                Market updates <Muted>als pdf</Muted>
              </h3>
              <p className="mt-2 text-sm text-muted">
                Elke maand een overzicht van de evolutie op de energiemarkt.
              </p>
              <span className="mt-auto flex items-center gap-1.5 pt-8 text-sm font-medium text-brand">
                Bekijk de updates <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </Reveal>
        </div>
        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-subtle">
          De marktprijzen zijn gebaseerd op de prijzen gepubliceerd door ICE Endex en EEX, en worden
          door Elexys aangeboden ‘zoals ze zijn’, zonder enige garantie. De prijzen zijn louter
          indicatief. Op deze site gaat het om een momentopname van elexys.be op 27/09/2026.
        </p>
      </section>

      <CtaBand
        title={
          <>
            Het juiste moment <span className="text-sky">om vast te leggen?</span>
          </>
        }
        text="Wilt u meer weten over de mogelijkheden om uw energieprijs vast te leggen? Uw accountmanager volgt de markt dagelijks op."
      />
    </main>
  );
}
