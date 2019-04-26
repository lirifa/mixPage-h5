// webpack 扩展
const proxyConfig = require('./proxy.onfig')

module.exports = {
    devServer: {
        open: 'darwin' === process.platform,
        // host: '0.0.0.0',
        port: 8088,
        https: false,
        hotOnly: false,
        // proxy: 'https://api.douban.com' // string | Object
        proxy: proxyConfig.proxyList // string | Object 调试接口代理配置
    }
}
