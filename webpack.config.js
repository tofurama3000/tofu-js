const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: [/node_modules/, /\.spec\.tsx?$/]
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
        exclude: [/node_modules/, /\.spec\.tsx?$/]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map'
};
