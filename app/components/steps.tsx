import { FileText, Mail, Search } from "lucide-react";
import { Reveal } from "./reveal";
import { Muted } from "./ui";

/** "Wat na uw online aanvraag?" — the three steps from elexys.be/contact. */
const steps = [
  {
    n: 1,
    title: "Contact binnen 24u",
    body: "Na uw online aanvraag nemen we op werkdagen binnen de 24 uur contact met u op.",
    icon: Mail,
  },
  {
    n: 2,
    title: "Persoonlijke analyse",
    body: "Onze expert bekijkt het huidige energieverbruik van uw bedrijf en uw specifieke wensen, om te bepalen welke aanpak het best past.",
    icon: Search,
  },
  {
    n: 3,
    title: "Offerte op maat",
    body: "Na de analyse bezorgt uw contactpersoon zijn of haar advies en een aangepast offertevoorstel.",
    icon: FileText,
  },
];

export function Steps() {
  return (
    <section className="px-2 py-10 sm:px-3">
      <div className="mx-auto max-w-[1400px] rounded-[36px] bg-surface px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-center text-4xl leading-[1.1] font-light tracking-[-0.03em] sm:text-5xl">
              <Muted>Van</Muted> aanvraag <Muted>tot</Muted> offerte <Muted>in</Muted> drie
              stappen
            </h2>
            <p className="mt-5 text-center text-[15px] text-muted">
              Voelt u een klik tussen Elexys en uw bedrijf? Zo verloopt het na uw aanvraag.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {steps.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08} className="h-full">
                <article className="flex h-full flex-col rounded-[24px] bg-white p-7">
                  <span className="grid size-7 place-items-center rounded-full bg-brand text-xs font-medium text-white">
                    {p.n}
                  </span>
                  <h3 className="mt-6 text-xl font-medium tracking-tight text-brand">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
                  <p.icon className="mt-10 size-9 text-ink/70" strokeWidth={1.25} />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
