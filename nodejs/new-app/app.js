var express 	= require('express');
var bodyParser 	= require('body-parser');
var login 		= require('./controller/login');
var home 		= require('./controller/home');
var app 		= express();

//config
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser());
app.use('/login', login);
app.use('/home', home);


app.listen(3000, function(){
	console.log('express http server started at...3000');
});