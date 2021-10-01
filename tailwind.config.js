module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        iphone: "90px",
      },
      backgroundSize: {
        iphone: "388px 870px",
      },
      backgroundImage: {
        iphoneLight: "url('./src/images/iphonelight.jpeg')",
        iphoneDark: "url('./src/images/iphonedark.jpeg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
