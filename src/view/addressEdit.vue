<template>
  <div class="addressEdit">
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
/* eslint-disable */
import areaList from "../assets/js/area";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      areaList,
      searchResult: []
    };
  },

  methods: {
    onSave(e) {
      //   点击保存时的回调，可以获取用户填的表单内容
      let data = {};
      data.name = e.name;
      data.tel = e.tel;
      data.address = e.province + e.city + e.county + "";
      data.addressDetail = e.addressDetail;
      data.postalCode = e.postalCode;
      data.isDefault = e.isDefault;
      console.log(e);

      //   将地址信息存储localStorage中
      // localStorage.setItem("address", JSON.stringify(data));

      // 点击保存时，将数据作为参数提交mutations
      // this.saveAddress(data);
      this.$router.push({
        path: "/address"
      });
      //   let addressData = JSON.parse(localStorage.getItem("address")) || [];
      //   addressData.push(data);
    },
    onDelete() {
      //   Toast('delete')
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    },
    ...mapMutations(["saveAddress"])
  }
};
</script>

<style>
</style>
