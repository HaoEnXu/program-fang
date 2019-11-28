import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/Login'
import home from '../views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/home',
      name:'home',
      component:home
    }
  ]
})
