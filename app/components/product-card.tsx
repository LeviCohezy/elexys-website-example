import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { energyLabels, priceLabels, type Product } from "../lib/products";

export function ProductCard({ product, tone = "light" }: { product: Product; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <Link
      href={`/product/${product.slug}`}
      className={`group flex h-full flex-col rounded-[24px] p-6 transition-colors sm:p-7 ${
        dark
          ? "bg-white/[0.06] ring-1 ring-white/10 hover:bg-white/[0.1]"
          : "border border-line bg-white hover:border-sky"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`rounded-full px-3 py-1 text-[11px] font-medium ${
            dark ? "bg-sky text-brand-ink" : "bg-sky-soft text-brand"
          }`}
        >
          {priceLabels[product.price]}
        </span>
        <span className={`text-[11px] ${dark ? "text-white/50" : "text-subtle"}`}>
          {energyLabels[product.energy]}
        </span>
      </div>
      <h3 className={`mt-5 text-2xl font-medium tracking-tight ${dark ? "text-white" : "text-ink"}`}>
        {product.name}
      </h3>
      <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>
        {product.summary}
      </p>
      <ul className={`mt-5 space-y-2 text-sm ${dark ? "text-white/85" : "text-ink/80"}`}>
        {product.features.slice(0, 3).map((f) => (
          <li key={f} className="flex gap-2.5">
            <Check className={`mt-0.5 size-4 shrink-0 ${dark ? "text-sky" : "text-brand"}`} />
            {f}
          </li>
        ))}
      </ul>
      <span
        className={`mt-auto flex items-center gap-1.5 pt-6 text-sm font-medium ${dark ? "text-sky" : "text-brand"}`}
      >
        Meer over {product.name}
        <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
      </span>
    </Link>
  );
}
