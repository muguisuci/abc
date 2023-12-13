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
        org: 厚朴,
        project: vue-search,
        authToken:"sntrys_eyJpYXQiOjE3MDI0NTIwODQuOTExOTg4LCJ1cmwiOiJodHRwczovL3NlbnRyeS5pbyIsInJlZ2lvbl91cmwiOiJodHRwczovL3VzLnNlbnRyeS5pbyIsIm9yZyI6IjI4ODQ5ZGI3NTRlMiJ9_QS0cLVYJXt131rh8gkzw3jPYeyezb40glVm6ereAdcQ/kmwRYbIHDvfb6JMe4"
      }),
      
      
    ]
  }
})
