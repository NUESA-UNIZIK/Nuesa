/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "Inter",
    },
    container: {
      padding: {
        DEFAULT: "2.5rem",
        lg: '3rem',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#FA4F06",
        secondary: "#FFDAAE",
        hero:"#FFECD8",
        darkest: "#1E1307",
        readmore: "#092E76",
        buttonborder: "#E3D3C0",
        transparent: "rgba(0, 0, 0, .6)",
        light: "F5F5F5",
        white: "#fff"
      },
      backgroundImage: {
        pattern: "url('/src/assets/heroimage.svg')",
        courses: "url('/src/assets/coursesbackground.svg')",
      },
    },
  },
  plugins: [],
}
