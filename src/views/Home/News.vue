<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item, index) in list.length / num" :key="index">
      <div class="one" v-for="(item,num1) in 4" :key="num1">
        <div class="items">
          <div class="title">{{ list[index * num+num1].title }}</div>
          <div class="content">
            <img :src="list[index * num+num1].picture" alt="" />
            <div class="right">
              <p>户型：{{ list[index * num+num1].roomHall }}</p>
              <p>起拍价: {{ list[index * num+num1].startPrice / 1000000 }} 万</p>
              <p>折扣：{{ list[index * num+num1].discount }}</p>
              <p>结束时间：{{ list[index * num+num1].endTime }}</p>
            </div>
          </div>
        </div>
      </div>
  

     
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
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
      list: [], //数据
      num: 4, //每组4个
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {


    let src = '{"pageNo":0,"pageSize":12,"city":310100}';
    fetch("http://www.jingpaifang.cn/api/api/api/app/search/houses/hot", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: src,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.content);
        this.list = res.data.content;
      });
  },
};
</script>

<style scoped lang="less">
.swiper-container {
  height: 500px;
  // img{
  //   width: 45%;
  //   margin-right: 10px;
  //   margin-bottom: 10px;
  // }
  .one {
    width: 45%;
    height: 200px;
    // background: chartreuse;
    float: left;
    margin-bottom: 10px;
    margin-right: 10px;
    overflow: hidden;

    .content {
      display: flex;
      img {
        width: 200px;
        height: 170px;
        margin-right: 10px;
        margin-top: 10px;
      }
      .right {
        margin-top: 10px;
        p {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>