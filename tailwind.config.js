module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        ocr: ["ocr-a-std", "monospace"],
        code: ["code-saver", "sans-serif"],
        type: ["dico-mono-script", "mono"]
      },
      spacing: {}
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")]
};
