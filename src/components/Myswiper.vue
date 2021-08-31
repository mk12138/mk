<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in list" :key="item.title">
        <img :src="item.img"
        style="width:100%"
      /></swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { getBanner } from "../api/index";
export default {
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
      list: [], //轮播数据
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    // console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false); //到哪里，几秒
    getBanner().then((res) => {
      // console.log(res.data.banner);
      let arr = res.data.banner;
      for (let i = 0; i < arr.length; i++) {
        arr[i].img = arr[i].img.replace(
          "http://www.wwtliu.com/sxtstu",
          "http://iwenwiki.com/api"
        );
      }
      this.list = arr;
    });
  },
};
</script>

<style>
</style>