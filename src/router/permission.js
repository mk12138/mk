import router from './index';
//路由全局守卫
router.beforeEach((to,from,next)=>{
    //登录验证：1. 进入路由界面是否需要登录  2. 再验证是否登录 
    if(to.meta.isLogin){//true需要登录
      //再验证是否登录 假设已经登录
      let token = false;
      if(token){
        next()
      }else{
        //没有登录过--跳转登录界面
        next('/login')
      }
  
    }else{
      next()
    }
})
