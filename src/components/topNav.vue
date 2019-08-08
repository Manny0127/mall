<template>
  <div class="topNav">
    <span class="iconfont" @click="goBack">&#xe660;</span>
    <div class="title">{{$route.query.title}}</div>
    <span class="iconfont" @click="goBackHome">&#xe64f;</span>
  </div>
</template>

<script>
export default {
  name: 'topNav',
  methods: {
    // 返回上一页
    goBack () {
      this.$router.go(-1)
    },
    goBackHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/styles/variable.less";
.topNav {
  height: 45px;
  display: flex;
  text-decoration: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  border-bottom: 1px solid @bgColor2;
  background-color: #fff;
  .iconfont {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
