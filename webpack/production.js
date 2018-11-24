const path = require('path');
const merge = require('webpack-merge');
const clean = require('clean-webpack-plugin');
const base = require('./base');

module.exports = merge(base(), {
    output: {
        path: path.join(__dirname, '..', 'build'),
        filename: '[name].[hash].js'
    },
    plugins: [
        new clean(['build'], {
            root: path.join(__dirname, '..')
        })
    ]
});
