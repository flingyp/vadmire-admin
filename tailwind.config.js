/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth-pattern': "url('~/assets/svg/auth-pattern.svg')",
      },
    },
  },
  plugins: [],
}
