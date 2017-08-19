var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin( {
  filename :'style.css'
});

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/js');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module : {
    rules : [
      {
      	test : /\.css$/,
      	use : extractPlugin.extract({
            fallback: 'style-loader',
            use : ['css-loader']
        })
      },
      {
        test : /\.js$/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  plugins : [
  	extractPlugin
  ]
};

module.exports = config;
