const DefaultColor = {
  // https://colorhunt.co/palette/00b8a9f8f3d4f6416cffde7d
  lightYellow: "#F8F3D4" /* light yellow */,
  darkYellow: "#FFDE7D" /* dark yellow */,
  blue: "#00B8A9" /* blue */,
  reddish: "#F6416C" /* reddish */,
};

export const Light = {
  body: {
    background: DefaultColor.darkYellow,
    border: "",
    logo: {
      background: "",
      border: "",
    },
  },
  navbar: {
    background: DefaultColor.reddish,
    border: "",
    logo: {
      background: DefaultColor.lightYellow,
      color: DefaultColor.darkYellow,
      border: "",
    },
  },

  page: {
    background: DefaultColor.lightYellow,
    logo: "",
    border: "",
  },

  text: {
    normal: "",
    subHeading: "",
    heading: {
      color: DefaultColor.blue,
      background: "",
    },
    serial: DefaultColor.reddish,
    hidden: {
      color: DefaultColor.darkYellow,
      background: "",
    },
  },

  button: {
    background: "customColors-one-reddish",
    border: "customColors-one-reddish",
    text: "",
    hover: {
      background: "",
      border: "",
    },
  },

  card: {
    overall: {
      background: "",
      border: DefaultColor.reddish,
      hover: {
        background: "" /* tailwind.config.js */,
        border: "",
      },
    },
    head: {
      background: "",
      border: "customColors-one-reddish",
      hover: {
        background: "customColors-one-blue" /* tailwind.config.js */,
        border: "",
      },
    },
    body: {
      background: "",
      border: "" /* tailwind.config.js*/,
      hover: {
        background: "",
        border: "customColors-one-blue",
        color: "",
      },
    },
  },

  footer: {
    color: "",
    icon: {
      background: "",
      color: "customColors-one-reddish",
      hover: {
        color: "customColors-one-blue" /* tailwind.config.js */,
      },
    },
  },

  progressBar: {
    background: DefaultColor.reddish,
    border: "",
    bar: {
      background: "customColors-one-blue",
      border: "",
    },
  },

  logo: {
    color: "",
    background: "",
    hover: {
      group: {
        color: "customColors-one-reddish",
      },
      background: "customColors-one-darkYellow",
      color: "customColors-one-lightYellow",
    },
  },
};
