import colors from 'vuetify/es5/util/colors'
const envSet = require('./env.contentful.js')

export default {
  env: envSet,
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  router: {
    base: '/nuxt-pages/'
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - ' + 'gue_tech.com',
    title: "gue_tech.com" || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { name: 'google-site-verification', content: '3v_zumBJHEvjPHU6KNX8fnnPQoR5jDz4ot60wi10imY' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/g_small.png'}]
  },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/iconfont/material-icons.css',
    '@/assets/css/main.css',
  ],
  plugins: [
    '@/plugins/prism',
    '@/plugins/day',
    '@/plugins/filters',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    ['@nuxtjs/google-analytics', {
      id: process.env.TRACKING_ID
    }],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
  ],
  markdownit: {
    injected: true
  },
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    defaultAssets: false,
    icons: {
      iconfont: "md"
    },
    theme: {
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  build: {},
}