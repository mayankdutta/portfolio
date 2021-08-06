const DefaultColor = {
  // https://colorhunt.co/palette/00b8a9f8f3d4f6416cffde7d
  subBody: "#F8F3D4" /* light yellow */,
  body: "#FFDE7D" /* dark yellow */,
  text: "#00B8A9" /* blue */,
  nav: "#F6416C" /* reddish */,
};

const DefaultTheme = {
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

const DraculaColor = {
  // https://draculatheme.com/contribute
  subBody: "#383A59",
  body: "#282A36",
  nav: "#282A36",
  text: "#f8f8f2",
  mainHeadingText: "#F678C5",
  serial: "#5AE87C",
  buttons: "#5AE87C",
  buttonsTextColor: "#000000",
};

const DraculaTheme = {
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
    border: DraculaColor.mainHeadingText,
    logo: {
      background: DraculaColor.subBody,
      color: DraculaColor.buttons,
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
    subHeading: DraculaColor.buttons,
    heading: {
      color: DraculaColor.mainHeadingText,
      background: "",
    },
    serial: DraculaColor.mainHeadingText,
    hidden: {
      color: DraculaColor.body,
      background: "",
    },
  },

  button: {
    background: "customColors-dracula-buttons",
    color: "customColors-dracula-buttonsTextColor",
    border: "customColors-dracula-buttons",
    text: "customColors-dracula-hiddenHeading",
    hover: {
      background: "",
      border: "",
    },
  },

  card: {
    overall: {
      background: "",
      border: DraculaColor.mainHeadingText,
      hover: {
        background: "" /* tailwind.config.js */,
        border: "",
      },
    },
    head: {
      background: "",
      border: "customColors-dracula-buttons",
      hover: {
        background:
          "customColors-dracula-mainHeadingText" /* tailwind.config.js */,
        border: "",
      },
    },
    body: {
      background: "",
      border: "" /* tailwind.config.js*/,
      hover: {
        background: "customColors-dracula-body",
        border: "customColors-dracula-text",
        color: "customColors-dracula-mainHeadingText",
      },
    },
  },

  footer: {
    icon: {
      background: "",
      color: "customColors-dracula-mainHeadingText",
      hover: {
        color: "customColors-dracula-text" /* tailwind.config.js */,
      },
    },
  },

  progressBar: {
    background: "customColors-dracula-nav",
    border: "",
    bar: {
      background: "customColors-dracula-mainHeadingText",
      border: "",
    },
  },

  logo: {
    color: "customColors-dracula-text" /* Not working */,
    background: "",
    hover: {
      background: "customColors-dracula-nav",
      color: "customColors-dracula-mainHeadingText",
    },
  },
};

let THEME = {
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
    border: DraculaColor.mainHeadingText,
    logo: {
      background: DraculaColor.subBody,
      color: DraculaColor.buttons,
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
    subHeading: DraculaColor.buttons,
    heading: {
      color: DraculaColor.mainHeadingText,
      background: "",
    },
    serial: DraculaColor.mainHeadingText,
    hidden: {
      color: DraculaColor.body,
      background: "",
    },
  },

  button: {
    background: "customColors-dracula-buttons",
    color: "customColors-dracula-text",
    border: "customColors-dracula-buttons",
    text: "customColors-dracula-hiddenHeading",
    hover: {
      background: "",
      border: "",
    },
  },

  card: {
    overall: {
      background: "",
      border: DraculaColor.mainHeadingText,
      hover: {
        background: "" /* tailwind.config.js */,
        border: "",
      },
    },
    head: {
      background: "",
      border: "customColors-dracula-buttons",
      hover: {
        background:
          "customColors-dracula-mainHeadingText" /* tailwind.config.js */,
        border: "",
      },
    },
    body: {
      background: "",
      border: "" /* tailwind.config.js*/,
      hover: {
        background: "customColors-dracula-body",
        border: "customColors-dracula-text",
        color: "customColors-dracula-mainHeadingText",
      },
    },
  },

  footer: {
    color: "customColors-dracula-buttons" /* not updated with above */,
    icon: {
      background: "",
      color: "customColors-dracula-mainHeadingText",
      hover: {
        color: "customColors-dracula-text" /* tailwind.config.js */,
      },
    },
  },

  progressBar: {
    background: "customColors-dracula-nav",
    border: "",
    bar: {
      background: "customColors-dracula-mainHeadingText",
      border: "",
    },
  },

  logo: {
    color: "customColors-dracula-text" /* Not working */,
    background: "",
    hover: {
      background: "customColors-dracula-nav",
      color: "customColors-dracula-mainHeadingText",
    },
  },
};

const Theme = (props) => {
  console.log("clicked");
  if (props.DarkMode === true) {
    THEME = DraculaTheme;
    console.log("dracula theme");
  } else {
    THEME = DefaultTheme;
    console.log("default theme");
  }
};
export default Theme;
export { THEME };
