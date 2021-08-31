<template>
  <div>
    <el-row style="margin-top:60px">
      <el-col :span="8" :offset="8">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
        >
          <el-form-item label="账号" prop="username">
            <el-input
              type="text"
              v-model="ruleForm.username"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getLogin} from '../api'
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {//提交表单
      //获取form Dom元素 this.$refs[formName]
      this.$refs[formName].validate((valid) => {
        if (valid) {//验证通过了 获取输入的值
          console.log('输入的值：',this.ruleForm);
          getLogin({
            user:this.ruleForm.username,
            pwd:this.ruleForm.password
          }).then(res=>{
            console.log(res.data);
            /**
             * 1. 保存token到本地 
             * 2. 跳转首页
             * 3. 存储登录状态 给vuex 
             */
            let data={
              token:res.data.token,
              user:res.data.user
            }
            localStorage.setItem('usertoken',JSON.stringify(data))
            this.$router.push('/')
            //存储vuex 
            let obj={
              user:res.data.user,
              token:res.data.token,
              isLogin:true
            }
            this.$store.commit('LoginModule/setUserinfo',obj)//调用方法存储vuex

          })

        } else {//验证不通过 不能做表单提交
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {//清空表单数据
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
</style>