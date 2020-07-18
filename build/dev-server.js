var webpackDevConfig = require('./webpack.dev.conf')
var express = require('express')
var webpack = require('webpack')
var path = require('path')
var config = require('./config')

var app = express()
var compiler = webpack(webpackDevConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {

})
var hotMiddleware = require('webpack-hot-middleware')(compiler)

// webpack-dev-middleware 引用了http-proxy-middleware包
// var proxyMiddleware = require('http-proxy-middleware')

// 设置静态资源虚拟目录
app.use(path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory), express.static('./public'))

app.use(devMiddleware)
app.use(hotMiddleware)


module.exports = app.listen(webpackDevConfig.devServer.port, error => {
    if (error) {
        console.log(error)
    }
})


