import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Remove the responsive side padding (for full-bleed inner content). */
  flush?: boolean;
}

/**
 * Centers content at the spec's max width (1120px) and applies the responsive
 * side padding (80px desktop / 24px mobile) via the --side-padding CSS var.
 */
export default function Container({ children, className, flush }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-content", className)}
      style={flush ? undefined : { paddingInline: "var(--side-padding)" }}
    >
      {children}
    </div>
  );
}
