export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'THE WORK SPACE OF YUSUKE NAKATSUBO',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'noindex'},
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'apple-touch-icon', sizes:'180x180', href:'/apple-touch-icon.png' },
      { rel:'icon', type:'image/png', sizes:'32x32', href:'/favicon-32x32.png' },
      { rel:'icon', type:'image/png', sizes:'16x16', href:'/favicon-16x16.png' },
      { rel:'manifest', href:'/site.webmanifest' },
      { rel:'mask-icon', href:'/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/reset.css',
    // 'ress',
    '~/assets/scss/base.scss',
    '~/assets/scss/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/utils',
    '~/plugins/adobe-fonts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',

    '@nuxtjs/style-resources', // 追加
    '@nuxtjs/date-fns',  // 追加
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-webfontloader', // 追加
    'nuxt-microcms-module', // 追加
    '@nuxtjs/color-mode', // 追加
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap'],
  },

  // 追加
  styleResources: {
    scss: ['~/assets/scss/app.scss'],
    hoistUseStatements: true,
  },

  // 追加
  // webfontloader: {
  //   google: {
  //     families: ['Ubuntu:wght@400,700&display=swap'],
  //   },
  // },

  // 追加
  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.GET_API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  // 追加
  // isLoad: './components/TheLoader.vue',

}
