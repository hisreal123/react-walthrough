/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f2f2f2",
        secondary: "#37474F",
        border: "#DEE4E7",
      },
    },
  },
  plugins: [],
};
