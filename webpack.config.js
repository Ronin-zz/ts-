const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devServer: {
        open: true,
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'ts-video-lesson',
        }),
    ],
}