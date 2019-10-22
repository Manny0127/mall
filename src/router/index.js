import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/view/Test'
import TestCity from '@/view/testCity'
// import Title1 from '@/view/Title1'
// import Title2 from '@/view/Title2'
// import Goods from '@/view/Goods'
import Home from '@/view/home'
import Classify from '@/view/classify'
import GoodList from '@/view/goodList'
import GoodsDetails from '@/view/goodsDetail'
import Cart from '@/view/cart'
import Address from '@/view/address'
import AddressEdit from '@/view/addressEdit'

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
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    },
    {
      path: '/addressEdit',
      name: 'addressEdit',
      component: AddressEdit
    },
    {
      path: '/testCity',
      name: 'testCity',
      component: TestCity
    }
  ]
})
