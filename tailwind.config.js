/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // "./Login.jsx",
    // "/Signup.jsx",
    "/App.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        accentColor: "#6875F5",
        textColor: "#3F3F3F",
        borderColor: "#C7C7C7",
        boxColor: "#C4C4C4",
        errorColor:"#FF0000"
      },
    },
  },
  plugins: [],
}