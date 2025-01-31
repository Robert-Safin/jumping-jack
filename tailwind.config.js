/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "768px",
      laptop: "1440px",
    },
    extend: {
      fontFamily:{
        inter: "Inter",
        geist: "Geist Mono",
        coustard: "Coustard"
      },
      colors: {
        "theme-yellow": "#FEF986",
        "theme-white-1": "#FEFEF3",
        "theme-white-2" : "#DAD3D0",
        "theme-black": "#0E1013",
        "theme-brown-1":"#6E442B",
        "theme-brown-2":"#311F15",
        "sky": "rgb(139,190,197)"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
