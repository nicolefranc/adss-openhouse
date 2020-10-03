const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: theme => ({
        'scroll': "url('../assets/images/scroll.jpg')"
      })
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
