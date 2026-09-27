import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { asset } from "../lib/asset";

/** Photo tile with a sky tag and a title, linking somewhere (homepage solutions grid). */
export function ImageTile({
  href,
  src,
  alt,
  tag,
  title,
  className = "",
}: {
  href: string;
  src: string;
  alt: string;
  tag: string;
  title: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative isolate flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[28px] p-5 text-white sm:min-h-[340px] ${className}`}
    >
      <Image
        src={asset(src)}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="-z-10 object-cover transition-transform duration-[1200ms] ease-out-soft group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent" />
      <span className="self-start rounded-full bg-sky px-3.5 py-1.5 text-xs font-medium text-brand-ink">
        {tag}
      </span>
      <div className="flex items-end justify-between gap-4">
        <h3 className="text-xl font-medium tracking-tight sm:text-2xl">{title}</h3>
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur-md transition-colors group-hover:bg-white group-hover:text-brand">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
