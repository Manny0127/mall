<template>
  <div class="carousel">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in swiperData" :key="index">
        <img :src="item" alt class="myImg" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
/* eslint-disable */
// swiper插件的引入
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        // 分页小圆点
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        // 自动播放
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    };
  },
  props: {
    swiperData: {
      type: Array,
      default: []
    }
  },
  mounted() {
    console.log(this.swiperData);
  }
};
</script>

<style lang="less" scoped>
.carousel {
  /deep/ .swiper-pagination-bullet-active {
    background-color: #fff;
  }
  .myImg {
    width: 100%;
    height: 4rem;
  }
}
</style>
