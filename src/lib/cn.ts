/**
 * Tiny className combiner — joins truthy class fragments with a space.
 * Avoids pulling in clsx/tailwind-merge for this small project.
 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
