/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      main: "#2CAAEA",
      second: "#FCCB35",
      light: "#FAF7F1",
      dark: "#3D3D3D",
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
  },
  plugins: [require("daisyui")],
};
