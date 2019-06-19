const webpack = require('webpack');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
      },
      devServer: {
        contentBase: './dist',
        open: true,
        hot: true
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['react-hot-loader/webpack','babel-loader']
          },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },{
              test: /\.scss$/,
              use: [
                  "style-loader", // creates style nodes from JS strings
                  "css-loader", // translates CSS into CommonJS
                  "sass-loader" // compiles Sass to CSS, using Node Sass by default
              ]
            },
            {
            test: /\.(png|svg|jpg|gif)$/,
                use: [
                'file-loader'
                    ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
  }