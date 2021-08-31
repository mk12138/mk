const express = require('express')
const app = express()
//post接受参数配置 请求头
app.use(express.urlencoded({ extended: true })) 
const router = require('./router')
app.use('/',router)

app.listen(3434,()=>{
    console.log(3434);
})