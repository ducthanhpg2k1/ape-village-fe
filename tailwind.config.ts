/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/react";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        black:'#121212',
        gray: "#D1D5DB",
        "gray-100": "#4B5563",
        "gray-200": "#9CA3AF",
        "placeholder": "#ADAEBC",
        primary: {
          DEFAULT: "#d96919",
          gradient: "linear-gradient(90deg, #d96919 0%, #e48947 100%)",
        },
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.5, 1.5, 0.8, 1)",
        "expo-in": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "expo-out": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      keyframes: {
        tableRow: {
          from: {
            opacity: "0%",
            transform: "translateY(1rem) scaleY(110%)",
          },
          to: {
            opacity: "100%",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        tableRow: "tableRow 0.4s forwards",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      defaultTheme: "dark",
      defaultExtendTheme: "dark",
    }),
  ],
};
