<template>
  <div>
    <h2>About</h2>
  </div>
</template>

<script>
import { getUser } from "../../api";
export default {
  created() {
    getUser().then((res) => {
      console.log(res.data);
      if (res.data.success) {
        console.log("可以进入----");
        // console.log(res.data);
      } else {
        //重新登录--
        this.$router.push("/login");
      }
    });
  },
};
</script>

<style>
</style>