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
        first: '#617BFF',
        second: '#617BFF',
        third: '#92A4FF',
        gray: '#F2F4FF',
      },
    },
  },
  plugins: [],
}

