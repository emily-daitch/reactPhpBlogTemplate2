const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const dotenv = require('dotenv');
const webpack = require('webpack');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin")
//const TerserPlugin = require("terser-webpack-plugin");
//const CompressionPlugin = require("compression-webpack-plugin");

// Instantiate the plugin.
// The `template` property defines the source
// of a template file that this plugin will use.
// We will create it later.
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
});

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    // Our application entry point.
    entry: "./src/index.js",
    
    // These rules define how to deal 
    // with files with given extensions.
    // For example, .tsx files 
    // will be compiled with ts-loader,
    // a spcific loader for webpack
    // that knows how to work with TypeScript files.
  //   module: {
  //     rules: [
  //       {
  //         test: /\.tsx?$/,
  //         use: "ts-loader",
  //         exclude: /node_modules/,
  //       },
  //     ],
  //   },

    // Telling webpack which extensions
    // we are interested in.
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },

    // What file name should be used for the result file,
    // and where it should be palced.
    output: {
      filename: "static/js/[name].js",
      chunkFilename: "static/js/[name].chunk.js",
      // publicPath: '/test',
      publicPath: '/',
      path: path.resolve(__dirname),
      // clean: true,
    },

    // Use the html plugin.
    plugins: [
      htmlPlugin,
      new webpack.DefinePlugin(envKeys),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(envKeys)
      }),
    ],
    
    // Set up the directory 
    // from which webpack will take the static content.
    // The port field defines which port on localhost
    // this application will take.
    devServer: {
      static: __dirname,
      compress: true,
      port: 3000,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            }
          }
        },
      ]
    },
  };
};