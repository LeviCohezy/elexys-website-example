import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { CtaBand } from "../../components/cta-band";
import { PageHero } from "../../components/page-hero";
import { PostCard } from "../../components/post-card";
import { Prose } from "../../components/prose";
import { Reveal } from "../../components/reveal";
import { Muted } from "../../components/ui";
import { getPost, getPosts } from "../../lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post ? { title: post.title, description: post.description } : {};
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const related = getPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);
  // The teaser is usually also the first image in the body; don't show it twice.
  const showTeaser = post.image && !post.body.includes(post.image.split("?")[0]);

  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title={<span className="block max-w-3xl text-[36px] sm:text-5xl lg:text-[56px]">{post.title}</span>}
        intro={post.description}
        image="/images/trading.jpg"
        crumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />

      <article className="mx-auto max-w-[1240px] px-6 py-16 sm:px-10 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            {post.date && (
              <p className="flex items-center gap-2 text-sm text-muted">
                <Calendar className="size-4 text-brand" />
                <time>{post.date}</time>
              </p>
            )}
            <Link
              href="/blog"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-deep"
            >
              <ArrowLeft className="size-4" /> Terug naar overzicht
            </Link>
          </aside>
          <div className="max-w-[720px]">
            {showTeaser && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={post.image!} alt={post.imageAlt} className="mb-10 w-full rounded-[24px]" />
            )}
            <Prose markdown={post.body} />
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-[1240px] px-6 pb-8 sm:px-10">
        <Reveal variant="mask">
          <h2 className="text-3xl leading-[1.1] font-light tracking-[-0.03em] sm:text-4xl">
            <Muted>Lees</Muted> ook
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06} className="h-full">
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title={
          <>
            Vragen over dit artikel? <span className="text-sky">Wij leggen het graag uit.</span>
          </>
        }
      />
    </main>
  );
}
