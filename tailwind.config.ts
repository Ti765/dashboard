import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "2rem" },
    extend: {
      fontFamily: {
        sans: ["'Space Grotesk'", ...fontFamily.sans],
        space: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'hero-light':
          "radial-gradient(circle at top left, rgba(138, 43, 226, 0.3) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(255, 0, 0, 0.2) 0%, transparent 50%)",
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
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5%)' },
        },
        'pulse-light': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 10s ease-in-out infinite alternate',
        'pulse-light': 'pulse-light 8s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
