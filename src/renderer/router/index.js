import Vue from 'vue'
import Router from 'vue-router'
import {checkStatus} from '@/api/user'
Vue.use(Router)

const router =  new Router({
  routes: [{
      path: '/',
      redirect: '/home',
      hidden: true
    },
    {
      path: '/login',
      name: 'Login',
      component: require('@/views/Login').default,
    },
    {
      path: '/home',
      name: 'Home',
      component: require('@/views/Home').default
    },
    {
      path: '/search',
      name: 'Search',
      component: require('@/views/Search').default
    },
    {
      path: '*',
      redirect: '/',
      hidden: true
    }
  ]
})

// router.beforeEach(async(to, from, next) =>{
//   console.log(to)
//   checkStatus().then(res =>{
//     console.log(res)
//   })
//   next()
// })

export default router