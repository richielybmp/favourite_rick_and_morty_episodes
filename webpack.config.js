const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');


const rules = [
    {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },
    {
        test: /\.svg$/,
        use: ['babel-loader', 'svg-inline-loader']
    }
]

module.exports = {
    target: 'web',
    mode: 'development',

    // webpack will take the files from ./src/index
    entry: './src/index',
    // and output it into /dist as bundle.js
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    resolve: { extensions: ['.ts', '.tsx', '.js'] },
    module: { rules },
    devServer: {
        contentBase: './',
        port: 5000,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],

}