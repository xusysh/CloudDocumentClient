import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login/Login'
import User from '@/components/User/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/login',
      name:'Login',
      component:Login
    },
    {
      path: '/user',
      name:'User',
      component:User
    }
  ]
})
