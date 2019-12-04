const path = require('path');
const JavaScriptObfuscator = require('webpack-obfuscator');

const entryjs = {
    index: './src/index.js'
}

module.exports = {
    entry: {
        ...entryjs,
    },
    output: {
        filename: 'js/[name].bundle.min.js',
        chunkFilename: 'js/[name].chunk.js',
        path: path.resolve(__dirname, 'public/dist'),
        publicPath: '/dist/',
      },
    plugins: [
        new JavaScriptObfuscator({
            rotateUnicodeArray: true
        }, [])
    ],
};