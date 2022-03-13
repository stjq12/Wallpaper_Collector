<template>
  <div id="management">
      <div id="m_title">
        管理员 {{this.$route.params.adminMessage}}
      </div>
      <div id="list_title">
          <ul>
            <li v-for="item in list_title" :key="item.list_title">{{item.title}}</li>
          </ul>
        </div>

      <div id="list_box">
        
        <aimg :imgsrc_data='imgsrc_data'
            v-for="item in imgsrc_data" 
            :key="item.imgsrc_data" 
            :imgMessage='item'></aimg>
      </div>
      
  </div>
</template>

<script>
import aimg from '@/components/aimg'

export default {
  name:'management',
  components: {
    aimg,
  },
  data(){
    return{
      imgsrc_data:[],
      list_title:[
        {
            title:'ID',
          },{
            title:'文件名',
          },{
            title:'分类',
          },{
            title:'喜爱值',
          },{
            title:'上传账号',
          },{
            title:'是否推荐',
          }
      ]
    }
  },
  mounted() {
    var that = this;
        this.$axios.get('http://localhost/class')
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
  #management>a{
    display: block;
    margin-top: 30px;
    margin-left: 120px;
  }
  #m_title{
      margin-top: 120px;
      margin-left: 8%;
      font-size: 24px;
  }
  #list_box{
    width: 70%;
    margin: auto;
  }
  #list_title{
    width: 70%;
    margin: auto;
    height: 50px;
    margin-top: 50px;
  }
  #list_title>ul{
    display: flex;
  }
  #list_title>ul>li{
    float: left;
    flex: 1;
    list-style: none;
    text-align: center;
  }
</style>