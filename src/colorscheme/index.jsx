const Color = {
  // https://colorhunt.co/palette/00b8a9f8f3d4f6416cffde7d
  subBody: "#F8F3D4" /* light yellow */,
  body: "#FFDE7D" /* dark yellow */,
  text: "#00B8A9" /* blue */,
  nav: "#F6416C" /* reddish */,
};

export const THEME = {
  body: {
    background: Color.body,
    border: "",
    logo: {
      background: "",
      border: "",
    },
  },
  navbar: {
    background: Color.nav,
    border: "",
    logo: {
      background: Color.subBody,
      color: Color.body,
      border: "",
    },
  },

  page: {
    background: Color.subBody,
    logo: "",
    border: "",
  },

  text: {
    main: "",
    heading: {
      color: Color.text,
      background: "",
    },
    serial: Color.nav,
    hidden: {
      color: Color.body,
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
      border: Color.nav,
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
    background: Color.nav,
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
