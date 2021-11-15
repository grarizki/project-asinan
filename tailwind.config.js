const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', 'Arial', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: {
          light: '#1F1F1F',
          DEFAULT: '#000',
          dark: '#2A2A2A',
        },
        warmGray: colors.warmGray,
        trueGray: colors.trueGray,
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
