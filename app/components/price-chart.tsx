import { parseNumber, type Table } from "../lib/scraped";

type Series = { label: string; color: string; values: (number | null)[] };
type Chart = { kind: "line" | "bar"; x: string[]; series: Series[]; unit: string };

const COLORS = ["var(--color-brand)", "var(--color-sky)", "#9aa0b8"];

/** Turn one of the elexys.be insight tables into chart data. */
export function chartFromTable(table: Table): Chart | null {
  const { head, rows } = table;
  if (!rows.length) return null;

  // Month × year matrix (Belix, TTF, ZTP): one line per recent year.
  if (head[0] === "Month") {
    const years = head.slice(1);
    const recent = years.slice(-3).reverse();
    return {
      kind: "line",
      unit: "€/MWh",
      x: rows.map((r) => r[0]),
      series: recent.map((y, i) => ({
        label: y,
        color: COLORS[i],
        values: rows.map((r) => parseNumber(r[years.indexOf(y) + 1])),
      })),
    };
  }

  // Forward curve (ICE Endex): today's price per contract.
  if (head[1] === "Vandaag") {
    return {
      kind: "bar",
      unit: "€/MWh",
      x: rows.map((r) => r[0]),
      series: [{ label: "Vandaag", color: COLORS[0], values: rows.map((r) => parseNumber(r[1])) }],
    };
  }

  // Date series (Belpex hourly/quarter-hourly, solar imbalance): newest first in the source.
  if (head[0] === "Datum") {
    const chrono = [...rows].reverse();
    const valueCols = head
      .map((h, i) => i)
      .filter((i) => i > 0 && head[i] !== "Time" && chrono.some((r) => parseNumber(r[i]) !== null));
    return {
      kind: "line",
      unit: head.some((h) => h.includes("EUR/MWh")) ? "€/MWh" : "€",
      x: chrono.map((r) => (head[1] === "Time" ? r[1] : r[0])),
      series: valueCols.slice(0, 2).map((c, i) => ({
        label: head[c].replace(/\s*\(EUR\/MWh\)/, ""),
        color: COLORS[i],
        values: chrono.map((r) => parseNumber(r[c])),
      })),
    };
  }
  return null;
}

/** Minimal responsive SVG chart; no client JS. */
export function PriceChart({ chart, title }: { chart: Chart; title: string }) {
  const W = 720;
  const H = 280;
  const pad = { l: 48, r: 12, t: 16, b: 32 };
  const all = chart.series.flatMap((s) => s.values).filter((v): v is number => v !== null);
  const min = chart.kind === "bar" ? 0 : Math.min(...all, 0);
  const max = Math.max(...all);
  const span = max - min || 1;
  const n = chart.x.length;
  const plotW = W - pad.l - pad.r;
  // Bars sit in equal bands; line points run edge to edge.
  const xAt = (i: number) =>
    chart.kind === "bar" || n === 1 ? pad.l + ((i + 0.5) / n) * plotW : pad.l + (i / (n - 1)) * plotW;
  const yAt = (v: number) => pad.t + (1 - (v - min) / span) * (H - pad.t - pad.b);
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => min + t * span);
  const labelEvery = Math.ceil(n / 8);

  return (
    <figure className="min-w-[560px]">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={title}>
        {ticks.map((t) => (
          <g key={t}>
            <line x1={pad.l} x2={W - pad.r} y1={yAt(t)} y2={yAt(t)} stroke="var(--color-line)" />
            <text x={pad.l - 8} y={yAt(t) + 4} textAnchor="end" fontSize="11" fill="var(--color-subtle)">
              {Math.round(t)}
            </text>
          </g>
        ))}
        {chart.x.map((label, i) =>
          i % labelEvery === 0 ? (
            <text key={i} x={xAt(i)} y={H - 8} textAnchor="middle" fontSize="11" fill="var(--color-subtle)">
              {label}
            </text>
          ) : null,
        )}
        {chart.kind === "bar"
          ? chart.series[0].values.map((v, i) => {
              if (v === null) return null;
              const w = Math.min(56, (plotW / n) * 0.55);
              return (
                <g key={i}>
                  <rect x={xAt(i) - w / 2} y={yAt(v)} width={w} height={yAt(min) - yAt(v)} rx="8" fill={i === 0 ? "var(--color-brand)" : "var(--color-sky)"} />
                  <text x={xAt(i)} y={yAt(v) - 6} textAnchor="middle" fontSize="11" fill="var(--color-ink)">
                    {v.toFixed(0)}
                  </text>
                </g>
              );
            })
          : [...chart.series].reverse().map((s) => {
              let d = "";
              s.values.forEach((v, i) => {
                if (v === null) return;
                d += `${d && s.values[i - 1] !== null ? "L" : "M"}${xAt(i).toFixed(1)},${yAt(v).toFixed(1)}`;
              });
              return (
                <path key={s.label} d={d} fill="none" stroke={s.color} strokeWidth={s.color === COLORS[0] ? 2.5 : 1.75} strokeLinejoin="round" strokeLinecap="round" />
              );
            })}
      </svg>
      <figcaption className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-muted">
        <span>{chart.unit}</span>
        {chart.kind === "line" &&
          chart.series.map((s) => (
            <span key={s.label} className="flex items-center gap-1.5">
              <span className="h-0.5 w-4 rounded" style={{ background: s.color }} />
              {s.label}
            </span>
          ))}
      </figcaption>
    </figure>
  );
}
