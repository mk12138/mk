//网络请求配置文件
import axios from '../utils/request';

//接口地址
const base={
    baseUrl:'http://iwenwiki.com',
    login:'/api/login',
    getUser:'/api/getuser',//测试token是否有效
    getBanner:'/foo/blueberrypai/getIndexBanner.php',//轮播接口
    getPaging:'/foo/blueberrypai/getIndexInteresting.php'//分页接口
}


/**
 * 请求方法
 */
export function getLogin(params){//{user:'',pwd:''}
   return axios.post(base.login,params)
}
export function getUser(){
    return axios.post(base.getUser)
}
export function getBanner(){
    return axios.get(base.getBanner)
}
export function getPaging(){
    return axios.get(base.getPaging)
}