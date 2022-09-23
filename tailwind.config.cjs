/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx",
    './index.html',],
  theme: {
    extend: {
      colors: {
        secondary: "#745648"
      },
      backgroundColor: {
        bgColor: "#5C4033",
        bgColorSecondary: "#745648",
      }
    },
  },
  plugins: [],
}
