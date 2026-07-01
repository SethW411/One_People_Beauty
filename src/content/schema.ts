/**
 * Content schema — the CONTRACT between this website and app #2 (the local
 * content editor). Every file in src/content/*.json conforms to one interface
 * below. The editor app reads/writes these shapes; the site renders them.
 *
 * Conventions:
 *  - All image fields are string paths under public/, e.g. "/images/about/founder-01.webp".
 *  - `icon` fields are Phosphor icon names (see iconMap in components/ui/Icon).
 *  - Internal links are app routes (e.g. "/products"); external are full URLs.
 */

export interface CtaLink {
  label: string;
  /** App route (starts with "/") or full external URL. */
  href: string;
}

export interface NavItem {
  label: string;
  path: string;
}

/** Reusable icon + label + blurb (value strips, pillars, etc.). */
export interface ValueItem {
  label: string;
  description: string;
  icon: string;
}

/** Lightweight product reference for cards/carousels. */
export interface ProductRef {
  id: string;
  name: string;
  image?: string;
  textures: string[];
  keyBenefit?: string;
}

/** A named ingredient (benefit optional — only when sourced from copy). */
export interface Ingredient {
  name: string;
  benefit?: string;
}

/* ------------------------------- global.json ------------------------------ */

export interface GlobalContent {
  brandName: string;
  /** Brand slogan, e.g. "Out of Many Beauty". */
  tagline: string;
  footer: {
    blurb: string;
    legalLinks: CtaLink[];
    marketLink: NavItem;
    secondaryLinks: NavItem[];
  };
  /** Empty until real handles are provided. */
  socials: { platform: string; url: string }[];
}

/* -------------------------------- home.json ------------------------------- */

export interface HomeContent {
  hero: {
    h1: string;
    subtext: string;
    image: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
  };
  mission: { heading: string; body: string };
  /** Texture categories (Wavy / Curly / Coily). */
  whoWeServe: { title: string; icon: string; image: string }[];
  /** "What We Stand For" brand-value badges. */
  values: { label: string; icon: string }[];
}

/* ------------------------------- about.json ------------------------------- */

export interface AboutContent {
  missionFull: { heading: string; paragraphs: string[]; image: string };
  founder: { name: string; role: string; photo: string; story: string[] };
  problem: { heading: string; points: { title: string; body: string }[] };
  solution: {
    heading: string;
    intro: string;
    pillars: { title: string; icon: string }[];
  };
  ingredients: { heading: string; intro: string; items: Ingredient[] };
}

/* ------------------------------ personas.json ----------------------------- */

export interface PersonasContent {
  overview: {
    heading: string;
    body: string;
    stats: { label: string; value: string; suffix?: string }[];
  };
  textureCategories: { title: string; icon: string; image: string }[];
}

/* ------------------------------ products.json ----------------------------- */

export interface ProductsContent {
  intro: { heading: string; body: string };
  products: ProductRef[];
  feature: { heading: string; body: string };
  ingredients: { heading: string; intro: string; items: Ingredient[] };
}

/* ------------------------------ contact.json ------------------------------ */

export interface ContactContent {
  form: {
    heading: string;
    textureOptions: string[];
    /** Where the form posts (e.g. a Formspree endpoint). Empty = stub only. */
    endpoint: string;
  };
  trust: {
    heading: string;
    founderPhoto: string;
    missionSnippet: string;
    note: string;
  };
}

/* ------------------------------- market.json ------------------------------ */

export interface MarketContent {
  heading: string;
  intro: string;
  kpis: { label: string; value: number; prefix?: string; suffix?: string }[];
  /** Global market size by year, in $B. */
  marketSize: { label: string; value: number }[];
  /** Avg annual product spend, textured vs straight hair, in $. */
  spend: { label: string; value: number }[];
  narrative: { heading: string; paragraphs: string[] }[];
  images: string[];
}
