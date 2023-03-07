/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    important: true,
    theme: {
        extend: {
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
            },
        },
    },
    plugins: [],
};
