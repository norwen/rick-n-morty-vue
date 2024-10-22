module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PT Sans', 'sans-serif'],
      },
      colors: {
        primary: 'rgba(0, 5, 255, 1)', // Blue
        danger: 'rgba(255, 0, 0, 1)', // Red
        base: 'rgba(0, 0, 0, 1)', // Black
        subtle: 'rgba(177, 177, 177, 1)', // Light Grey
      },
      container: {
        center: true, // Default container settings
        padding: '1rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
        },
      },
    },
  },
  plugins: [],
}
