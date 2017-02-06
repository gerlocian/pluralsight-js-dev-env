'use strict';

//import webpack from 'webpack';
import path from 'path';

export default {
    // sets debugging
    debug: true,

    // sourcemap settings
    devtool: 'inline-source-map',

    // webpack displays a list of all files it is bundling
    noInfo: false,

    // first file that we have webpack source
    entry: [
        path.resolve(__dirname, 'src', 'index')
    ],

    // target the web, changes the way that webpack bundles files.
    target: 'web',

    // defines the output or where to create the bundled file
    // since this is dev, it only places this in memory
    // it doesn't write files
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    // plugins to run as the bundler runs.
    plugins: [],

    // tells webpack what file types to handle.
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.css$/, loaders: ['style', 'css'] }
        ]
    }
}
