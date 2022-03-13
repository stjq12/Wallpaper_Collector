<template>
  <div id="app">
    <router-view name='header'/>
    <router-view name='main'/>
    <router-view name='bottom'/>
  </div>
</template>

<script>
import header from './components/header'
import login from './components/login'
import imgs from './components/imgs'
import bottom from './components/bottom'
import random from './components/random'
import imgl from './components/imgl'
import register from './components/register'
import personal_center from './components/personal_center'
import hot from './components/hot'
import admin_login from './components/admin_login'
import management from './components/management'
import aimg from './components/aimg'
import recommend from './components/recommend'
import upload from './components/upload'



export default {
  name: 'App',
  data(){

  },
  components: {
    header,
    login,
    imgs,
    bottom,
    random,
    imgl,
    register,
    personal_center,
    hot,
    admin_login,
    management,
    aimg,
    recommend,
    upload,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  margin-top: 60px;
}
</style>
