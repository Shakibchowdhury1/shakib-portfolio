/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      colors: {
        ink: '#07111F',
        navy: '#0A1830',
        panel: '#0D1E38',
        line: '#1E3556',
        sky: '#7CC8FF',
        aqua: '#55E6CF',
        mist: '#A9B8CC',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,200,255,.14), 0 22px 70px rgba(0,0,0,.34)',
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
