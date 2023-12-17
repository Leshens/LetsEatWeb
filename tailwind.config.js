/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        three: '0.19rem',
      },
      screens: {
        'sx': '200px',
      },
      colors:{
        primary: '#6cdcbb',
        secondary: '#939393',
        lightSecondary: '#EBE9EB',
        evenLighterSecondary: '#F1F5F9',
        inBetween: '#D4D4D4'
      },
      boxShadow: {
        'primaryShadow': '0 5px 15px rgba(108, 220, 187, .4)',
      }

    },
    
  },
  plugins: [],
}
