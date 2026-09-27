import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Car, Mail, MapPin, Phone, PlugZap } from "lucide-react";
import { ContactForm } from "../components/contact-form";
import { PageHero } from "../components/page-hero";
import { Reveal } from "../components/reveal";
import { Steps } from "../components/steps";
import { Eyebrow, Muted } from "../components/ui";
import { asset } from "../lib/asset";
import { contact } from "../lib/site";

export const metadata: Metadata = {
  title: "Contacteer ons",
  description:
    "Vraag een offerte aan voor elektriciteit of aardgas. Na uw online aanvraag nemen we op werkdagen binnen de 24u contact met u op.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Contacteer <span className="font-light text-sky">ons</span>
          </>
        }
        intro="Voelt u een klik tussen Elexys en uw bedrijf? We horen het graag. Na uw online aanvraag nemen we op werkdagen binnen de 24u contact met u op."
        image="/images/contact.jpg"
        imageAlt="Accountmanager van Elexys aan de telefoon"
        crumbs={[{ label: "Contact" }]}
        aside={
          <a
            href={contact.phoneHref}
            className="flex items-center gap-4 rounded-3xl bg-white p-2 pr-7 shadow-2xl shadow-brand-ink/25"
          >
            <span className="grid size-14 place-items-center rounded-2xl bg-brand text-white">
              <Phone className="size-5" />
            </span>
            <span>
              <span className="block text-xs text-muted">Liever bellen?</span>
              <span className="block text-lg font-medium tracking-tight text-ink">
                {contact.phone}
              </span>
            </span>
          </a>
        }
      />

      {/* Finovate-style "Let's connect": form card + photo/info column */}
      <section className="mx-auto max-w-[1240px] px-6 py-20 sm:px-10 sm:py-24">
        <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <div className="rounded-[32px] border border-line p-6 sm:p-10">
              <Eyebrow>Offerte of vraag</Eyebrow>
              <h2 className="mt-5 text-3xl leading-[1.1] font-light tracking-[-0.03em] sm:text-4xl">
                Laten we <Muted>kennismaken</Muted>
              </h2>
              <p className="mt-3 mb-8 max-w-lg text-sm leading-relaxed text-muted">
                Vul uw gegevens in en vertel ons waarvoor u een offerte wenst. Uw vaste
                accountmanager neemt persoonlijk contact op.
              </p>
              <ContactForm />
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            <Reveal delay={0.08}>
              <div className="rounded-[32px] bg-brand-ink p-8 text-white">
                <p className="text-xs font-medium tracking-[0.16em] text-white/50 uppercase">
                  {contact.company}
                </p>
                <ul className="mt-6 space-y-5 text-sm">
                  <li>
                    <a href={contact.mapsHref} target="_blank" rel="noopener" className="flex gap-3 hover:text-sky">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-sky" />
                      <span>
                        {contact.street}
                        <br />
                        {contact.city}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={contact.phoneHref} className="flex gap-3 hover:text-sky">
                      <Phone className="mt-0.5 size-4 shrink-0 text-sky" />
                      {contact.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${contact.email}`} className="flex gap-3 hover:text-sky">
                      <Mail className="mt-0.5 size-4 shrink-0 text-sky" />
                      {contact.email}
                    </a>
                  </li>
                </ul>
                <p className="mt-6 border-t border-white/15 pt-5 text-xs text-white/50">
                  BTW {contact.vat}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14} className="flex-1">
              <div className="relative isolate flex h-full min-h-[380px] flex-col justify-end overflow-hidden rounded-[32px] p-5">
                <Image
                  src={asset("/images/ev-charging.jpg")}
                  alt="Laadpalen op de parking bij het kantoor van Elexys"
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="-z-10 object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-ink/80 via-brand-ink/10 to-transparent" />
                <div className="rounded-3xl border border-white/25 bg-white/15 p-5 text-white backdrop-blur-xl">
                  <p className="font-medium">Op visite komen?</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">
                    Onze kantoren liggen vlak bij de afrit Deerlijk langs de E17.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5">
                      <Car className="size-3.5" /> Ruime parking
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5">
                      <PlugZap className="size-3.5" /> 22 laadpalen
                    </span>
                  </div>
                  <a
                    href={contact.mapsHref}
                    target="_blank"
                    rel="noopener"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-sky"
                  >
                    Routebeschrijving <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Steps />

      <section className="mx-auto max-w-[1240px] px-6 py-16 text-center sm:px-10">
        <Reveal>
          <p className="text-[15px] text-muted">
            Al klant?{" "}
            <a href={contact.portal} className="font-medium text-brand underline underline-offset-4">
              Log in op my elexys
            </a>{" "}
            · Snel een antwoord nodig?{" "}
            <Link href="/faqs" className="font-medium text-brand underline underline-offset-4">
              Bekijk de veelgestelde vragen
            </Link>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
