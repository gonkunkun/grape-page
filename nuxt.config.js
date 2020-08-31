import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import colors from 'vuetify/es5/util/colors'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - ' + '山梨ぶどう農園',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      // SEO
      {
        hid: 'description',
        name: 'description',
        content:
          '山梨県のぶどう農園です'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        // Content: '佐々木園,ぶどう,山梨',
        'xml:lang': 'ja',
        lang: 'ja'
      },
      { name: 'author', content: '佐々木優太' },
      // OGP
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '佐々木園 - 山梨ぶどう農園'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '佐々木園 - 山梨ぶどう農園'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '山梨県のぶどう農園です'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://grape-page.firebaseapp.com/'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://github.com/gonkunkun/grape-page/blob/master/assets/18339.jpg'
      },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: '425218088280876'
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: 'https://grape-page.firebaseapp.com/'
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://github.com/gonkunkun/grape-page/blob/master/assets/18339.jpg'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Global CSS
   */
  css: [
     { src: '~assets/css/styles.scss' }
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    // { src: '@/plugins/vuetify', ssr: false },
    '@/plugins/base'
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
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
    // '@nuxtjs/vuetify'
    // '@nuxtjs/font-awesome',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#D3C3BC',
          accent: '#D8EBF1',
          secondary: '#BFADA5',
          info: '#5B5C79'
          // warning: colors.amber.base,
          // error: colors.deepOrange.accent4,
          // success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend (config) {
      if (process.server && process.browser) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    dir: 'public'
  }
}
