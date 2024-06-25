module.exports = {
  // other config...
  module: {
    rules: [
      // other rules...
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
};
