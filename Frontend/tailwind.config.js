/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        logo3d: `url("./src/assets/image/logo3d.png")`,
      }),
    },
    colors: {
      main: "#2CAAEA",
      second: "#FCCB35",
      light: "#FAF7F1",
      dark: "#3D3D3D",
    },
    fontFamily: {
      kantumruy: ["Kantumruy Pro", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
