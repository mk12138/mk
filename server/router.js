//路由走向
const express  = require('express')
const router = express.Router()
const sercet = require('./sercet')
//jsonwebtoken
const jwt = require('jsonwebtoken')
//const token= jwt.sign({对象数据},秘钥,{expiresIn:20*2})//200毫秒过期 1day 1h
//配置路由
//测试接口
router.get('/',(req,res)=>{
    res.send('hello router')
})

//登录接口：
router.post('/login',(req,res)=>{
    let user = req.body.user;
    let pwd = req.body.pwd;
    //连接数据库 查询语句 看数据是否存在 
    //生成token字段
    let token=jwt.sign({
        id:123,
        user,
    },sercet.key,{expiresIn:20*1})//单位秒
    res.send({
        success:true,
        token,
        user
    })
})


//测试token接口 
//获取我的个人信息数据--验证token是否有效--- 
/**
 * 查看个人信息---有token权限
 * 请求方式:post请求 不要参数
 * token的时间是： 登录的时候设置的： { expiresIn: 20 * 1 }
 */
//后端校验token是否过期
router.post('/getuser', (req, res) => {
  
    let token = req.headers.authorization;
    // console.log(req.headers.authorization);
    console.log('token',token);
    if (token) {
        jwt.verify(token, sercet.key, (err, decoded) => {
            if (err) {
                switch (err.name) {
                    case 'JsonWebTokenError':
                        res.send({ success:false, status:403, code: -1, msg: '无效的token' });
                        break;
                    case 'TokenExpiredError':
                        res.send({ success:false,status:403, code: -1, msg: 'token过期' });
                        break;
                }
            } else {//token验证通过了 
                //返回给前端相应的信息
                res.send({
                    status: 200,
                    success:true,
                    info: "token验证成功--返回请求的数据",
                    result:[1,2,3,4]
                })
            }
        })
    } else {
        res.send({
            success:false,
            info: "重新登录"
        })
    }
})


module.exports = router