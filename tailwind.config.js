/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#35ed54",
        secondary: "#184e51",
        tertiary: "#d9ffe5",
        fourth: "#17383a",
      },
      keyframes: {
        arrowBefore: {
          "0%": { transform: "translateX(0px)" },
          "100%": { tranform: "translateX(100px)" },
        },
        arrowAfter: {
          "0%": { transform: "translateX(0px)" },
          "100%": { tranform: "translateX(-100px)" },
        },
      },
      fontFamily: {
        heebo: "Heebo",
        lobster: "Lobster",
        poppins: "Poppins",
        roboto: "Roboto",
        tungsten: "Tungsten",
        monumentRegular: "Monument-regular",
        monumentBold: "Monument-bold",
        gilroy1: ["Gilroy-1", "sans-serif"],
        gilroy2: ["Gilroy-2", "sans-serif"],
        gilroy3: ["Gilroy-3", "sans-serif"],
        gilroy4: ["Gilroy-4", "sans-serif"],
        gilroy5: ["Gilroy-5", "sans-serif"],
        gilroy6: ["Gilroy-6", "sans-serif"],
        gilroy7: ["Gilroy-7", "sans-serif"],
        gilroy8: ["Gilroy-8", "sans-serif"],
        gilroy9: ["Gilroy-9", "sans-serif"],
      },
    },
  },
  plugins: [],
};
