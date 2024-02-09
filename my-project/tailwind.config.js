/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        orange: '#FF8600',
        first: '#AEB8FE',
        second: '#617BFF',
        third: '#27187E',
        gray: '#F2F4FF',
      },
    },
    fontFamily: {
      body: ['Roboto'],
    }
  },
  plugins: [],
}

