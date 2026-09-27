import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { asset } from "../lib/asset";
import { contact, footerNav, legalNav } from "../lib/site";

const isExternal = (href: string) => href.startsWith("http");

export function Footer() {
  return (
    <footer id="contact" className="p-2 sm:p-3">
      <div className="relative isolate overflow-hidden rounded-[28px] bg-brand-ink px-6 pt-16 pb-8 text-white sm:rounded-[36px] sm:px-10 sm:pt-20">
        <div className="absolute -top-40 -right-40 -z-10 size-[520px] rounded-full bg-brand blur-3xl" />
        <div className="absolute -bottom-60 left-1/4 -z-10 size-[420px] rounded-full bg-sky/25 blur-3xl" />

        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1.8fr]">
            <div>
              <Image
                src={asset("/brand/elexys-logo-white.png")}
                alt="Elexys — Think smart energy"
                width={390}
                height={144}
                className="h-20 w-auto sm:h-24"
              />
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
                Belgisch familiebedrijf dat sinds 2010 elektriciteit en aardgas levert aan
                bedrijven, met een vaste accountmanager en transparante prijzen.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-white/80">
                <li>
                  <a href={contact.mapsHref} target="_blank" rel="noopener" className="flex items-start gap-3 hover:text-white">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-sky" />
                    {contact.street}, {contact.city}
                  </a>
                </li>
                <li>
                  <a href={contact.phoneHref} className="flex items-center gap-3 hover:text-white">
                    <Phone className="size-4 shrink-0 text-sky" />
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-white">
                    <Mail className="size-4 shrink-0 text-sky" />
                    {contact.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              {footerNav.map((col) => (
                <div key={col.title}>
                  <p className="text-xs font-medium tracking-[0.16em] text-white/45 uppercase">
                    {col.title}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm text-white/80">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        {isExternal(l.href) ? (
                          <a href={l.href} className="inline-flex items-center gap-1 hover:text-white">
                            {l.label}
                            <ArrowUpRight className="size-3.5" />
                          </a>
                        ) : (
                          <Link href={l.href} className="hover:text-white">
                            {l.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-3 border-t border-white/15 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {contact.company} · BTW {contact.vat}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {legalNav.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
