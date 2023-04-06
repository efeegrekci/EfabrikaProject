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
      black: {
        100: "#191D23"
      },
      gray: {
        100: '#A0ABBB',
        200: '#64748B',
        300: '#E8EDFB',
        400: '#04092152',
        500: '#F7F8F9'
      },
      blue: {
        100: "#1D4ED8"
      },
      white: "#ffffff"
    },
    fontSize: {
      'xl': ['20px', '30px'],
      '3xl': ['26px', '34px'],
      '2xl': ['22px', '30px'],
      '4xl': ['40px', '52px'],
      '5xl': ['56px', '76px']
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
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          '@screen lg': {
            maxWidth: '1184px',
          },
        }
      })
    }
  ],
}

