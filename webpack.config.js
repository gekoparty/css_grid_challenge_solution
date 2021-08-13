const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
let mode = 'development'

if(process.env.NODE_ENV === 'production') {
    mode = 'production'
}

module.exports = {
    mode: mode,
    devtool: 'source-map',

    output: {
        assetModuleFilename: "images/[hash][ext][query]"
    },

    module: {
        rules: [
            
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath : ""},
                    },

                     "css-loader", 
                     "postcss-loader", 
                     "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpe?g|gif)$/i,
                type: "asset",
                /* parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024,
                    },
                }, */

            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: [new MiniCssExtractPlugin()],
    
    resolve: {
        extensions: [".js", ".jsx"]
    },

    devServer: {
        contentBase: "./dist",
        hot: true,
    },
}