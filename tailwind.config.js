/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#907c66",
        title: "#c5c6ca",
        content: "#535459",
        bgDark: "#2c2d32",
        bgLight: "#323338",
      },
      fontFamily: {
        title: ['Lato', 'sans-serif'],
        content: ['Roboto', 'sans-serif'],
      },
      screens: {
        'ms': '320px',
        'mm': '375px',
        'ml': '480px',
        'ts': '576px',
        'tm': '768px',
        'tl': '850px',
        'txl': '950px',
        'ls': '1024px',
        'lm': '1100px',
        'll': '1200px',
        'd': '2560px',
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-out forwards',
        'pulse': 'pulse 2.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(144, 124, 102, 0.6)' }, // Ajustado al color primary
          '70%': { boxShadow: '0 0 0 15px rgba(144, 124, 102, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(144, 124, 102, 0)' }
        }
      }
    },
  },
  plugins: [],
}