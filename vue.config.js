const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 设置正向代理服务器
  devServer:{
    proxy:"http://111.229.247.11:3000/",
  },
  configureWebpack:{
    devtool: "source-map",
    plugins: [
      sentryWebpackPlugin({
        org: "HOPU",
        project: "vue-search",
        authToken:"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"
      }),
    ]
  }

})
