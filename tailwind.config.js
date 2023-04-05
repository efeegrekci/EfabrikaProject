/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      'ef-black': '#191D23',
      'ef-lightgray': '#A0ABBB',
      'ef-gray': '#64748B',
      'ef-gray-2': '#E8EDFB',
      'ef-gray-3': '#04092152',
      'ef-gray-4': '#F7F8F9',
      'ef-blue': '#1D4ED8',
      'white': '#ffffff'
    },
    fontSize: {
      'ef-md': ['22px', '30px'],
      'ef-md-2': ['30px', '40px'],
      'ef-xl': ['40px', '52px'],
      'ef-2xl': ['56px', '76px']
    },
    fontFamily: {
      'manrope': ['Manrope', 'sans-serif']
    },
    extend: {
      spacing: {
        '17': '67px',
        '566': '566px',
        '380': '380px'
      },
      boxShadow: {
        '3xl': '0px 10px 25px #CCD9FF',
      }
    },
  },
  plugins: [],
}

