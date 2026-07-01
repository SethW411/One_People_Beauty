import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// `base` is environment-driven:
//   - local dev / GoDaddy custom domain at root -> "/"
//   - GitHub Pages project site -> set VITE_BASE=/One_People_Beauty/ in the deploy workflow
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
