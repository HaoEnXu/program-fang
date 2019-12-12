import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/Login'
import home from '../views/Home'
import GoodDetail from '../views/GoodDetail'
import shopCar from '../views/ShopCar'
import person from '../views/Person'
import search from '../views/Search'
import admin from '../views/Admin'

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
    },
    {
      path:'/GoodDetail',
      name:'GoodDetail',
      component:GoodDetail
    },
    {
      path:'/shopCar',
      name:'shopCar',
      component:shopCar
    },
    {
      path:'/person',
      name:'person',
      component:person
    },
    {
      path:'/search',
      name:'search',
      component:search
    },
    {
      path:'/admin',
      name:'admin',
      component:admin
    }
  ]
})
