// tailwind.config.js
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    customColors: {
      one: {
        // subBody: "#F8F3D4" /* light yellow */,
        // body: "#FFDE7D" /* dark yellow */,
        // text: "#00B8A9" /* blue */,
        // nav: "#F6416C" /* reddish */,
        text: "#00B8A9",
        subBody: "#F8F3D4",
        body: "#FFDE7D",
        nav: "#F6416C",
      },
      dracula: {
        subBody: "#383A59",
        body: "#282A36",
        nav: "#282A36",
        text: "#f8f8f2",
        mainHeadingText: "#F678C5",
        buttons: "#5AE87C",
        serial: "#5AE87C",
        hiddenHeading: "#1D1E26",
        color: "#000000",
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
