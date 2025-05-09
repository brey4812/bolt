/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'club-dark-green': '#032820',
        'club-green': '#08652C',
        'club-olive': '#5E7343',
        'club-lime': '#80A416',
        'club-gold': '#AD9F3C',
        'club-yellow': '#C5C764',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/6572326/pexels-photo-6572326.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'about-pattern': "url('https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
    },
  },
  plugins: [],
};