export default {
    namespaced:true,
    state:{
        userInfo:{
            user:'',
            token:'',
            isLogin:false
        }
    },
    mutations:{
        //存储用户信息
        setUserinfo(state,payload){
            state.userInfo=payload
        }
    },
    actions:{

    }
}