# One People Beauty — Website

The public marketing site for **One People Beauty** (app #1 of 2). A pure static
single-page app built with Vite + React + TypeScript + Tailwind. No backend, no
database — content lives as typed JSON that a separate local editor app (app #2)
edits and pushes to GitHub.

## Stack

- **Vite + React 18 + TypeScript** — static SPA
- **Tailwind CSS** — design system in `tailwind.config.ts`
- **react-router-dom** — routing (see `src/routes.tsx`)
- **@phosphor-icons/react** — icons
- **recharts** — Market Opportunity charts
- **framer-motion · gsap** — page transitions, scroll reveals, micro-interactions, hero glow

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build to /dist
npm run preview    # serve the production build
```

## How content works (the "no database" model)

- All copy/data lives in `src/content/*.json`, typed by `src/content/schema.ts`.
- `src/content/index.ts` re-exports each file cast to its interface — pages import
  strongly-typed content from `@/content`.
- Images live in `public/images/<section>/` (optimized WebP) and are referenced by path in the JSON.
  Source photos are in `assets/images/`; run `node scripts/optimize-images.mjs` to regenerate.
- The **editor app (app #2)** edits these JSON files + drops images, then pushes to
  GitHub via a fine-grained, repo-scoped Personal Access Token (Contents: R/W).
- A GitHub Actions workflow (added in the deploy phase) rebuilds and deploys on push.

`src/content/schema.ts` is the **contract** the editor app targets — keep it in sync.

## Project structure

```
src/
  components/
    layout/   Navbar, MobileMenu, Footer, ScrollToTop, PageTransition
    ui/       Button, Container, Section, Card, Chip, SectionHeading, Icon, ImageFrame,
              ProductCard, Carousel, Reveal, CountUp, Parallax, HeroAmbient
  content/    schema.ts + 7 JSON files (global/home/about/products/personas/contact/market) + typed index.ts
  pages/      Home, About, Products, Personas, Contact, Market, NotFound
  routes.tsx  single source of truth for routes + nav
```

## Deploy (added when ready to publish)

- GitHub Pages via GitHub Actions; set `VITE_BASE=/One_People_Beauty/` in the workflow.
- `public/404.html` provides SPA deep-link fallback on GitHub Pages.
- Moving to GoDaddy later = serve `/dist` at the domain root with `VITE_BASE=/`.
