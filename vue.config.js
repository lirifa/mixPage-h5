// webpack 扩展
module.exports = {
    devServer: {
        open: 'darwin' === process.platform,
        // host: '0.0.0.0',
        port: 8088,
        https: false,
        hotOnly: false,
        // proxy: 'https://api.douban.com' // string | Object
        proxy: 'http://localhost:3000' // string | Object

    }
}
