import type { Metadata } from "next";
import { Download, FileText } from "lucide-react";
import { CtaBand } from "../components/cta-band";
import { PageHero } from "../components/page-hero";
import { Reveal } from "../components/reveal";
import { Muted } from "../components/ui";
import { getMarketUpdates } from "../lib/market-updates";

export const metadata: Metadata = {
  title: "Uw maandelijkse marktupdates",
  description:
    "Maandelijkse updates over de evolutie van de elektriciteits- en aardgasprijzen, als pdf.",
};

export default function MarketUpdatesPage() {
  const [latest, ...rest] = getMarketUpdates();
  return (
    <main>
      <PageHero
        eyebrow="Market updates"
        title={
          <>
            Uw maandelijkse <span className="font-light text-sky">marktupdates</span>
          </>
        }
        intro="Onze klanten informeren en de kans bieden om optimaal in te spelen op marktopportuniteiten, is één van onze taken als energieleverancier. Hier vindt u maandelijks de evolutie van de elektriciteits- en aardgasprijzen."
        image="/images/trading.jpg"
        imageAlt="Energietraders volgen prijscurves op"
        crumbs={[{ label: "Insights", href: "/insights" }, { label: "Market updates" }]}
      />

      <section className="mx-auto max-w-[1240px] px-6 py-20 sm:px-10 sm:py-24">
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="h-full">
            <a
              href={latest.href}
              target="_blank"
              rel="noopener"
              className="group flex h-full min-h-[340px] flex-col justify-between rounded-[32px] bg-brand p-8 text-white sm:p-10"
            >
              <div>
                <p className="text-xs font-medium tracking-[0.16em] text-white/60 uppercase">
                  Laatste market update
                </p>
                <p className="mt-6 text-4xl leading-tight font-light tracking-[-0.03em] sm:text-5xl">
                  {latest.date}
                </p>
                <p className="mt-2 text-white/70">{latest.title}</p>
              </div>
              <span className="inline-flex items-center gap-2 self-start rounded-full bg-sky px-5 py-2.5 text-sm font-medium text-brand-ink transition-colors group-hover:bg-white">
                <Download className="size-4" /> Download pdf
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.08} variant="mask">
            <h2 className="mb-4 text-2xl font-light tracking-tight">
              <Muted>Eerdere</Muted> updates
            </h2>
            <ul className="divide-y divide-line border-y border-line">
              {rest.map((u) => (
                <li key={u.href}>
                  <a
                    href={u.href}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-center gap-4 py-4 hover:text-brand"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-surface text-brand">
                      <FileText className="size-4" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-medium text-ink group-hover:text-brand">{u.title}</span>
                      <span className="block text-xs text-muted">{u.date}</span>
                    </span>
                    <Download className="size-4 text-subtle group-hover:text-brand" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-subtle">
              De pdf’s worden gehost op elexys.be. Oudere updates staan op{" "}
              <a href="https://www.elexys.be/market-updates" className="underline" target="_blank" rel="noopener">
                elexys.be/market-updates
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
