import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Magnetic } from "./motion/magnetic";

export function Eyebrow({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={
        tone === "dark"
          ? "inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1.5 text-xs font-medium tracking-wide text-white"
          : "inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs font-medium tracking-wide text-muted"
      }
    >
      <span
        className={
          tone === "dark" ? "size-1.5 rounded-full bg-sky" : "size-1.5 rounded-full bg-brand"
        }
      />
      {children}
    </span>
  );
}

/** Two-tone headline: pass muted fragments wrapped in <Muted>. */
export function Muted({ children }: { children: ReactNode }) {
  return <span className="text-subtle">{children}</span>;
}

export function PillButton({
  href,
  children,
  variant = "white",
}: {
  href: string;
  children: ReactNode;
  variant?: "white" | "brand" | "sky";
}) {
  const styles = {
    white: "bg-white text-ink hover:bg-sky-soft",
    brand: "bg-brand text-white hover:bg-brand-deep",
    sky: "bg-sky text-brand-ink hover:bg-white",
  }[variant];
  const dot = {
    white: "bg-brand text-white",
    brand: "bg-white text-brand",
    sky: "bg-brand text-white",
  }[variant];

  return (
    <Magnetic>
      <Link
        href={href}
        className={`group inline-flex items-center gap-3 rounded-full py-1.5 pr-1.5 pl-6 text-sm font-medium transition-colors ${styles}`}
      >
        {children}
        <span
          className={`grid size-9 place-items-center rounded-full transition-transform duration-500 ease-out-soft group-hover:rotate-45 ${dot}`}
        >
          <ArrowUpRight className="size-4" />
        </span>
      </Link>
    </Magnetic>
  );
}
