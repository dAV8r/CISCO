const path = require('path'); // pre defined module --> builtin module of nodejs
//__dirname env variable ==> CWD / PWD

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle[hash].js',
  },
  module: {
    rules: [
        {
            test:/\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test:/\.js(x)?$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
    })
  ]
}

module.exports = config;