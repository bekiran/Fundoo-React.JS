module.exports = {
  // 1
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: "less-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  // 2
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  // 3
  devServer: {
    contentBase: './public'
  }
};