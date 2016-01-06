var path = require('path');             
module.exports = {
  cache: true,
  entry: [ 
      'webpack/hot/dev-server',
      path.resolve(__dirname, 'src/index.js')
    ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      { 
        test: /\.coffee$/, 
        loader: 'coffee-loader'
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.coffee'] 
  }
};
