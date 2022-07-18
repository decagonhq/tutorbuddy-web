/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        pry: "#FD2959",
      },
      backgroundImage: (theme) => ({
        "welcome": "url('/public/images/welcome.png')",
      }),
    },
  },
  plugins: [],
};
