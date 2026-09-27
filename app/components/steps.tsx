import Image from "next/image";
import { FileText, Headset, Mail, Search } from "lucide-react";
import { asset } from "../lib/asset";
import { Reveal } from "./reveal";
import { Eyebrow, Muted, PillButton } from "./ui";

/**
 * "Wat na uw online aanvraag?" (elexys.be/contact) as a LawnBuster-style bento:
 * photo step, diagram step, photo step and a wide dark closing step.
 */
export function Steps() {
  return (
    <section className="px-2 py-10 sm:px-3">
      <div className="mx-auto max-w-[1400px] rounded-[36px] bg-surface px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <Eyebrow>Hoe het werkt</Eyebrow>
              <h2 className="mt-5 text-4xl leading-[1.1] font-light tracking-[-0.03em] sm:text-5xl">
                <Muted>Van</Muted> aanvraag
                <br />
                <Muted>tot</Muted> opvolging
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="max-w-xs text-sm leading-relaxed text-muted sm:text-right">
                Voelt u een klik tussen Elexys en uw bedrijf? Zo verloopt het na uw online aanvraag.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
            {/* Step 1: tall card with photo */}
            <Reveal className="lg:row-span-2">
              <article className="flex h-full flex-col overflow-hidden rounded-[28px] bg-white">
                <div className="p-7">
                  <p className="text-sm text-subtle">Stap 01</p>
                  <h3 className="mt-3 text-2xl leading-tight font-medium tracking-tight">
                    Contact binnen 24u
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Na uw online aanvraag nemen we op werkdagen binnen de 24 uur contact met u op.
                  </p>
                </div>
                <div className="relative mt-auto min-h-[260px] flex-1">
                  <Image
                    src={asset("/images/contact.jpg")}
                    alt="Accountmanager van Elexys belt een klant terug"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent" />
                </div>
              </article>
            </Reveal>

            {/* Step 2: diagram */}
            <Reveal delay={0.06}>
              <article className="flex h-full flex-col rounded-[28px] bg-white p-7">
                <p className="text-sm text-subtle">Stap 02</p>
                <h3 className="mt-3 text-2xl leading-tight font-medium tracking-tight">
                  Persoonlijke analyse
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Onze expert bekijkt het huidige verbruik van uw bedrijf en uw wensen, om te
                  bepalen welke aanpak het best past.
                </p>
                <div className="relative mt-8 flex items-center justify-between px-2" aria-hidden>
                  <svg className="absolute inset-x-8 top-1/2 h-px -translate-y-1/2" preserveAspectRatio="none" viewBox="0 0 100 1">
                    <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="var(--color-sky)" strokeWidth="1" strokeDasharray="2 2" vectorEffect="non-scaling-stroke" />
                  </svg>
                  {[Mail, Search, FileText].map((Icon, i) => (
                    <span
                      key={i}
                      className={`relative grid place-items-center rounded-full ${
                        i === 1
                          ? "size-20 bg-sky-soft ring-8 ring-sky-soft/50"
                          : "size-12 bg-surface"
                      }`}
                    >
                      <span className={`grid place-items-center rounded-full ${i === 1 ? "size-12 bg-brand text-white" : "text-brand"}`}>
                        <Icon className="size-5" />
                      </span>
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>

            {/* Step 3: offer, with photo */}
            <Reveal delay={0.12}>
              <article className="flex h-full flex-col overflow-hidden rounded-[28px] bg-white">
                <div className="p-7 pb-5">
                  <p className="text-sm text-subtle">Stap 03</p>
                  <h3 className="mt-3 text-2xl leading-tight font-medium tracking-tight">
                    Offerte op maat
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Uw contactpersoon bezorgt zijn of haar advies en een aangepast offertevoorstel.
                  </p>
                </div>
                <div className="relative mx-3 mb-3 mt-auto min-h-[140px] flex-1 overflow-hidden rounded-[20px]">
                  <Image
                    src={asset("/images/industry.jpg")}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </article>
            </Reveal>

            {/* Step 4: wide dark card */}
            <Reveal delay={0.18} className="lg:col-span-2">
              <article className="relative isolate flex h-full flex-col justify-between gap-8 overflow-hidden rounded-[28px] bg-brand-ink p-7 text-white sm:flex-row sm:items-end sm:p-9">
                <div className="absolute -right-20 -bottom-24 -z-10 size-72 rounded-full bg-brand blur-3xl" />
                <div className="max-w-md">
                  <p className="text-sm text-white/50">Stap 04</p>
                  <span className="mt-4 inline-block rounded-full bg-sky px-3 py-1 text-[11px] font-medium text-brand-ink">
                    Tijdens uw hele contract
                  </span>
                  <h3 className="mt-4 text-2xl leading-tight font-medium tracking-tight sm:text-3xl">
                    Eén vast aanspreekpunt
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Dezelfde contactpersoon begeleidt u van de start van uw contract tot en met de
                    opvolging. U hoeft uw situatie nooit opnieuw uit te leggen.
                  </p>
                </div>
                <div className="flex shrink-0 flex-col items-start gap-4 sm:items-end">
                  <span className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/15 backdrop-blur">
                    <span className="grid size-10 place-items-center rounded-full bg-sky text-brand-ink">
                      <Headset className="size-5" />
                    </span>
                    <span className="text-sm">
                      <span className="block font-medium">Uw accountmanager</span>
                      <span className="block text-xs text-white/60">Contract, facturen en verbruik</span>
                    </span>
                  </span>
                  <PillButton href="/contact" variant="sky">
                    Start uw aanvraag
                  </PillButton>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
