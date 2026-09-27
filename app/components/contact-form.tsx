"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { Check, Send } from "lucide-react";
import { contact } from "../lib/site";

/** "Wat is er op vandaag?" options from the elexys.be contact form. */
const installations = [
  "Laadpalen",
  "Zonnepanelen",
  "Batterij",
  "Windmolen",
  "Warmtekrachtkoppeling",
  "Actieve sturing",
];

const input =
  "w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-subtle focus:border-brand focus:ring-2 focus:ring-brand/15 focus:outline-none";

function Field({ label, children, optional }: { label: string; children: ReactNode; optional?: boolean }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-ink">
        {label}
        {optional && <span className="font-normal text-subtle"> · optioneel</span>}
      </span>
      {children}
    </label>
  );
}

/**
 * Same fields as the Drupal webform on elexys.be/contact. The static site has no
 * backend, so submitting opens a pre-filled e-mail to Elexys.
 */
export function ContactForm() {
  const [electricity, setElectricity] = useState(false);
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const wants = [
      d.get("elektriciteit") && "elektriciteit",
      d.get("aardgas") && "aardgas",
    ].filter(Boolean);
    const lines = [
      `Naam: ${d.get("voornaam")} ${d.get("naam")}`,
      `Bedrijf: ${d.get("bedrijf")}`,
      `Ondernemingsnummer: ${d.get("ondernemingsnummer") || "-"}`,
      `E-mail: ${d.get("email")}`,
      `Telefoon: ${d.get("telefoon") || "-"}`,
      `Offerte voor: ${wants.length ? wants.join(" en ") : "-"}`,
      electricity && `Installaties vandaag: ${d.getAll("installaties").join(", ") || "-"}`,
      "",
      String(d.get("vraag") || ""),
    ].filter((l) => l !== false);
    const subject = encodeURIComponent(
      wants.length ? `Offerteaanvraag ${wants.join(" en ")} – ${d.get("bedrijf")}` : `Vraag van ${d.get("bedrijf")}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex min-h-[420px] flex-col items-start justify-center rounded-[28px] bg-sky-soft p-8 sm:p-10">
        <span className="grid size-12 place-items-center rounded-full bg-brand text-white">
          <Check className="size-6" />
        </span>
        <h3 className="mt-6 text-2xl font-medium tracking-tight">Bijna klaar</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          Uw mailprogramma opent met uw aanvraag. Verstuur de e-mail en we nemen op werkdagen
          binnen de 24u contact met u op. Opende er niets? Mail ons op{" "}
          <a href={`mailto:${contact.email}`} className="text-brand underline">
            {contact.email}
          </a>{" "}
          of bel {contact.phone}.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 text-sm font-medium text-brand underline underline-offset-4"
        >
          Terug naar het formulier
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <Field label="Voornaam">
        <input name="voornaam" required autoComplete="given-name" className={input} />
      </Field>
      <Field label="Naam">
        <input name="naam" required autoComplete="family-name" className={input} />
      </Field>
      <Field label="Bedrijf">
        <input name="bedrijf" required autoComplete="organization" className={input} />
      </Field>
      <Field label="Ondernemingsnummer" optional>
        <input name="ondernemingsnummer" placeholder="BE 0123.456.789" className={input} />
      </Field>
      <Field label="E-mail">
        <input name="email" type="email" required autoComplete="email" className={input} />
      </Field>
      <Field label="Telefoon" optional>
        <input name="telefoon" type="tel" autoComplete="tel" className={input} />
      </Field>

      <fieldset className="sm:col-span-2">
        <legend className="mb-2 text-xs font-medium text-ink">Ik wens een offerte voor</legend>
        <div className="flex flex-wrap gap-2">
          {[
            { name: "elektriciteit", label: "Afname elektriciteit" },
            { name: "aardgas", label: "Afname aardgas" },
          ].map((o) => (
            <label
              key={o.name}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm has-[:checked]:border-brand has-[:checked]:bg-sky-soft has-[:checked]:text-brand has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand/30"
            >
              <input
                type="checkbox"
                name={o.name}
                onChange={o.name === "elektriciteit" ? (e) => setElectricity(e.target.checked) : undefined}
                className="size-4 accent-[var(--color-brand)]"
              />
              {o.label}
            </label>
          ))}
        </div>
      </fieldset>

      {electricity && (
        <fieldset className="rounded-2xl bg-surface p-4 sm:col-span-2">
          <legend className="sr-only">Wat is er op vandaag?</legend>
          <p className="mb-3 text-xs font-medium text-ink">Wat is er op vandaag?</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {installations.map((i) => (
              <label key={i} className="flex cursor-pointer items-center gap-2 text-sm text-ink">
                <input type="checkbox" name="installaties" value={i} className="size-4 accent-[var(--color-brand)]" />
                {i}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div className="sm:col-span-2">
        <Field label="Vraag of opmerking" optional>
          <textarea name="vraag" rows={4} className={`${input} resize-y`} />
        </Field>
      </div>

      <label className="flex items-start gap-3 text-sm text-muted sm:col-span-2">
        <input type="checkbox" required className="mt-0.5 size-4 accent-[var(--color-brand)]" />
        <span>
          Ik ga akkoord met de{" "}
          <Link href="/privacy-policy" className="text-brand underline underline-offset-4">
            privacy policy
          </Link>
          .
        </span>
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center gap-3 rounded-full bg-brand py-1.5 pr-1.5 pl-6 text-sm font-medium text-white transition-colors hover:bg-brand-deep"
        >
          Verstuur uw aanvraag
          <span className="grid size-9 place-items-center rounded-full bg-white text-brand">
            <Send className="size-4" />
          </span>
        </button>
      </div>
    </form>
  );
}
