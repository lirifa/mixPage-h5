module.exports = {
    proxyList: {
        '/': {
            target: 'http://consumer-h5-app.dev.yitaichang.cn',  // 接口域名
            changeOrigin: true,  //是否跨域
            pathRewrite: {
                '^/': '/',
            },
        }
    }
};
