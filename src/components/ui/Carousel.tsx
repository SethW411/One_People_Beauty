import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Horizontal snap-scroll carousel (native scroll + snap). Works with touch,
 * trackpad, and mouse drag-to-scroll on most browsers. Framer Motion drag
 * snapping can replace this in the animation pass if desired.
 */
export default function Carousel({
  children,
  className,
  itemClassName,
}: {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4",
        "[scrollbar-width:thin]",
        className,
      )}
    >
      {children.map((child, i) => (
        <div
          key={i}
          className={cn("shrink-0 snap-start", itemClassName ?? "w-64 tablet:w-72")}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
