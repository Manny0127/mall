import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 导出vuex,创建一个仓库,并将state,mutations以及actions模块暴露出去
export default new Vuex.Store({
  state: {
    city: '杭州'
  }
})
