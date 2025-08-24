/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        alpha: "#000000",
        beta: "#303030",
        charlie :"#ffe3f1",
        delta: "#00c9c8"
      },
    },
  },
  plugins: [],
}

