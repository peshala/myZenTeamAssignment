/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 6px 18px rgba(0, 0, 0, 0.11)',
      },
      fontFamily: {
        'popins' : 'Poppins, sans-serif'
      },
      colors: {
        'white': '#ffffff',
        'baseBlack': '#0B2131',
        'textBlue': '#19374C',
        'grey': '#7B9DB4',
        'menuHover': '#081723',
        'liteGrey': '#C2CFE0',
        'brandGreen': '#19A3BB',
        'brandGreenLite': '#6AEEAC',
        'red': '#EB5757',
      },
    },

  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

