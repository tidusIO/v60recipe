/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#faf7f2',
          100: '#f4ede0',
          200: '#e8d8c0',
          300: '#d9be96',
          400: '#c8a06a',
          500: '#bc8a4a',
          600: '#af7a3e',
          700: '#916235',
          800: '#765030',
          900: '#614229',
        },
        cream: {
          50: '#fefcf9',
          100: '#fdf8f1',
          200: '#faf0e1',
          300: '#f6e4c8',
          400: '#f0d4a3',
          500: '#e8c07a',
          600: '#dda851',
          700: '#c8923a',
          800: '#a67530',
          900: '#86602a',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}