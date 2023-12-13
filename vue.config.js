const { defineConfig } = require('@vue/cli-service')
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");
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
        // org: "HOPU",
        project: "wangyi-vue",
        authToken:
        "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"
        }),
    ]
  }

})
