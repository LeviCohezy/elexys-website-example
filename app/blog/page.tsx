import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "../components/cta-band";
import { PageHero } from "../components/page-hero";
import { PostCard } from "../components/post-card";
import { Reveal } from "../components/reveal";
import { Eyebrow, Muted } from "../components/ui";
import { getPosts } from "../lib/blog";

export const metadata: Metadata = {
  title: "Nieuw in de energiewereld",
  description:
    "De laatste nieuwtjes, trends en ontwikkelingen op de energiemarkt, uitgelegd voor bedrijven.",
};

export default function BlogPage() {
  const [featured, ...rest] = getPosts();

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

      {/* Featured post */}
      <section className="mx-auto max-w-[1240px] px-6 pt-20 sm:px-10 sm:pt-24">
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-[32px] bg-brand-ink text-white lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] lg:aspect-auto">
              {featured.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={featured.image}
                  alt={featured.imageAlt}
                  className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] ease-out-soft group-hover:scale-105"
                />
              )}
            </div>
            <div className="flex flex-col p-8 sm:p-12">
              <Eyebrow tone="dark">Laatste artikel</Eyebrow>
              <p className="mt-8 text-sm text-white/55">{featured.date}</p>
              <h2 className="mt-3 text-3xl leading-[1.15] font-light tracking-[-0.03em] sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/70">
                {featured.description}
              </p>
              <span className="mt-auto flex items-center gap-2 pt-10 text-sm font-medium text-sky">
                Lees het artikel
                <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-16 sm:px-10 sm:py-20">
        <Reveal>
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
