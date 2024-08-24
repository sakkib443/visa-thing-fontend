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
  daisyui: {
    themes: [
      {
        cupcake: {
          primary: "#3e4279",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
        dark: {
          primary: "#3e4279",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#1f2937",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
        cmyk: {
          primary: "#3e4279",
          secondary: "#00ffff",
          accent: "#ff00ff",
          neutral: "#1a1a1a",
          "base-100": "#ffffff",
          info: "#00b8d9",
          success: "#00ff85",
          warning: "#ffd700",
          error: "#ff5724",
        },
      },
    ],
  },
};
