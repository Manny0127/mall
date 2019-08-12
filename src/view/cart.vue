<template>
  <div class="cart">
    <!-- 顶部 -->
    <topNav></topNav>
    <!-- 收货地址 -->
    <div class="address">
      <div class="address_left">
        <i class="iconfont address_left_icon">&#xe64e;</i>
        <span>请填写收货地址</span>
      </div>
      <div class="address_right" @click="gotoAddress">
        <i class="iconfont address_right_icon">&#xe65f;</i>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import topNav from "../components/topNav";
export default {
  components: {
    topNav
  },
  methods: {
    gotoAddress() {
      this.$router.push({
        path: "/address"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.cart {
  .address {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 46px;
    background: #656c89;
    padding: 0 20px;
    .address_left {
      color: #fff;
    }
    .address_right {
      color: #fff;
    }
  }
}
</style>
