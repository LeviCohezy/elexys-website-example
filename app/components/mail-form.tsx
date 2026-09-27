"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";
import { contact } from "../lib/site";

type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  autoComplete?: string;
  wide?: boolean;
};

const input =
  "w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-subtle focus:border-brand focus:ring-2 focus:ring-brand/15 focus:outline-none";

/**
 * Small form that hands its values to the visitor's mail client (the static
 * site has no backend). Used for the newsletter and job applications.
 */
export function MailForm({
  fields,
  subject,
  submitLabel,
  doneTitle,
  doneText,
  note,
}: {
  fields: FieldDef[];
  subject: string;
  submitLabel: string;
  doneTitle: string;
  doneText: string;
  note?: string;
}) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = fields
      .map((f) => `${f.label}: ${d.get(f.name) || "-"}`)
      .join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-[24px] bg-sky-soft p-8">
        <span className="grid size-11 place-items-center rounded-full bg-brand text-white">
          <Check className="size-5" />
        </span>
        <p className="mt-5 text-xl font-medium tracking-tight">{doneTitle}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{doneText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      {fields.map((f) => (
        <label key={f.name} className={`block ${f.wide || f.type === "textarea" ? "sm:col-span-2" : ""}`}>
          <span className="mb-1.5 block text-xs font-medium text-ink">
            {f.label}
            {!f.required && <span className="font-normal text-subtle"> · optioneel</span>}
          </span>
          {f.type === "textarea" ? (
            <textarea name={f.name} rows={5} required={f.required} className={`${input} resize-y`} />
          ) : (
            <input
              name={f.name}
              type={f.type ?? "text"}
              required={f.required}
              autoComplete={f.autoComplete}
              className={input}
            />
          )}
        </label>
      ))}
      {note && <p className="text-xs leading-relaxed text-muted sm:col-span-2">{note}</p>}
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
          {submitLabel}
          <span className="grid size-9 place-items-center rounded-full bg-white text-brand">
            <Send className="size-4" />
          </span>
        </button>
      </div>
    </form>
  );
}
