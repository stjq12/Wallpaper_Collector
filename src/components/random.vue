<template>
  <div id="random">
      <img :src="imgsrc">
      <a href="/index" id="back_index">返回首页</a>
  </div>
</template>

<script>
export default {
    name:'random',
    data(){
        return{
            a:'',
            imgsrc:'',
        }
    },
    components:{},
    mounted() {
        var that = this;
        var x = Math.round(Math.random()*65);
        that.a = x;
        that.imgsrc= require('../../../数据库/壁纸/'+that.a+'.jpg');
        //console.log(that.a);
        //console.log(that.imgsrc);
    }
}
</script>

<style>
    #random{
        position: absolute;
        top: 0;left: 0;bottom: 0;
        width: 100%;
        height: auto;
    }
    #random>img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    #back_index{
        position: absolute;
        top: 50px;left: 50px;
        text-decoration: none;
        text-align: center;
        width: 120px;
        height: 40px;
        line-height: 40px;
        border-radius: 10px;
        z-index: 5;
        background-color: rgba(0,0,0,0.5);
        color: white;
    }
</style>