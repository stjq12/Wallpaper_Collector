<template>
  <div id="imgs">
    <div class="imgs_box" :style="{backgroundImage:imgsrc_url}">
      <transition name="fade">
        <a href="javascript:;" @click="imgs_click()" class="mask"><div>{{imgsrc.title}}</div></a>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
    name:'imgs',
    data(){
      return{
        //imgsrc: 'url(' + require('../assets/3.jpg') + ')',
        imgsrc_url : 'url(' + require('../../../数据库/壁纸/'+this.imgsrc.path) + ')',
        imgs_message:'',
      }
    },
    props:[
      'imgsrc'
    ],


    watch:{//监听路径
      imgsrc:function (newval, oldVal){
        this.imgsrc_url='url(' + require('../../../数据库/壁纸/'+newval.path) + ')';
        //console.log(this.imgsrc_url);
      },
      deep:true
    },
    methods: {
      imgs_click () {
        var that=this;
        this.$axios.get('http://localhost/class/imgl?ID='+that.imgsrc.ID)
          .then(function(res){
            var aaa= JSON.parse(JSON.stringify(res.data));
            // alert(aaa[0].author);
            that.$emit('imgs_methods',res.data);
            //alert(aaa[0].author);
          })
          .catch(function(error){
            console.log("失败");
            console.log(error);
          })

        
        
      }
    },
}
</script>

<style>
  #imgs{
      /* background-color: red; */
      flex: 1;
      width: 25%;
      min-width: 25%;
      max-width: 25%;
      height: 200px;
      margin-top: 50px;
      /* overflow: hidden; */
  }
  .imgs_box{
    margin: 15px;
    /* background-color: red; */
    height: 200px;
    border-radius: 5px;
    background-size: cover;
    overflow: hidden;
    text-align: center;
  }
  .mask{
    /* 
    width: 85%;
    height: 60px;
    position: relative;
    top: 0;
    left: 0; */
    display:inline-block; 
    height: 100%;width: 100%;


    z-index: 2;
    color: white;font-size: 14px;line-height: 23px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0, rgba(0,0,0,0), rgba(0,0,0,0.1),rgba(0,0,0,0.3), rgba(0, 0, 0, 0.6));
    opacity: 0;
    transition: all 0.5s;
  }
  .mask>div{
    margin-top: 10px;margin-left: 10px;margin-right: 10px;
  }
  .imgs_box:hover .mask{
    opacity: 1;
  }
</style>
