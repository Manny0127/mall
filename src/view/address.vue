<template>
  <div class="address">
    <!-- 顶部 -->
    <div class="topNav">
      <span class="iconfont" @click="goBack()">&#xe660;</span>
      <div class="title">选择收货地址</div>
    </div>

    <!-- 地址内容 -->
    <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      chosenAddressId: '1',
      list: [
        // {
        //   id: '1',
        //   name: '张三',
        //   tel: '13000000000',
        //   address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        // },
        // {
        //   id: '2',
        //   name: '李四',
        //   tel: '1310000000',
        //   address: '浙江省杭州市拱墅区莫干山路 50 号'
        // }
      ]
    }
  },
  created () {
    // 进入页面将添加的地址添加进list中去
    // let address = JSON.parse(localStorage.getItem('address'))
    // this.list.push(address)
  },
  mounted () {
    // 获取vuex仓库中的address
    let addressList = this.$store.state.address
    console.log(addressList)
    // addressList.forEach((item, idx) => {
    //   // eslint-disable-next-line
    //   item.id = idx + "";
    //   if (item.isDefault) {
    //     this.chosenAddressId = item.id
    //   }
    // })
  },
  methods: {
    onAdd () {
      this.$router.push({
        path: '/addressEdit'
      })
    },

    onEdit (item, index) {
      //   Toast('编辑地址:' + index)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/styles/variable.less";
.address {
  .topNav {
    box-sizing: border-box;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 0.24rem;
    background: #fff;
    border-bottom: 1px solid @bgColor1;
    .title {
      margin-left: 2.8rem;
    }
    .iconfont {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
