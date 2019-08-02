import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/view/Test'
import Title1 from '@/view/Title1'
import Title2 from '@/view/Title2'
import Goods from '@/view/Goods'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      component: Test,
      children: [
        {
          path: 'title1',
          name: 'title1',
          component: Title1
        },
        {
          path: 'title2',
          name: 'title2',
          component: Title2
        }
      ]
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    }
  ]
})
