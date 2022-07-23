const webpack = require("webpack");

const path = require('path');

const baseConfig = {
    module: {
        rules: [{
            test: /\.tsx?$/i,
            use: [{ loader: "ts-loader", },],
            exclude: /node_modules/
        }]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    /*
    devServer: {
        headers: {
            // Allow to use SharedBufferArray
            'Cross-Origin-Opener-Policy': 'same-origin',
            'Cross-Origin-Embedder-Policy': 'require-corp',
        }
    }
    */
};

module.exports = [
    Object.assign({}, baseConfig, {
        entry: './src/web',
        output: { path: path.resolve(__dirname, 'dist'), filename: "web.js", },
    }),

    Object.assign({}, baseConfig, {
        entry: './src/worker',
        output: { path: path.resolve(__dirname, 'dist'), filename: "worker.js", },
    }),
];
