import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/page/Welcome'
import Main from '@/page/Main'
import Info from '@/page/content/info'
import List from '@/page/content/List'
import Item from '@/page/content/item'

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
      component: Main,
      children:[
        {
          path: 'info',
          name: 'Info',
          component: Info
        },
        {
          path: 'list',
          name:'List',
          component:List
        },
        {
          path: 'add',
          name:'Item',
          component:Item
        }
      ]
    },
  ]
})
