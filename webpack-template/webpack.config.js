'use strict';

const path = require('path')
const webpack = require('webpack')

const config = {
    entry: {
        index:'./src/index.js'
    },
    output: {
        filename: 'bundle.[name].js',
        path: path.join(__dirname, 'public')
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { 
                test:/\.(png|svg|jpe?g|gif)$/i, 
                loaders:[
                    'file-loader',
                    'image-webpack-loader?{mozjpeg:{progressive:true}, gifsicle:{interlaced: false}, pngquant:{quality: "65-90", speed: 4}}',
                ] 
            }
        ]
    },
    plugins: [
    ]
  };
  
  module.exports = config;