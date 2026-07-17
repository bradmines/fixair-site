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
          blue:       '#1a3a5c',
          'blue-mid': '#1e5799',
          'blue-light':'#2d7dd2',
          orange:     '#f97316',
          'orange-dark':'#ea6c0a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Inter Fallback', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
