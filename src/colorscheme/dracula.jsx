const DraculaColor = {
  // https://draculatheme.com/contribute
  darkPurple: "#282A36",
  lightPurple: "#383A59",
  green: "#5AE87C",
  pink: "#F678C5",
  white: "#f8f8f2",
};

export const THEME = {
  body: {
    background: DraculaColor.darkPurple,
    border: "",
    logo: {
      background: "",
      border: "",
    },
  },
  navbar: {
    background: DraculaColor.darkPurple,
    border: DraculaColor.pink,
    logo: {
      background: DraculaColor.lightPurple,
      color: DraculaColor.green,
      border: "",
    },
  },

  page: {
    background: DraculaColor.lightPurple,
    logo: "",
    border: "",
  },

  text: {
    normal: DraculaColor.white,
    subHeading: DraculaColor.green,
    heading: {
      color: DraculaColor.pink,
      background: "",
    },
    serial: DraculaColor.pink,
    hidden: {
      color: DraculaColor.darkPurple,
      background: "",
    },
  },

  button: {
    background: "customColors-dracula-green",
    color: "customColors-dracula-white",
    border: "customColors-dracula-green",
    text: "customColors-dracula-darkPurple",
    hover: {
      background: "",
      border: "",
    },
  },

  card: {
    overall: {
      background: "",
      border: DraculaColor.pink,
      hover: {
        background: "" /* tailwind.config.js */,
        border: "",
      },
    },
    head: {
      background: "",
      border: "customColors-dracula-green",
      hover: {
        background: "customColors-dracula-pink" /* tailwind.config.js */,
        border: "",
      },
    },
    body: {
      background: "",
      border: "" /* tailwind.config.js*/,
      hover: {
        background: "customColors-dracula-darkPurple",
        border: "customColors-dracula-white",
        color: "customColors-dracula-pink",
      },
    },
  },

  footer: {
    color: "customColors-dracula-green" /* not updated with above */,
    icon: {
      background: "",
      color: "customColors-dracula-pink",
      hover: {
        color: "customColors-dracula-white" /* tailwind.config.js */,
      },
    },
  },

  progressBar: {
    background: "customColors-dracula-darkPurple",
    border: "",
    bar: {
      background: "customColors-dracula-pink",
      border: "",
    },
  },

  logo: {
    color: "customColors-dracula-white" /* Not working */,
    background: "",
    hover: {
      group: {
        color: "customColors-dracula-pink",
      },
      background: "customColors-dracula-darkPurple",
      color: "customColors-dracula-pink",
    },
  },
};
