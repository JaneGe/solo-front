const path = require('path')
module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/index.js'
    }
}