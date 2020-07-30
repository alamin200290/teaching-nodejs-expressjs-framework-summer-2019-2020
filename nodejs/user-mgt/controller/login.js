var express = require('express');
var mysql = require('mysql');
var router = express.Router();

router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){

	//req.body.uname  
	//req.body.password

	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '',
	  database : 'node1'
	});
	 
	connection.connect(function(err) {
	  if (err) {
	    console.error('error connecting: ' + err.stack);
	    return;
	  }
	  console.log('connected as id ' + connection.threadId);
	});

	var sql = "select * from user where username='"+req.body.uname+"' and password='"+req.body.password+"'";
	connection.query(sql, function(error, results){

		if(results[0].username == req.body.uname && results[0].password == req.body.password){
			req.session.username = req.body.uname;
			res.redirect('/home');
		}else{
			res.send('invalid username/password');
		}
	});

	connection.end(function(err){
		console.log('connection end...');
	});
	
});

module.exports = router;