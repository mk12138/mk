<template>
  <div class="about">
    <h2>乐章</h2>
    <div class="item" v-for="(item,index) in PagingCon" :key="index">
      <img :src="item.img" alt="" />
      <div class="wrapper">
        <div class="title">{{item.title}}</div>
        <div class="author">{{item.writer}}</div>
        <div class="desc">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["PagingCon",],
  mounted(){
   console.log(this.PagingCon);
  }
};
</script>

<style scoped>
.about {
  width: 1200px;
  overflow: hidden;
}
.item {
  width: 600px;
  float: left;
}
.item img {
  width: 210px;
  height: 210px;
  float: left;
}
.wrapper {
  float: left;
}
.author {
  width: 336px;
  height: 15px;
  margin-top: 10px;
}
.title {
  width: 336px;
  height: 21px;
  margin-top: 10px;
}
.desc {
  width: 336px;
  height: 100px;
  margin-top: 10px;
}
</style>
