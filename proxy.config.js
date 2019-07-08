module.exports = {
    proxyList: {
        '/': {
            target: 'http://www.baidu.com',  // 接口域名
            changeOrigin: true,  //是否跨域
            pathRewrite: {
                '^/': '/',
            },
        }
    }
};
