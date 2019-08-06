<template>
  <div class="classify">
    <!-- 顶部栏 -->
    <div class="topNav">
      <span class="iconfont" @click="goBack">&#xe660;</span>
      <div class="title">分类</div>
      <span class="iconfont" @click="goBackHome">&#xe64f;</span>
    </div>
    <!-- 主体部分 -->
    <div class="main" :style="{height:mainHeight}">
      <div class="leftContent">
        <ul>
          <li
            class="item"
            :class="currentIdx === index ? 'item_on':''"
            v-for="(item,index) in leftClass"
            :key="index"
            @click="addActiveClass(index)"
          >{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  created() {
    this.mainHeight = window.innerHeight - 45 + "px";
  },
  data() {
    return {
      // 主体高度
      mainHeight: "",

      //   左侧菜单
      leftClass: [],

      //   当前点击的类的index
      currentIdx: ""
    };
  },
  mounted() {
    this.getClassData();
  },
  methods: {
    // 返回上一页
    goBack() {
      this.$router.go(-1);
    },
    goBackHome() {
      this.$router.push({ path: "/" });
    },

    //获取mock数据
    getClassData() {
      this.$axios.get("/api/classify.json").then(res => {
        console.log(res.data.navTitle);
        this.leftClass = res.data.navTitle;
      });
    },

    // 点击时添加高亮类
    addActiveClass(index) {
      this.currentIdx = index;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/styles/variable.less";
.classify {
  background-color: @bgColor1;
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
  .main {
    .leftContent {
      width: 130px;
      height: 100%;
      ul {
        height: 100%;
        li {
          height: 70px;
          line-height: 70px;
          position: relative;
        }
        .item_on::before {
          content: "";
          height: 100%;
          width: 5px;
          position: absolute;
          left: 0;
          top: 0;
          background-color: #de3d96;
        }
      }
    }
  }
}
</style>
