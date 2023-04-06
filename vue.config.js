
const { defineConfig } = require("@vue/cli-service");
const { env } = require("process");

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "docs",
  lintOnSave: false,

  // 服务器配置
  devServer: {
    host: "0.0.0.0",
    open: true,
    port: env.VUE_PORT,
    proxy: {
      [env.VUE_BASE_API]: {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          [env.VUE_BASE_API]: ''
        },
      },
    },
  },
});
