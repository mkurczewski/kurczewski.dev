export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Michał Kurczewski - portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Passionate front-end developer with full-stack aspirations.",
      },
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicons/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicons/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicons/favicon-16x16.png",
      },
      {
        rel: "manifest",
        href: "/favicons/site.webmanifest",
      },
      {
        rel: "mask-icon",
        href: "/favicons/safari-pinned-tab.svg",
        color: "#6d6666",
      },
      {
        rel: "msapplication-TileColor",
        content: "#ffffff",
      },
      {
        rel: "theme-color",
        content: "#ffffff",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["normalize.css/normalize.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Open+Sans+Condensed": [300, 700],
        },
        display: "fallback",
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
