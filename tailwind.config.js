const formKitTailwind = require('@formkit/themes/tailwindcss');
module.exports = {
  content: ["./src/**/*.{html,js}", "./tailwind-theme.js"],
  theme: {
    extend: {},
  },
  plugins: [ formKitTailwind],
};
