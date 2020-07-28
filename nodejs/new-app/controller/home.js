var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.send('welcome home!');
});


router.post('/', function(req, res){
	res.send('post');
});

module.exports = router;