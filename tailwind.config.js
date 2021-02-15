module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: {
          100: '#4F46E5',
          200: '#4338CA',
          300: '#3730A3',
        },
        dark: {
          100: '#121212',
          200: '#212121',
          300: '#424242',
          400: '#616161',
          500: '#757575',
        }
      },
      fontFamily: {
        title: ['Montserrat'],
        body: ['Roboto'],
      },
      animation: {
        'bounce-slow': 'bounce 1s linear infinite',
        'bounce-slower': 'bounce 2s linear infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
