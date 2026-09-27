import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "../../components/cta-band";
import { PageHero } from "../../components/page-hero";
import { chartFromTable, PriceChart } from "../../components/price-chart";
import { Reveal } from "../../components/reveal";
import { getIndex, getIndices } from "../../lib/insights";

export const dynamicParams = false;

export function generateStaticParams() {
  return getIndices().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const index = getIndex((await params).slug);
  return index ? { title: index.name, description: index.intro } : {};
}

export default async function IndexPage({ params }: PageProps<"/insights/[slug]">) {
  const index = getIndex((await params).slug);
  if (!index) notFound();
  const all = getIndices();

  return (
    <main>
      <PageHero
        eyebrow={`Insights · ${index.group}`}
        title={index.name}
        intro={index.intro}
        image="/images/trading.jpg"
        crumbs={[{ label: "Insights", href: "/insights" }, { label: index.name }]}
        aside={
          <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-brand-ink/25">
            <p className="text-xs text-muted">Referentie voor</p>
            <p className="mt-1 text-xl font-medium tracking-tight text-ink">
              {index.basis === "vast" ? "Vaste" : "Variabele"} {index.group.toLowerCase()}sprijzen
            </p>
            {index.updated && <p className="mt-3 text-xs text-muted">Laatste update: {index.updated}</p>}
          </div>
        }
      />

      <section className="mx-auto max-w-[1240px] px-6 py-16 sm:px-10 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
          <nav aria-label="Andere indexen" className="order-last lg:sticky lg:top-28 lg:order-none lg:self-start">
            {(["Elektriciteit", "Gas"] as const).map((g) => (
              <div key={g} className="mb-6">
                <p className="text-xs font-medium tracking-[0.16em] text-subtle uppercase">{g}</p>
                <ul className="mt-3 space-y-1">
                  {all
                    .filter((i) => i.group === g)
                    .map((i) => (
                      <li key={i.slug}>
                        <Link
                          href={`/insights/${i.slug}`}
                          aria-current={i.slug === index.slug ? "page" : undefined}
                          className="block rounded-xl px-3 py-2 text-sm text-muted hover:bg-surface hover:text-ink aria-[current=page]:bg-sky-soft aria-[current=page]:font-medium aria-[current=page]:text-brand"
                        >
                          {i.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="min-w-0 space-y-10">
            {index.tables.map(({ title, table }, i) => {
              const chart = chartFromTable(table);
              return (
                <Reveal key={i}>
                  <div className="rounded-[28px] border border-line p-6 sm:p-8">
                    <h2 className="text-2xl font-light tracking-tight">
                      {title ?? index.name}
                    </h2>
                    {chart && (
                      <div className="-mx-2 mt-6 overflow-x-auto px-2">
                        <PriceChart chart={chart} title={`${index.name} ${title ?? ""}`} />
                      </div>
                    )}
                    <details className="group mt-6">
                      <summary className="cursor-pointer text-sm font-medium text-brand">
                        Toon de tabel ({table.rows.length} rijen)
                      </summary>
                      <div className="mt-4 overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr>
                              {table.head.map((h, c) => (
                                <th key={c} className="border-b border-line px-3 py-2 text-left font-medium whitespace-nowrap text-ink">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {table.rows.map((r, ri) => (
                              <tr key={ri} className="odd:bg-surface/60">
                                {r.map((cell, c) => (
                                  <td key={c} className="px-3 py-2 whitespace-nowrap text-muted">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </details>
                  </div>
                </Reveal>
              );
            })}
            <p className="text-xs leading-relaxed text-subtle">
              Momentopname van de marktinformatie op elexys.be op 27/09/2026. De prijzen zijn louter
              indicatief; Elexys kan niet aansprakelijk worden gesteld voor fouten of onderbrekingen.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Wilt u uw energieprijs <span className="text-sky">vastleggen?</span>
          </>
        }
        text="Uw accountmanager bekijkt samen met u welk moment en welke formule het best passen bij het risicoprofiel van uw bedrijf."
      />
    </main>
  );
}
