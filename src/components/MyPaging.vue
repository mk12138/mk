<template>
  <div>
    <div>
      <el-pagination
        :page-size="4"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :total="list.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list",'amendlist'],//总分页数据
  data() {
    return {
    //   list: [], //总分页数据
      num: 1, //当前页
      paginglist: [], //当前页需要渲染的4个
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.paginglist = [];
      var index = (val - 1) * 4; //当前下标
    //   console.log(index);
      for (let i = 0; i < 4; i++) {
        let arr = this.list[index++];
        this.paginglist.push(arr);
      }
      this.$emit('amendlist',this.paginglist)
    //   console.log(this.paginglist); //拿到了值
    },
  },
};
</script>

