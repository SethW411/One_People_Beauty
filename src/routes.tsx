import type { ComponentType } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Personas from "./pages/Personas";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Market from "./pages/Market";

export interface RouteDef {
  path: string;
  label: string;
  element: ComponentType;
  /** Show in the primary top navigation (the "5-item rule"). */
  inNav: boolean;
}

/**
 * Single source of truth for routes. The Navbar/Footer derive their links
 * from here so navigation and routing can never drift apart.
 */
export const routes: RouteDef[] = [
  { path: "/", label: "Home", element: Home, inNav: true },
  { path: "/about", label: "About", element: About, inNav: true },
  { path: "/products", label: "Products", element: Products, inNav: true },
  { path: "/personas", label: "Who We Serve", element: Personas, inNav: true },
  { path: "/contact", label: "Contact", element: Contact, inNav: true },
  // Secondary — reachable from the footer, kept out of the main nav.
  { path: "/market", label: "Market Opportunity", element: Market, inNav: false },
];
