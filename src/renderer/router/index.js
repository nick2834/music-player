import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home',
      hidden: true
    },
    {
      path: '/home',
      name: 'Home',
      component: require('@/views/Home').default
    },
    {
      path: '*',
      redirect: '/',
      hidden: true
    }
  ]
})