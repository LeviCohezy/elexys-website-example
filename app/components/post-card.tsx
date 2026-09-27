import Link from "next/link";
import { ArrowUpRight, Zap } from "lucide-react";
import type { Post } from "../lib/blog";

/**
 * Blog teaser card (Finovate "insights" style). Teaser images live on elexys.be,
 * so they're plain <img> tags; posts without one get a brand tile.
 */
export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-surface transition-colors hover:bg-sky-soft"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {post.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.image}
            alt={post.imageAlt}
            loading="lazy"
            className="size-full object-cover transition-transform duration-[1200ms] ease-out-soft group-hover:scale-105"
          />
        ) : (
          <div className="grid size-full place-items-center bg-gradient-to-br from-brand to-brand-ink">
            <Zap className="size-10 text-sky" strokeWidth={1.5} />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        {post.date && <p className="text-xs text-subtle">{post.date}</p>}
        <h3 className="mt-2 text-lg leading-snug font-medium tracking-tight text-ink">
          {post.title}
        </h3>
        {post.description && (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{post.description}</p>
        )}
        <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium text-brand">
          Lees meer
          <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
        </span>
      </div>
    </Link>
  );
}
