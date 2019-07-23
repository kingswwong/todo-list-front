import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/page/Welcome'
import Main from '@/page/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
