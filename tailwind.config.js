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
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
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
