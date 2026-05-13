import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#121418",
        graphite: "#1b1f27",
        steel: "#5b6472",
        signal: "#d71920"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(18, 20, 24, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
