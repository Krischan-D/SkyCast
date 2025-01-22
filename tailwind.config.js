/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./weather-app/*index.html"
],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#1c2529'
      },
      fontSize:{
        '6xl': '4rem',
      }
    },
  },
  plugins: [],
}

