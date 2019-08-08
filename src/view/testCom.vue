<template>
  <div class="child">
    <input type="text" v-model="message" />
    <button>SendMessage</button>
  </div>
</template>

<script>
export default {
  name: 'child',
  data () {
    return {
      message: '我是子组件的消息',
      flag: false
    }
  },
  mounted () {
    this.$emit('childFn', this.message)
  }
  //   methods: {
  //     click () {
  //       this.flag = true
  //     }
  //   },
  //   watch: {
  //     flag (val) {
  //       if (val) {
  //         console.log(1212)
  //         this.$emit('childFn', this.message, 5)
  //       }
  //     }
  //   }
}
</script>

<style lang="less" scoped>
.child {
  input {
    border: 1px solid #000;
  }
}
</style>
