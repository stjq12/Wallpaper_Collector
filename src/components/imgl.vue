<template>
  <div id="imgl" v-show="imgl_display">
    <div id="imgl_box">
      <button id="btn_close" @click="showimgl(false)"></button>
      <img :src="imgl_src">
      <div id="imgl_detail">
        <div id="imgl_title">{{imgl_title}}</div>

        <div id="imgl_like">
          <div  :style="{backgroundColor:like_click?'red':'transparent'}"
                id="like_icon"
                @click="btn_like_click()"></div>
          <div id="like_number">{{imgl_like_number}}</div>
          <!-- {{imgl_like_number}} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'imgl',
  data(){
    return{
      imgl_display : false,
      imgl_src: require('../../../数据库/壁纸/1.jpg'),
      imgl_title : '',
      imgl_like_number : '',
      imgl_ID : '',
      like_click : false,
    }
  },
  props:[
    'imgl_message',
  ],
  
  watch:{//监听路径
      imgl_message:function (newval, oldVal){
        this.imgl_src= require ('../../../数据库/壁纸/'+newval[0].path) ;
        this.imgl_title = newval[0].title;
        this.imgl_like_number = newval[0].likes;
        this.imgl_ID = newval[0].ID;
        this.imgl_display=true;
        //alert(this.imgl_src);
        //console.log(this.imgsrc_url);
      },
      deep:true
    },
  
  methods: {
    showimgl(visible) {
      this.like_click = false;
      this.imgl_display = visible;
    },
    btn_like_click(){
      var that = this;
      this.like_click = !this.like_click;
      if(this.like_click==true){
        this.imgl_like_number = this.imgl_like_number + 1;
        this.$axios.get('http://localhost/likes/add?id='+that.imgl_ID)
          .then(function(res){
            //console.log("成功");
          })
          .catch(function(error){
            //console.log("失败");
            //console.log(error);
          })
      }
      if(this.like_click==false){
        this.imgl_like_number = this.imgl_like_number - 1;
      }
      
    }
  },
  
}
</script>

<style>
    #imgl{
        position: fixed;
        background-color: rgba(0, 0, 0, 0.7);
        top: 0;left: 0%;bottom: 0;
        width: 100%;
        height: 100%;
        margin: auto;
        margin-top: 80px;
    }
    #imgl_box{
      width: 67%;
      height: 640px;
      background-color: rgba(0, 0, 0, 0.8);
      margin: auto;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);   
      border-radius: 5px;
      overflow: hidden;
    }
    #imgl_box>img{
      width: 100%;height: 90%;
    }
    #imgl_detail{
      height: 10%;width: 100%;
      display: flex;
    }
    #imgl_title{
      flex: 5;
      color: rgb(200,200,200);
      line-height: 64px;
      margin-left: 15px;
    }
    #imgl_like{
      flex: 1;
    }
    #like_icon{
      width: 30px;height: 30px;
      background: url("../assets/like.png");
      background-size: cover;
      float: left;
      margin-top: 15px;
    }
    #like_number{
      float: left;
      color: red;
      font-size: 20px;
      margin-top: 18px;margin-left: 20px;
    }
    #btn_close{
      position: absolute;
      right: 280px;
      top: 20px;
      width: 50px;height: 50px;border-radius: 50%;
      border: 0;
      background: url("../assets/close.png");
      background-size: cover;
      outline: none;
    }
</style>




