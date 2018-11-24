const path = require('path');
const merge = require('webpack-merge');
const base = require('./base');

module.exports = base({
    REDUX_LOGGING: true
});
