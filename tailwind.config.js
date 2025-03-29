module.exports = {
  plugins: [require("tailwindcss-animate")],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "pop-blob": {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
        colors: {
          filter: {
            "blur-20": "blur(20px)",
            "blur-25": "blur(25px)",
          },
        },
      },
    },
    animation: {
      fadeIn: "fadeIn 0.5s ease-in",
      "pop-blob": "pop-blob 5s infinite",
    },
  },
};
