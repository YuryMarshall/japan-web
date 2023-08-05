/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        projectred: "#8E2D14",
        projectgray: "#484745",
        projectlightgray: "#D4D1D1",
        projectpowder: "#AAA19A",
      },
      fontFamily: {
        Roboto: ["Roboto"],
        Philosopher: ["Philosopher"],
        OSans: ["Open Sans"],
      },
      backgroundImage: {
        temple: "url('../../../img/temple.jpg')",
        burger: "url('../../../img/burger.png')",
        salebg: "url('../../../img/japanstreet.jpg')",
        star: "url('../../../img/star.svg')",
        grass: "url('../../../img/grass.png')",
      },
    },
  },
  plugins: [],
};
