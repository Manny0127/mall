<template>
  <div class="goodList">
    <!-- 头部 -->
    <topNav></topNav>
    <!-- 筛选栏 -->
    <div class="filter">
      <div class="filter_item">
        <span>综合排序</span>
      </div>
      <div class="filter_item">
        <i class="iconfont">&#xe766;</i>
        <span>销量</span>
      </div>
      <div class="filter_item">
        <i class="iconfont">&#xe766;</i>
        <span>价格</span>
      </div>
      <div class="filter_item">
        <i class="iconfont">&#xe74a;</i>
        <span>筛选</span>
      </div>
    </div>
    <!-- 商品详情 -->
    <div class="goods">
      <goodItem
        v-for="(item,index) in goodsList"
        :key="index"
        :img="item.goodsImg"
        :desc="item.desc"
        :price_current="item.price"
        :price_prev="item.discount"
      ></goodItem>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import topNav from "../components/topNav";
import goodItem from "../components/goodItem";
import axios from "axios";
export default {
  data() {
    return {
      goodsList: ""
    };
  },
  components: {
    topNav,
    goodItem
  },
  mounted() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      this.$axios.get("/api/goodsList.json").then(res => {
        this.goodsList = res.data.goodslist;
        console.log(this.goodsList);
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/styles/variable.less";
.goodList {
  .filter {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid @bgColor2;
    .filter_item {
      width: 25%;
      height: 40px;
      line-height: 40px;
      flex-grow: 1;
    }
  }
  .goods {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
