/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        c60: colors.zinc["500"],
        c30: colors.zinc["800"],
        c10: colors.orange["500"]
      }
    },
  },
  plugins: [],
  darkMode: "class"
}
