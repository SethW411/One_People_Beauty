import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { viewportOnce } from "@/lib/motion";

interface SectionHeadingProps {
  title: string;
  /** Small label shown above the title. */
  eyebrow?: string;
  /** Supporting copy shown below the title. */
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Consistent section header: optional eyebrow, h2 title with a short honey
 * underline accent (the animation pass will draw this in), optional subtitle.
 */
export default function SectionHeading({
  title,
  eyebrow,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  const reduce = useReducedMotion();
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-2 text-small font-medium uppercase tracking-widest text-botanical">
          {eyebrow}
        </p>
      )}
      <h2 className="relative inline-block">
        {title}
        <motion.span
          className={cn(
            "absolute -bottom-2 left-0 h-0.5 w-12 rounded-pill bg-honey",
            align === "center" && "left-1/2 -translate-x-1/2",
          )}
          style={{ originX: align === "center" ? 0.5 : 0 }}
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          aria-hidden
        />
      </h2>
      {subtitle && <p className="mt-6 text-charcoal/70">{subtitle}</p>}
    </div>
  );
}
