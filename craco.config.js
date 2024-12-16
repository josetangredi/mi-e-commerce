// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    resolve: {
      fallback: {
        "buffer": require.resolve("buffer/"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "vm": require.resolve("vm-browserify"),
        "path": require.resolve("path-browserify"),
      },
    },
  },
};
