import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#282725",
        "bg-secondary": "#2C2C2E",
        "bg-tertiary": "#1F1F1F",
        "bg-quaternary": "#141414",
        "text-primary": "#F7F5F1",
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
      },
    },
  },
  plugins: [],
};
export default config;
