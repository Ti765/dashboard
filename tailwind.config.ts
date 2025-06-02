import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          '50': '#F5F3FF',
          '100': '#EDE9FE',
          '200': '#DDD6FE',
          '300': '#C4B5FD', // Adjusted to prompt's #A78BFA which is closer to C4B5FD
          '400': '#A78BFA',
          '500': 'hsl(var(--primary))', // #7C3AED
          '600': '#6D28D9',
          '700': 'hsl(var(--primary-700))', // #5521B5
          '800': '#4A1D96',
          '900': '#3F0E8A',
        },
        secondary: { // This will be our accent cyan
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          '50': '#EFFEFF',
          '100': '#E0FCFF',
          '200': '#BEF8FD',
          '300': '#A0F1FA',
          '400': '#76E9F7',
          '500': 'hsl(var(--accent))', // #06B6D4
          '600': '#00A1C2',
          '700': 'hsl(var(--accent-700))', // #0E7490
          '800': '#105C73',
          '900': '#134C5F'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: { // Tailwind's 'accent' can map to our primary for general UI accenting if not specified
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        neutral: { // Adding neutral palette from prompt
          '100': 'hsl(var(--neutral-100))', // #E4E4E7
          '200': '#C2C2C5',
          '300': '#A0A0A4',
          '400': '#7E7E82',
          '500': '#636367', // Placeholder text
          '600': '#4B4B4F', // Placeholder text
          '700': 'hsl(var(--neutral-700))', // #3A3A3C, for borders or subtle elements
          '800': 'hsl(var(--neutral-800))', // #1E1E20, card backgrounds
          '900': 'hsl(var(--neutral-900))', // #121212, main background
        },
        success: {
          DEFAULT: 'hsl(var(--success))', // #22C55E
          foreground: 'hsl(var(--neutral-100))',
          '500': 'hsl(var(--success))',
        },
        error: {
          DEFAULT: 'hsl(var(--error))', // #EF4444
          foreground: 'hsl(var(--neutral-100))',
          '500': 'hsl(var(--error))',
        },
        warning: { // 'Alerta' in prompt
          DEFAULT: 'hsl(var(--warning))', // #EAB308
          foreground: 'hsl(var(--neutral-900))', // Dark text on yellow
          '500': 'hsl(var(--warning))',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        code: ['monospace'], // Default
      },
      borderRadius: {
        lg: 'var(--radius)', // 0.5rem
        md: 'calc(var(--radius) - 2px)', // 0.375rem
        sm: 'calc(var(--radius) - 4px)', // 0.25rem
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0px hsl(var(--accent))' },
          '50%': { boxShadow: '0 0 10px 2px hsla(var(--accent), 0.7)' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 2s infinite ease-in-out',
        spin: 'spin 1s linear infinite',
        shimmer: 'shimmer 1.5s infinite linear',
      },
      boxShadow: {
        'elevation': '0 2px 4px rgba(0,0,0,0.1)', // As per prompt
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
