<template>
  <div id="register">
    <div id="register_box">
      <div id="register_title">新用户注册</div>
      <div id="input_box_1" v-show="r_step">
        <input type="text" id="input_username" placeholder="登录名 : 允许数字、英文、下划线" v-model="registerForm.username" onkeyup="this.value=this.value.replace(/[^\w_]/g,'');">
        <br>
        <input type="password" id="input_password" placeholder="密码" v-model="registerForm.password1">
        <br>
        <input type="password" id="input_password" placeholder="确认密码" v-model="registerForm.password2">
        <button id="register_next" @click="register_next()">下一步</button>
      </div>
      <div id="input_box_2" v-show="!r_step">
        <input type="text" id="input_password" placeholder="请输入您的昵称" v-model="registerForm.nickname">
        <button id="register_last" @click="register_last()">上一步</button>
        <button id="register_finish" @click="register_finish()">确认注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'register',
  data(){
    return{
      registerForm:{
        username:'',
        password1:'',
        password2:'',
        nickname:''
      },
      r_step:true,
    }
  },
  methods:{
    register_next(){
      if(this.registerForm.password1!=this.registerForm.password2){
        alert("密码不一致！");
      }else{
        this.r_step=false;
      }
    },
    register_last(){
      this.r_step=true;
    },
    register_finish(){
      var that = this;
      this.$axios.post('http://localhost/users/register',{registerForm:that.registerForm})
      .then(function(res){
        alert("注册成功！点击确定返回登录");
        that.$router.push("/login");
      })
    }
  }
}
</script>

<style>
  #register{
    position: relative;
    margin-top: 80px;
    width: 100%;
    height: 78vh;
    background: url("../assets/test.jpg");
    background-size: 100% 120%;
    background-repeat: no-repeat;
    overflow: hidden;
  }
  #register_box{
    z-index: 2;
    width: 540px;
    height: 80%;
    background-color: rgb(240,240,240);
    margin: auto;
    margin-top: 50px;
    border-radius: 15px;
    box-shadow: 1px 1px 20px rgba(0,0,0,0.4);
    overflow: hidden;
  }
  #register_title{
    margin: auto;
    width: 40%;
    text-align: center;
    font-size: 24px;
    margin-top: 40px;
  }
  #register_next{
    width: 102%;
    height: 42px;
    border: 0;
    border-radius: 22px;
    margin-top: 30px;
    background-color: rgb(11, 2, 35);
    /* background-color: red; */
    color: rgb(250,250,250);
    font-size: 16px;
    outline: none;
  }
  #input_box_1{
    /* background-color: red; */
    width: 60%;height: 200px;
    margin: auto;
    /* margin-top: 50px; */
  }
  #input_box_1>input{
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
  #input_box_2{
    /* background-color: red; */
    width: 60%;height: 200px;
    margin: auto;
    /* margin-top: 50px; */
  }
  #input_box_2>input{
    outline: none;
    overflow: hidden;
    width: 100%;
    height: 60px;
    margin-top: 40px;
    /* border: 1px solid rgb(197, 197, 197); */
    border: 0;border-bottom: 1px solid rgb(197, 197, 197);
    /* border-radius: 32px; */
    /* border-bottom: 1px solid #999; */
    background-color: transparent;
    text-indent:20px;
    font-size: 20px;
  }
  #register_last{
    width: 102%;
    height: 42px;
    border: 1px solid rgb(11, 2, 35);
    border-radius: 22px;
    margin-top: 30px;
    /* background-color: rgb(11, 2, 35); */
    /* background-color: red; */
    /* color: rgb(250,250,250); */
    font-size: 16px;
    outline: none;
  }
  #register_finish{
    width: 102%;
    height: 42px;
    border: 1px solid rgb(11, 2, 35);
    border-radius: 22px;
    margin-top: 30px;
    background-color: rgb(11, 2, 35);
    /* background-color: red; */
    color: rgb(250,250,250);
    font-size: 16px;
    outline: none;
  }

</style>