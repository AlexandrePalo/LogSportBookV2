var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'VERSION': JSON.stringify('0.1.0'),
        'NODE_ENV': JSON.stringify('dev'),
        'CLIENT_ID': JSON.stringify('yoZpCbGsAxzrisPVmskO1h4UPliN6wl6'),
        'BASE_URL_AUTH0': JSON.stringify('https://lsb.eu.auth0.com'),
        'BASE_AUTH0': JSON.stringify('lsb.eu.auth0.com'),
        'BASE_URL_API': JSON.stringify('http://logsportbook-api.alexandrepalo.com'),
      }
    }),
  ],

  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      },
    },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
