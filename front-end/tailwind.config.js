/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
      MyFont: ['"My Font"', "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      colors: {
        primary: "#5e4aef",
        secondary: "#ffe8a5",
        button: "#FF855F",
        bg: "#5e4aef",
        voyage: "#01b1c9",
        valise: "#aae1f3",
      },
      boxShadow: {
        footer: "0px -2px 5px 0px #000000",
      },
      dropShadow: {
        fond: "8px 0px 12px #000000",
      },

      backgroundImage: {
        mobile: "url('https://i.imgur.com/UPiyYV4.png')",
        others: "url('./Assets/valiseBG(1).png')",
        plane: "url('./Assets/New Project(15).png')",
        suitcase: "url('./Assets/3179392.png')",
        clouds: "url('./Assets/clouds1.png')",
        desktop: "url('./Assets/desk.png')",
      },
      fontFamily: {
        leagueSpartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
