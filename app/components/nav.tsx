"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "Solutions", href: "#solutions" },
  { label: "Supply models", href: "#supply" },
  { label: "About", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30 p-4 sm:p-6">
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between rounded-full border border-white/20 bg-white/10 py-2 pr-2 pl-5 backdrop-blur-xl">
        <Link href="#" aria-label="Elexys home" className="shrink-0">
          <Image
            src="/brand/elexys-logo-white.png"
            alt="Elexys"
            width={390}
            height={144}
            className="h-8 w-auto"
            loading="eager"
          />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l, i) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className={
                  i === 0
                    ? "rounded-full bg-white px-5 py-2 text-sm font-medium text-ink"
                    : "rounded-full px-5 py-2 text-sm text-white/85 transition-colors hover:text-white"
                }
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-brand transition-colors hover:bg-sky-soft sm:inline-flex"
          >
            Talk to our desk
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full bg-white/15 text-white lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-[1240px] rounded-3xl bg-white p-3 shadow-2xl shadow-brand-ink/20 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-ink hover:bg-surface"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-2xl bg-brand px-4 py-3 text-center font-medium text-white"
          >
            Talk to our desk
          </Link>
        </div>
      )}
    </header>
  );
}
