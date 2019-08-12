<template>
  <div class="goodItem" @click="gotoDetails">
    <img class="goodImg" :src="img" alt />
    <div class="desc">{{desc}}</div>
    <div class="price">
      <span class="price_current">{{price_current}}</span>
      <span class="price_prev">{{price_prev}}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    name: "goodItem"
  },
  props: {
    img: String,
    desc: {
      type: String,
      default: "商品描述"
    },
    price_current: {
      type: null,
      default: "现价"
    },
    price_prev: {
      type: null,
      default: "原价"
    }
  },
  methods: {
    gotoDetails() {
      this.$router.push({
        path: "/goodsDetail"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.goodItem {
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
  img {
    display: block;
    width: 100%;
    height: 400px;
  }
  .desc {
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: 10px;
  }
  .price {
    text-align: left;
    font-size: 20px;
    padding-left: 10px;
    .price_current {
      color: #de3d96;
    }
    .price_prev {
      text-decoration: line-through;
      color: #7e7c7c;
      margin-left: 10px;
    }
  }
}
</style>
