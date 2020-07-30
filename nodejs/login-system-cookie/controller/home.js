var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

	if(req.cookies['username'] != ""){
		res.render('home/index');
	}else{
		res.redirect('/login');
	}
});

module.exports = router;