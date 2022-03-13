<template>
  <div id="bottom">
      <button @click="admin_login" id="admin_login_bottom">管理员进入管理页</button>
  </div>
</template>

<script>
export default {
    name:'bottom',
    data(){
        return{
            
        }
    },
    methods:{
        admin_login(){
            this.$router.push("/admin_login");
        }
    }
}
</script>

<style>
    #bottom{
        /* position: absolute; */
        left: 0;
        bottom: 0;
        height: 80px;
        width: 100%;
        background-color: rgb(11, 2, 35);
        z-index:10;
        /* margin-top: 150px; */
    }
    #admin_login_bottom{
        color: white;
        float: right;
        background-color: transparent;
        border: 0;
        outline: none;
    }
</style>