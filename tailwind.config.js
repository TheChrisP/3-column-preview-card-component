module.exports = {
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        BrightOrange: "hsl(31, 77%, 52%)",
        DarkCyan: "hsl(184, 100%, 22%)",
        VeryDarkCyan: "hsl(179, 100%, 13%)",
        TransparentWhite: "hsla(0, 0%, 100%, 0.75)",
        VeryLightGray: "hsl(0, 0%, 95%)",
      },
      fontFamily: {
        lexendDeca: ["Lexend Deca"],
        BigShoudlersDisplay: ["Big Shoulders Display"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
