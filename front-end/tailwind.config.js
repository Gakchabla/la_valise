/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5D4ADF",
        secondary: "#ffe8a5",
        button: "#FF855F"
      },
      boxShadow: {
        footer: "0px -2px 5px 0px #000000",
      },

      backgroundImage: {
        'hero': "url('https://i.imgur.com/UPiyYV4.png')",
      },

    },
  },
  plugins: [],
};