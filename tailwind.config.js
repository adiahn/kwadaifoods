/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
   colors: {
        "primary": "white",
        "secondary": "#FE724C",
        "back" : "#0000003B"
      },
    lineHeight: {
        'extra-loose': '10em',
        '12': '3rem',
      }
    },
  },
  plugins: [],
}
