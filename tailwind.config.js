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
        pry2: "#FFF",
        opac: "#00000099",
      },
      backgroundImage: (theme) => ({
        landing: "url('/public/images/landing-img.png')",
      }),
    },
  },
  plugins: [],
};
