<template>
  <div class="home">
    <!-- <h2>首页</h2> -->
    <!-- 萝卜兔 -->
    <Myswiper />
    <!-- 分液器内容 -->
    <MyPagingCon :PagingCon="PagingCon" />
    <!-- 分液器 -->
    <MyPaging :list="list" @amendlist="amendlist" />
  </div>
</template>

<script>
import Myswiper from "../../components/Myswiper.vue";
import MyPaging from "../../components/MyPaging.vue";
import MyPagingCon from "./MyPaging/MyPagingCon.vue";
import { getPaging } from "../../api/index";
export default {
  name: "Home",
  components: {
    Myswiper,
    MyPaging,
    MyPagingCon,
  },
  data() {
    return {
      list: [], //总分页数据
      num: 1, //当前页
      PagingCon: [], //当前页内容4个
    };
  },
  methods: {
    amendlist(arr) {
      console.log("触发了", arr);
      this.PagingCon = arr;
    },
  },
  mounted() {
    getPaging().then((res) => {
      let arr = res.data.interesting;
      // console.log(res.data);
      for (let i = 0; i < arr.length; i++) {
        arr[i].img = arr[i].img.replace(
          "iwen.wiki/sxtstu",
          "iwenwiki.com/api"
        );
      }
      this.list = arr;
      var index = 0;
      //一共分成 PAGE_COUNT 4页，每一页拿4个
      for (let j = 0; j < 4; j++) {
        var ele = this.list[index++]; //通过下标拿到每一个值
        this.PagingCon.push(ele);
      }
      // console.log(this.PagingCon);
    });
  },
};
</script>
