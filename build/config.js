var path = require('path')

module.exports = {
    build: {
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        sourceMap: false,
    },
    dev: {
        env: path.resolve(__dirname, './dev.env'),
        port: 8080,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        sourceMap: false,
    }
}