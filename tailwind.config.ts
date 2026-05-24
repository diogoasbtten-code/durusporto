import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1E293B",   // Douro Slate
          accent: "#9F1239",    // Porto Ruby (brighter)
          dark: "#334155",      // Lighter slate for text
          light: "#FFFFFF",     // Pure white for bright backgrounds
          muted: "#F8FAFC",     // Airy gray for contrast
          whatsapp: "#25D366",  // Official WhatsApp Green
          whatsappDark: "#128C7E", // WhatsApp Hover State
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        heading: ["var(--font-heading)", "Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
