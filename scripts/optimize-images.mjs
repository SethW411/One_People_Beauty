/**
 * One-off image pipeline: reads the brand photos from assets/images/** and
 * writes web-optimized WebP into public/images/<section>/ with semantic names.
 *
 * Run: node scripts/optimize-images.mjs
 * Requires: sharp (devDependency). If sharp is unavailable, see the fallback
 * note in the integration plan (copy originals as-is).
 */
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs/promises";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const SRC = path.join(root, "assets", "images");
const OUT = path.join(root, "public", "images");

// Map each source file -> destination WebP (semantic, role-based names).
const MAP = [
  // Founder (Michelle O'Connor) portraits
  ["About_Me/Picture15.jpg", "about/founder-01.webp"],
  ["About_Me/Picture16.jpg", "about/founder-02.webp"],
  ["About_Me/Picture17.jpg", "about/founder-03.webp"],
  ["About_Me/Picture18.jpg", "about/founder-04.webp"],
  ["About_Me/Picture19.jpg", "about/founder-05.webp"],
  ["About_Me/Picture20.jpg", "about/founder-06.webp"],
  // Problem (hair close-ups)
  ["The_Problem/Picture9.jpg", "about/problem-01.webp"],
  ["The_Problem/Picture10.jpg", "about/problem-02.webp"],
  ["The_Problem/Picture11.png", "about/problem-03.webp"],
  // Solution
  ["The_Solution/Picture12.jpg", "about/solution-01.webp"],
  // Personas / consumers
  ["Target_Consumer_1/Picture7.jpg", "personas/target-01.webp"],
  ["Target_Consumer_2/Picture8.jpg", "personas/target-02.webp"],
  ["Customer_Personas_Demographics/Picture13.jpg", "personas/urban-professional.webp"],
  ["Customer_Personas_Shopping_Behavior/Picture14.jpg", "personas/shopping.webp"],
  // Market lifestyle (Market page only)
  ["Market_Overview/Picture1.jpg", "market/overview-01.webp"],
  ["Market_Overview/Picture2.jpg", "market/overview-02.webp"],
  ["Market_Overview/Picture3.jpg", "market/overview-03.webp"],
  ["Market_Continued/Picture4.jpg", "market/continued-01.webp"],
  ["Market_Continued/Picture5.jpg", "market/continued-02.webp"],
  ["Market_Continued/Picture6.jpg", "market/continued-03.webp"],
];

// Cap the largest dimension; keeps files small without visible quality loss.
const MAX_EDGE = 1280;

// Crop/letterbox background = the image outline color (Tailwind `frame`), so any
// transparent area of a cropped image matches its outline on the site.
const FRAME = { r: 0xd3, g: 0xcf, b: 0xc8 };

let ok = 0;
for (const [from, to] of MAP) {
  const srcPath = path.join(SRC, from);
  const outPath = path.join(OUT, to);
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  try {
    await sharp(srcPath)
      .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
      .flatten({ background: FRAME }) // transparent -> frame gray (matches outline)
      .webp({ quality: 80 })
      .toFile(outPath);
    ok++;
    console.log(`✓ ${from} -> images/${to}`);
  } catch (err) {
    console.error(`✗ ${from}: ${err.message}`);
  }
}
console.log(`\nDone: ${ok}/${MAP.length} images written to public/images/`);
