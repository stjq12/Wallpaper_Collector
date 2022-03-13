<template>
  <div id="login">
    <div id="login_box">
      <div id="login_title">用户登录</div>
      <div id="input_box">
        <input type="text" id="input_username" placeholder="账号" v-model="loginForm.username" onkeyup="this.value=this.value.replace(/[^\w_]/g,'');">
        <br>
        <input type="password" id="input_password" v-model="loginForm.password" placeholder="密码">
        <br>
        <button id="btn_login" @click="login()">登 录</button>
      </div>
      <button id="btn_register" @click="register()">去注册</button>
    </div>
  </div>
</template>

<script>
import login_data from "../bus/login_data"
export default {
    name:'login',
    data(){
        return{
            loginForm:{
                username:'',
                password:'',
            },
        }
    },
    methods:{
        login(){
            var that = this;
            // alert(that.loginForm.password);
            this.$axios.post('http://localhost/users/login',{loginForm:that.loginForm})
            .then(function(res){
                console.log(res.data.response.nickname);
                // that.to_header_message.username=res.data.response.username;
                if(res.data.status == '0'){
                    login_data.$emit('login_nickname',res.data.response);
                    that.$router.push("/index");
                    // alert("123")
                }else{
                    alert("账号不存在或密码错误");
                }
            })
        },

        register(){
            var that = this;
            that.$router.push("/register");
        }
    }
}
</script>

<style>
    #login{
        position: relative;
        margin-top: 80px;
        width: 100%;
        height: 78vh;
        background: url("../assets/test.jpg");
        background-size: 100% 120%;
        background-repeat: no-repeat;
        overflow: hidden;
        /* padding-top: 30px; */
    }
    #login_box{
        z-index: 2;
        width: 540px;
        height: 65%;
        background-color: rgb(240,240,240);
        margin: auto;
        margin-top: 100px;
        border-radius: 15px;
        box-shadow: 1px 1px 20px rgba(0,0,0,0.4);
        overflow: hidden;
    }

    #login_title{
        margin: auto;
        width: 40%;
        text-align: center;
        font-size: 24px;
        margin-top: 40px;
    }

    #input_box{
        /* background-color: red; */
        width: 60%;height: 200px;
        margin: auto;
        /* margin-top: 50px; */
    }
    #input_box>input{
        outline: none;
        overflow: hidden;
        width: 100%;
        height: 40px;
        margin-top: 30px;
        border: 1px solid rgb(197, 197, 197);
        border-radius: 22px;
        /* border-bottom: 1px solid #999; */
        background-color: transparent;
        text-indent:20px;
        font-size: 16px;
    }

    #btn_login{
        width: 102%;
        height: 42px;
        border: 0;
        border-radius: 22px;
        margin-top: 30px;
        /* background-color: rgb(11, 2, 35); */
        background-color: red;
        color: rgb(250,250,250);
        font-size: 16px;
        outline: none;
    }
    #btn_register{
        float: right;
        margin-right: 20px;margin-top: 58px;
        background-color: transparent;
        border: 0;
        outline: none;
    }
</style>