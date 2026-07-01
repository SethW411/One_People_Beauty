/**
 * Build a clean favicon from the brand logo: trim the transparent padding and
 * resize to 256x256 on a transparent background. Output -> public/favicon.png.
 * Run: node scripts/make-favicon.mjs
 */
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const src = path.join(root, "public/images/ChatGPT Image Jul 1, 2026, 12_45_41 PM-Photoroom.png");
const out = path.join(root, "public/favicon.png");

await sharp(src)
  .trim()
  .resize(256, 256, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(out);

console.log("Wrote", out);
