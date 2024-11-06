import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "departure-mono": ["var(--font-departure-mono)"],
      },
      colors: {
        "bg-primary": "#282725",
        "bg-secondary": "#343330",
        "bg-tertiary": "#1F1F1F",
        "bg-quaternary": "#141414",
        "text-primary": "#F7F5F1",
        primary: "#F7F5F1",
        secondary: "#C8C6C4",
        tertiary: "#A6A29E",
        "neutral-light": "#ECE4DB",
        "neutral-dark": "#8E8E93",
        dark: "#1C1C1C",
        accent: {
          light: "#FF9A76",
          DEFAULT: "#FF6F3C",
          dark: "#D35400",
        },
        neutral: {
          light: "#ECE4DB",
          DEFAULT: "#8E8E93",
          dark: "#2C2C2E",
        },
        "border-light": "#4A4A4A",
      },
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "0.9" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        fall: "fall 300ms linear",
        slideInFromRight: "slideInFromRight 0.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
