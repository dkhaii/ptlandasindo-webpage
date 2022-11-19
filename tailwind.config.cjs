/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#03254c",
        acent: "#2a9df4",
        darker: "#10122F",
        natural: "#f6f7fb",
        base: "#f3f6f9",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "#425466",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: false,
  },
};
