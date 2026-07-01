import { useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Icon from "./Icon";
import { cn } from "@/lib/cn";

export interface AccordionItem {
  title: string;
  content: ReactNode;
}

/**
 * Accordion list. One panel open at a time; chevron rotates on open.
 * Height/spring animation is added in the animation pass.
 */
export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <div className="divide-y divide-charcoal/10 rounded-card border border-charcoal/10 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-charcoal"
            >
              <span>{item.title}</span>
              <Icon
                name="CaretRight"
                size={18}
                className={cn(
                  "shrink-0 text-cocoa transition-transform duration-200",
                  isOpen && "rotate-90",
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="panel"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-charcoal/75">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
