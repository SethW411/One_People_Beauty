import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Adds a hover lift + shadow (used for interactive cards). */
  interactive?: boolean;
}

/**
 * White rounded card with the spec's 16px radius and subtle shadow.
 */
export default function Card({ children, className, interactive }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card bg-white p-6 shadow-card",
        interactive &&
          "transition duration-200 hover:-translate-y-1.5 hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}
