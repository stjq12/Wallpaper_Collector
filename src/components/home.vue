<template>
  <div id="home">
    <div id="choice_menu">
      <div id="span_box">
        <span v-for="(item,i) in choice_list" :key="item.choice_list" :class="{active: i==ni}" @click="spanclick(i)">{{item.title}}</span>
      </div>
        <!-- <router-link :to="item.path" v-for="item in choice_list" :key="item.choice_list" class="choice_list_a">{{item.title}}</router-link> -->
        <!-- :to="item.path" -->
    </div>
    <div id="img_box">
      <imgs v-for="item in imgsrc_data" 
            :key="item.imgsrc_data" 
            :imgsrc='item'
            v-on:imgs_methods="message_from_imgs"></imgs>
    </div>
    <imgl :imgl_message='imgl_message' :imgl_show='imgl_show'></imgl>

  </div>
  
</template>

<script>
import imgs from '@/components/imgs'
import imgl from "@/components/imgl";

export default {
    name:'home',
    components: {
      imgs,
      imgl,
    },
    data(){
      return{
        choice_list:[
          {
            title:'全部',
            path:''
          },{
            title:'风光',
            path:''
          },{
            title:'人物',
            path:''
          },{
            title:'动物',
            path:''
          },{
            title:'游戏动漫',
            path:''
          }
        ],
        imgsrc_data:[

        ],
        ni:0,
        imgl_message:[

        ],
      }
    },
    methods:{
      spanclick(i) {
        var that = this;
        this.ni=i,
        this.$axios.get('http://localhost/class/classes?id='+i)
          .then(function(res){
            that.imgsrc_data='';
            that.imgsrc_data=res.data;
            //var aaa= JSON.parse(JSON.stringify(res.data));
            //alert(aaa);
          })
          .catch(function(error){
            console.log('调用不成功');
            console.log(error);
          })
      },

      message_from_imgs: function (childValue) {
        this.imgl_message = childValue;
      },

    },
    watch:{
      imgl_message:function(newval,oldval){
        //alert(newval[0].ID);
      }
    },
    mounted() {
      var that = this;
          this.$axios.get('http://localhost/class')
              .then(function(res){
                  //console.log(that.imgsrc_data);
                  that.imgsrc_data=res.data;
                  //console.log(that.imgsrc_data);
                  //that.imgsrc_data.push(res.data);
                  //var aaa= JSON.parse(JSON.stringify(that.imgsrc_data));
                  //console.log(aaa);
              })
              .catch(function(error){
                  console.log('调用不成功');
                  console.log(error);
              })

    }
}
</script>

<style>
  #home{
	  width: 100%;
	  /* position: fixed; */
	  top: 80px;left: 0;
    z-index:98;
    padding: 0;
    margin-top: 80px;margin-bottom: 80px;
  }
  #choice_menu{
    margin: 0 auto;
    top: 0;left: 0;
    width: 100%;
    height: 80px;
    background-color: rgb(240, 240, 240);
    line-height: 80px;
    text-align: center;
    /* padding-left: 30px; */
  }
  #span_box{
    height: 80px;
    width: 50%;
    margin: 0 auto;
    text-align: center;
    display: flex;
  }
  #span_box>span{
    /* flex: 1; */
    height: 30px;
    width: 60px;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    margin-top: 20px;
    padding: 6px 8px 3px 8px;
    border-radius: 24px;
    /* color: rgb(127, 127, 127); */
    float: left;
    margin-left: 50px;
    /* border: 1px solid #000; */
    /* background-color: red; */
    
  }
  .active{
    background-color: red;
    color: white;
  }
  #img_box{
    margin: 0 auto;
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
  }
</style>