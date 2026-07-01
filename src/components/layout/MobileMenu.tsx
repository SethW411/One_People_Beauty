import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import Icon from "@/components/ui/Icon";
import type { RouteDef } from "@/routes";

interface MobileMenuProps {
  onClose: () => void;
  items: RouteDef[];
}

/**
 * Full-screen mobile navigation overlay (cream background, stacked links).
 * Mounted only while open by <AnimatePresence> in Navbar, so it animates in/out.
 */
export default function MobileMenu({ onClose, items }: MobileMenuProps) {
  const reduce = useReducedMotion();

  // Lock body scroll while the overlay is mounted.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-cream tablet:hidden"
      role="dialog"
      aria-modal="true"
      initial={reduce ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? undefined : { opacity: 0, y: -16 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex h-[72px] items-center justify-end px-gutter-mobile">
        <button onClick={onClose} aria-label="Close menu" className="p-2 text-charcoal">
          <Icon name="X" size={28} />
        </button>
      </div>
      <nav className="flex flex-col gap-2 px-gutter-mobile pt-6">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                "py-3 font-heading text-2xl",
                isActive ? "text-cocoa" : "text-charcoal",
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </motion.div>
  );
}
