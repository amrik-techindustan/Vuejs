import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SecondFile from '@/components/SecondFile'
import Dashboard from '@/components/Dashboard'
import Appbar from '@/components/Appbar'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/second',
      name: 'SecondFile',
      component: SecondFile
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/appbar',
      name: 'Appbar',
      component: Appbar
    }

  ]
})
