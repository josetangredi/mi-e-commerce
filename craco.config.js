const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        os: require.resolve("os-browserify/browser"),
        path: require.resolve("path-browserify"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        vm: require.resolve("vm-browserify"), // Polyfill para 'vm'
      };

      return webpackConfig;
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: "process/browser", // Soporte para 'process'
        Buffer: ["buffer", "Buffer"], // Soporte para 'Buffer'
      }),
    ],
  },
};
