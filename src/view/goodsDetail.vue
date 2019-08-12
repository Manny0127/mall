<template>
  <div class="goodsDetails">
    <!-- 顶部轮播图 -->
    <div class="carousel">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in swiperData" :key="index">
          <img :src="item" alt class="myImg" @click="previewImg" />
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
// 轮播图预览图
import { ImagePreview } from "vant";
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        // 自动播放
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
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
    // 获取轮播图数据，mock里面没有，这里用首页的图代替
    getSwiperData() {
      this.$axios.get("/api/index.json").then(res => {
        this.swiperData = res.data.swiper;
        console.log(this.swiperData);
      });
    },

    // 轮播图图片预览
    previewImg() {
      ImagePreview(this.swiperData);
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
