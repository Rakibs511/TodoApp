/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:{
            100:'#ffffff',
            200:'#fafafa',
            300:'#f7f7f7',
            400:'#f4f4f4',
            500:'#f2f2f2',
            600:'#efefef',
            700:'#ececec',
            800:'#e9e9e9',
            900:'#e4e4e4',
        },
        secondery:{
            100:'#d6d6d6',
            200:'#c2c2c2',
            300:'#adadad',
            400:'#999999',
            500:'#858585',
            600:'#707070',
            700:'#5c5c5c',
            800:'#474747',
            900:'#333333',
        }
      }
    },
  },
  plugins: [],
}
