import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 text-base font-medium transition duration-150 will-change-transform hover:scale-[1.03] active:scale-[0.99] motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honey focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // Primary: cocoa pill -> darker on hover (spec)
  primary: "bg-cocoa text-cream hover:bg-cocoa-dark",
  // Secondary: outline button, cocoa border + text (spec)
  secondary:
    "border border-cocoa text-cocoa hover:bg-cocoa hover:text-cream bg-transparent",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined };
type AsLink = CommonProps & { to: string };

/**
 * Button styled per the design system. Renders a react-router <Link> when `to`
 * is provided (internal navigation), otherwise a native <button>.
 */
export default function Button(props: AsButton | AsLink) {
  const { variant = "primary", className, children } = props;
  const classes = cn(base, variants[variant], className);

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, className: _c, children: _ch, ...rest } = props as AsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
