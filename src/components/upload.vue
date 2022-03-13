<template>
  <div id="upload" v-show="this.upload_display">
    <div id="upload_middlebox">
        <div id="upload_show_img" @click="upload_show_img()">
            <input type="file" ref="upload" name="avatar" id='upload_input_hide' accept="image/jpg" @change="fileSelect($event)"/>
            点击选择图片
        </div>
        <input type="text" id="input_title" v-model="file_title" placeholder="请输入壁纸标题">
        <button id="upload_btn" @click="upload_confirm()">确认上传</button>
    </div>
    
  </div>
</template>

<script>
export default {
    data(){
        return{
            file: {},
            file_title:'',
            file_username:'',

            upload_display : false,
            upload_imgsrc : '',
            refresh : true,
        }
    },
    props:[
      'upload_username',
      'upload_switch'
    ],
    
    watch:{//监听路径
      upload_switch:function (newval, oldVal){
        this.upload_display=true;
      }
    },
    methods :{
        upload_show_img(){
            document.getElementById('upload_input_hide').click()
        },
        fileSelect(e){
            this.file = e.target.files[0];
            // console.log(this.file.name);
            this.file_username = this.upload_username;
            // console.log(this.file_username);
        },
        upload_confirm(){
            var that = this;
            var uploadForm = new FormData();

            uploadForm.append('avatar', this.file);
            uploadForm.append('file_title', this.file_title);
            uploadForm.append('file_username', this.file_username);

            this.$axios.post('http://localhost/users/upload',uploadForm)
            .then(function(res){
                // console.log(res.data);
                that.upload_display=false;
                that.file_title='';
                that.$emit('upload_refresh',that.refresh);
            })
        }
    }
}
</script>

<style>
  #upload{
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;left: 0%;bottom: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    margin-top: 80px;
    z-index: 200;
  }
  #upload_middlebox{
    width: 50%;
    margin: auto;margin-top: 200px;
    /* height: 100%; */
    overflow: hidden;
    border-radius: 15px;
  }
  #upload_show_img{
    width: 100%;
    height: 50px;
    background-color: rgb(16,0,35);
    margin: auto;
    text-align: center;
    line-height: 50px;
    color: rgb(190, 190, 190);
    font-size: 22px;
  }
  #upload_show_img>img{
    width: 100%;
    height: 100%;
  }
  #input_title{
    width: 100%;
    height: 50px;
    display: block;
    margin: auto;
    border: 0;
    text-indent:20px;
    font-size: 18px;
    outline: none;
  }
  #upload_btn{
    width: 100%;
    border: 0;
    height: 50px;
    /* background-color: red; */
    /* color: white; */
    font-size: 20px;
    outline: none;
  }
  #upload_input_hide{
    opacity:0;
    position: absolute;
  }
</style>