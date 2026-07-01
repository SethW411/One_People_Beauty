import { useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

export interface TabItem {
  label: string;
  content: ReactNode;
}

/**
 * Accessible-ish segmented tabs with a sliding underline on the active tab.
 * Content swaps instantly (crossfade added in the animation pass).
 */
export default function Tabs({ items }: { items: TabItem[] }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <div>
      <div
        role="tablist"
        className="flex flex-wrap gap-2 border-b border-charcoal/10"
      >
        {items.map((item, i) => (
          <button
            key={item.label}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={cn(
              "relative -mb-px px-4 py-3 text-small font-medium transition-colors",
              active === i
                ? "text-cocoa"
                : "text-charcoal/60 hover:text-charcoal",
            )}
          >
            {item.label}
            {active === i &&
              (reduce ? (
                <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-pill bg-cocoa" />
              ) : (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute inset-x-0 -bottom-px h-0.5 rounded-pill bg-cocoa"
                  transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
                />
              ))}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="pt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {items[active]?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
