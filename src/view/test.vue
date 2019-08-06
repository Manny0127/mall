<template>
  <div class="test">
    <div>this is test</div>

    <!-- 嵌套路由 -->
    <router-link to="/test/title1">标题1</router-link>
    <router-link to="/test/title2">标题2</router-link>
    <router-view></router-view>

    <!-- 编程式路由 -->
    <div @click="gotoGoods">跳到商品详情页</div>

    <!-- 命名路由 -->
    <router-link v-bind:to="{name:'goods'}">用命名路由的方式跳转到商品详情</router-link>
    <div>
      <span class="iconfont icon-yaopin"></span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello vue'
    }
  },
  methods: {
    gotoGoods () {
      //   this.$router.push({
      //     path: '/goods?goodsid=666'
      //   })
      // 同上面一样的效果
      this.$router.push({
        path: '/goods',
        query: {
          goodsid: 666
        }
      })
    }
  }
}
</script>

<style>
</style>
