<template>
  <div id="personal_center">
    <div id="p_message">
      <img src="../assets/头像.png" alt=""><br>
      {{this.$route.params.userMessage.nickname}}
      <ul>
        <li><a href="">我的上传</a></li>
        <li><a href="">我的点赞</a></li>
      </ul>
    </div>
    <div id="p_imgs_box">
      <div id="upload_box">
          
          <div @click="show_upload()">+
            
          </div>
      </div>
      <imgs v-for="item in p_imgs_data" 
            :key="item.p_imgs_data" 
            :imgsrc='item'></imgs>
    </div>
    <upload :upload_username='this.$route.params.userMessage.username'
            :upload_switch='upload_switch_data'
            v-on:upload_refresh="message_from_upload"></upload>
  </div>
</template>

<script>
import imgs from '@/components/imgs'
import upload from '@/components/upload'


export default {
    name:'personal_center',
    components:{
        imgs,
        upload,
    },
    data(){
        return{
            p_imgs_data:'',
            upload_switch_data : false,
        }
    },
    mounted() {
      var that = this;
        this.$axios.get('http://localhost/class/author?username='+that.$route.params.userMessage.username)
            .then(function(res){
                that.p_imgs_data=res.data;
            })
            .catch(function(error){
                console.log('调用不成功');
                console.log(error);
            })
      
    },
    methods:{
        show_upload(){
            this.upload_switch_data=!this.upload_switch_data;
        },
        message_from_upload: function (childValue) {
            var that = this;
            this.$axios.get('http://localhost/class/author?username='+that.$route.params.userMessage.username)
            .then(function(res){
                that.p_imgs_data=res.data;
            })
        },
    }
    
}
</script>

<style>
    #personal_center{
        margin-top: 80px;
        width: 100%;
        z-index: 1;
    }
    #p_message{
        position: fixed;
        float: left;
        background-color: rgb(10, 0, 35);
        width: 15%;
        min-height: 90vh;
        box-shadow: 3px 3px 10px rgba(0,0,0,0.5);
        z-index: 2;
        color: white;
        text-align: center;
    }
    #p_message>ul{
        margin: 0 auto;
        text-align: center;
        width: 60%;
    }
    #p_message>ul>li{
        list-style: none;
        height: 25px;
        margin-top: 25px;
        border-bottom: 1px solid rgb(140,140,140);
        transition: all 0.5s linear;
    }
    #p_message>ul>li:hover{
        color: white;
    }
    #p_message>ul>li>a{
        color: rgb(140,140,140);
        transition: all 0.5s linear;
    }
    #p_message>ul>li>a:hover{
        color: white;
    }
    #p_message>img{
        width: 100px;
        height: 100px;
        border-radius: 50px;
        margin-top: 50px;margin-bottom: 30px;
    }
    #p_imgs_box{
        float: right;
        width: 85%;
        display: flex;
        flex-wrap: wrap;
        margin-top: -30px;
    }
    #upload_box{
      flex: 1;
      width: 25%;
      min-width: 25%;
      max-width: 25%;
      height: 200px;
      margin-top: 50px;
    }
    #upload_box>div{
        margin: 15px;
        /* background-color: red; */
        height: 200px;
        border-radius: 5px;
        border: 1px dashed rgb(140,140,140);
        line-height: 200px;
        text-align: center;
        color: rgb(172, 172, 172);
        font-size: 100px;
        overflow: hidden;
        z-index: 2;
    }
</style>