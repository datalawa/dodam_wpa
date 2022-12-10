const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '^/hub': {
        target: 'http://127.0.0.1',
        changeOrigin: true,
        port: 8000
      },
      '^/api': {
        target: 'https://datalawa-api.hrabit64.xyz',
        changeOrigin: true
      },
    }
  },
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  }
})
