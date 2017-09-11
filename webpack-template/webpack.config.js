'use strict';

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
    entry: {
        index:'./src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: 'bundle.[name].js',
        path: path.join(__dirname, 'public')
    },
    devtool: 'source-map',
    devServer: {
        contentBase:path.join(__dirname, 'public')
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
             title: 'Output Management'
        }),
        new CleanWebpackPlugin(['public'])
    ]
  };
  
  module.exports = config;