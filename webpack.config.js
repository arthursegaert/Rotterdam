const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const webpack = require(`webpack`);
const merge = require(`webpack-merge`);
const parts = require(`./webpack.parts`);
const ImageminPlugin = require(`imagemin-webpack-plugin`).default;
const ImageminJpegRecompress = require(`imagemin-jpeg-recompress`);

const CriticalPlugin = require(`webpack-plugin-critical`).CriticalPlugin;

const PATHS = {
  src: path.join(__dirname, `src`),
  dist: path.join(__dirname, `dist`)
};

const commonConfig = merge([
  {
    entry: [
      path.join(PATHS.src, `js/index.jsx`),
      path.join(PATHS.src, `js/script.js`),
      path.join(PATHS.src, `css/style.css`)
    ],
    output: {
      path: PATHS.dist,
      filename: `js/script.[hash].js`,
      publicPath: "/"
    },
    mode: "development", //temp fix loading problem
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: `html-loader`,
          options: {
            attrs: [`img:src`, `source:srcset`]
          }
        },
        {
          test: /\.(jpe?g|png|gif|webp|svg|woff|woff2)$/,
          use: [
            {
              loader: `file-loader`,
              options: {
                limit: 1000,
                context: `./src`,
                name: `[path][name].[ext]`
              }
            },
            {
              loader: `image-webpack-loader`,
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                optipng: {
                  enabled: false
                },
                pngquant: {
                  quality: `65-90`,
                  speed: 4
                },
                gifsicle: {
                  interlaced: false
                } /*,
                webp: {
                  quality: 75
                }*/
              }
            }
          ]
        },
        {
          test: /\.(jsx?)$/,
          exclude: /node_modules/,
          use: [`babel-loader`, `eslint-loader`]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `./src/index.html`
      }),
      new webpack.ProvidePlugin({
        Promise: `es6-promise`,
        fetch: `imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch`
      })
    ]
  }
]);

const productionConfig = merge([
  parts.extractCSS(),
  {
    plugins: [
      new ImageminPlugin({
        test: /\.(jpe?g)$/i,
        plugins: [ImageminJpegRecompress({})]
      }),
      new CriticalPlugin({
        src: `index.html`,
        inline: true,
        minify: true,
        dest: `index.html`
      })
    ]
  }
]);

const developmentConfig = merge([
  {
    devServer: {
      overlay: true,
      contentBase: PATHS.src,
      historyApiFallback: true
    }
  },
  parts.loadCSS()
]);

module.exports = () => {
  if (process.env.NODE_ENV === `production`) {
    console.log(`building production`);
    return merge(commonConfig, productionConfig);
  }
  return merge(commonConfig, developmentConfig);
};
