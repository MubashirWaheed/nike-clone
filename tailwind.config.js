/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    screens: {
      tablet: "600px",
      // laptopn: "960px",
      // desktop: "1024px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        primary: "#111",
        secondary: "#757575",
        "custom-gray": "#f5f5f5",
      },
      transitionProperty: {
        width: "width ",
      },
      width: {
        128: "24rem",
      },
      minWidth: {
        128: "24rem",
      },
    },
  },
  plugins: [],
};
