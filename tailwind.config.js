/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans' : ['Montserrat', 'sans-serif']
    },
    colors : {
      'grey' : '#F6F8FA',
      'darkgrey' :  '#E4E8ED',
      'mainblue' : '#00A9FF',
      'white' : '#FFFFFF',
      'faintblack': '#1E1E1E50'
    },
    extend: {},
  },
  plugins: [],
}

