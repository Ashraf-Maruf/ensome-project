/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#185CFF",
          secondary: "#292D33",
          accent: "#9497A1",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}