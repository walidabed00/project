/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef5ff',
          100: '#d9e7ff',
          200: '#bcd4ff',
          300: '#8db8fe',
          400: '#5b92e5',
          500: '#3b74d4',
          600: '#0f52ba', // Main primary color
          700: '#0d3f91',
          800: '#0c2d6a',
          900: '#0a244c',
          950: '#071b38',
        },
        accent: {
          50: '#fff8e6',
          100: '#ffefc0',
          200: '#ffe299',
          300: '#ffcf66',
          400: '#ffb833',
          500: '#ffa500', // Main accent color
          600: '#e67b00',
          700: '#cc5500',
          800: '#a34400',
          900: '#7a3300',
          950: '#521100',
        },
        success: {
          500: '#10b981',
          600: '#059669',
        },
        warning: {
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
      },
    },
  },
  plugins: [],
};