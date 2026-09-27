import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MailForm } from "../../components/mail-form";
import { PageHero } from "../../components/page-hero";
import { Reveal } from "../../components/reveal";
import { Eyebrow } from "../../components/ui";

export const metadata: Metadata = {
  title: "Spontane sollicitatie",
  description: "Solliciteer spontaan bij Elexys, energieleverancier voor bedrijven in Deerlijk.",
};

export default function ApplicationPage() {
  return (
    <main>
      <PageHero
        eyebrow="Vacatures"
        title={
          <>
            Spontane <span className="font-light text-sky">sollicitatie</span>
          </>
        }
        image="/images/careers.jpg"
        imageAlt="Collega's van Elexys aan het werk"
        crumbs={[{ label: "Vacatures", href: "/jobs" }, { label: "Spontane sollicitatie" }]}
      />

      <section className="mx-auto max-w-[1240px] px-6 py-20 sm:px-10 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <Link href="/jobs" className="inline-flex items-center gap-2 text-sm font-medium text-brand">
              <ArrowLeft className="size-4" /> Terug naar overzicht
            </Link>
            <h2 className="mt-8 text-2xl font-medium tracking-tight">Bedrijfsinfo</h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                Elexys is een energieleverancier die in 2010 werd opgericht als onderdeel van een
                West-Vlaamse familiale holding. Van bij de start lag de focus op professionele
                klanten.
              </p>
              <p>
                Met onze opgebouwde knowhow staan we onze klanten steeds rechtstreeks te woord en
                beantwoorden we de meest uiteenlopende vragen zo snel en efficiënt mogelijk. Ons
                productgamma evolueert daardoor voortdurend en behoort tot de meest
                gediversifieerde in de sector.
              </p>
              <p>
                Elexys levert elektriciteit en gas aan kleine en middelgrote ondernemingen; ook
                grote bedrijven kunnen bij ons hun energie aankopen én verkopen. Eén doel staat
                centraal: slim omgaan met het totale energiebudget.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[32px] border border-line p-6 sm:p-10">
              <Eyebrow>Solliciteer nu</Eyebrow>
              <div className="mt-8">
                <MailForm
                  subject="Spontane sollicitatie"
                  submitLabel="Verstuur sollicitatie"
                  doneTitle="Voeg nog uw cv toe"
                  doneText="Uw mailprogramma opent met uw gegevens. Voeg uw cv en motivatiebrief toe als bijlage en verstuur de e-mail. We laten snel weten of het klikt."
                  note="Uw cv en motivatiebrief voegt u in de volgende stap als bijlage toe aan de e-mail."
                  fields={[
                    { name: "voornaam", label: "Voornaam", required: true, autoComplete: "given-name" },
                    { name: "naam", label: "Naam", required: true, autoComplete: "family-name" },
                    { name: "email", label: "E-mail", type: "email", required: true, autoComplete: "email" },
                    { name: "telefoon", label: "Telefoon", type: "tel", autoComplete: "tel" },
                    { name: "motivatie", label: "Korte motivatie", type: "textarea" },
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
