var express = require('express');
var db = require.main.require('./models/db');
var router = express.Router();

router.get('/', function(req, res){

	if(req.session.username != null){

		var sql = "select * from user";
		db.getResults(sql, function(results){

			res.render('home/index', { userList : results, uname: req.session.username});
		});

	}else{
		res.redirect('/login');
	}
});

module.exports = router;