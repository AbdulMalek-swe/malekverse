import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation:{
        'spin-slower':'spin 20s linear infinite'
      },
      colors: {
        primary: "#10B981", // Cyber Emerald
        accent: "#06B6D4", // Electric Cyan
        slate: {
          900: "#0B0F19", // Deep Slate (Background)
          800: "#151A23", // Dark Charcoal (Cards/Surfaces)
          700: "#2A3241", // Subtle border
        },
      },
      fontFamily: {
        heading: ["var(--font-space)"],
        body: ["var(--font-manrope)"],
        code: ["var(--font-code)"],
      },
    },
  },
  plugins: [],
};
export default config;
