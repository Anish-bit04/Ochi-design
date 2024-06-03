/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'eyes': "url('/public/eyes.jpg')",
        'hero-img':"url('/public/hero-img.jpg')"
      }
    },
  },
  plugins: [],
}

