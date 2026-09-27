"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { Menu, X } from "lucide-react";
import { asset } from "../lib/asset";
import { contact, mainNav } from "../lib/site";

const CTA = { label: "Offerte aanvragen", href: "/contact" };

/** "/blog/foo/" is inside "/blog"; the product pages belong to "Oplossingen". */
function isActive(pathname: string, href: string) {
  const p = pathname.replace(/\/$/, "") || "/";
  if (href === "/oplossingen" && (p.startsWith("/product") || p === "/energie-verkopen"))
    return true;
  return p === href || p.startsWith(`${href}/`);
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <StickyBar visible={scrolled} pathname={pathname} />
      <HeroBar open={open} setOpen={setOpen} pathname={pathname} />
    </>
  );
}

/** Solid white bar that slides in once the hero has scrolled away. */
function StickyBar({ visible, pathname }: { visible: boolean; pathname: string }) {
  return (
    <div
      aria-hidden={!visible}
      inert={!visible}
      className={`fixed inset-x-0 top-0 z-40 px-3 pt-3 transition-all duration-500 ease-out-soft ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between rounded-full border border-line bg-white/85 py-2 pr-2 pl-5 shadow-lg shadow-brand-ink/5 backdrop-blur-xl">
        <Link href="/" aria-label="Elexys startpagina" className="shrink-0">
          <Image
            src={asset("/brand/elexys-logo.png")}
            alt="Elexys"
            width={390}
            height={144}
            className="h-7 w-auto"
          />
        </Link>
        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(pathname, l.href) ? "page" : undefined}
                className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:text-ink aria-[current=page]:font-medium aria-[current=page]:text-brand"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={CTA.href}
          className="rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-deep"
        >
          {CTA.label}
        </Link>
      </nav>
    </div>
  );
}

function HeroBar({
  open,
  setOpen,
  pathname,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  pathname: string;
}) {
  return (
    <header className="absolute inset-x-0 top-0 z-30 p-4 sm:p-6">
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between rounded-full border border-white/20 bg-white/10 py-2 pr-2 pl-5 backdrop-blur-xl">
        <Link href="/" aria-label="Elexys startpagina" className="shrink-0">
          <Image
            src={asset("/brand/elexys-logo-white.png")}
            alt="Elexys"
            width={390}
            height={144}
            className="h-8 w-auto"
            loading="eager"
          />
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {mainNav.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(pathname, l.href) ? "page" : undefined}
                className="rounded-full px-4 py-2 text-sm text-white/85 transition-colors hover:text-white aria-[current=page]:bg-white aria-[current=page]:font-medium aria-[current=page]:text-ink xl:px-5"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href={CTA.href}
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-brand transition-colors hover:bg-sky-soft sm:inline-flex"
          >
            {CTA.label}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full bg-white/15 text-white lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-[1240px] rounded-3xl bg-white p-3 shadow-2xl shadow-brand-ink/20 lg:hidden">
          {mainNav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(pathname, l.href) ? "page" : undefined}
              className="block rounded-2xl px-4 py-3 text-ink hover:bg-surface aria-[current=page]:bg-sky-soft aria-[current=page]:text-brand"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={contact.portal}
            className="block rounded-2xl px-4 py-3 text-muted hover:bg-surface"
          >
            my elexys
          </a>
          <Link
            href={CTA.href}
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-2xl bg-brand px-4 py-3 text-center font-medium text-white"
          >
            {CTA.label}
          </Link>
        </div>
      )}
    </header>
  );
}
