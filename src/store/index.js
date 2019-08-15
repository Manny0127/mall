import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 导出vuex,创建一个仓库
export default new Vuex.Store({
  state: {
    city: '杭州'
  },
  actions: {
    changeCityAction (aa, city) {
      console.log(city)
      aa.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})
