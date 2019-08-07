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
      <!-- 左侧主体部分 -->
      <div class="leftContent wrapper" ref="wrapper">
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
      <!-- 右侧主体部分 -->
      <div class="rightContent" ref="wrapper1">
        <div class="content">
          <!-- 顶部图片 -->
          <div class="topimg">
            <img src="//a.vpimg3.com/upload/flow/2018/08/03/143/15333024199924.jpg" alt />
          </div>
          <!-- 主体分类 -->
          <div class="mainDetails">
            <div class="contents" v-for="(item,index) in rightClass.details" :key="index">
              <div class="title">{{item.title}}</div>
              <div class="details">
                <div class="item" v-for="(item1,index1) in item.icon" :key="index1">
                  <img :src="item1.iconImg" alt />
                  <p>{{item1.name}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import BSscroll from "better-scroll";
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
      currentIdx: "",

      // 右侧主体数据
      rightClass: []
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
        console.log(res.data.content);
        this.leftClass = res.data.navTitle;
        this.rightClass = res.data.content;

        // 处理滚动条的问题,在数据返回之后
        this.$nextTick(() => {
          this.scroll = new BSscroll(this.$refs.wrapper, {
            bounce: false,
            click: true
          });
          this.scroll = new BSscroll(this.$refs.wrapper1, {
            bounce: false,
            click: true
          });
        });
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
    display: flex;
    flex-direction: row;
    overflow: hidden;
    .leftContent {
      width: 130px;
      height: 100%;
      ul {
        li {
          height: 70px;
          line-height: 70px;
          position: relative;
          font-size: 20px;
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
        .item_on {
          background: #fff;
        }
      }
    }
    .rightContent {
      background: #fff;
      .topimg {
        padding: 10px;
      }
      img {
        box-sizing: border-box;
        display: block;
        width: 100%;
        height: 300px;
      }
      .mainDetails {
        .title {
          font-weight: bold;
          text-align: left;
        }
        .details {
          overflow: hidden;
          .item {
            width: 33.3%;
            float: left;
            margin-top: 10px;
            img {
              display: block;
              width: 100px;
              height: 100px;
              margin: 0 auto;
            }
          }
        }
      }
    }
  }
}
</style>
