/* eslint-disable */
// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: [
    // https://github.com/postcss/autoprefixer
    require("autoprefixer")({
      overrideBrowserslist: [
        "last 4 Chrome versions",
        "last 4 Firefox versions",
        "last 4 Edge versions",
        "last 4 Safari versions",
        "last 4 Android versions",
        "last 4 ChromeAndroid versions",
        "last 4 FirefoxAndroid versions",
        "last 4 iOS versions",
      ],
    }),

    // https://github.com/elchininet/postcss-rtlcss
    // Si desea admitir RTL css, entonces
    // 1. hilo/npm instalar postcss-rtlcss
    // 2. Opcionalmente, establezca quasar.config.js > framework > lang en un lenguaje RTL
    // 3. elimine el comentario de la siguiente línea:
    // require('postcss-rtlcss')
  ],
};
