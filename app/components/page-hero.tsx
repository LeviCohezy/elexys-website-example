import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { asset } from "../lib/asset";
import { ParallaxImage } from "./motion/parallax-image";
import { Nav } from "./nav";
import { Reveal } from "./reveal";
import { Eyebrow } from "./ui";

type Crumb = { label: string; href?: string };

/** Sub-page hero: the homepage's rounded photo card, shorter. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
  crumbs = [],
  children,
  aside,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image: string;
  imageAlt?: string;
  crumbs?: Crumb[];
  /** Extra content under the intro (buttons). */
  children?: ReactNode;
  /** Floating card on the bottom right, like the homepage stat card. */
  aside?: ReactNode;
  /** "center": Green Power-style centred hero with the aside floating along the bottom. */
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <section className="p-2 sm:p-3">
      <div
        className={`relative isolate flex flex-col overflow-hidden rounded-[28px] sm:rounded-[36px] ${center ? "min-h-[640px] sm:min-h-[760px]" : "min-h-[520px] sm:min-h-[600px]"}`}
      >
        <ParallaxImage src={asset(image)} alt={imageAlt} preload />
        <div
          className={`absolute inset-0 -z-10 ${center ? "bg-gradient-to-b from-[#0a1a4a]/70 via-[#0a1a4a]/30 to-[#0a1a4a]/10" : "bg-gradient-to-r from-[#0a1a4a]/75 via-[#0a1a4a]/35 to-[#0a1a4a]/5"}`}
        />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-brand-ink/50 to-transparent" />

        <Nav />

        <div
          className={`mx-auto flex w-full max-w-[1240px] flex-1 flex-col gap-10 px-6 pt-36 pb-10 sm:px-10 sm:pb-12 ${
            center
              ? "items-center justify-between text-center sm:pt-40"
              : "justify-end lg:flex-row lg:items-end lg:justify-between"
          }`}
        >
          <div className={center ? "flex max-w-3xl flex-col items-center" : "max-w-2xl"}>
            {crumbs.length > 0 && (
              <Reveal>
                <nav
                  aria-label="Kruimelpad"
                  className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-white/65"
                >
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                  {crumbs.map((c) => (
                    <span key={c.label} className="flex items-center gap-1.5">
                      <ChevronRight className="size-3" />
                      {c.href ? (
                        <Link href={c.href} className="hover:text-white">
                          {c.label}
                        </Link>
                      ) : (
                        <span className="text-white/90">{c.label}</span>
                      )}
                    </span>
                  ))}
                </nav>
              </Reveal>
            )}
            <Reveal>
              <Eyebrow tone="dark">{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08} variant="mask">
              <h1 className="mt-6 text-[40px] leading-[1.04] font-medium tracking-[-0.035em] text-white sm:text-6xl lg:text-[68px]">
                {title}
              </h1>
            </Reveal>
            {intro && (
              <Reveal delay={0.16}>
                <p
                  className={`mt-6 max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-base ${center ? "mx-auto" : ""}`}
                >
                  {intro}
                </p>
              </Reveal>
            )}
            {children && (
              <Reveal
                delay={0.24}
                className={`mt-8 flex flex-wrap items-center gap-4 ${center ? "justify-center" : ""}`}
              >
                {children}
              </Reveal>
            )}
          </div>
          {aside && <Reveal delay={0.32}>{aside}</Reveal>}
        </div>
      </div>
    </section>
  );
}
