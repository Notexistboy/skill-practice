module.exports = {
  devtool: 'source-map',
  entry: './app.js',
  output: {
    filename: './dist/bundle.js',
  },
  module: {
    rules:[
      {
        loader: 'babel-loader',
        options: {
          pres
        }
      }
    ]
  }
}