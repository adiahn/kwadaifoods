/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primary:"#186838",
        dark:"#333333",
      }
    },
  },
  plugins: [],
};
