const { defineConfig } = require("@vue/cli-service");

const port = process.env.VUE_APP_PORT || 80; // 端口
const api = process.env.VUE_APP_BASE_API; // api请求前缀

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "docs",
  lintOnSave: false,

  // 服务器配置
  devServer: {
    host: "0.0.0.0",
    port: port,
    proxy: {
      [api]: {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          [api]: ''
        },
      },
    },
  },
});
