/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange:  '#ff9f0d',
          brown:   '#542B12',
          navy:    '#0B3954',
          cream:   '#D9C5A0',
          dark:    '#1b2f40',
        },
        // ElevenLabs palette tokens
        el: {
          eggshell: '#fdfcfc',
          powder:   '#f5f3f1',
          chalk:    '#e5e5e5',
          fog:      '#b1b0b0',
          gravel:   '#777169',
          slate:    '#a59f97',
          obsidian: '#000000',
        },
      },
      fontFamily: {
        inter:      ['Inter', 'sans-serif'],
        cormorant:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'hairline':    'rgba(0,0,0,0.4) 0px 0px 1px 0px, rgba(0,0,0,0.04) 0px 2px 4px 0px',
        'hairline-md': 'rgba(0,0,0,0.4) 0px 0px 1px 0px, rgba(0,0,0,0.08) 0px 4px 12px 0px',
        'card':        'rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px 0px, rgba(0,0,0,0.04) 0px 2px 4px 0px',
      },
      letterSpacing: {
        'editorial': '-0.02em',
        'label':     '0.08em',
      },
    },
  },
  plugins: [],
}
