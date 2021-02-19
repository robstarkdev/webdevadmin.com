


const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = {

    entry: {
        index: './src/index.js',
        contact: './src/contact.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "./")
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    devServer: {
        contentBase: path.join(__dirname, './'),
        port: 9001
    },


    plugins:
        [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'src/index-template.html',
                chunks: ['index']
            }),
            new HtmlWebpackPlugin({
                filename: 'contact.html',
                template: 'src/contact-template.html',
                chunks: ['contact']
            })
        ],


    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: [
                    {loader: 'url-loader'}
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {loader: 'url-loader?limit=100000'}
            }

        ]
    }

}
