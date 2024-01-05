const path = require('path');

module.exports = {
    mode: 'development',
    module: {
        // Instruct Webpack to use the `ts-loader` for any TypeScript files, else it
        // won't know what to do with them. 
        rules: [
          {
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: 'ts-loader',
            exclude: [
              [
                path.resolve(__dirname, '.webpack'),
                path.resolve(__dirname, '.serverless'),
              ],
            ],
            // And here we have options for ts-loader
            // https://www.npmjs.com/package/ts-loader#options
            options: {
              // Disable type checking, this will lead to improved build times
              transpileOnly: true,
              // Enable file caching, can be quite useful when running offline
              experimentalFileCaching: true,
            },
          },
        ],
      },
}