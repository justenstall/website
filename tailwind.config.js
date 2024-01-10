/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

var husky = {
  50: "#fffbeb",
  100: "#fef3c7",
  200: "#fde58a",
  300: "#fbd24e",
  400: "#fabe25",
  500: "#f49d0c",
  600: "#d87607",
  700: "#bc560a",
  800: "#923f0e",
  900: "#78340f",
  950: "#451a03",
}

// Generated with https://uicolors.app/create
var jstallBlue = {
  50: '#e7f5ff',
  100: '#d3eeff',
  200: '#b0dcff',
  300: '#81c3ff',
  400: '#4f9aff',
  500: '#286fff',
  600: '#0441ff',
  700: '#0040ff',
  800: '#003aea',
  900: '#0b34a4',
  950: '#071d5f',
}

module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
  theme: {
    extend: {
      colors: {
        primary: jstallBlue,
      },
    },
    fontFamily: {
      'display': ['Inter'],
      'sans': ['Inter'],
      'serif': ['Noto Serif'],
      // 'serif': ['Merriweather', 'serif'],
    },
  },
  plugins: [],
};
