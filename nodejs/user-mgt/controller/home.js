var express = require('express');
var userModel = require.main.require('./models/user');
var router = express.Router();

router.get('*', function(req, res, next){
	if(req.session.username == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', function(req, res){
	res.render('home/index', {uname: req.session.username});
});



module.exports = router;