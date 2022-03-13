<template>
  <div id="admin_login">
      <div id="login_box">
      <div id="login_title">管理员登录</div>
      <div id="input_box">
        <input type="text" id="input_username" placeholder="管理员账号" v-model="adminForm.name" onkeyup="this.value=this.value.replace(/[^\w_]/g,'');">
        <br>
        <input type="password" id="input_password" v-model="adminForm.password" placeholder="密码">
        <br>
        <button id="btn_login" @click="login()">登 录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'admin_login',
    data(){
        return{
            adminForm:{
                name:'',
                password:'',
            },
        }
    },
    methods:{
        login(){
            var that = this;
            // alert(that.loginForm.password);
            this.$axios.post('http://localhost/admin/login',{adminForm:that.adminForm})
            .then(function(res){
                if(res.data.status == '0'){
                    alert("管理员"+res.data.response.admin_name+"登陆成功！");
                    that.$router.push({
                        name:'management',
                        params:{
                            adminMessage:res.data.response.admin_name,
                        }
                    })
                }else{
                    alert("管理员账号不存在或密码错误");
                }
            })
        },
    }
}
</script>

<style>
    #admin_login{
        position: relative;
        margin-top: 80px;
        width: 100%;
        height: 78vh;
        background: url("../assets/1.jpg");
        background-size: 100% 120%;
        background-repeat: no-repeat;
        overflow: hidden;
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
        color: black;
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
</style>