import { Phone } from "lucide-react";
import type { ReactNode } from "react";
import { contact } from "../lib/site";
import { Reveal } from "./reveal";
import { PillButton } from "./ui";

/** Closing call-to-action panel used at the bottom of every page. */
export function CtaBand({
  title = (
    <>
      Een energiecontract dat <span className="text-sky">echt bij uw bedrijf</span> past.
    </>
  ),
  text = "Vertel ons over uw verbruik. Na uw aanvraag nemen we op werkdagen binnen de 24u contact op, en uw vaste accountmanager bezorgt u een offerte op maat.",
}: {
  title?: ReactNode;
  text?: string;
}) {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-16 sm:px-10 sm:py-20">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[32px] bg-brand px-8 py-14 text-white sm:px-14 sm:py-16">
          <div className="absolute -top-24 -right-24 -z-10 size-80 rounded-full bg-sky/30 blur-3xl" />
          <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-3xl leading-[1.1] font-medium tracking-[-0.03em] sm:text-5xl">
                {title}
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/75">{text}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 lg:justify-end">
              <PillButton href="/contact" variant="sky">
                Vraag een offerte aan
              </PillButton>
              <a
                href={contact.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/85 hover:text-white"
              >
                <Phone className="size-4" />
                {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
