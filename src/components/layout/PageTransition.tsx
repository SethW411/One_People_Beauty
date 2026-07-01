import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { pageTransition } from "@/lib/motion";

/**
 * Per-route transition wrapper: fade/blur out, fade + slide-up in.
 * Rendered with a key per route inside <AnimatePresence> (see App.tsx).
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
