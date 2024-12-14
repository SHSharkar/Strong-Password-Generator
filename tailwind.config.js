module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Delius", "sans-serif"],
        display: ["Delius", "sans-serif"],
        body: ["Delius", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
