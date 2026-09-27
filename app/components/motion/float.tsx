"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

/**
 * Drifts its child vertically as it passes through the viewport. Different
 * `speed`s on neighbouring cards give a layered, floating depth.
 */
export function Float({
  children,
  speed = 1,
  className,
  style,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40 * speed, -40 * speed]);
  return (
    <motion.div ref={ref} style={reduce ? style : { ...style, y }} className={className}>
      {children}
    </motion.div>
  );
}
