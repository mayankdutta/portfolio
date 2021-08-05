// https://colorhunt.co/palette/00b8a9f8f3d4f6416cffde7d

export const THEME2 = {
  mainBackgroundColor: "#000000",
  backgroundColor: "#aaaaaa",
  navbarBackgroundColor: "#8c8c8c",
  hiddenTextColor: "#8c8c8c",
  buttonColor: "gray-900",
  buttonHoverColor: "gray-900",
  cardHeaderHoverColor: "gray-900",
  cardBorder: "#8c8c8c",
  footerIconColor: "gray-900",
  footerIconHoverColor: "blue-700",
};

const Color = {
  blue: "#00B8A9",
  lightYellow: "#F8F3D4",
  darkYellow: "#FFDE7D",
  reddish: "#F6416C",
};

export const THEME = {
  body: {
    background: Color.darkYellow,
    border: "",
    logo: {
      background: "",
      border: "",
    },
  },
  navbar: {
    background: Color.reddish,
    border: "",
    logo: {
      background: Color.lightYellow,
      color: Color.lightYellow,
      border: "",
    },
  },

  page: {
    background: Color.lightYellow,
    logo: "",
    border: "",
  },

  text: {
    main: "",
    heading: {
      color: Color.blue,
      background: "",
    },
    serial: Color.reddish,
    hidden: {
      color: Color.darkYellow,
      background: "",
    },
  },

  button: {
    background: "customColors-one-400",
    border: "customColors-one-400",
    hover: {
      background: "customColors-one-200",
      border: "",
    },
  },

  card: {
    overall: {
      background: "",
      border: Color.reddish,
      hover: {
        background: "" /* tailwind.config.js */,
        border: "",
      },
    },
    head: {
      background: "",
      border: "",
      hover: {
        background: "customColors-one-300" /* tailwind.config.js */,
        border: "",
      },
    },
    body: {
      background: "",
      border: "" /* tailwind.config.js*/,
      hover: {
        background: "",
        border: "customColors-one-300",
      },
    },
  },

  footer: {
    icon: {
      background: "",
      color: "customColors-one-400",
      hover: {
        color: "customColors-one-300" /* tailwind.config.js */,
      },
    },
  },

  progressBar: {
    background: Color.reddish,
    border: "",
    bar: {
      background: Color.blue,
      border: "",
    },
  },

  logo: {
    color: "",
    background: "",
    hover: {
      background: "customColors-one-400",
      color: "customColors-one-100",
    },
  },
};
