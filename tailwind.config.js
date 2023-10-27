/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', "sans-serif"],
      },
      fontSize: {
        large: "200px",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
  ],
}

