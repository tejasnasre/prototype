module.exports = {
  plugins: [require("tailwindcss-animate")],
  theme: {
    extend: { 
      boxShadow: {
      glow: "0 0 20px rgba(255, 204, 112, 0.7), 0 0 40px rgba(200, 80, 192, 0.5), 0 0 60px rgba(65, 88, 208, 0.3)",
      glow2:
        "0 0 20px rgba(50, 255, 50, 0.7), 0 0 40px rgba(20, 200, 20, 0.5), 0 0 60px rgba(5, 150, 5, 0.3)",
    }, 
    filter: {
      "blur-20": "blur(20px)",
      "blur-25": "blur(25px)",
    },
    brightness: {
      150: "1.5",
    },
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
