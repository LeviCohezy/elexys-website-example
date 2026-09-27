"use client";

import { useState } from "react";
import { Flame, Sun, Zap } from "lucide-react";
import {
  energyLabels,
  priceLabels,
  products,
  type Energy,
  type PriceType,
} from "../lib/products";
import { ProductCard } from "./product-card";

const energies: { id: Energy; icon: typeof Zap; hint: string }[] = [
  { id: "elektriciteit", icon: Zap, hint: "Stroom aankopen" },
  { id: "gas", icon: Flame, hint: "Aardgas aankopen" },
  { id: "injectie", icon: Sun, hint: "Zelf geproduceerde stroom" },
];

const preferences: { id: PriceType | "alle"; label: string; hint: string }[] = [
  { id: "vast", label: priceLabels.vast, hint: "Zekerheid over uw budget" },
  { id: "click", label: priceLabels.click, hint: "Gespreid vastleggen" },
  { id: "variabel", label: priceLabels.variabel, hint: "Mee met de spotmarkt" },
  { id: "combinatie", label: priceLabels.combinatie, hint: "Het beste van beide" },
  { id: "alle", label: "Weet ik nog niet", hint: "Toon alles" },
];

/**
 * Replaces the JS wizard on elexys.be/oplossingen (energy → consumption → results).
 * The consumption step needs Elexys' own sizing rules, so this asks for a price
 * preference instead.
 */
export function ProductFinder() {
  const [energy, setEnergy] = useState<Energy>("elektriciteit");
  const [pref, setPref] = useState<PriceType | "alle">("alle");

  const available = new Set(products.filter((p) => p.energy === energy).map((p) => p.price));
  const results = products.filter(
    (p) => p.energy === energy && (pref === "alle" || p.price === pref),
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <fieldset>
          <legend className="text-xs font-medium tracking-[0.16em] text-white/50 uppercase">
            Stap 1 · Welke energie?
          </legend>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {energies.map(({ id, icon: Icon, hint }) => (
              <label
                key={id}
                className="cursor-pointer rounded-2xl p-4 ring-1 ring-white/15 transition-colors hover:bg-white/5 has-[:checked]:bg-white has-[:checked]:text-ink has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-sky"
              >
                <input
                  type="radio"
                  name="energy"
                  value={id}
                  checked={energy === id}
                  onChange={() => {
                    setEnergy(id);
                    setPref("alle");
                  }}
                  className="sr-only"
                />
                <Icon className="size-5 text-sky" />
                <span className="mt-3 block text-sm font-medium">{energyLabels[id]}</span>
                <span className="mt-0.5 block text-[11px] opacity-60">{hint}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-8">
          <legend className="text-xs font-medium tracking-[0.16em] text-white/50 uppercase">
            Stap 2 · Welke prijsformule?
          </legend>
          <div className="mt-4 flex flex-wrap gap-2">
            {preferences
              .filter((p) => p.id === "alle" || available.has(p.id))
              .map((p) => (
                <label
                  key={p.id}
                  className="cursor-pointer rounded-full px-4 py-2.5 text-sm ring-1 ring-white/15 transition-colors hover:bg-white/5 has-[:checked]:bg-sky has-[:checked]:text-brand-ink has-[:checked]:ring-sky has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-white"
                >
                  <input
                    type="radio"
                    name="pref"
                    value={p.id}
                    checked={pref === p.id}
                    onChange={() => setPref(p.id)}
                    className="sr-only"
                  />
                  {p.label}
                  <span className="ml-2 text-[11px] opacity-60">{p.hint}</span>
                </label>
              ))}
          </div>
        </fieldset>

        <p className="mt-8 text-sm text-white/60" aria-live="polite">
          {results.length} {results.length === 1 ? "product past" : "producten passen"} bij uw
          keuze.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {results.map((p) => (
          <ProductCard key={p.slug} product={p} tone="dark" />
        ))}
      </div>
    </div>
  );
}
