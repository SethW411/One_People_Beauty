import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import Container from "./Container";
import { Reveal } from "./Reveal";
import HeroAmbient from "./HeroAmbient";

interface SectionProps {
  children: ReactNode;
  className?: string;
  /** Optional background tint for the full-bleed band behind the content. */
  bg?: "cream" | "sand" | "white";
  /** When true, content spans full width (no inner Container). */
  fullBleed?: boolean;
  /**
   * Wrap content in a scroll-reveal (fade + slide-up). Default true.
   * Set false for sections that manage their own entrance (e.g. the hero, or
   * grids using <Stagger>) to avoid double animation.
   */
  reveal?: boolean;
  /** Render the subtle ambient strand background behind this section (hero use only). */
  ambient?: boolean;
  id?: string;
}

const bgClass: Record<NonNullable<SectionProps["bg"]>, string> = {
  cream: "bg-cream",
  sand: "bg-sand",
  white: "bg-white",
};

/**
 * A major page section. Owns the vertical rhythm (80px desktop / 48px mobile
 * via --section-gap) and an optional background band; wraps children in a
 * Container unless `fullBleed`.
 */
export default function Section({
  children,
  className,
  bg = "cream",
  fullBleed = false,
  reveal = true,
  ambient = false,
  id,
}: SectionProps) {
  const inner = reveal ? <Reveal>{children}</Reveal> : children;
  return (
    <section
      id={id}
      className={cn(bgClass[bg], ambient && "relative isolate overflow-hidden", className)}
      style={{ paddingBlock: "var(--section-gap)" }}
    >
      {ambient && <HeroAmbient />}
      {fullBleed ? inner : <Container>{inner}</Container>}
    </section>
  );
}
