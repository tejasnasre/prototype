module.exports = {
  theme: {
    extend: {
      keyframes: {
          fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
    animation: {
      fadeIn: "fadeIn 0.5s ease-in",
    },
  },
};
