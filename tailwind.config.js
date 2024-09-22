/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        grayN: {
          100: "#E4E4E5",
          200: "#BEBEBE",
          300: "#949494",
          400: "#7A7A7A",
          500: "#545454",
          600: "#3C3C3C"
        },
        blueCard:{
          100: "#024B6C"
        }
      }
    },
  },
  plugins: [],
}

