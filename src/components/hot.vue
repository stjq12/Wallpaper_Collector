<template>
  <div id="hot">
      <div id="h_title">
        当下热门
      </div>
    <div id="h_imgs_box">
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
import imgl from "@/components/imgl"

export default {
  name:'home',
  components: {
    imgs,
    imgl,
  },
  data(){
    return{
      imgsrc_data:[],
      imgl_message:[],
    }
  },
  watch:{
    imgl_message:function(newval,oldval){
    // alert(newval[0].ID);
    }
  },
  methods:{
    message_from_imgs: function (childValue) {
      this.imgl_message = childValue;
    },
  },
  mounted() {
    var that = this;
      this.$axios.get('http://localhost/class/hot')
        .then(function(res){
          that.imgsrc_data=res.data;
        })
        .catch(function(error){
          console.log('调用不成功');
          console.log(error);
        })
    }

}
</script>

<style>
  #hot{
    width: 100%;
	/* position: fixed; */
	top: 80px;left: 0;
    z-index:98;
    padding: 0;
    margin-top: 80px;
    margin-bottom: 80px;
  }
  #h_imgs_box{
    margin: 0 auto;
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
  }
  #h_title{
      margin-top: 150px;
      margin-left: 8%;
      font-size: 40px;
  }
</style>