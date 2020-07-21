var webpack = require('webpack')
var { merge } = require('webpack-merge')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorPlugin = require('friendly-errors-webpack-plugin')

var webpackBaseConfig = require('./webpack.base.conf')
var config = require('./config')

Object.keys(webpackBaseConfig.entry).forEach(function (name) {
    webpackBaseConfig.entry[name] = ['./build/dev-client'].concat(webpackBaseConfig.entry[name])
})

console.log(webpackBaseConfig.entry)


module.exports = merge(webpackBaseConfig, {
    mode: 'development',
    devServer: {
        hot: true,
        inline: true
    },
    devtool: '#cheap-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorPlugin(),
        new HtmlWebpackPlugin({
            index: 'index.html',
            template: 'index.html',
            favicon: path.join(__dirname, '../public/favicon.ico'),
            inject: true
        })
    ]
})