/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    modules: [path.resolve(__dirname, './'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { node: 'current' }, // 지원하길 원하는 환경
                modules: false, //false로 설정 시 최신모듈 시스템이 그대로 유지되어서 트리 쉐이킹이 됨
                useBuiltIns: 'usage'
              }
            ],
            '@babel/preset-react', // 리액트를 쓴다면
            '@babel/preset-typescript' // 타입스크립트를 쓴다면
          ]
        },
        exclude: /node_modules/
      },
      {
        test: /\.(svg|ico)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]?[hash]',
          publicPath: './dist/',
          limit: 10000 // 10kb
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new ImageMinimizerPlugin({
      exclude: /node_modules/,
      minimizerOptions: {
        // 사용자 정의 옵션을 사용해 무손실 최적화합니다.
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          ['svgo', { plugins: [{ removeViewBox: false }] }]
        ]
      }
    })
  ]
};
