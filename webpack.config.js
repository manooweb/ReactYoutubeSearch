module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 3000,
    open: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
