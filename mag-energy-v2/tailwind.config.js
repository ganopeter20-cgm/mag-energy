/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        night: 'var(--night)',
        'night-2': 'var(--night-2)',
        cream: 'var(--cream)',
        'cream-2': 'var(--cream-2)',
        ink: 'var(--ink)',
        'ink-dim': 'var(--ink-dim)',
        'paper-dim': 'var(--paper-dim)',
        sun: 'var(--sun)',
        gold: 'var(--gold)',
        teal: 'var(--teal)',
        'line-dark': 'var(--line-on-dark)',
        'line-light': 'var(--line-on-light)',
      },
      spacing: {
        pad: 'var(--pad)',
      },
      maxWidth: {
        container: 'var(--container)',
      },
      fontFamily: {
        display: ['var(--font-display, Georgia)', 'serif'],
        body: ['var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, sans-serif)'],
        mono: ['var(--font-mono, monospace)'],
      },
      borderColor: {
        'line-dark': 'var(--line-on-dark)',
        'line-light': 'var(--line-on-light)',
      },
      backgroundColor: {
        'line-dark': 'var(--line-on-dark)',
        'line-light': 'var(--line-on-light)',
      },
      animation: {
        'spin': 'spin 60s linear infinite',
        'spin-reverse': 'spin 34s linear infinite reverse',
        'pulse-custom': 'rayPulse 3.6s ease-in-out infinite',
        'ticker': 'ticker 26s linear infinite',
      },
      keyframes: {
        rayPulse: {
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '0.85' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      aspectRatio: {
        'media': '4 / 3.3',
        'service': '4 / 3',
      },
    },
  },
  plugins: [],
};
