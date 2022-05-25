module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'plakat_bg': "url('../plakat_baggrund.jpeg')",
      })
    },
  },
  plugins: [],
}