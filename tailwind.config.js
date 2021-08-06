// tailwind.config.js
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    customColors: {
      one: {
        lightYellow: "#F8F3D4" /* light yellow */,
        darkYellow: "#FFDE7D" /* dark yellow */,
        blue: "#00B8A9" /* blue */,
        reddish: "#F6416C" /* reddish */,
      },
      dracula: {
        darkPurple: "#282A36",
        lightPurple: "#383A59",
        green: "#5AE87C",
        pink: "#F678C5",
        white: "#f8f8f2",
      },
    },
  },
};
module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
