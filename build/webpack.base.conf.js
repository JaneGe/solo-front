var path = require('path')
var config = require('./config')
var vueLoaderConfig = require('./vue-loader.conf')
var VueLoaderPlugin = require('vue-loader/lib/plugin')

var isProduction = process.env.NODE_ENV === 'production'

function resolvePath (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    mode: isProduction ? 'production' : 'development',
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/app/index.js',
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: isProduction ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolvePath('src'),
            'app': resolvePath('src/app'),
        }
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory',
                include: [resolvePath('src')]
            }
        ]
    }
}
