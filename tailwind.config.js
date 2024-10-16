/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs:"320px",
      sm: "390px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      six: "600px"
    },
    extend: {
      colors:{
        buttons:'#EFE3C8',
        theme:"#D9D9D9",
        landing:"#1F1D2B"
      },
      boxShadow: {
        'custom-x-y': '1px 60px 60px 2px rgba(0, 0, 0, 0.8)'
      },
      aspectRatio: {
        '2/3': '2 / 3',
    },
    },
},
  plugins: [],
}
