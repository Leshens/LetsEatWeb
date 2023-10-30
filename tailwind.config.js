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
    },
    colors:{
      primary: '#6cdcbb',
      secondary: '#939393'
    },
  },
  plugins: [],
}
