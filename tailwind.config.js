/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#101010",
        bodyLight: "#191c27",
        myPurple: "#bf37ff",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        fira: ["Fira Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
