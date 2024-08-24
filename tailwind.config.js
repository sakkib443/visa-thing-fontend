/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gredient":
          "linear-gradient(81.88deg, #2042cf 6.24%, #579cf4 93.76%",
      },
    },
  },
  plugins: [require("daisyui")],
};
