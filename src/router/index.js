import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Layout from '../views/Home/Layout.vue'
import store from '../store';
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [{
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/Home/About.vue'),
        meta:{
          isLogin:true
        }
      },
      {
        path: '/news',
        name: 'News',
        component: () => import('../views/Home/News.vue'),
        meta:{
          isLogin:true
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Login.vue')
  }
]




const router = new VueRouter({
  routes
})

//路由全局守卫
router.beforeEach((to, from, next) => {
  //登录验证：1. 进入路由界面是否需要登录  2. 再验证是否登录 
  if (to.meta.isLogin) { //true需要登录
    //再验证是否登录 假设已经登录
    let token = store.state.LoginModule.userInfo.token;
    if (token) {
      next()
    } else {
      //没有登录过--跳转登录界面
      next('/login')
    }

  } else {
    next()
  }
})
export default router