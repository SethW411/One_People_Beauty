import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ChipProps {
  children: ReactNode;
  className?: string;
}

/** Small pill label — e.g. texture tags ("Wavy", "Curly", "Coily"). */
export default function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill bg-botanical/10 px-3 py-1 text-small font-medium text-botanical",
        className,
      )}
    >
      {children}
    </span>
  );
}
