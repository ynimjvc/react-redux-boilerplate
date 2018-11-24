const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (defined = {}) => {
    return {
        context: path.join(__dirname, '..', 'app'),
        entry: {
            index: './index.js',
            vendor: [
                'react',
                'react-dom',
                'react-router-dom',
                'react-redux',
                'redux',
                'redux-logger',
                'redux-thunk',
                'immutability-helper',
                'uuid',
                'accounting-js',
                'moment'
            ],
        },
        output: {
            path: path.join(__dirname, '..', 'build'),
            filename: '[name].js?v=[hash]'
        },
        resolve: {
            alias: {
                'Component': path.join(__dirname, '..', 'app', 'components'),
                'Module': path.join(__dirname, '..', 'app', 'modules'),
                'Actions': path.join(__dirname, '..', 'app', 'actions')
            },
            modules: ['bower_components', 'node_modules']
        },
        plugins: [
            new webpack.DefinePlugin({
                REDUX_LOGGING: JSON.stringify(defined.REDUX_LOGGING ? true : false),
                NO_FORCE_REDIRECT: JSON.stringify(defined.NO_FORCE_REDIRECT ? true : false)
            }),
            new webpack.NoEmitOnErrorsPlugin(),
            new HtmlWebpackPlugin({
                template: './index.ejs',
                chunks: ['vendor', 'index'],
                base: defined.BASE || ''
            })
        ],
        optimization: {
            splitChunks: {
                chunks (chunk) {
                    return chunk.name !== "index"
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.(pcss|css)$/,
                    use: ['style-loader', 'css-loader', 'postcss-loader']
                },
                {
                    test: /\.html$/,
                    use: 'html-loader'
                },
                {
                    test: /\.(jsx|js)$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            'react',
                            'es2017',
                            'stage-0'
                        ],
                        plugins: [
                            'transform-decorators-legacy'
                        ]
                    }
                },
                {
                    test: /.*\.(gif|png|jpe?g|svg)$/i,
                    loaders: [
                        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
                    ]
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    use: 'file-loader'
                }
            ]
        }
    };
};
