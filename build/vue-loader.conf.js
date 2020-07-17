const config = require('./config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isProduction = process.env.NODE_ENV === 'production'

function cssLoaders (options) {
    var { sourceMap, extract } = options

    var cssLoader = {
        loader: 'css-loader',
        options: {
            minimize: isProduction,
            sourceMap: sourceMap
        }
    }

    var generateLoader = (loader, loaderOptions) => {
        var loaders = [cssLoader]
        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: sourceMap
                })
            })
        }
        return [extract ? MiniCssExtractPlugin.loader : 'css-style-loader'].concat(loaders)
    }

    return {
        css: generateLoader(),
        scss: generateLoader('scss')
    }
}


module.exports = {
    loaders: cssLoaders({
        sourceMap: isProduction ? config.build.sourceMap : config.dev.sourceMap,
        extract: isProduction
    })
}