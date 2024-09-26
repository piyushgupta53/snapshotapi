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
        "persian-blue": {
          "50": "#eaf5ff",
          "100": "#d9ecff",
          "200": "#badaff",
          "300": "#91c1ff",
          "400": "#6599ff",
          "500": "#4273ff",
          "600": "#2148ff",
          "700": "#1f40ed",
          "800": "#1533be",
          "900": "#1b3394",
          "950": "#101c56",
        },
        "orchid-white": {
          "50": "#faf7ec",
          "100": "#f3ecd2",
          "200": "#e5d7a2",
          "300": "#d8bf71",
          "400": "#cea951",
          "500": "#c4903c",
          "600": "#ad7232",
          "700": "#90572d",
          "800": "#76462a",
          "900": "#623a25",
          "950": "#371d11",
        },
      },
    },
  },
  plugins: [],
};
export default config;
