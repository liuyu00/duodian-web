module.exports = {
  // 选项...
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/scss/base.scss";'
        // 这里的选项会传递给 postcss-loader
      },
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 100,
            propList: ['*']
          }),
          require('autoprefixer')()
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        changeOrigin: true
      }
    }
  }
}
