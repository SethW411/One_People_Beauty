import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3EF",
        charcoal: "#1E1E1E",
        cocoa: {
          DEFAULT: "#5A3E36",
          dark: "#3F2A24",
        },
        honey: "#D9A441",
        botanical: "#6E8F6A",
        sand: "#EFE3D8",
        error: "#C0392B",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // [size, { lineHeight }]
        h1: ["48px", { lineHeight: "1.1", fontWeight: "600" }],
        h2: ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        h3: ["24px", { lineHeight: "1.3", fontWeight: "500" }],
        body: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["14px", { lineHeight: "1.5", fontWeight: "400" }],
      },
      maxWidth: {
        content: "1120px",
      },
      spacing: {
        "section-desktop": "80px",
        "section-mobile": "48px",
        "gutter-desktop": "80px",
        "gutter-mobile": "24px",
      },
      borderRadius: {
        pill: "999px",
        card: "16px",
      },
      boxShadow: {
        card: "0 8px 24px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 14px 32px rgba(0, 0, 0, 0.10)",
      },
      screens: {
        // spec breakpoints: mobile 375, tablet 768, desktop 1440
        tablet: "768px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
} satisfies Config;
