const path = require('path');

const dist = path.join(__dirname, 'dist');
const src = path.join(__dirname, 'src');

module.exports = {
    entry: {
        'vector-devtools': 'index'
    },
    output: {
        path: dist,
        filename: '[name].js',
        library: 'vectorDevTools',
        libraryTarget: 'umd'
    },
    resolve: {
        root: src,
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            include: src,
            query: {
                presets: ['es2015'],
                plugins: ['jsx-jsonml']
            }
        }]
    }
};
