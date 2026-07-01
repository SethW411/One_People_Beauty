import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import Icon from "@/components/ui/Icon";
import MobileMenu from "./MobileMenu";
import { routes } from "@/routes";
import { global } from "@/content";

const navItems = routes.filter((r) => r.inNav);

/**
 * Fixed top navigation: 72px tall, blurred cream background. Brand logo (text)
 * on the left, the 5 primary links on the right, hamburger on mobile.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-[72px] border-b border-charcoal/5 bg-cream/90 backdrop-blur-md">
      <div
        className="mx-auto flex h-full max-w-content items-center justify-between"
        style={{ paddingInline: "var(--side-padding)" }}
      >
        <Link to="/" className="font-heading text-xl font-semibold text-charcoal">
          {global.brandName}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 tablet:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "relative text-small font-medium transition-colors",
                  "after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-cocoa after:transition-all after:duration-200",
                  isActive
                    ? "text-cocoa after:w-full"
                    : "text-charcoal hover:text-cocoa after:w-0 hover:after:w-full",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="p-2 text-charcoal tablet:hidden"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Icon name="List" size={28} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu onClose={() => setMenuOpen(false)} items={navItems} />
        )}
      </AnimatePresence>
    </header>
  );
}
