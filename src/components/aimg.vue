<template>
  <div id="admin_img">
      <div id="m_ID">{{imgMessage.ID}}</div>
      <div id="m_path">{{imgMessage.title}}</div>
      <div id="m_class">{{this.class_name}}</div>
      <div id="m_likes">{{imgMessage.likes}}</div>
      <div id="m_author">{{imgMessage.author}}</div>
      <div id="m_recommend">
        <input type="checkbox" v-model="recommend_status">  
      </div>
  </div>
</template>

<script>
export default {
    name:'aimg',
    data(){
        return{
            recommend_status:'',
            class_name:'',
        }
    },
    props:[
      'imgMessage'
    ],
    watch:{//监听路径
      recommend_status:function (newval, oldVal){
        if(newval==true){
          var that =this;
          this.$axios.get('http://localhost/admin/addrecommend?ID='+that.imgMessage.ID)
        }
        if(newval==false){
          var that =this;
          this.$axios.get('http://localhost/admin/delrecommend?ID='+that.imgMessage.ID)
        }
      },
      deep:true
    },
    mounted(){
      var that = this;
      if(that.imgMessage.class==1){that.class_name="风光"};
      if(that.imgMessage.class==2){that.class_name="人物"};
      if(that.imgMessage.class==3){that.class_name="动物"};
      if(that.imgMessage.class==4){that.class_name="游戏动漫"};

      if(that.imgMessage.recommend==1){
        that.recommend_status=true
      }
    },
    
}
</script>

<style>
    #admin_img{
        width: 100%;
        height: 40px;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        display: flex;
        line-height: 40px;
    }
    #admin_img>div{
        float: left;
        flex: 1;
        text-align: center;
        overflow:hidden; 
        white-space:nowrap; 
        text-overflow:ellipsis;
    }
</style>