import Vue from 'vue'
import Router from 'vue-router'
import Read from '@/components/Read'
import Create from '@/components/Create'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Read',
      component: Read
    },
    {
      path: '/create/:contentId?',
      name: 'Create',
      component: Create
    },
    {
      path:'/detail/:contentId',
      name:'Detail',
      component: Detail
    }
  ]
})
