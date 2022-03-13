import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'
import home from '@/components/home'
import login from '@/components/login'
import imgs from '@/components/imgs'
import bottom from '@/components/bottom'
import random from '@/components/random'
import imgl from '@/components/imgl'
import register from '@/components/register'
import personal_center from '@/components/personal_center'
import hot from '@/components/hot'
import admin_login from '@/components/admin_login'
import management from '@/components/management'
import recommend from '@/components/recommend'
import upload from '@/components/upload'






Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      components: {
        header:header,
        main:home,
        bottom:bottom,
      }
    },

    {
      path: '/random',
      name: 'random',
      components: {
        main:random,
      }
    },

    {
      path: '/hot',
      name: 'hot',
      components: {
        header:header,
        main:hot,
        bottom:bottom,
      }
    },

    {
      path: '/login',
      name: 'login',
      components: {
        header:header,
        main:login,
        bottom:bottom,
      }
    },

    {
      path: '/register',
      name: 'register',
      components: {
        header:header,
        main:register,
        bottom:bottom,
      }
    },

    {
      path: '/personal_center',
      name: 'personal_center',
      components: {
        header:header,
        main:personal_center,
      }
    },

    {
      path: '/admin_login',
      name: 'admin_login',
      components: {
        header:header,
        main:admin_login,
        bottom:bottom,
      }
    },

    {
      path: '/management',
      name: 'management',
      components: {
        header:header,
        main:management,
        bottom:bottom,
      }
    },

    {
      path: '/recommend',
      name: 'recommend',
      components: {
        header:header,
        main:recommend,
        bottom:bottom,
      }
    },

  ]
})