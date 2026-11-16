/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'cursive', 'sans-serif'],
        patrick: ['"Patrick Hand"', 'cursive'],
        marker: ['"Permanent Marker"', 'cursive'],
        mono: ['"Space Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        sketch: {
          bg: '#f7f6f4',
          card: '#fff9f5',
          black: '#060504',
          dark: '#111111',
          yellow: '#ffe500',
          muted: '#7d766f',
          line: '#060504',
          border: '#e2e2e2',
        }
      },
      boxShadow: {
        'sketch': '4px 4px 0px #060504',
        'sketch-lg': '8px 8px 0px #060504',
        'sketch-sm': '2px 2px 0px #060504',
        'sketch-hover': '6px 6px 0px #060504',
      },
      borderRadius: {
        'hand': '255px 15px 225px 15px/15px 225px 15px 255px',
        'sketch': '6px 8px 6px 9px',
        'sketch-card': '12px 14px 10px 13px',
      }
    },
  },
  plugins: [],
}
