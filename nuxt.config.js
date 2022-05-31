export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  serverMiddleware: [
    {
      path: "/api",
      handler: "~/server/api.js"
    }
  ],
  head: {
    title: 'insideBO: Scopri Bologna',
    htmlAttrs: {
      lang: 'it',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'insideBO è il sito informativo riguardo la splendida città di Bologna'},
      { name: 'format-detection', content: 'telephone=no' },
      { name:"msapplication-TileColor" , content:"#da532c"},
      { name:"theme-color", content:"#ffffff"},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'Favicon/favicon.ico' },
      { rel:'apple-touch-icon', sizes:"180x180", href:'Favicon/apple-touch-icon.png'},
      { rel:"icon", type:"image/png", sizes:"32x32", href:'Favicon/favicon-32x32.png'},
      { rel:"icon" ,type:"image/png", sizes:"16x16", href:'Favicon/favicon-16x16.png'},
      { rel:"manifest", href:'Favicon/site.webmanifest'},
      { rel:"mask-icon", href:'Favicon/safari-pinned-tab.svg', color:"#5bbad5"},
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" },
      { rel: "stylesheet", href:"https://cdn.jsdelivr.net/npm/@mdi/font@5.9.55/css/materialdesignicons.min.css"},
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' },
    ],
    script: [
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL:'https://insidebo.herokuapp.com'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Loading bar
  loading: {
    continuous: true,
  },
}
