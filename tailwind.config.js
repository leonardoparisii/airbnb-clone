/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024',
      'logo-bp': '1120px',
      'xl': '1400px'
    }
  },
  plugins: [],
}
