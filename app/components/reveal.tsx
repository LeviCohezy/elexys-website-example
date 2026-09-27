"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const variants = {
  /** Fade and rise (default for cards and text). */
  up: { hidden: { opacity: 0, y: 32 }, shown: { opacity: 1, y: 0 } },
  /** Headline wipes up from behind a mask. */
  mask: {
    hidden: { opacity: 0, y: "35%", clipPath: "inset(0 0 100% 0)" },
    shown: { opacity: 1, y: "0%", clipPath: "inset(0 0 0% 0)" },
  },
  /** Photos and panels grow in from slightly smaller. */
  scale: { hidden: { opacity: 0, scale: 0.94 }, shown: { opacity: 1, scale: 1 } },
};

export function Reveal({
  children,
  delay = 0,
  className,
  variant = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: keyof typeof variants;
}) {
  const reduce = useReducedMotion();
  const transition = { duration: variant === "mask" ? 1.1 : 0.9, delay, ease: EASE };

  // IntersectionObserver treats a fully clipped element as invisible, so the
  // mask variant is observed on an unclipped wrapper and animates an inner node.
  if (variant === "mask") {
    return (
      <motion.div
        className={className}
        initial={reduce ? false : "hidden"}
        whileInView="shown"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={variants.mask} transition={transition}>
          {children}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      initial={reduce ? false : "hidden"}
      whileInView="shown"
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

/** Children reveal one after another; wrap each child in <StaggerItem>. */
export function Stagger({
  children,
  className,
  gap = 0.08,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="shown"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, shown: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.97 },
        shown: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}
