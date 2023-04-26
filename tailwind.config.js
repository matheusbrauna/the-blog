/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          400: '#7C7C8A',
          500: '#505059',
          600: '#323238',
          700: '#29292E',
          800: '#202024',
          900: '#121214',
          950: '#09090A',
        },
      },
      container: {
        center: true,
        padding: '1rem',
      },
      backgroundImage: {
        hero: 'url("../assets/banner.jpg")',
      },
      boxShadow: {
        postShadow: '0 4px 5px 5px rgba(0,0,0,0.1),0 0 0 transparent',
      },
      fontFamily: {
        sans: ['Source Sans Pro, sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar')],
}
