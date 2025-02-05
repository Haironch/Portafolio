/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#907c66",
        title: "#c5c6ca",
        content: "#8b8c91",
        bgDark: "#2c2d32",
        bgLight: "#323338",
      },
      fontFamily: {
        title: ["Lato", "sans-serif"],
        content: ["Roboto", "sans-serif"],
      },
      screens: {
        ms: "320px",
        mm: "375px",
        ml: "480px",
        ts: "576px",
        tm: "768px",
        tl: "850px",
        txl: "950px",
        ls: "1024px",
        lm: "1100px",
        ll: "1200px",
        d: "2560px",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        pulse: "pulse 2.5s infinite",
        slideRight: "slideRight 0.8s ease-out forwards",
        slideRightDelay: "slideRightDelay 0.8s ease-out forwards 300ms",
        // Nuevas animaciones para la galería
        fadeInUp: "fadeInUp 0.5s ease-out forwards",
        scaleIn: "scaleIn 0.3s ease-out forwards",
        slideUp: "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(144, 124, 102, 0.6)" },
          "70%": { boxShadow: "0 0 0 15px rgba(144, 124, 102, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(144, 124, 102, 0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRightDelay: {
          "0%, 40%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        // Nuevos keyframes para la galería
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        scaleIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      transitionDuration: {
        250: "250ms",
        350: "350ms",
        450: "450ms",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};
