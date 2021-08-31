<template>
  <div class="nav">
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      router
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/news">新闻</el-menu-item>
      <el-menu-item index="/about">我的</el-menu-item>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <!-- <el-menu-item index="4">订单管理</el-menu-item> -->
      <div class="login">
        <router-link to="/login">
          <el-button>登录 </el-button>
        </router-link>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: "/",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.nav {
  background: #545c64;
  .el-menu-demo {
    width: 1200px;
    margin: 0 auto;
    border-bottom: 0;
  }
  .login {
    float: right;
      button {
      margin-top: 10px;
    }
  }
}
</style>