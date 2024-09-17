import { Bai_Jamjuree } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
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
      keyframes: {
        "fade-out-left": {
          "0%": {
            opacity: "1",
            height: "min-content",
          },
          "50%": {
            opacity: "0",
            height: "min-content",
          },
          "100%": {
            opacity: "0",
            height: "0",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            height: "0",
          },
          "50%": {
            opacity: "0",
            height: "min-content",
          },
          "100%": {
            opacity: "1",
            height: "min-content",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "zoom-in": {
          "0%": {
            opacity: "0",
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "80%": {
            opacity: "0.8",
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-out-left": "fade-out-left 1s ease-out",
        "fade-in-left": "fade-in-left 1s ease-out",
        zoomin: "zoom-in .3s ease-in-out 0s 1",
      },
      fontFamily: {
        baiJamjuree: ["var(--font-bai-jamjuree)"],
      },
    },
  },
  plugins: [],
};
export default config;
