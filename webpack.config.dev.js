var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: path.join(__dirname, './demo/index.jsx')
  },
  output: {
    path: path.join(__dirname, './demo/dist'),
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      // js
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'demo')]
      },
      // CSS
      {
        test: /\.styl$/,
        include: [path.join(__dirname, 'demo')],
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => {
                return [autoprefixer]
              }
            }
          }
        ]
      },
      {
        test: /\.less$/,
        include: [path.join(__dirname, 'demo')],
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => {
                return [autoprefixer]
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => {
                return [autoprefixer]
              }
            }
          }
        ]
      }
    ]
  }
}
