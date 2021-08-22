const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        anaranjado: "#FF3E00",
        "light-anaranjado": "rgba(255, 62, 0, 0.1);",
      },
    },
  },
  plugins: [],
};

module.exports = config;
