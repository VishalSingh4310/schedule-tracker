module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: (theme) => ({
      ...theme("colors"),
      primary: "#3ECF8E",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      main: "#1F1F1F",
      secondary: "#2A2A2A",
      danger: "#b93535",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
