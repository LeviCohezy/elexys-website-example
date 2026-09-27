import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "../components/cta-band";
import { PageHero } from "../components/page-hero";
import { PostCard } from "../components/post-card";
import { Reveal, Stagger, StaggerItem } from "../components/reveal";
import { Muted } from "../components/ui";
import { asset } from "../lib/asset";
import { getPosts } from "../lib/blog";
import { getMarketUpdates } from "../lib/market-updates";

export const metadata: Metadata = {
  title: "Nieuw in de energiewereld",
  description:
    "De laatste nieuwtjes, trends en ontwikkelingen op de energiemarkt, uitgelegd voor bedrijven.",
};

export default function BlogPage() {
  const [featured, ...rest] = getPosts();
  const [update] = getMarketUpdates();

  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Nieuw in de <span className="font-light text-sky">energiewereld</span>
          </>
        }
        intro="De energiewereld is voortdurend in beweging, en net dat vinden wij er zo boeiend aan. We houden u graag op de hoogte van de laatste nieuwtjes, trends en ontwikkelingen op de energiemarkt."
        image="/images/trading.jpg"
        imageAlt="Energietraders volgen prijscurves op"
        crumbs={[{ label: "Blog" }]}
      />

      {/* Finovate-style trio: latest article, latest market update, newsletter */}
      <section className="mx-auto max-w-[1240px] px-6 pt-20 sm:px-10 sm:pt-24">
        <Stagger className="grid gap-4 lg:grid-cols-3">
          <StaggerItem className="h-full">
            <Link
              href={`/blog/${featured.slug}`}
              className="group flex h-full flex-col rounded-[28px] bg-surface p-6 transition-colors hover:bg-sky-soft"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-muted">
                  Laatste artikel · {featured.date}
                </span>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-brand transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <h2 className="mt-6 text-2xl leading-snug font-medium tracking-tight">
                {featured.title}
              </h2>
              <p className="mt-2 line-clamp-2 text-sm text-muted">{featured.description}</p>
              {featured.image && (
                <div className="mt-auto pt-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featured.image}
                    alt={featured.imageAlt}
                    className="aspect-[16/10] w-full rounded-[20px] object-cover"
                  />
                </div>
              )}
            </Link>
          </StaggerItem>

          <StaggerItem className="h-full">
            <Link
              href="/market-updates"
              className="group relative isolate flex h-full min-h-[460px] flex-col justify-between overflow-hidden rounded-[28px] bg-brand p-6 text-white"
            >
              <div className="relative mx-auto mt-4 aspect-square w-[78%] overflow-hidden rounded-[40%_60%_55%_45%/50%_45%_55%_50%]">
                <Image
                  src={asset("/images/trading.jpg")}
                  alt=""
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-[1400ms] ease-out-soft group-hover:scale-110"
                />
              </div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <span className="rounded-full bg-sky px-3 py-1 text-[11px] font-medium text-brand-ink">
                    Maandelijks
                  </span>
                  <p className="mt-4 text-2xl leading-snug font-medium tracking-tight">
                    Laatste market update
                  </p>
                  <p className="mt-1 text-sm text-white/70">{update.date}</p>
                </div>
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-brand transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </Link>
          </StaggerItem>

          <StaggerItem className="h-full">
            <Link
              href="/insights/newsletter"
              className="group flex h-full flex-col rounded-[28px] bg-surface p-6 transition-colors hover:bg-sky-soft"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-muted">
                  Nieuwsbrief
                </span>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-brand transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <h2 className="mt-6 text-2xl leading-snug font-medium tracking-tight">
                Blijf de energiemarkt een stap voor
              </h2>
              <p className="mt-2 text-sm text-muted">
                Marktupdates, praktische tips en inzichten van energie-experts in uw mailbox.
              </p>
              <div className="relative mt-auto aspect-[16/10] overflow-hidden rounded-[20px]">
                <Image
                  src={asset("/images/contact.jpg")}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Link>
          </StaggerItem>
        </Stagger>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-16 sm:px-10 sm:py-20">
        <Reveal variant="mask">
          <h2 className="text-3xl leading-[1.1] font-light tracking-[-0.03em] sm:text-4xl">
            <Muted>Alle</Muted> artikels
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06} className="h-full">
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
