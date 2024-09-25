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
        studio: {
          "50": "#f9f7fd",
          "100": "#f1ecfb",
          "200": "#e5ddf7",
          "300": "#d2c2f0",
          "400": "#b69be5",
          "500": "#9974d8",
          "600": "#8156c7",
          "700": "#7347b6",
          "800": "#5d3b8e",
          "900": "#4c3172",
          "950": "#311952",
        },
      },
    },
  },
  plugins: [],
};
export default config;
