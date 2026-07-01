/**
 * Resolve a public asset path (e.g. "/images/foo.webp" from content JSON)
 * against Vite's configured base URL. Runtime string paths aren't rewritten by
 * Vite, so under a subpath deploy (GitHub Pages /One_People_Beauty/) a bare
 * "/images/..." would 404. Prefixing BASE_URL fixes that; at root ("/") it's a no-op.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function asset(path: string | undefined): string | undefined {
  if (!path) return path;
  return path.startsWith("/") ? base + path : path;
}
