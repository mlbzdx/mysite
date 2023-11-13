// vue-cli的配置文件
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://47.108.233.198:7001",
      },
      "/static": {
        target: "http://47.108.233.198:7001",
      },
      "/res": {
        target: "http://47.108.233.198:7001",
      },
    },
  },
  configureWebpack: require("./webpack.config"),
};
