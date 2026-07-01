import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUp,
  fadeUpItem,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay before the reveal starts (seconds). */
  delay?: number;
}

/**
 * Fade + slide-up when scrolled into view (once). Honors prefers-reduced-motion
 * by rendering a plain, fully-visible element.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** Gap between each child's entrance (seconds). */
  gap?: number;
}

/**
 * Grid/list wrapper that staggers its <StaggerItem> children into view.
 * Apply your layout (grid/flex) classes here.
 */
export function Stagger({ children, className, gap = 0.12 }: StaggerProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={staggerContainer(gap)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={fadeUpItem}>
      {children}
    </motion.div>
  );
}
