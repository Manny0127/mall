<template>
  <div class="test">获取vuex中的值：{{this.currentCity}}</div>
</template>
<script>
/* eslint-disable */
// 引入辅助函数mapState,mapGetters
import { mapState, mapGetters } from "vuex";
export default {
  name: "test",

  // 计算属性中使用这个辅助函数
  computed: {
    // ...mapState(["city"])

    ...mapGetters(["currentCity"])
  }
};
</script>
<style scoped>
</style>
