/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFFEF9',
        peach: '#c6dec4',
        blush: '#d4e8d0',
        rose: '#a8d4a0',
        gold: '#c6dec4',
        'text-dark': '#2d3d2a',
        'text-mid': '#5a6e58',
      },
      fontFamily: {
        heading: "'Playfair Display', Georgia, serif",
        body: "'Lato', sans-serif",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease both',
        'float-petal': 'floatPetal 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(24px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        floatPetal: {
          '0%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.7' },
          '50%': { transform: 'translateY(-18px) rotate(8deg)', opacity: '1' },
          '100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.7' },
        },
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(180, 130, 100, 0.10)',
      },
      borderRadius: {
        'custom': '16px',
      },
    },
  },
  plugins: [],
}
