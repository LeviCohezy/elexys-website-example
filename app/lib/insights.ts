import { extractTables, readScraped, stripChrome, type Table } from "./scraped";

export type Index = {
  slug: string;
  group: "Elektriciteit" | "Gas";
  name: string;
  basis: "vast" | "variabel";
  intro: string;
  updated: string | null;
  tables: { title: string | null; table: Table }[];
};

/** Order and grouping as in the elexys.be insights menu. */
const META: { slug: string; group: Index["group"]; name: string; basis: Index["basis"] }[] = [
  { slug: "ice-endex-belgian-power-base", group: "Elektriciteit", name: "ICE Endex Belgian Power Base", basis: "vast" },
  { slug: "spot-belix", group: "Elektriciteit", name: "Spot Belix", basis: "variabel" },
  { slug: "spot-belpex", group: "Elektriciteit", name: "Spot Belpex", basis: "variabel" },
  { slug: "quarter-hourly-belpex-day-ahead-spot-be", group: "Elektriciteit", name: "Quarter hourly Belpex", basis: "variabel" },
  { slug: "solar-imbalance", group: "Elektriciteit", name: "Solar Imbalance", basis: "variabel" },
  { slug: "ice-endex-dutch-natural-gas-forward", group: "Gas", name: "ICE Endex Dutch Natural Gas Forward", basis: "vast" },
  { slug: "eex-ttf-gas-spot", group: "Gas", name: "EEX TTF Gas Spot", basis: "variabel" },
  { slug: "eex-ztp-gas-spot", group: "Gas", name: "EEX ZTP Gas Spot", basis: "variabel" },
];

function load(meta: (typeof META)[number]): Index {
  const body = stripChrome(readScraped(`insights__${meta.slug}`).body);
  const afterH1 = body.split(/^# .*$/m)[1] ?? body;
  const intro =
    afterH1
      .split("\n")
      .map((l) => l.trim())
      .find((l) => l.length > 60 && !l.startsWith("|") && !l.startsWith("#")) ?? "";
  const updated = body.match(/Laatste update: (\d{2}-\d{2}-\d{4})/)?.[1] ?? null;

  // A table's title is the nearest "### Heading" above it (forward curves: Maand/Kwartaal/Jaar).
  const tables: Index["tables"] = [];
  const chunks = body.split(/^(?=### )/m);
  for (const chunk of chunks) {
    const title = chunk.startsWith("### ") ? chunk.split("\n")[0].slice(4).trim() : null;
    for (const table of extractTables(chunk)) tables.push({ title, table });
  }
  return { ...meta, intro: intro.replace(/\*\*/g, ""), updated, tables };
}

export const getIndices = () => META.map(load);
export const getIndex = (slug: string) => {
  const meta = META.find((m) => m.slug === slug);
  return meta ? load(meta) : undefined;
};
