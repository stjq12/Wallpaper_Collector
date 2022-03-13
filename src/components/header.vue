<template>
  <div id="top">
      <!-- 登陆注册按钮 -->
      <div id="login_1">
        <button id="btn_login_false" @click="to_login()" v-show="!login_status">登陆 | 注册</button>
        <div id="btn_login_true" v-show="login_status">
          {{header_login_message.nickname}}
          <img src="../assets/down.png">
          <div id="user_list">
            <div class="user_list_" @click="to_personal_center">进入主页</div>
            <div class="user_list_" @click="login_out">退出登录</div>
          </div>
        </div>
      </div>


      <a href="/Introduction" id="logo"></a>
      <ul>
        <li v-for="item in list" :key="item.list" id="top_list">
          <router-link :to="item.path">{{item.title}}</router-link>  
        </li>
      </ul>
  </div>
</template>

<script>
import login_data from "../bus/login_data"

export default {
    name:'header',
    
    data(){
      return{
        list:[
          {
            title:'首页',
            path:'/index'
          },
          // {
          //   title:'分类',
          //   path:''
          // },
          {
            title:'每日推荐',
            path:'/recommend'
          },{
            title:'最热',
            path:'/hot'
          },{
            title:'随机生成壁纸',
            path:'/random'
          }
        ],
        header_login_message:'',
        login_status:false,
      }
    },
    methods:{
      to_login(){
        this.$router.push("/login");
      },
      to_personal_center(){
        var that =this;
        this.$router.push({
          name:'personal_center',
          params:{
            userMessage:that.header_login_message,
          }
        })
      },
      login_out(){
        this.login_status= false
        this.$router.push("/index");
      }
    },
    mounted(){
      var that = this;
      login_data.$on("login_nickname",data=>{
        that.header_login_message=data;
        that.login_status=true;
      });
    }
}
</script>

<style>
  a{
    text-decoration:none;
  }
  #top{
    height: 80px;
	  width: 100%;
	  background-color: rgb(11, 2, 35);
	  position: fixed;
	  top: 0;left: 0;
    z-index:99;
    padding: 0;
	  /* box-shadow: 0 3px 5px rgba(0,0,0,0.5); */
  }
  #top_list{
    list-style: none;
    float: left;
    padding-left: 20px;padding-right: 20px;
    line-height: 80px;
    border: 0px;

  }
  ul{
    margin: 0px;
    padding: 0;
    position: relative;
    /* float: left; */
  }
  #top_list>a{
    text-decoration:none;
    color:rgb(140, 140, 140);
    font-size: 16px;
    transition: color 0.5s linear;
  }
  #top_list>a:hover{
    color: white;
  }
  #logo{
    background: url("../assets/logo.png");
    background-size: contain;
    float: left;
    width: 300px;
    height: 80px;
    margin-top: -3px;
  }
  #login_1{
    float: right;
    border: 0;margin: 0;padding: 0;
    margin-right: 10px;
    line-height: 80px;
    text-align: center;     
  }
  #btn_login_false{
    background-color: transparent;
    border: 1px solid rgb(140, 140, 140);border-radius: 18px;
    width: 100px;
    height: 36px;
    color: rgb(140, 140, 140);
    font-size: 16px;
    outline: none;
    transition: border,color 0.5s linear;
  }
  #btn_login_false:hover{
    border: 1px solid white;
    color: white;
  }
  #btn_login_true{
    color: rgb(140, 140, 140);
    margin-right: 10px;
    transition: all 0.5s linear;
    width: 120px;
    /* background-color: red; */
  }
  #btn_login_true:hover{
    color: white;
  }
  #btn_login_true:hover #user_list{
    display: block;
  }
  #btn_login_true>img{
    width: 16px;
    height: 16px;
    float: right;
    margin-top: 33px;
    margin-right: 20px;
  }
  #user_list{
    display: none;
    background-color: rgb(11, 2, 35);
    width: 120px;
    height: 85px;
    overflow: hidden;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
    border-radius: 0 0 3px 3px;
  }
  .user_list_{
    display: block;
    height: 40px;
    line-height: 40px;
    /* line-height: 10px; */
    margin: 0 auto;
    color: rgb(140, 140, 140);
  }
  .user_list_:hover{
    background-color: rgb(28, 21, 46);
    color: white;
  }
</style>