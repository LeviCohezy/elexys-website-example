"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "motion/react";
import { useRef, type ReactNode } from "react";

/**
 * Endless loop that drifts on its own and speeds up (or reverses) with the
 * page's scroll velocity. `children` is one copy of the row; it is rendered twice.
 */
export function VelocityMarquee({ children, speed = 2.2 }: { children: ReactNode; speed?: number }) {
  const reduce = useReducedMotion();
  const base = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [-1500, 0, 1500], [-4, 0, 4], { clamp: false });
  const direction = useRef(1);
  const x = useTransform(base, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const f = factor.get();
    if (f < 0) direction.current = -1;
    else if (f > 0) direction.current = 1;
    base.set(base.get() - direction.current * speed * (delta / 1000) * (1 + Math.abs(f)));
  });

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <motion.div style={{ x }} className="flex w-max">
        <div className="flex shrink-0 gap-16 pr-16">{children}</div>
        <div className="flex shrink-0 gap-16 pr-16" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
