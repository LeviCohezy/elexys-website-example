/**
 * Elexys product range, from www.elexys.be/product/* (content/scraped/product__*.md).
 * Features are copied verbatim; `summary` is the page's meta description.
 */

export type Energy = "elektriciteit" | "gas" | "injectie";
export type PriceType = "vast" | "click" | "variabel" | "combinatie";

export type Product = {
  slug: string;
  name: string;
  energy: Energy;
  price: PriceType;
  summary: string;
  features: string[];
};

export const energyLabels: Record<Energy, string> = {
  elektriciteit: "Elektriciteit",
  gas: "Aardgas",
  injectie: "Energie verkopen",
};

export const priceLabels: Record<PriceType, string> = {
  vast: "Vaste prijs",
  click: "Vast via clicks",
  variabel: "Variabele prijs",
  combinatie: "Vast + variabel",
};

export const products: Product[] = [
  {
    slug: "fix",
    name: "FIX",
    energy: "elektriciteit",
    price: "vast",
    summary:
      "Met Fix kiest u voor een vaste energieprijs met mogelijkheid tot uitgestelde prijsfixatie en volledige volumeflexibiliteit.",
    features: [
      "Vaste prijs",
      "Uitgestelde prijsfixatie mogelijk",
      "Volledige volumeflexibiliteit",
      "Netverliezen inbegrepen",
      "Onbalanskosten inbegrepen",
    ],
  },
  {
    slug: "clickx",
    name: "CLICKX",
    energy: "elektriciteit",
    price: "click",
    summary:
      "Met Clickx kiest u voor clickmogelijkheden op maat. U betaalt een vaste prijs op basis van de BE POWER ICE Endex beurs.",
    features: [
      "Vaste prijs op basis van de BE POWER ICE Endex beurs",
      "Clickmogelijkheden op maat",
      "De-click optie",
      "Volledige volumeflexibiliteit",
      "Netverliezen inbegrepen",
      "Onbalanskosten inbegrepen",
    ],
  },
  {
    slug: "safe",
    name: "SAFE",
    energy: "elektriciteit",
    price: "click",
    summary:
      "Met Safe kiest u voor een vaste prijs op basis van het gemiddelde van de BE POWER ICE Endex beurs, met volledige volumeflexibiliteit.",
    features: [
      "Vaste prijs op basis van het gemiddelde van de BE POWER ICE Endex beurs",
      "Clickmogelijkheden op maat",
      "De-click optie",
      "Volledige volumeflexibiliteit",
      "Netverliezen inbegrepen",
      "Onbalanskosten inbegrepen",
    ],
  },
  {
    slug: "belclickx",
    name: "BELCLICKX",
    energy: "elektriciteit",
    price: "combinatie",
    summary:
      "Met BelClickx betaalt u een vaste prijs op basis van de BE POWER ICE Endex beurs, gecombineerd met een variabele prijs op basis van de BELPEX beurs.",
    features: [
      "Vaste prijs op basis van de BE POWER ICE Endex beurs, gecombineerd met een variabele prijs op basis van de BELPEX beurs",
      "Clickmogelijkheden op maat",
      "De-click optie",
      "Volledige volumeflexibiliteit",
      "Onbalanskosten inbegrepen",
    ],
  },
  {
    slug: "belix",
    name: "BELIX",
    energy: "elektriciteit",
    price: "variabel",
    summary:
      "Met Belix kiest u voor een variabele prijs op basis van de gemiddelde BELPEX maandprijs, met mogelijkheid tot financiële hedge.",
    features: [
      "Variabele prijs op basis van de gemiddelde BELPEX maandprijs",
      "Financiële hedge mogelijk op basis van de BE POWER ICE Endex beurs",
      "Unhedge optie mogelijk",
      "Volledige volumeflexibiliteit",
      "Netverliezen inbegrepen",
      "Onbalanskosten inbegrepen",
    ],
  },
  {
    slug: "belex",
    name: "BELEX",
    energy: "elektriciteit",
    price: "variabel",
    summary:
      "Met Belex kiest u voor een variabele prijs op basis van de BELPEX uurprijs, met mogelijkheid tot financiële hedge.",
    features: [
      "Variabele prijs op basis van de BELPEX uurprijs",
      "Financiële hedge mogelijk op basis van de BE POWER ICE Endex beurs",
      "Unhedge optie mogelijk",
      "Volledige volumeflexibiliteit",
      "Onbalanskosten inbegrepen",
    ],
  },
  {
    slug: "gasfix",
    name: "GASFIX",
    energy: "gas",
    price: "vast",
    summary:
      "Een vaste prijs voor het gasverbruik van uw bedrijf? Met GasFix bent u zeker van wat u betaalt.",
    features: ["Vaste prijs"],
  },
  {
    slug: "safe-x-gas",
    name: "SAFE-X",
    energy: "gas",
    price: "click",
    summary:
      "Met Safe-x kiest u voor een vaste prijs op basis van het gemiddelde van de ICE ENDEX TTF beurs.",
    features: [
      "Vaste prijs op basis van het gemiddelde van de ICE ENDEX TTF beurs",
      "Clickmogelijkheden op maat",
      "De-click optie",
    ],
  },
  {
    slug: "gasflex",
    name: "GASFLEX",
    energy: "gas",
    price: "variabel",
    summary:
      "Met GasFlex betaalt u een variabele prijs op basis van de TTF spotmarkt. Omzetting naar een vaste prijs is mogelijk, met volledige volumeflexibiliteit.",
    features: [
      "Variabele prijs op basis van de TTF spotmarkt",
      "Omzetting naar een vaste prijs mogelijk",
      "Volledige volumeflexibiliteit",
    ],
  },
  {
    slug: "fix-injection",
    name: "FIX INJECTION",
    energy: "injectie",
    price: "vast",
    summary:
      "Met Fix Injection ontvangt u een vaste energieprijs voor de stroom die u injecteert, met mogelijkheid tot uitgestelde prijsfixatie.",
    features: ["Vaste prijs", "Uitgestelde prijsfixatie mogelijk"],
  },
  {
    slug: "clickx-injection",
    name: "CLICKX INJECTION",
    energy: "injectie",
    price: "click",
    summary:
      "Met Clickx Injection kiest u voor clickmogelijkheden op maat. U ontvangt een vaste prijs op basis van de BE POWER ICE Endex beurs.",
    features: [
      "Vaste prijs op basis van de BE POWER ICE Endex beurs",
      "Clickmogelijkheden op maat",
    ],
  },
  {
    slug: "belix-injection",
    name: "BELIX INJECTION",
    energy: "injectie",
    price: "variabel",
    summary:
      "Met Belix Injection ontvangt u een variabele prijs op basis van de BELPEX beurs, met volledige volumeflexibiliteit.",
    features: [
      "Variabele prijs op basis van de gemiddelde BELPEX maandprijs",
      "Volledige volumeflexibiliteit",
    ],
  },
  {
    slug: "belex-injection",
    name: "BELEX INJECTION",
    energy: "injectie",
    price: "variabel",
    summary:
      "Met Belex Injection ontvangt u een variabele prijs op basis van de BELPEX uurprijs.",
    features: [
      "Variabele prijs op basis van de BELPEX uurprijs",
      "Volledige volumeflexibiliteit",
    ],
  },
  {
    slug: "produxion-injectie",
    name: "PRODUXION",
    energy: "injectie",
    price: "combinatie",
    summary:
      "Eén offerte voor zowel de levering als de aankoop van uw elektriciteit. Met Produxion kiest u tussen een vaste of variabele prijs voor beide.",
    features: [
      "Gecombineerde offerte voor levering en aankoop",
      "Vaste of variabele prijs mogelijk",
    ],
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
