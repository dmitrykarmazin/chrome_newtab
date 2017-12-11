
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path')

module.exports = {
    entry:'./src/main.js',
    output:{
        path: path.resolve(__dirname,'./dist_extention'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    loaders:{
                        js: 'babel-loader',
                        scss: 'vue-style-loader!css-loader!sass-loader'
                    }   
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  publicPath: 'assets/'
                }
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }

        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'New Tab',
            template: './index.html'
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: false
        })
    ],
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',    
}


if (process.env.NODE_ENV === 'production') {

    module.exports.devtool = '#source-map'

    module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      }),
      new CopyWebpackPlugin([{
        from:'./manifest.json'  
      }])
    ])
  }
