/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        main: 'rgb(var(--color-main))',
        accent: 'rgb(var(--color-accent))',
        blu: 'rgb(var(--color-blu))'
      },
      fontFamily:{
        'fut': ['Futura', 'sans-serif']
      }
  	},
    container: {
      center: true,
    }
  },
  plugins: [require("tailwindcss-animate")],
}