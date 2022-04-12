const colors = require("tailwindcss/colors");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        neutral: colors.slate,
        positive: colors.green,
        urge: colors.violet,
        warning: colors.yellow,
        info: colors.blue,
        critical: colors.red,
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },

  plugins: [
    require("a17t")
  ],
};

module.exports = config;
