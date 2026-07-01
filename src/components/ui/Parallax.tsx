import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Total vertical travel across the scroll range, in px. Default 20 (subtle). */
  distance?: number;
}

/**
 * Subtle image parallax: the element drifts vertically as it passes through the
 * viewport (per the motion plan, ~20px). Disabled for reduced-motion users.
 */
export default function Parallax({ children, className, distance = 20 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
