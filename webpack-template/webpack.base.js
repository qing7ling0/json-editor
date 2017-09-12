'use strict';

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: {
      vendor:[
        'lodash'
      ],
      index:'./src/index.js',
      print: './src/print.js'
    },
    module: {
      loaders: [
          { test: /\.css$/, loader: 'style-loader!css-loader' },
          { 
            test:/\.(png|svg|jpe?g|gif)$/i, 
            loaders:[
                'url-loader?limit=10000',
                'image-webpack-loader?{mozjpeg:{progressive:true}, gifsicle:{interlaced: false}, pngquant:{quality: "65-90", speed: 4}}',
            ]
          }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Webpack-template'
        }),
        new webpack.optimize.CommonsChunkPlugin({
          names:['vendor']
        }),
        new webpack.optimize.CommonsChunkPlugin({
          names:['common', 'manifest']
        })
    ]
  };
  
  module.exports = config;