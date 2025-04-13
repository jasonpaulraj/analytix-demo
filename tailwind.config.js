module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        system: {
          primary: "#0f172a",
          secondary: "#1e293b",
          accent: "#334155",
          highlight: "#e94560",
        },
      },
      scale: {
        102: "1.02",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s infinite",
        glow: "glow 3s infinite",
      },
      screens: {
        xs: "600px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        llg: "1200px",
        xl: "1280px",
        xxl: "1440px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
