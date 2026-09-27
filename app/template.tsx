"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, type ReactNode } from "react";

// False until the first page has hydrated: the initial load renders without the
// transition (so static HTML is never hidden behind it), later navigations get it.
let navigated = false;

/**
 * Re-mounts on every client-side navigation: a brand-blue wipe clears upward
 * and the new page fades in.
 */
export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const animateIn = navigated && !reduce;

  useEffect(() => {
    navigated = true;
  }, []);

  if (!animateIn) return <>{children}</>;
  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[60] origin-top bg-brand"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
