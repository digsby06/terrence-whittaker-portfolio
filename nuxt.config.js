// const Prismic = require('prismic-javascript')
// const apiEndpoint = 'https://terrencewhittaker.prismic.io/api/v2'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Terrence Whittaker Jr.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Terrence Whittaker Jr. Charlotte Front-End Developer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/tlogo.png' }
    ]
  },
  css: [
    'tachyons/css/tachyons.css',
    '~/assets/main.css',
    '~/assets/css/main.scss'

  ],
  plugins: [
    { src: '~/plugins/vue-masonry', ssr: false }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#000000' },
  /*
  ** Adding plugin for persisted state
  */
  // plugins: [{ src: '~/plugins/localStorage.js', ssr: false }],
  /*

  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {

      if (ctx.dev && ctx.isClient) {
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
    routes: [
        '/projects/shine-moments-att',
        '/projects/digital-life-att',
        '/projects/movement-mortgage-lead-forms',
        '/projects/tutor2you',
        '/projects/movement-bank',
        '/projects/master-your-money',
        '/projects/mm-househunter',
        '/projects/goat-talk',
        '/blog/how-i-learned-to-breathe-before-i-code'
    ]
  }
}
