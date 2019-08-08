<template>
  <div class="goodsDetails">
    <!-- 顶部轮播图 -->
    <div class="carousel">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in swiperData" :key="index">
          <img :src="item" alt class="myImg" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        }
      },
      swiperData: []
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {
    this.getSwiperData();
  },
  methods: {
    getSwiperData() {
      this.$axios.get("/api/index.json").then(res => {
        console.log(res);
        this.swiperData = res.data.swiper;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.goodsDetails {
  .carousel {
    /deep/ .swiper-pagination-bullet-active {
      background-color: #fff;
    }
    .myImg {
      width: 100%;
      height: 4rem;
    }
  }
}
</style>
