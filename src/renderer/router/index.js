import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/playlists',
      hidden: true
    },
    {
      path: '/playlists',
      name: 'Playlists',
      component: require('@/views/Playlists/Playlists').default
    },
    {
      path: '*',
      redirect: '/',
      hidden: true
    }
  ]
})