var express = require('express')
var webpack = require('webpack')
var path = require('path')
var opn = require('opn')
var webpackDevConfig = require('./webpack.dev.conf')
var config = require('./config')

var app = express()
var compiler = webpack(webpackDevConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    quiet: true
})
var hotMiddleware = require('webpack-hot-middleware')(compiler)

compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        cb()
    })
});


// webpack-dev-middleware 引用了http-proxy-middleware包
// var proxyMiddleware = require('http-proxy-middleware')

// 设置静态资源虚拟目录
app.use(path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory), express.static('./public'))

app.use(devMiddleware)
app.use(hotMiddleware)


var uri = 'http://localhost:' + config.dev.port

devMiddleware.waitUntilValid(function () {
    console.log('> Listening at ' + uri + '\n ')
})

module.exports = app.listen(config.dev.port, function (error) {
    if (error) {
        console.log(error)
        return
    }

    if (!!config.dev.autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
        opn(uri)
    }
})


