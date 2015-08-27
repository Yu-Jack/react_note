var path = require('path'),
    bower_dir = __dirname + '/vendor',
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: {
        bundle: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
        vendors: ['jquery']
    },
    resolve: {
        alias: {
            'jquery': bower_dir + '/jquery/dist/jquery.min.js'
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: ['jquery'],
            loaders: ['babel']
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },
            { test: /\.woff$/, loader: "file-loader" },
            { test: /\.woff2$/, loader: "file-loader" },
            { test: /\.eot$/, loader: "file-loader" },
            { test: /\.ttf$/, loader: "file-loader" },
            { test: /\.svg$/, loader: "file-loader" }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ "vendors", /* filename= */ "vendor.bundle.js"),
        new ExtractTextPlugin("[name].css")
    ]
};

module.exports = config;
