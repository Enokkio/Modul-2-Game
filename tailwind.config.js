/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}", "**/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'healthGreen': '#06db06',
        'damageYellow': '#f59b14',
        'blockBlue': '#3024db',
        'itemsBrown': '#ba9968',
      },
    },
  },
  plugins: [],
}
