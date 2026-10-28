/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        promedia: {
          dark: '#1e242d',
          darker: '#14181f',
          charcoal: '#2e3642',
          red: '#e84d58',
          crimson: '#de4b55',
          light: '#f5f7fa',
          muted: '#8b96a5'
        },
        wardah: {
          bg: '#faf7f2',
          surface: '#ffffff',
          dark: '#161413',
          darker: '#0e0c0b',
          card: '#1f1b18',
          cardBorder: '#352e29',
          rose: '#d9384e',
          wine: '#8a1b38',
          gold: '#d9822b',
          amber: '#e5a93c',
          teal: '#1a8b9d',
          violet: '#5c3d75',
          cream: '#f4efea',
          muted: '#9e948c'
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        arabic: ['"Segoe UI"', 'Tahoma', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 25px -5px rgba(232, 77, 88, 0.3)',
        'glow-gold': '0 0 25px -5px rgba(217, 130, 43, 0.3)',
        'glow-teal': '0 0 25px -5px rgba(26, 139, 157, 0.3)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
