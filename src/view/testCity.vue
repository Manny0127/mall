<template>
  <div class="testCity">
    <router-link to="/test">返回test页面</router-link>
    <select v-model="selected">
      <option value></option>
      <option>杭州</option>
      <option>上海</option>
      <option>北京</option>
    </select>
    <button @click="submit(selected)">点击提交</button>
  </div>
</template>
<script>
/* eslint-disable */
// 引入mapActions辅助函数
import { mapActions } from "vuex";
export default {
  name: "testCity",
  data() {
    return {
      selected: ""
    };
  },
  methods: {
    submit(city) {
      // 可以直接在组件中$store.commit去触发 mutations里面的函数
      // this.$store.commit("changeCityinVuex", city);

      // this.$store.dispatch("changeCity", city);
      // 引入mapActions函数之后，上面一行代码可以简化成如下
      this.changeCity(city);
    },
    ...mapActions(["changeCity"])
  }
};
</script>
