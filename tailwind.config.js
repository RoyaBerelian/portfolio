/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{html,js}"],
  theme: {
    extend: {

      fontFamily: {
        'font': ['"my-font"'],
      },

      colors: {
        'Aquamarine': '#64FFDA',
        'bg1':'#121212',
        'bg2':'#1B1B1B',
        
      },

      backgroundImage: {
        'css': "url('.../image/css.jpg')",
        'git': "url('.../image/git.png')",
      }
      
    },
  },
  plugins: [],
}