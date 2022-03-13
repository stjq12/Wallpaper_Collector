var express = require('express');
var router = express.Router();


var mysql = require('mysql');
var dbconfig = require("../sql/db");
var pool = mysql.createPool(dbconfig.mysql);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',function(req,res,next){//登录
  pool.getConnection(function(err,connection){
    var adminForm = req.body.adminForm;
    var sql = "SELECT * FROM t_admin where admin_name=? and password=?";
    var data =[adminForm.name,adminForm.password];
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

router.get('/addrecommend', function(req, res, next) {
  pool.getConnection(function(err,connection){
      var ID = req.query.ID;
      var sql = "UPDATE t_wallpaper SET recommend = 1 where ID="+ID;
      connection.query(sql,function(err,result){
          if(err){
              console.log(err);
          }
          res.end(JSON.stringify(result));
          connection.release();
      })
  })
});

router.get('/delrecommend', function(req, res, next) {
  pool.getConnection(function(err,connection){
      var ID = req.query.ID;
      var sql = "UPDATE t_wallpaper SET recommend = 0 where ID="+ID;
      connection.query(sql,function(err,result){
          if(err){
              console.log(err);
          }
          res.end(JSON.stringify(result));
          connection.release();
      })
  })
});

module.exports = router;
