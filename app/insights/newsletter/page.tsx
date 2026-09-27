import type { Metadata } from "next";
import { Check } from "lucide-react";
import { MailForm } from "../../components/mail-form";
import { PageHero } from "../../components/page-hero";
import { Reveal } from "../../components/reveal";
import { Eyebrow, Muted } from "../../components/ui";

export const metadata: Metadata = {
  title: "Nieuwsbrief",
  description:
    "Blijf de energiemarkt een stap voor: actuele marktupdates, praktische tips en inzichten van energie-experts in uw mailbox.",
};

const benefits = [
  "Actuele marktupdates over de energiemarkt",
  "Praktische tips om energiekosten te optimaliseren",
  "Inzichten van energie-experts",
  "Cases uit de praktijk",
  "Gratis vrijblijvende factuuranalyse (optioneel)",
];

export default function NewsletterPage() {
  return (
    <main>
      <PageHero
        eyebrow="Nieuwsbrief"
        title={
          <>
            Blijf de energiemarkt <span className="font-light text-sky">een stap voor.</span>
          </>
        }
        image="/images/hero.jpg"
        imageAlt="Hoogspanningslijnen onder een blauwe lucht"
        crumbs={[{ label: "Insights", href: "/insights" }, { label: "Nieuwsbrief" }]}
      />

      <section className="mx-auto max-w-[1240px] px-6 py-20 sm:px-10 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-4xl leading-[1.1] font-light tracking-[-0.03em] sm:text-5xl">
              <Muted>Wat u</Muted> ontvangt
            </h2>
            <ul className="mt-10 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-4 text-[15px] text-ink">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-sky-soft text-brand">
                    <Check className="size-4" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[32px] bg-surface p-6 sm:p-10">
              <Eyebrow>Schrijf u gratis in</Eyebrow>
              <div className="mt-8">
                <MailForm
                  subject="Inschrijving nieuwsbrief"
                  submitLabel="Inschrijven"
                  doneTitle="Bijna ingeschreven"
                  doneText="Uw mailprogramma opent met uw inschrijving. Verstuur de e-mail en u ontvangt voortaan onze nieuwsbrief."
                  fields={[
                    { name: "voornaam", label: "Voornaam", required: true, autoComplete: "given-name" },
                    { name: "naam", label: "Naam", required: true, autoComplete: "family-name" },
                    { name: "email", label: "E-mail", type: "email", required: true, autoComplete: "email", wide: true },
                  ]}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
