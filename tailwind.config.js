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
        vAuthBgImage: "url('~/assets/svg/auth-image.svg')",
      },
      backgroundColor: {
        vBgColor: '#F3F4F6',
        vBgDarkColor: '#1F2937',
      },
      borderColor: {
        vBorderLight: 'rgb(239, 239, 245)',
        vBorderDark: 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}
