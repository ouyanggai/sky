/* craco.config.js */
const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  webpack: {
    module: {
      loaders: [
        {test: /\.css$/, loader: 'style!css'},
        {test: /\.less$/, loader: 'style!css!less'}
      ]
    }
  },
  plugins: [{ plugin: CracoAntDesignPlugin }]
};