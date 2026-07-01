import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  value: number;
  durationMs?: number;
  prefix?: string;
  suffix?: string;
}

/**
 * Counts a number up from 0 to `value` the first time it scrolls into view.
 * Large numbers are locale-formatted (e.g. 1,200,000). Respects reduced motion.
 */
export default function CountUp({
  value,
  durationMs = 1400,
  prefix = "",
  suffix = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, durationMs, reduce]);

  return (
    <span ref={ref}>
      {prefix}
      {Math.round(display).toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
