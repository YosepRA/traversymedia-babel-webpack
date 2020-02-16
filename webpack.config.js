const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        // Will only test files with '.js' and '.mjs' extensions.
        test: /\.m?js$/,
        // Do not transpile 'node_modules'
        exclude: /node_modules/,
        // Use this loader for this kind of file.
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    compress: true,
    port: 3000,
    publicPath: '/build'
  }
};

// ======================================================================================================== //

// NOT WORKING

// const path = require('path');

// module.exports = {
//   entry: {
//     app: './src/app.js'
//   },
//   output: {
//     filename: 'app.bundle.js',
//     path: path.resolve(__dirname, 'build')
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js?$/,
//         exclude: /node_modules/,
//         use: {
//           options: {
//             loader: 'babel-loader', ← ← ← 'loader' should be the property of 'use'.
//             presets: ['@babel/preset-env']
//           }
//         }
//       }
//     ]
//   }
// };

// ======================================================================================================== //

// const path = require('path');

// module.exports = {
//   entry: './src/app.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist')
//   }
// };
