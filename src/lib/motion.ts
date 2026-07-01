import type { Variants } from "framer-motion";

/** Shared easing — a smooth "power2.out"-style curve. */
export const EASE_OUT = [0.25, 0.1, 0.25, 1] as const;

/** Fade + slide-up, used by Reveal and StaggerItem. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

/** Smaller fade+rise for staggered grid items. */
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

/** Container that staggers its children's entrance. */
export const staggerContainer = (gap = 0.12): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap } },
});

/**
 * Page transition (part 2 of the 0.5s load-in): content fades + slides up.
 * The 0.1s `delay` lets the cream overlay (part 1) clear first on initial load.
 */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut", delay: 0.1 },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

/** Shared viewport config — animate once, when ~20% visible. */
export const viewportOnce = { once: true, amount: 0.2 } as const;
