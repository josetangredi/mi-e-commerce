// Importar webpack
const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        process: require.resolve("process/browser"), // Incluir el polyfill de process
      };

      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new webpack.ProvidePlugin({
          process: "process/browser", // Incluir 'process' como global
        }),
      ];

      return webpackConfig;
    },
  },
};
