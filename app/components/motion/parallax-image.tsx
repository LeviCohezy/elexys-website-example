"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/**
 * A `fill` image that drifts slower than the page (parallax) and eases out of a
 * slight zoom as its section scrolls away. Parent must be `relative` + `overflow-hidden`.
 */
export function ParallaxImage({
  src,
  alt,
  sizes = "100vw",
  className = "",
  preload,
  strength = 18,
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  preload?: boolean;
  /** Max vertical drift in % of the image height. */
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${strength}%`]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.14]);

  return (
    <div ref={ref} className="absolute inset-0 -z-20 overflow-hidden">
      <motion.div style={reduce ? undefined : { y, scale }} className="absolute inset-0 will-change-transform">
        <Image src={src} alt={alt} fill preload={preload} sizes={sizes} className={`object-cover ${className}`} />
      </motion.div>
    </div>
  );
}
