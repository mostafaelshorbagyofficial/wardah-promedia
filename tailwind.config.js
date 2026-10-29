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
          bg: '#faf8f5',
          ivory: '#faf8f5',
          cream: '#f5f0e8',
          surface: '#ffffff',
          surfaceAlt: '#fffdfa',
          border: '#e8e0d5',
          borderLight: '#f0ebe3',
          rose: '#c5384a',
          roseDark: '#9e2233',
          roseMuted: '#d95a6c',
          rosePale: '#fdf2f4',
          wine: '#7d1d32',
          navy: '#1b2a3a',
          navyMid: '#2c3e50',
          navyMuted: '#475569',
          blue: '#326084',
          blueLight: '#eef5fa',
          gold: '#c49348',
          goldLight: '#fdf7ee',
          lavender: '#8e799f',
          lavenderPale: '#f5f0f9',
          text: '#1a202c',
          textMid: '#334155',
          textMuted: '#64748b'
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        arabic: ['"Segoe UI"', 'Tahoma', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 25px -5px rgba(232, 77, 88, 0.3)',
        'glow-gold': '0 0 25px -5px rgba(196, 147, 72, 0.25)',
        'glow-rose': '0 0 25px -5px rgba(197, 56, 74, 0.25)',
        'glow-teal': '0 0 25px -5px rgba(26, 139, 157, 0.3)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
        'wardah-card': '0 4px 20px -2px rgba(139, 92, 74, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
