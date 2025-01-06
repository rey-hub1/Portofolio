/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  daisyui:{
    themes:["forest"]
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Playfair: ["DM Serif Text", "serif"],
      Roboto: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [daisyui],
};
