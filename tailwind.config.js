// tailwind.config.js
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

// 100: Button Color
// 200: Button hover color
// 300: card hover
// 400: footer
// 500: footer icon hover

const Color = {
  blue: "#00B8A9",
  lightYellow: "#F8F3D4",
  darkYellow: "#FFDE7D",
  reddish: "#F6416C",
};

const colors = {
  ...defaultColors,
  ...{
    customColors: {
      one: {
        100: Color.lightYellow,
        200: Color.darkYellow,
        300: Color.blue,
        400: Color.reddish,
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
