<template>
  <div class="home">
    <!-- 头部 -->
    <my-header></my-header>
    <!-- 轮播图 -->
    <carousel :swiperData="swiperData"></carousel>
    <!-- 分类模块 -->
    <div class="classification">
      <div class="classTop">
        <div class="item" v-for="(item,index) in classData.up" :key="index">
          <img :src="item.img" alt @click="gotoClassify(item.id)" />
        </div>
      </div>
      <div class="classBottom">
        <div class="item" v-for="(item,index) in classData.down" :key="index">
          <img :src="item.img" alt @click="gotoClassify(item.id)" />
        </div>
      </div>
    </div>
    <!-- 推荐模块 -->
    <div class="recommend">
      <div class="title">今日推荐</div>
      <div class="content">
        <div class="item" v-for="(item,index) in recommendData" :key="index">
          <img v-lazy="item.imgurl" alt />
          <div class="item_text">
            <span>{{item.title}}</span>
            <span>还剩{{item.endtime}}天</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import MyHeader from "@/components/myHeader";
import Carousel from "@/components/carousel";
import axios from "axios";
export default {
  name: "home",
  components: {
    MyHeader,
    Carousel
  },
  data() {
    return {
      swiperData: [],
      classData: {},
      recommendData: []
    };
  },
  methods: {
    // 获取首页数据
    getData() {
      this.$axios.get("../../static/mock/index.json").then(res => {
        console.log(res.data);
        this.swiperData = res.data.swiper;
        this.classData = res.data.classifiData;
        this.recommendData = res.data.recommendData;
      });
    },

    // 跳转至相关详情页面
    gotoClassify(id) {
      this.$router.push({
        path: "/classify",
        query: {
          id: id
        }
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="less" scoped>
// 引入方式一： 相对路径
// @import "../assets/styles/variable.less";

// 引入方式一：前面加波浪号
// @import "~@/assets/styles/variable.less";

// 引入方式三：config中配置好路径
@import "~styles/variable.less";
.home {
  background-color: #f3f4f5;
  .classification {
    .classTop,
    .classBottom {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .item {
        width: 20%;
        padding: 10px;
        img {
          display: block;
          width: 108px;
          height: 108px;
          margin: 0 auto;
        }
      }
    }
  }
  .recommend {
    .title {
      background-color: #fff;
      font-size: 25px;
    }
    .content {
      .item {
        img {
          display: block;
          width: 100%;
          height: 300px;
        }
        img[lazy="loading"] {
          display: block;
          width: 50px;
          height: 50px;
          margin: 0 auto;
        }
        .item_text {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
