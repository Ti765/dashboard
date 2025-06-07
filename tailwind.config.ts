import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "2rem" },
    extend: {
      fontFamily: {
        sans: ["'Space Grotesk'", ...fontFamily.sans],
      },
      colors: {
        // Vercel-style palette: near-black surfaces, dim grays, electric accent
        bg: { DEFAULT: "#0d0d0d", faint: "#111" },
        fg: { DEFAULT: "#e5e7eb", muted: "#a1a1aa" },
        accent: { DEFAULT: "#38bdf8", hover: "#0ea5e9" },
        neutral: {
          800: "#1E1E20",
          900: "#000000",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
