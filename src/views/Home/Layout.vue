<template>
  <div>
    <!-- 首页导航栏 -->
    <MyHeader />
    <!-- 出口  内容 -->
    <router-view />
  </div>
</template>

<script>
import MyHeader from "../../components/MyHeader.vue";
export default {
  components: {
    MyHeader,
  },
};
</script>

<style>
</style>