<template>
  <div class="testCity">
    <router-link to="/test">返回test页面</router-link>
    <div class="content">
      <select v-model="selected">
        <option disabled value></option>
        <option>杭州</option>
        <option>广州</option>
        <option>上海</option>
      </select>
      <span class="btn" @click="click(selected)">提交</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    click (city) {
      console.log(111, city)
      this.$store.dispatch('changeCityAction', city)
      //   this.$store.commit('changeCity', city)
    }
  }
}
</script>

<style>
</style>
