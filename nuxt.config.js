const pkg = require('./package')
const {
  resolve
} = require('path')
module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** 全局样式
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
  ],

  /*
   ** 第三方插件
   */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/svg-icon',
    '@/plugins/axios'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // 模块，proxy用于代理，用发类似单页应用，详见底部proxy配置
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
   
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** webpack设置
     */
    extend(config, ctx) {
      //利用svg-sprite-loader处理svg
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [resolve(__dirname, 'assets/svg')]
      config.module.rules.push({
        test: /\.svg$/,
        include: [resolve(__dirname, 'assets/svg')],
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]'
        }
      })
    }
  },
  /*
  nuxt Proxy设置
  */
  proxy: [
    ['/xxx', {
      target: 'https://xxx.xx.com/',
      pathRewrite: {
        '^/xx': '/xx'
      }
    }]
  ]
}
