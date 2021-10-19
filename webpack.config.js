const webpack = require("webpack")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");

const config = {
  entry: {
    app: "./assets/js/script.js",
    events: "./assets/js/events.js",
    schedule: "./assets/js/schedule.js",
    tickets: "./assets/js/tickets.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname + "/dist")
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name (file) {
                return "[path][name].[ext]"
              },
              publicPath: function(url) {
                return url.replace('../", "/assets/")')
              }
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
//   resolve:
//   {
//     fallback: 
//   { "path": require.resolve("path-browserify"),
//     "crypto": require.resolve("crypto-browserify"),

// }
//   },
  
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static", 
    })
  ],
  mode: "development"
};

module.exports = config;



// fallback: {
//   "fs": false,
//   "tls": false,
//   "net": false,
//   "path": false,
//   "zlib": false,
//   "http": false,
//   "https": false,
//   "stream": false,
//   "crypto": false,
//   "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
// } 