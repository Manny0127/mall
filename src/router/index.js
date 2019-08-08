import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/view/Test'
// import Title1 from '@/view/Title1'
// import Title2 from '@/view/Title2'
// import Goods from '@/view/Goods'
import Home from '@/view/home'
import Classify from '@/view/classify'
import GoodList from '@/view/goodList'
import GoodsDetails from '@/view/goodsDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: '/',
      component: Test
      // component: Test
      //     children: [
      //       {
      //         path: 'title1',
      //         name: 'title1',
      //         component: Title1
      //       },
      //       {
      //         path: 'title2',
      //         name: 'title2',
      //         component: Title2
      //       }
      //     ]
    },
    {
      path: '/',
      name: 'home',
      components: {
        default: Home
      }
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/goodList',
      name: 'goodList',
      component: GoodList
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: GoodsDetails
    }
    //   {
    //     path: '/goods',
    //     name: 'goods',
    //     component: Goods
    //   }
  ]
})
