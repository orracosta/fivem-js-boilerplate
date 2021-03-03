const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const buildPath = path.resolve(__dirname, 'dist');

const server = {
  entry: './src/server/server.js',
  plugins: [
    new webpack.DefinePlugin({ 'global.GENTLY': false })
  ],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[contenthash].server.js',
    path: path.resolve(buildPath, 'server'),
    clean: true,
  },
  externals: [
    nodeExternals(),
  ],
  target: 'node',
};

const client = {
  entry: './src/client/client.js',
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[contenthash].client.js',
    path: path.resolve(buildPath, 'client'),
    clean: true,
  },
  externals: [
    nodeExternals(),
  ],
};

module.exports = [server, client];
