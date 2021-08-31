import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/rest.css'
Vue.config.productionTip = false
// 引入swiper
 import swiper from 'swiper'
 import VueAwesomeSwiper from 'vue-awesome-swiper'
 import 'swiper/css/swiper.css'
 Vue.use(VueAwesomeSwiper)
//进入项目 获取本地是否有存储信息token
let usertoken= localStorage.getItem('usertoken')
if(usertoken){
  let obj=JSON.parse(usertoken);
  store.commit('LoginModule/setUserinfo',{
    user:obj.user,
    token:obj.token,
    isLogin:true
  })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
