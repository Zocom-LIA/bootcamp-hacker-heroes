// const path = require('path');

// // import path from "path"

// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// module.exports = {
//     mode: 'development',
//     module: {
//         // Instruct Webpack to use the `ts-loader` for any TypeScript files, else it
//         // won't know what to do with them. 
//         rules: [
//           {
//             test: /\.ts$/,
//             exclude: /node_modules/,
//             loader: 'babel-loader',
//             exclude: [
//               [
//                 path.resolve(__dirname, '.webpack'),
//                 path.resolve(__dirname, '.serverless'),
//               ],
//             ],
//             // And here we have options for ts-loader
//             // https://www.npmjs.com/package/ts-loader#options
//             options: {
//               // Disable type checking, this will lead to improved build times
//               transpileOnly: true,
//               // Enable file caching, can be quite useful when running offline
//               experimentalFileCaching: true,
//             },
//           },
//         ],
//       },
  
// };

const path = require('path');
const slsw = require('serverless-webpack');
module.exports = {
  mode: 'production', // 'development', 'production',
  devtool: slsw.lib.webpack.isLocal ? 'source-map' : 'cheap-source-map',
  entry: slsw.lib.entries,
  target: 'node',
  resolve: {
    extensions: ['.cjs', '.mjs', '.js', '.ts'],
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        exclude: [
          [
            path.resolve(__dirname, '.webpack'),
            path.resolve(__dirname, '.serverless'),
          ],
        ],
        // options: {
        //   transpileOnly: true,
        //   experimentalFileCaching: true,
        // },
      },
    ],
  },
};