/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {colors: {
      primary: "#648B57",
    },  boxShadow: {
        'footer': '0px -2px 5px 0px #000000'
  }}},
  plugins: [],
};
