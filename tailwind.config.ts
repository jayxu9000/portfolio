import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'less-than-500': { 'max': '500px' }, // Custom breakpoint for screens less than 500px wide
        'less-than-770': { 'max': '770px' }, // Custom breakpoint for screens less than 500px wide
      },
    },
  },
  plugins: [],
};

export default config;
