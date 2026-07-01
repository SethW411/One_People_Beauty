/**
 * Typed content loader. Imports the raw JSON and re-exports it cast to the
 * schema interfaces, so pages get full type safety and autocomplete while the
 * underlying files remain plain JSON the editor app can write.
 */
import type {
  GlobalContent,
  HomeContent,
  AboutContent,
  PersonasContent,
  ProductsContent,
  ContactContent,
  MarketContent,
} from "./schema";

import globalJson from "./global.json";
import homeJson from "./home.json";
import aboutJson from "./about.json";
import personasJson from "./personas.json";
import productsJson from "./products.json";
import contactJson from "./contact.json";
import marketJson from "./market.json";

export const global = globalJson as GlobalContent;
export const home = homeJson as HomeContent;
export const about = aboutJson as AboutContent;
export const personas = personasJson as PersonasContent;
export const products = productsJson as ProductsContent;
export const contact = contactJson as ContactContent;
export const market = marketJson as MarketContent;
