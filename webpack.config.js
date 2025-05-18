// webpack.config.js
const path = require('path');

module.exports = {
    entry: './server.js', // or your actual entry point
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    mode: 'production',
    externalsPresets: { node: true }, // optional: avoids bundling built-in modules
    module: {
        rules: [],
    },
    resolve: {
        extensions: ['.js', '.json'],
    },
};
