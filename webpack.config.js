const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: 'static',
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'awesome-typescript-loader'
        }]
    }
};