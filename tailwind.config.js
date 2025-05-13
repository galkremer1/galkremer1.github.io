/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e0f2fe',
          600: '#0284c7',
        },
        neutral: {
          50: '#fafafa',
          700: '#404040',
        },
      },
    },
  },
  plugins: [],
}