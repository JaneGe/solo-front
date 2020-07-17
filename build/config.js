const path = require('path')

module.exports = {
    build: {
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        sourceMap: false,
    },
    dev: {
        env: resolve('./dev.env'),
        port: 3000,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        sourceMap: false,
    }
}