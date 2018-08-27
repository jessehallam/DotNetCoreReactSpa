const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'ClientApp', 'src', 'index')
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            }
        ]
    },

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'wwwroot/dist'),
        publicPath: 'dist/'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'ClientApp/index.html')
        })
    ],

    resolve: {
        extensions: ['.tsx', '.ts', '.json', '.js']
    }
}