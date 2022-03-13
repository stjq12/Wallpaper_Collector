var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbconfig = require("../sql/db");
var pool = mysql.createPool(dbconfig.mysql);

router.get('/add', function(req, res, next) {
    pool.getConnection(function(err,connection){
        var imgl_ID = req.query.id;
        var sql = "UPDATE t_wallpaper SET likes = likes+ 1 where ID="+imgl_ID;
        connection.query(sql,function(err,result){
            connection.release();
        })
    })
});


module.exports = router;