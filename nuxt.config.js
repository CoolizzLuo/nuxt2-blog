const pkg = require("./package");
const bodyParser = require("body-parser");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fa923f", height: "4px", duration: 5000 },
  loadingIndicator: {
    name: "circle",
    color: "#fa923f"
  },

  /*
   ** Global CSS
   */
  css: ["~assets/styles/main.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/core-components.js", "~plugins/date-filter.js"],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL:
      process.env.BASE_URL ||
      "https://nuxt-blog-34ed4-default-rtdb.asia-southeast1.firebasedatabase.app",
    credentials: false
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    baseUrl:
      process.env.BASE_URL ||
      "https://nuxt-blog-34ed4-default-rtdb.asia-southeast1.firebasedatabase.app",
    fbAPIKey: process.env.FIREBASE_API_KEY
  },
  transition: {
    name: "fade",
    mode: "out-in"
  },
  // router: {
  //   middleware: "log"
  // }
  serverMiddleware: [bodyParser.json(), "~/api"]
};
