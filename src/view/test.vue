<template>
  <div class="test">
    <div>this is test</div>

    <!-- 嵌套路由 -->
    <!-- <router-link to="/test/title1">标题1</router-link>
    <router-link to="/test/title2">标题2</router-link>
    <router-view></router-view>-->

    <!-- 编程式路由 -->
    <!-- <div @click="gotoGoods">跳到商品详情页</div> -->

    <!-- 命名路由 -->
    <!-- <router-link v-bind:to="{name:'goods'}">用命名路由的方式跳转到商品详情</router-link>
    <div>
      <span class="iconfont icon-yaopin"></span>
    </div>-->

    <!-- 子组件 -->
    <child @childFn="parentFn"></child>
    <br />
    <div>子组件传来的值:{{msg}}</div>

    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
/* eslint-disable */
import child from "./testCom";
export default {
  components: {
    child
  },
  data() {
    return {
      msg: "hello vue"
    };
  },
  methods: {
    gotoGoods() {
      //   this.$router.push({
      //     path: '/goods?goodsid=666'
      //   })
      // 同上面一样的效果
      this.$router.push({
        path: "/goods",
        query: {
          goodsid: 666
        }
      });
    }

    // 自定义事件,用于接收子组件传来的值
    // parentFn(val1) {
    //   console.log(val1);
    //   this.msg = val1;
    // }
  }
};
</script>

<style>
</style>
