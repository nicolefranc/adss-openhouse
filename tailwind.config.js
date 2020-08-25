const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
    zIndex: {
      '-1': '-10',
      ...defaultTheme.zIndex,
    },
  },
  variants: {
    margin: ['first'],
  },
  plugins: [],
};
