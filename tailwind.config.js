/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue" : "rgb(33 39 58)",
        "background-blue" : "rgb(15 17 29)",
        "border-blue" : "rgb(1 187 255)",
        "SignLogin-gray" : "#1e1e1e",
        "login" : "rgb(110 110 110 / 29%)",
        "input-color" : "rgb(59 59 59 / 85%)"
      },
      fontFamily: {
        redHat: ['"Red Hat Text"', 'sans-serif'], 
        tinos: ['Tinos', 'serif'],
      },
      filter: {
        'brightness-0': 'brightness(0)',
        'brightness-1': 'brightness(1)'
      },
      screens: {
        'sm-h': {'raw': '(max-height: 720px)'},
        'max-1480': { 'max': '1480px' },
        'max-1350': { 'max': '1350px' },
        'max-1300': { 'max': '1300px' },
        'max-1200': { 'max': '1200px' },
        'max-960': { 'max': '960px' },
        'max-820': { 'max': '820px' },
        'max-800': { 'max': '920px' },
        'max-750': { 'max': '750px' },
        'max-650': { 'max': '650px' },
        'max-520': { 'max': '520px' },
        'max-480': { 'max': '480px' },
        'max-400': { 'max': '400px' },
        'max-370': { 'max': '370px' },


      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}

