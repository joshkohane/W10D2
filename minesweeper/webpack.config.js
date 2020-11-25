const path = require('path'); // available to us through node

module.exports = {
    entry: './react_minesweeper.jsx',
    output: {
        path: path.resolve(__dirname),
        // Uses path we passed in above - gives me the directory 
        // where this file currently lives
        filename: 'bundle.js'
        // where we want bundle.js to live
    },
    devtool: 'source-map',
    // helps us find out where errors are
    resolve: {
        extensions: [".js", ".jsx", "*"]
        // if a file doesn't have an extension put one of these on it
        // or vice versa
        // makes import and export easier
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
};