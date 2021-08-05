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
    },
  },
};
module.exports = {
  purge: {
    content: ["./src/**/*.html"],
    safelist: [
      "bg-customColors-text",
      "bg-customColors-subBody",
      "bg-customColors-body",
      "bg-customColors-nav",

      "text-customColors-text",
      "text-customColors-subBody",
      "text-customColors-body",
      "text-customColors-nav",

      "border-customColors-text",
      "border-customColors-subBody",
      "border-customColors-body",
      "border-customColors-nav",
    ],
  },
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
