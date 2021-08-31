//代理请求
module.exports = {
    devServer: {//代理服务
      proxy: {
        '/api': {
          target: 'http://localhost:3434',//目标路径 真实网址 
         //   ws: true,//
          changeOrigin: true,//允许跨域
          pathRewrite:{
            "^/api":''
          }
        },
        '/foo':{
          target:'http://iwenwiki.com/api',
          changeOrigin: true,//允许跨域
          pathRewrite:{
            "^/foo":''
          }
        }
      }
    }
}