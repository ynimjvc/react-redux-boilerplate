const path = require('path');
const merge = require('webpack-merge');
const base = require('./base');

const DEV_ENDPOINTS = 'http://google.com';

module.exports = merge(base({
    REDUX_LOGGING: true
}), {
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                {
                    from: /.*/, to: path.posix.join('/', 'index.html')
                },
            ],
        },
        contentBase: false,
        compress: true,
        host: '0.0.0.0',
        port: 80,
        overlay: {
            warnings: false,
            errors: true
        },
        publicPath: '/',
        proxy: {
            '/api/**': {
                target: DEV_ENDPOINTS,
                secure: false,
                changeOrigin: true
            }
        },
        watchOptions: {
          poll: false,
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    }
});
