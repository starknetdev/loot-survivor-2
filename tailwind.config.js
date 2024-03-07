/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'terminal-silver': 'rgba(228, 228, 228, 1)', // base UI silver
        'terminal-black': 'rgba(23, 22, 23, 1)', // base UI background
        'terminal-black-blur': 'rgba(23, 22, 23, 0.5)', // base UI background
        'terminal-green': 'rgba(70, 126, 70, 1)', // base UI green
        'terminal-blue': 'rgba(50, 93, 156, 1)', // base UI blue
        'terminal-grey': 'rgba(115, 116, 117, 1)', // base UI grey
        'terminal-orange': 'rgba(236, 171, 75, 1)', // base UI orange
        'terminal-gold': 'rgba(194, 207, 37, 1)', // base UI gold
        'terminal-bronze': 'rgba(160, 88, 34, 1)' // base UI bronze
      },
      fontFamily: {
        terminus: ['Terminus', 'ui-sans-serif', 'system-ui'],
      },
      keyframes: {
        encounterFadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        encounterScaleUp: {
          from: { transform: 'scale(0)' },
          to: { transform: 'scale(1)' },
        },
        moveUp: {
          '0%': { transform: 'translateY(0px)', opacity: '1' },
          '100%': { transform: 'translateY(-50px)', opacity: '1' }, // Adjust as needed
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
      animation: {
        moveUpFadeOut: 'moveUp 1s ease-out, fadeOut 0.5s ease-out 0.5s forwards', // Start fading out 0.75s after the animation starts,
        encounterFadeIn: 'encounterFadeIn 2s ease-out forwards',
        encounterScaleUp: 'encounterScaleUp 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}

