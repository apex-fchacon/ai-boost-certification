/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  safelist: [
    // dynamically toggled classes
    'slide-up','pop-in','fade-in','active',
    'revealed','selected','correct','wrong','dim',
    'stage-dot','done','todo',
    'feedback-correct','feedback-wrong',
    'hidden','block',
    // safelist any bg-* / text-* generated at runtime
    { pattern: /^(bg|text|border)-(ef|slate|green|red|amber|teal|lime)/ },
  ],
  theme: {
    extend: {
      colors: {
        ef: {
          dark:   '#1B3A35',
          green:  '#1B3A35',
          lime:   '#C8FF00',
          teal:   '#37B3A2',
          amber:  '#EE9F2D',
          slate:  '#2E3D4F',
          bg:     '#F0F9F8',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        dm:     ['"DM Sans"', 'sans-serif'],
      }
    }
  },
  plugins: []
}
