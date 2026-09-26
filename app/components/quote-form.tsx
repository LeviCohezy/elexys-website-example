"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";

const DESK_EMAIL = "desk@elexys.be";

/** No backend yet: hands the request to the visitor's mail client. */
export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    const subject = encodeURIComponent("Supply quote request");
    const body = encodeURIComponent(
      `Hello Elexys desk,\n\nPlease contact me about a supply proposal.\n\nReply to: ${email}\n`,
    );
    window.location.href = `mailto:${DESK_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="mt-6 flex items-center gap-3 rounded-full bg-white/10 px-5 py-3.5 text-sm text-white ring-1 ring-white/15">
        <span className="grid size-6 place-items-center rounded-full bg-sky text-brand-ink">
          <Check className="size-3.5" />
        </span>
        Thanks — finish sending in your mail app and we&apos;ll reply within
        one business day.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-6 flex gap-2 rounded-full bg-white/10 p-1.5 ring-1 ring-white/15 focus-within:ring-sky"
    >
      <label htmlFor="email" className="sr-only">
        Work email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Your work email"
        className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white placeholder:text-white/45 focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-sky px-5 py-2.5 text-sm font-medium text-brand-ink transition-colors hover:bg-white"
      >
        Contact us
      </button>
    </form>
  );
}
