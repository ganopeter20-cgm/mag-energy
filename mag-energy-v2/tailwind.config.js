/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        night: '#17102f',
        'night-2': '#1f1740',
        cream: '#faf3e6',
        'cream-2': '#f2e7d0',
        ink: '#1c1526',
        'ink-dim': '#665d78',
        'paper-dim': '#c9bfe0',
        sun: '#ff7a3d',
        gold: '#ffbe55',
        teal: '#2fa89c',
        'line-dark': 'rgba(250,243,230,0.14)',
        'line-light': 'rgba(28,21,38,0.12)'
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)']
      },
      screens: {
        'sm': '560px',
        'md': '760px',
        'lg': '800px',
        'xl': '900px',
        '2xl': '1240px'
      }
    },
  },
  plugins: [],
}

