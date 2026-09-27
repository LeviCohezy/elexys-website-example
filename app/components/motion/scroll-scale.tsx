"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

/** Grows from inset/rounded to full as it scrolls into the middle of the viewport. */
export function ScrollScale({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [64, 32]);

  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : { scale, borderRadius: radius }}
      className={`overflow-hidden will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
