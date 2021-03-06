// webpack.config.js
const webpack = require( 'webpack' );
const path = require( 'path' );

const config = {
  context : path.resolve( __dirname, 'src' ),
  entry : './index.js',
  output : {
    path : path.resolve( __dirname, 'dist' ),
    filename : 'phaser3-tilemap-plus.js',
    publicPath : "/dist/"
  },
  module : {
    rules : [ {
      test : /\.js$/,
      include : path.resolve( __dirname, 'src' ),
      use : [ {
        loader : 'babel-loader',
        options : {
          presets : [ [ '@babel/preset-env' ] ]
        }
      } ]
    } ]
  }
};

module.exports = config;
