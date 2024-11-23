/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      CrimsonText: ["Crimson Text", "serif"],
      Playfair: ["Playfair Display", "serif"],
    },
    extend: {},
  },
  plugins: [daisyui],
};
