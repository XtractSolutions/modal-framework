require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const WebpackAssetsManifest = require('webpack-assets-manifest')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    'modal-framework': path.join(__dirname, './src/index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'modal-framework',
    libraryTarget: 'umd',
  },
  plugins: [
    new WebpackAssetsManifest({
      integrity: true,
    }),
  ],
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
  ],
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      // source maps
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      // js
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'src')],
      },
      // CSS
      {
        test: /\.styl$/,
        include: [path.join(__dirname, 'src')],
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => {
                  return [autoprefixer]
                },
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        include: [path.join(__dirname, 'src')],
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => {
                  return [autoprefixer]
                },
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => {
                  return [autoprefixer]
                },
              },
            },
          },
        ],
      },
      // Fonts
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
}
