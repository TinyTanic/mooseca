/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const config = require('../package.json')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ElectronPackager = require('webpack-electron-packager')


module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    target: "electron",
    entry: [
        path.join(__dirname, '../index.desktop.js')
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { cacheDirectory: true }
            },
            {
                test: /\.(gif|jpe?g|png|svg)$/,
                loader: 'url-loader',
                query: { name: '[name].[hash:16].[ext]' }
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(true),
        }),
        new HtmlWebpackPlugin({
            title: config.displayName,
            template: path.resolve(__dirname, 'src/index.ejs')
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/main.js'),
            to: path.resolve(__dirname, 'dist/main.js')
        }, {
            from: path.resolve(__dirname, 'src/package.json'),
            to: path.resolve(__dirname, 'dist/package.json')
        }]),
        new ElectronPackager({
            dir: path.resolve(__dirname, 'dist/'),
            out: path.resolve(__dirname, 'build/'),
            arch: 'all',
            platform: 'linux',
        })
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
    ],
    resolve: {
        extensions: ['.desktop.js', '.web.js', '.js', '.jsx']
    }
}
