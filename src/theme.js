const theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "'Montserrat', sans-serif",
    heading: "'Ubuntu Mono', monospace",
    monospace: "Menlo, monospace",
  },
  fontSizes: [18, 20, 24, 32, 48, 64, 96],
  radii: [".1em", ".25em", ".35em"],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#2f2f2f",
    background: "#FED0EA",
    primary: "#BFB9FF",
    secondary: "#AFE9FE",
    muted: "#CBFFE6",
    highlight: "#F7F8B9",
    accent: "#F7F8B9",
    red: "#F70103",
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      marginBottom: ".25em",
      textShadow: "2px 2px 2px #FED0EA",
    },
  },
  links: {
    textDecoration: "none",
  },
  buttons: {
    primary: {
      fontFamily: "heading",
      color: "text",
      fontWeight: "bold",
      bg: "secondary",
      outlineColor: "accent",
      "&:hover": {
        opacity: ".90",
      },
      "&:active": {
        outlineColor: "accent",
      },
    },
    secondary: {
      color: "text",
      bg: "muted",
      fontWeight: "bold",
      fontFamily: "heading",
      outlineColor: "accent",
      "&:hover": {
        opacity: ".90",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    a: {
      color: "secondary",
      textDecoration: "none",
    },
    h1: {
      variant: "text.heading",
      fontSize: 5,
    },
    h2: {
      variant: "text.heading",
      fontSize: 4,
    },
    h3: {
      variant: "text.heading",
      fontSize: 3,
      backgroundColor: "pink",
    },
    h4: {
      variant: "text.heading",
      fontSize: 2,
    },
    h5: {
      variant: "text.heading",
      fontSize: 1,
    },
    h6: {
      variant: "text.heading",
      fontSize: 0,
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
  },
};

export default theme;
