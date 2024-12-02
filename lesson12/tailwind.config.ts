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
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        fadeOut: {
          "0%": { opacity: "100%" },
          "100%": { opacity: "0%" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
