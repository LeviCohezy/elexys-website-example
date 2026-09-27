import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, LogIn } from "lucide-react";
import { asset } from "../lib/asset";
import { getIndex } from "../lib/insights";
import { contact } from "../lib/site";
import { chartFromTable } from "./price-chart";
import { Reveal } from "./reveal";

function Sparkline({ values, stroke, fill }: { values: number[]; stroke: string; fill?: string }) {
  const W = 240;
  const H = 72;
  const min = Math.min(...values);
  const span = Math.max(...values) - min || 1;
  const pts = values.map((v, i) => [(i / (values.length - 1)) * W, H - 4 - ((v - min) / span) * (H - 8)]);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join("");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" aria-hidden preserveAspectRatio="none">
      {fill && <path d={`${line}L${W},${H}L0,${H}Z`} fill={fill} />}
      <path d={line} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

/** Startuply-style bento at the top of /insights. */
export function InsightsBento() {
  const belix = getIndex("spot-belix");
  const chart = belix?.tables[0] && chartFromTable(belix.tables[0].table);
  const series = chart?.series[0];
  const months = chart?.x ?? [];
  const points = (series?.values ?? [])
    .map((v, i) => ({ v, m: months[i] }))
    .filter((p): p is { v: number; m: string } => p.v !== null);
  const values = points.map((p) => p.v);
  const hi = points.reduce((a, b) => (b.v > a.v ? b : a), points[0]);
  const lo = points.reduce((a, b) => (b.v < a.v ? b : a), points[0]);

  return (
    <section className="mx-auto max-w-[1240px] px-6 py-20 sm:px-10 sm:py-24">
      <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          <Reveal className="sm:col-span-2">
            <div className="relative isolate flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[28px] p-7 text-white">
              <Image src={asset("/images/trading.jpg")} alt="" fill sizes="(min-width: 1024px) 60vw, 100vw" className="-z-10 object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-ink/85 via-brand-ink/25 to-transparent" />
              <div className="grid items-end gap-4 sm:grid-cols-2">
                <h2 className="text-3xl leading-[1.1] font-light tracking-[-0.03em]">
                  Dagelijks <span className="text-sky">opgevolgd</span>
                </h2>
                <p className="text-sm leading-relaxed text-white/80">
                  We informeren u proactief over opportuniteiten, prijsontwikkelingen en manieren om
                  aankooprisico’s te beperken.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="h-full">
            <div className="flex h-full min-h-[240px] flex-col justify-between rounded-[28px] bg-brand-ink p-7 text-white">
              <div className="relative h-20" aria-hidden>
                <svg viewBox="0 0 200 80" className="absolute inset-0 size-full" preserveAspectRatio="none">
                  <path d="M10,60 C50,10 80,70 110,35 S170,5 190,25" fill="none" stroke="var(--color-sky)" strokeWidth="1.5" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" />
                </svg>
                {[
                  { label: "ICE", x: "2%", y: "52%" },
                  { label: "Belpex", x: "44%", y: "30%" },
                  { label: "TTF", x: "80%", y: "4%" },
                ].map((c) => (
                  <span
                    key={c.label}
                    style={{ left: c.x, top: c.y }}
                    className="absolute rounded-full bg-white px-3 py-1.5 text-xs font-medium text-brand-ink shadow-lg"
                  >
                    {c.label}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-xl leading-snug font-medium tracking-tight">
                  Forward <span className="text-white/50">en</span> spot, voor stroom <span className="text-white/50">en</span> gas
                </p>
                <p className="mt-2 text-sm text-white/60">8 indexen, met grafiek en tabel.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="h-full">
            <Link
              href="/insights/spot-belix"
              className="group flex h-full min-h-[240px] flex-col justify-between rounded-[28px] bg-sky-soft p-7"
            >
              <p className="text-xl leading-snug font-medium tracking-tight text-ink">
                Spot Belix
                <br />
                <span className="text-muted">{series?.label}</span>
              </p>
              {values.length > 1 && (
                <div className="mt-4">
                  <Sparkline values={values} stroke="var(--color-brand)" />
                  <div className="mt-3 flex justify-between text-xs text-muted">
                    <span>
                      Hoog {hi.m} <strong className="font-medium text-ink">€ {hi.v.toFixed(0)}</strong>
                    </span>
                    <span>
                      Laag {lo.m} <strong className="font-medium text-ink">€ {lo.v.toFixed(0)}</strong>
                    </span>
                  </div>
                </div>
              )}
            </Link>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4">
          <Reveal delay={0.08} className="flex-1">
            <a
              href={contact.portal}
              className="group flex h-full min-h-[320px] flex-col justify-between rounded-[28px] bg-brand-ink p-7 text-white"
            >
              <div>
                <p className="text-xl font-medium tracking-tight">my elexys</p>
                <p className="mt-2 text-sm text-white/60">
                  Het klantenportaal voor uw verbruik, facturen en contracten.
                </p>
              </div>
              {/* Stylised portal preview, not a screenshot */}
              <div className="mt-6 rounded-2xl bg-white p-4 text-ink shadow-2xl shadow-black/20" aria-hidden>
                <p className="text-[10px] text-muted">Spot Belix · {series?.label}</p>
                <p className="mt-1 text-2xl font-medium tracking-tight">
                  € {values.at(-1)?.toFixed(2).replace(".", ",")}
                </p>
                <div className="mt-3">
                  <Sparkline values={values} stroke="var(--color-brand)" fill="color-mix(in srgb, var(--color-sky) 25%, transparent)" />
                </div>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sky">
                <LogIn className="size-4" /> Inloggen
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.14}>
            <Link
              href="/insights/newsletter"
              className="group flex min-h-[140px] flex-col justify-between rounded-[28px] bg-brand p-7 text-white"
            >
              <span className="self-end grid size-9 place-items-center rounded-full bg-white text-brand transition-transform group-hover:rotate-45">
                <ArrowUpRight className="size-4" />
              </span>
              <p className="text-xl leading-snug font-medium tracking-tight">
                Schrijf u in op
                <br />
                de nieuwsbrief
              </p>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
