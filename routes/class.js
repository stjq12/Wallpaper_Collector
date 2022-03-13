var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbconfig = require("../sql/db");
var pool = mysql.createPool(dbconfig.mysql);

/* GET users listing. */
router.get('/', function(req, res, next) {
    pool.getConnection(function(err,connection){
        var sql = "SELECT * FROM t_wallpaper";
        connection.query(sql,function(err,result){
            res.end(JSON.stringify(result));
            connection.release();
        })
    })
});

router.get('/classes', function(req, res, next) {
    pool.getConnection(function(err,connection){
        var class_id = req.query.id;
        if(class_id==0){
            var sql = "SELECT * FROM t_wallpaper";
        }
        else{
            var sql = "SELECT * FROM t_wallpaper where class="+class_id;
        }
        
        connection.query(sql,function(err,result){
            res.end(JSON.stringify(result));
            connection.release();
        })
    })
});

router.get('/imgl', function(req, res, next) {
    pool.getConnection(function(err,connection){
        var imgl_ID = req.query.ID;
        var sql = "SELECT * FROM t_wallpaper where ID="+imgl_ID;
        connection.query(sql,function(err,result){
            res.end(JSON.stringify(result));
            // console.log("成功");
            connection.release();
        })
    })
});

router.get('/author', function(req, res, next) {
    pool.getConnection(function(err,connection){
        var username = req.query.username;
        
        var sql = "SELECT * FROM t_wallpaper where author="+username;
        connection.query(sql,function(err,result){
            if(err){
                console.log(err);
            }
            res.end(JSON.stringify(result));
            connection.release();
        })
    })
});

router.get('/hot', function(req, res, next) {
    pool.getConnection(function(err,connection){
        var sql = "select * from t_wallpaper order by likes desc limit 0,10"

        connection.query(sql,function(err,result){
            res.end(JSON.stringify(result));
            connection.release();
        })
    })
});

router.get('/recommend', function(req, res, next) {
    pool.getConnection(function(err,connection){
        var sql = "SELECT * FROM t_wallpaper where recommend=1"

        connection.query(sql,function(err,result){
            res.end(JSON.stringify(result));
            connection.release();
        })
    })
});



module.exports = router;