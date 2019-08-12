// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import 'styles/reset.css'
import 'styles/border.css'
import 'lib-flexible/flexible'
import 'styles/iconfont.css'
import axios from 'axios'
import { Button } from 'vant'
Vue.prototype.$axios = axios
Vue.use(Button)

// 图片懒加载
Vue.use(VueLazyload, {
  loading: '../static/img/loading.gif'
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
