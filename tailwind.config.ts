import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'move-up': 'moveUp 10s infinite',
      },
      keyframes: {
        moveUp: {
          '0%, 100%': { transform: 'translateY(100%)' },
          '25%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-100%)' },
          '75%': { transform: 'translateY(-200%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
