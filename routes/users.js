var express = require('express');
var router = express.Router();
var fileUoload = require('express-fileupload');
var sd = require('silly-datetime');

router.use(fileUoload());

var mysql = require('mysql');
var dbconfig = require("../sql/db");
var pool = mysql.createPool(dbconfig.mysql);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',function(req,res,next){//登录
  pool.getConnection(function(err,connection){
    var loginForm = req.body.loginForm;
    var sql = "SELECT * FROM t_user where username=? and password=?";
    var data =[loginForm.username,loginForm.password];
    connection.query(sql,data,function(err,result){
        if(result.length == 0){
          console.log("123");
            res.json({
                status: '1',
                response: '',
            })
        }else{
          // console.log("123");
            res.json({
                status: '0',
                response: result[0],
            })
        }
    })
  });
});

router.post('/register',function(req,res,next){//注册
  pool.getConnection(function(err,connection){
    var registerForm = req.body.registerForm;
    var sql = "INSERT INTO t_user(username,password,nickname) VALUES(?,?,?)";
    var data =[registerForm.username,registerForm.password1,registerForm.nickname];
    connection.query(sql,data,function(err,result){
        if(err){
          console.log(err);
        }else{
            res.json({
                status: '0',
                response: '注册成功',
            })
        }
    });
  });
});


router.post('/upload',(req,res)=>{//上传
  // console.log(req.files);
  // console.log(req.body.file_title);
  // console.log(req.body.file_username);
  var uploadForm = req.body;
  var avatar = req.files.avatar;
  avatar.mv('../数据库/壁纸/'+req.files.avatar.name,function(err){
    if(err){
      console.log(err);
    }
  })

  pool.getConnection(function(err,connection){
    var sql = "INSERT INTO t_wallpaper(title,author,path,likes,recommend,pageviews,class) VALUES(?,?,?,?,?,?,?)";
    var data =[uploadForm.file_title,uploadForm.file_username,avatar.name,0,0,0,1];
    connection.query(sql,data,function(err,result){
        if(err){
          console.log(err);
        }else{
          console.log("图片上传并写入数据库成功");
        }
    });

    var time=sd.format(new Date(), 'YYYY-MM-DD HH:mm');
    var sql2 = "INSERT INTO t_upload(title,author,time) VALUES(?,?,?)";
    var data2 =[uploadForm.file_title,uploadForm.file_username,time];
    connection.query(sql2,data2,function(err,result){
      
        console.log("时间记录成功");
        return res.end("写入完成！");
      
    });

  });
});

module.exports = router;
