var express = require('express');
var db 		= require.main.require('./models/db');
var router 	= express.Router();

router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){

	var sql = "select * from user where username='"+req.body.uname+"' and password='"+req.body.password+"'";
	db.getResults(sql, function(result){
		if(result.length > 0){
			req.session.username = result[0].username;
			res.redirect('/home');
		}else{
			res.send('invalid username/password');
		}
	});

});

module.exports = router;