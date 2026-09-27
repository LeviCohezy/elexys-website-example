import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { asset } from "../lib/asset";

/** Inverted rounded corner so the notch flows into the tile edge. */
function Corner({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`absolute size-5 ${className}`}
      style={{ background: "radial-gradient(circle at 0 0, transparent 19.5px, var(--notch, #fff) 20px)" }}
    />
  );
}

/**
 * Green Power-style service tile: big photo, tag and title, and an arrow button
 * sitting in a notch cut out of the bottom-right corner. The notch takes the
 * colour of `--notch` (white by default) to match the section background.
 */
export function ImageTile({
  href,
  src,
  alt,
  tag,
  title,
  text,
  className = "",
}: {
  href: string;
  src: string;
  alt: string;
  tag: string;
  title: string;
  text?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative isolate flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[28px] p-6 text-white sm:min-h-[340px] ${className}`}
    >
      <Image
        src={asset(src)}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 40vw, 90vw"
        className="-z-10 object-cover transition-transform duration-[1400ms] ease-out-soft group-hover:scale-[1.07]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-ink/80 via-brand-ink/10 to-transparent" />
      <span className="self-start rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-medium ring-1 ring-white/30 backdrop-blur-md">
        {tag}
      </span>
      <div className="pr-20">
        <h3 className="text-2xl leading-tight font-medium tracking-tight sm:text-[28px]">{title}</h3>
        {text && <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">{text}</p>}
      </div>

      <span className="absolute right-0 bottom-0 grid size-[76px] place-items-center rounded-tl-[26px] bg-[var(--notch,#fff)]">
        <span className="grid size-12 place-items-center rounded-full bg-brand text-white transition-transform duration-500 ease-out-soft group-hover:rotate-45 group-hover:bg-brand-deep">
          <ArrowUpRight className="size-5" />
        </span>
      </span>
      <Corner className="right-0 bottom-[76px]" />
      <Corner className="right-[76px] bottom-0" />
    </Link>
  );
}
