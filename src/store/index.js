import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import state from './state'
import mutations from './mutations'
import getters from './getter'

Vue.use(Vuex)

// 导出vuex,创建一个仓库,并将state,mutations以及actions模块暴露出去
export default new Vuex.Store({
  // state: {
  //   city: '杭州'
  // },
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCityinVuex', city)
  //   }
  // },
  // // vuex中的数据的改变只能通过提交mutation进行
  // mutations: {
  //   changeCityinVuex (ctx, city) {
  //     ctx.city = city
  //   }
  // }
  state,
  actions,
  mutations,
  getters
})
