/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Degular"],
      },
      borderRadius: {
        "app-primary": "6.25rem",
      },
      borderColor: {
        primary: "#EFF1F6",
      },
      colors: {
        primary: "#131316",
        secondary: "#56616B",
        "gray-bg": "#EFF1F6",
        "green-bg-tertiary": "#E3FCF2",
        link: "#56616B",
      },
      letterSpacing: {
        tight: "-0.6px",
        tighter: "-1.5px",
        "sub-tight": "-0.02px",
        "md-tight": "-0.04px",
      },
      borderColor: {
        primary: "#EFF1F6",
      },

      keyframes: {
        movement: {
          "0%": { transform: "translate(100%)" },
          "100%": { transform: "translate(0)" },
        },
      },

      animation: {
        "enter-filter": "movement 0.8s",
      },
    },
  },
  plugins: [],
};
