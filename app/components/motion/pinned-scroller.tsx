"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

/**
 * Desktop: the section pins while vertical scroll drives the track sideways.
 * Mobile / reduced motion: a plain horizontal scroll-snap row.
 */
export function PinnedScroller({ header, children }: { header: ReactNode; children: ReactNode }) {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      const el = track.current;
      if (!el) return;
      setDistance(window.innerWidth >= 1024 ? Math.max(0, el.scrollWidth - el.clientWidth) : 0);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const pinned = !reduce && distance > 0;
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -distance]);
  const progress = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"]);

  return (
    <section
      ref={section}
      className="relative"
      style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div className={pinned ? "sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-20" : ""}>
        <div className="mx-auto w-full max-w-[1240px] px-6 pt-20 sm:px-10 lg:pt-0">{header}</div>
        <div className="mx-auto mt-12 w-full max-w-[1240px] px-6 sm:px-10">
          <motion.div
            ref={track}
            style={pinned ? { x } : undefined}
            className={`flex gap-4 ${pinned ? "" : "snap-x snap-mandatory overflow-x-auto pb-4 [scrollbar-width:none]"}`}
          >
            {children}
          </motion.div>
          {pinned && (
            <div className="mt-10 h-[2px] w-full overflow-hidden rounded-full bg-line" aria-hidden>
              <motion.div style={{ width: progress }} className="h-full bg-brand" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
