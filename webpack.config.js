module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        publicPath: 'static'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
};