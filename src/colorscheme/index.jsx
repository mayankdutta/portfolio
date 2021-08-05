const DraculaColor = {
  // https://draculatheme.com/contribute
  subBody: "#383A59",
  body: "#282A36",
  nav: "#282A36",
  text: "#f8f8f2",
  mainHeadingText: "#F678C5",
  buttons: "#5AE87C",
};

const DefaultColor = {
  // https://colorhunt.co/palette/00b8a9f8f3d4f6416cffde7d
  subBody: "#F8F3D4" /* light yellow */,
  body: "#FFDE7D" /* dark yellow */,
  text: "#00B8A9" /* blue */,
  nav: "#F6416C" /* reddish */,
};

export const DefaultTheme = {
  body: {
    background: DefaultColor.body,
    border: "",
    logo: {
      background: "",
      border: "",
    },
  },
  navbar: {
    background: DefaultColor.nav,
    border: "",
    logo: {
      background: DefaultColor.subBody,
      color: DefaultColor.body,
      border: "",
    },
  },

  page: {
    background: DefaultColor.subBody,
    logo: "",
    border: "",
  },

  text: {
    main: "",
    heading: {
      color: DefaultColor.text,
      background: "",
    },
    serial: DefaultColor.nav,
    hidden: {
      color: DefaultColor.body,
      background: "",
    },
  },

  button: {
    background: "customColors-one-nav",
    border: "customColors-one-nav",
    hover: {
      // background: "customColors-one-nav",
      background: "",
      border: "",
    },
  },

  card: {
    overall: {
      background: "",
      border: DefaultColor.nav,
      hover: {
        background: "" /* tailwind.config.js */,
        border: "",
      },
    },
    head: {
      background: "",
      border: "customColors-one-nav",
      hover: {
        background: "customColors-one-text" /* tailwind.config.js */,
        border: "",
      },
    },
    body: {
      background: "",
      border: "" /* tailwind.config.js*/,
      hover: {
        background: "",
        border: "customColors-one-text",
      },
    },
  },

  footer: {
    icon: {
      background: "",
      color: "customColors-one-nav",
      hover: {
        color: "customColors-one-text" /* tailwind.config.js */,
      },
    },
  },

  progressBar: {
    background: DefaultColor.nav,
    border: "",
    bar: {
      background: "customColors-one-text",
      border: "",
    },
  },

  logo: {
    color: "",
    background: "",
    hover: {
      background: "customColors-one-nav",
      color: "customColors-one-subBody",
    },
  },
};

export const THEME = {
  body: {
    background: DraculaColor.body,
    border: "",
    logo: {
      background: "",
      border: "",
    },
  },
  navbar: {
    background: DraculaColor.nav,
    border: "",
    logo: {
      background: DraculaColor.subBody,
      color: DraculaColor.body,
      border: "",
    },
  },

  page: {
    background: DraculaColor.subBody,
    logo: "",
    border: "",
  },

  text: {
    normal: DraculaColor.text,
    heading: {
      color: DraculaColor.mainHeadingText,
      background: "",
    },
    serial: DraculaColor.nav,
    hidden: {
      color: DraculaColor.body,
      background: "",
    },
  },

  button: {
    background: "customColors-dracula-nav",
    border: "customColors-dracula-nav",
    hover: {
      // background: "customColors-one-nav",
      background: "",
      border: "",
    },
  },

  card: {
    overall: {
      background: "",
      border: DraculaColor.nav,
      hover: {
        background: "" /* tailwind.config.js */,
        border: "",
      },
    },
    head: {
      background: "",
      border: "customColors-dracula-nav",
      hover: {
        background: "customColors-dracula-text" /* tailwind.config.js */,
        border: "",
      },
    },
    body: {
      background: "",
      border: "" /* tailwind.config.js*/,
      hover: {
        background: "",
        border: "customColors-dracula-text",
      },
    },
  },

  footer: {
    icon: {
      background: "",
      color: "customColors-dracula-nav",
      hover: {
        color: "customColors-dracula-text" /* tailwind.config.js */,
      },
    },
  },

  progressBar: {
    background: DraculaColor.nav,
    border: "",
    bar: {
      background: "customColors-dracula-text",
      border: "",
    },
  },

  logo: {
    color: "",
    background: "",
    hover: {
      background: "customColors-dracula-nav",
      color: "customColors-dracula-subBody",
    },
  },
};
