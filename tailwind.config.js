/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "980px", // Ganti `lg` ke ukuran baru
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      "Az-50": "#F4F9F8",
      "Az-100": "#d9eeea",
      "Az-200": "#b2ddd6",
      "Az-300": "#84c4bb",
      "Az-400": "#5aa79f",
      "Az-500": "#408c86",
      "Az-600": "#31706b",
      "Az-700": "#2b5a58",
      "Az-800": "#264948",
      "Az-900": "#233e3d",
      "Az-920": "#172B2B",
      "Az-950": "#0b1919",
      "Az-abu": "#71717A",
    },
    extend: {
      // fontSize: {
      //   "5xl": ["1rem", { lineHeight: "1" }], // Kustom ukuran 2xl
      // },
      spacing: {
        "px-sm": "4vw", // Mobile kecil (4% dari lebar layar)
        "px-md": "6vw", // Tablet (6% dari lebar layar)
        "px-lg": "8vw", // Laptop kecil (8% dari lebar layar)
        "px-xl": "10vw", // Desktop standar (10% dari lebar layar)
        "px-2xl": "12vw", // Layar besar (12% dari lebar layar)
      },
    },
  },
  plugins: [daisyui],
};
