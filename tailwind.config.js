/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#F87070",
        color2: "#70F3F8",
        color3: "#D881F8",
        fontcolor1: "#D7E0FF", 
      },
      dropShadow: {
        custom: [
          '100px 50px 50px #121530',
          '100px -50px -50px #272C5A'
        ]
      }
    },
  },
  plugins: [],
}

