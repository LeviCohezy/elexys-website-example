import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Cpu, LineChart, PlugZap, Zap } from "lucide-react";
import { asset } from "../lib/asset";
import { Float } from "./motion/float";

/** The Elexys group and partner, from elexys.be/over-ons and the Companion Energy blog post. */
const nodes = [
  {
    name: "Elexys",
    role: "Energieleverancier · 3e verdieping",
    image: "/images/office-solar.jpg",
    href: null,
    // desktop position (percent of the stage) and tilt
    pos: { left: "4%", top: "10%" },
    tilt: "-rotate-3",
    highlight: true,
  },
  {
    name: "European Commodities",
    role: "BRP en trading · 2e verdieping",
    image: "/images/trading.jpg",
    href: "https://www.europeancommodities.eu/",
    pos: { left: "38%", top: "2%" },
    tilt: "rotate-2",
  },
  {
    name: "Cogenius",
    role: "IT voor de energiemarkt · 2e verdieping",
    image: "/images/team.jpg",
    href: "https://www.cogenius.be/",
    pos: { left: "72%", top: "14%" },
    tilt: "-rotate-2",
  },
  {
    name: "Companion Energy",
    role: "Partner voor slimme sturing · Gent",
    image: "/images/rooftop-solar.jpg",
    href: "/blog/stuur-vanaf-nu-uw-assets-via-elexys",
    pos: { left: "52%", top: "52%" },
    tilt: "rotate-3",
  },
];

const chips = [
  { label: "Levering aan bedrijven", icon: Zap, pos: { left: "14%", top: "74%" } },
  { label: "Toegang tot de Europese markt", icon: LineChart, pos: { left: "30%", top: "44%" } },
  { label: "IT-platform", icon: Cpu, pos: { left: "84%", top: "64%" } },
  { label: "Peakshaving en eigenverbruik", icon: PlugZap, pos: { left: "24%", top: "90%" } },
];

function NodeCard({ n }: { n: (typeof nodes)[number] }) {
  const body = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
        <Image src={asset(n.image)} alt="" fill sizes="240px" className="object-cover" />
      </div>
      <div className="relative -mt-8 mx-3 mb-1 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-brand-ink/10">
        <p
          className={`flex items-center justify-between gap-2 text-sm font-medium ${n.highlight ? "text-brand" : "text-ink"}`}
        >
          {n.name}
          {n.href && <ArrowUpRight className="size-3.5 text-subtle" />}
        </p>
        <p className="mt-0.5 text-[11px] tracking-wide text-muted uppercase">{n.role}</p>
      </div>
    </>
  );
  const cls = `relative block w-[220px] rounded-[22px] bg-white p-2 shadow-xl shadow-brand-ink/10 ring-1 ${
    n.highlight ? "ring-brand" : "ring-line"
  } transition-transform duration-500 hover:rotate-0`;
  if (!n.href) return <div className={cls}>{body}</div>;
  return n.href.startsWith("http") ? (
    <a href={n.href} target="_blank" rel="noopener" className={cls}>
      {body}
    </a>
  ) : (
    <Link href={n.href} className={cls}>
      {body}
    </Link>
  );
}

/** Floating cards joined by a dotted loop (desktop); a dotted timeline on mobile. */
export function GroupNetwork() {
  return (
    <>
      <div className="relative hidden h-[600px] lg:block">
        <svg
          className="absolute inset-0 size-full"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M120,170 C220,40 380,40 470,110 S700,60 830,190 S760,470 640,420 S330,560 180,470 S20,300 120,170 Z"
            fill="none"
            stroke="var(--color-brand)"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeDasharray="6 7"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {chips.map((c) => (
          <span
            key={c.label}
            style={c.pos}
            className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-brand-ink px-4 py-2 text-xs font-medium whitespace-nowrap text-white shadow-lg"
          >
            <c.icon className="size-3.5 text-sky" />
            {c.label}
          </span>
        ))}
        {nodes.map((n, i) => (
          <Float key={n.name} speed={[0.8, 1.4, 0.6, 1.1][i]} style={n.pos} className="absolute">
            <div className={n.tilt}>
              <NodeCard n={n} />
            </div>
          </Float>
        ))}
      </div>

      <ol className="relative space-y-6 border-l-2 border-dashed border-brand/25 pl-6 lg:hidden">
        {nodes.map((n) => (
          <li key={n.name} className="relative">
            <span className="absolute top-8 -left-[33px] size-3.5 rounded-full border-2 border-white bg-brand" />
            <NodeCard n={n} />
          </li>
        ))}
      </ol>
    </>
  );
}
