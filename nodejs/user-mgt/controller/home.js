var express = require('express');
var userModel = require.main.require('./models/user');
var router = express.Router();

router.get('/', function(req, res){

	if(req.session.username != null){
		res.render('home/index', {uname: req.session.username});
	}else{
		res.redirect('/login');
	}
});


router.get('/view_users', function(req, res){
	
	if(req.session.username != null){
		userModel.getAll(function(results){
			res.render('home/userlist', { userList : results, uname: req.session.username});
		});
	}else{
		res.redirect('/login');
	}
});


router.get('/create', function(req, res){
	if(req.session.username != null){
		res.render('home/add');
	}else{
		res.redirect('/login');
	}
});

router.post('/create', function(req, res){
	
	if(req.session.username != null){

		var user ={
			uname 		: req.body.uname,
			password	: req.body.password,
			type		: req.body.type
		}

		userModel.insert(user, function(status){
			if(status){
				res.redirect('/home/view_users');
			}else{
				res.redirect('/home/create');
			}
		});
	}else{
		res.redirect('/login');
	}
});


router.get('/delete/:id', function(req, res){
	
	userModel.get(req.params.id, function(result){
		res.render('home/delete', {user: result});
	});
	
});

router.post('/delete/:id', function(req, res){
	userModel.delete(req.body.id, function(status){
		if(status){
			res.redirect('/home/view_users');
		}else{
			res.redirect('/home');
		}
	});
});


module.exports = router;