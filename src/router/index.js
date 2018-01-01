import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Details from '@/pages/Details'
import ShoppingCart from '@/pages/ShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    }
  ]
})
