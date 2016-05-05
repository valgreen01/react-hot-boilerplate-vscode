/*eslint no-console: 0*/
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
        chunks: false,
        'errors-only': true
    }
}).listen(config.output.server.port, config.output.server.host, function (err) {
    if (err) {
        console.log(err);
    }

    console.log(`Listening at http://${config.output.server.host}:${config.output.server.port}/`);
});